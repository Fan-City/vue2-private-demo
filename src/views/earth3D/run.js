import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Line2 } from 'three/examples/jsm/lines/Line2.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'
import TWEEN from '@tweenjs/tween.js'
import GLB from './loaders/glb/glb'
import FlyLine from './flyline/FlyLine'
export default class Earth3D {
  constructor(val) {
    this.renderer = null
    this.camera = null
    this.scene = null
    this.light = null
    this.stats = null
    this.controls = null
    this.geometry = null
    this.material = null
    this.line = null
    this.matLine = null
    this.mesh = null
    this.stars = null
    this.uniforms = null
    this.vertexShader = `    uniform vec3 viewVector;
      uniform float c;
      uniform float p;
      varying vec2 vUv;
      varying float intensity;

      void main() {
         vec3 v_normal = normalize(normalMatrix * normal);
        vec3 v_view = normalize(normalMatrix * viewVector);
        intensity = pow(c - dot(v_normal, v_view), p);
         vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`
    this.fragmentShader = `	uniform sampler2D diffuse;
    uniform vec3 glowColor;
    varying float intensity;
    varying vec2 vUv;

    void main() {
      vec3 glow = glowColor * intensity;
        gl_FragColor = vec4(glow, 1.0)+ texture2D(diffuse, vUv);
    }`
    this.vertexShader2 = `	varying vec2 vUv;
    attribute float percent;
    uniform float u_time;
    uniform float number;
    uniform float speed;
    uniform float length;
    varying float opacity;
    uniform float size;
    void main()
    {
        vUv = uv;
        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
        float l = clamp(1.0-length,0.0,1.0);
        gl_PointSize = clamp(fract(percent*number + l - u_time*number*speed)-l ,0.0,1.) * size * (1./length);
        opacity = gl_PointSize/size;
        gl_Position = projectionMatrix * mvPosition;
    }`
    this.fragmentShader2 = `	#ifdef GL_ES
    precision mediump float;
    #endif
    varying float opacity;
    uniform vec3 color;
    void main(){
        if(opacity <=0.2){
            discard;
        }
        gl_FragColor = vec4(color,1.0);
    }`
    this.radius = 5
    this.rotateObj = []
    this.raycaster = new THREE.Raycaster()
    this.groupParent = new THREE.Group()
    this.width = document.querySelector('.earth-container').offsetWidth
    this.height = document.querySelector('.earth-container').offsetHeight
    this.group = new THREE.Group()
    this.groupDots = new THREE.Group()
    this.groupLines = new THREE.Group() // 飞线
    this.groupnormalLine = new THREE.Group() // 射线
    this.groupHalo = new THREE.Group() // 卫星环+小卫星
    this.groupHalo2 = new THREE.Group() // 卫星环+小卫星
    this.groupSliver = new THREE.Group() // 银河自旋
    this.aGroup = new THREE.Group()
    this.hoverEarth = false
    this.initFlag = false
    this.testFlyLine = null
    this.WaveMeshArr = [] // 所有波动光圈集合
    this.planGeometry = new THREE.PlaneBufferGeometry(1, 1) // 默认在XOY平面上
    this.globeTextureLoader = new THREE.TextureLoader()
    this.map = new THREE.Object3D()
    this.camaPositions = [
      { x: 5, y: -20, z: 200 }, // 远处
      { x: 0.5, y: -2, z: 20 } // 近处
    ]
    this.API = {
      c: 1.7,
      p: 2.3,
      color: 0x10105
    }
    this.uniforms2 = {
      u_time: { value: 0.0 }
    }
    // 模拟的空间坐标 已经通过经纬度转换了
    this.posArr = [
      { x: -1.7049594735603837, y: 3.208354470512221, z: -3.4350509144786985 },
      { x: -2.1965610576118175, y: 2.1955955192304506, z: -3.9184792759587768 },
      { x: -2.2290975556080355, y: 2.6054406912933263, z: -3.639066211507457 },
      { x: 0.5738958419746141, y: -0.44114968930852216, z: 4.9473255920938985 },
      { x: -0.9326350073394328, y: 2.8399222968004114, z: -4.00812091773949 },
      { x: 3.469198597393574, y: 1.2295167303380952, z: -3.3842206934036057 },
      { x: -2.4019084876611916, y: -2.190220428765315, z: 3.7991801866087123 },
      { x: -2.49363689878109, y: -4.099696049856375, z: 1.4050862307450966 },
      { x: -2.3729307780326305, y: 2.840227787960863, z: 3.3618901878497454 },
      { x: -2.0636200279017873, y: 0.7444294629976027, z: -4.493027615657812 },
      { x: 0.47725894517680106, y: 2.4327372143508037, z: -4.34212085796347 },
      { x: -2.4777001955161246, y: -1.2092952460724242, z: 4.171163716394502 },
      { x: -0.03915748918627658, y: -0.008362945319338826, z: 4.999839672648135 },
      { x: 1.5223738738260317, y: -1.032865814102439, z: -4.649254348640267 },
      { x: -0.26640112020426315, y: -4.314854187280748, z: 2.5121830716848077 },
      { x: -4.031470206741836, y: -2.606648761952297, z: -1.3973654511134501 },
      { x: 0.8544382232162094, y: 1.5274953155132989, z: 4.683662390031124 },
      { x: 3.0409624989238546, y: 1.76433738825175, z: -3.555230043268055 },
      { x: -4.721251023266457, y: 1.2354922989397954, z: -1.0878177947459262 },
      { x: 2.1518961827021106, y: 3.891904027152385, z: -2.285262755638206 },
      { x: 0.8501960736517479, y: -2.851729208821255, z: -4.018060123480341 },
      { x: 2.5631840141785176, y: 4.263234820997851, z: -0.5048926326370041 },
      { x: -0.4580143454812531, y: -2.6523265200067385, z: 4.213714144386437 }
    ]
  }
  start() {
    this.initRenderer()
    this.initCamera()
    this.initScene()
    this.initLight()
    // 初始化地球
    this.initEarth()

    // // 外圈中国描边高亮
    this.animate()
    window.addEventListener('resize', this.onWindowResize.bind(this), false)
  }

  /**
   * @desc 3d球面取点
   * @param <number> radius ...
   * @param <number> a ...
   * @param <number> b ...
   * @return <object> x,y,z
   */
  getPos(radius, a, b) {
    const x = radius * Math.sin(a) * Math.cos(b)
    const y = radius * Math.sin(a) * Math.sin(b)
    const z = radius * Math.cos(a)
    return { x, y, z }
  }
  loadGlb(config) {
    const { path, level, childName } = config
    return new GLB(this).load(path, level, childName)
  }
  // threejs自带的经纬度转换
  lglt2xyz(lng, lat) {
    const theta = (90 + lng) * (Math.PI / 180)
    const phi = (90 - lat) * (Math.PI / 180)
    return new THREE.Vector3().setFromSpherical(new THREE.Spherical(this.radius, phi, theta))
  }

  /**
   * 经纬度坐标转球面坐标
   * @param {地球半径} R
   * @param {经度(角度值)} longitude
   * @param {维度(角度值)} latitude
   */
  lon2xyz(R, longitude, latitude) {
    let lon = (longitude * Math.PI) / 180 // 转弧度值
    const lat = (latitude * Math.PI) / 180 // 转弧度值
    lon = -lon // three.js坐标系z坐标轴对应经度-90度，而不是90度
    // 经纬度坐标转球面坐标计算公式
    const x = R * Math.cos(lat) * Math.cos(lon)
    const y = R * Math.sin(lat)
    const z = R * Math.cos(lat) * Math.sin(lon)
    // 返回球面坐标
    return {
      x: x,
      y: y,
      z: z
    }
  }

  /**
   * @desc 随机设置点
   * @param <Group> group ...
   * @param <number> radius ...
   */
  setRandomDot(group) {
    const texture = new THREE.TextureLoader().load('/earth/标注.png')
    const texture2 = new THREE.TextureLoader().load('/earth/标注光圈.png')
    this.posArr.map(pos => {
      const dotMesh = this.createPointMesh(pos, texture)
      const waveMesh = this.createWaveMesh(pos, texture2)
      group.add(dotMesh)
      group.add(waveMesh)
      this.WaveMeshArr.push(waveMesh)
    })
  }

  /**
   * 标注
   */
  createPointMesh(pos, texture) {
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true, // 使用背景透明的png贴图，注意开启透明计算
      // side: THREE.DoubleSide, //双面可见
      depthWrite: false // 禁止写入深度缓冲区数据
    })
    const mesh = new THREE.Mesh(this.planGeometry, material)
    const size = this.radius * 0.04 // 矩形平面Mesh的尺寸
    mesh.scale.set(size, size, size) // 设置mesh大小
    // 设置mesh位置
    mesh.position.set(pos.x, pos.y, pos.z)
    // mesh在球面上的法线方向(球心和球面坐标构成的方向向量)
    const coordVec3 = new THREE.Vector3(pos.x, pos.y, pos.z).normalize()
    // mesh默认在XOY平面上，法线方向沿着z轴new THREE.Vector3(0, 0, 1)
    const meshNormal = new THREE.Vector3(0, 0, 1)
    // 四元数属性.quaternion表示mesh的角度状态
    // .setFromUnitVectors();计算两个向量之间构成的四元数值
    mesh.quaternion.setFromUnitVectors(meshNormal, coordVec3)
    return mesh
  }

  /**
   * 标注的光圈
   */
  createWaveMesh(pos, texture) {
    const material = new THREE.MeshBasicMaterial({
      color: 0x22ffcc,
      map: texture,
      transparent: true, // 使用背景透明的png贴图，注意开启透明计算
      opacity: 1.0,
      // side: THREE.DoubleSide, //双面可见
      depthWrite: false // 禁止写入深度缓冲区数据
    })
    const mesh = new THREE.Mesh(this.planGeometry, material)
    // let coord = lon2xyz(R*1.001, lon, lat)
    const size = this.radius * 0.055 // 矩形平面Mesh的尺寸
    mesh.size = size // 自顶一个属性，表示mesh静态大小
    mesh.scale.set(size, size, size) // 设置mesh大小
    mesh._s = Math.random() * 1.0 + 1.0 // 自定义属性._s表示mesh在原始大小基础上放大倍数  光圈在原来mesh.size基础上1~2倍之间变化
    mesh.position.set(pos.x, pos.y, pos.z)
    // mesh姿态设置
    // mesh在球面上的法线方向(球心和球面坐标构成的方向向量)
    const coordVec3 = new THREE.Vector3(pos.x, pos.y, pos.z).normalize()
    // mesh默认在XOY平面上，法线方向沿着z轴new THREE.Vector3(0, 0, 1)
    const meshNormal = new THREE.Vector3(0, 0, 1)
    // 四元数属性.quaternion表示mesh的角度状态
    // .setFromUnitVectors();计算两个向量之间构成的四元数值
    mesh.quaternion.setFromUnitVectors(meshNormal, coordVec3)
    return mesh
  }

  addlines2(v0, v3) {
    const angle = (v0.angleTo(v3) * 1.8) / Math.PI / 0.1 // 0 ~ Math.PI
    const aLen = angle * 0.4
    const hLen = angle * angle * 12
    const p0 = new THREE.Vector3(0, 0, 0)
    // 法线向量
    const rayLine = new THREE.Ray(p0, this.getVCenter(v0.clone(), v3.clone()))
    // 顶点坐标
    const vtop = rayLine.at(hLen / rayLine.at(1).distanceTo(p0))
    // 控制点坐标
    const v1 = this.getLenVcetor(v0.clone(), vtop, aLen)
    const v2 = this.getLenVcetor(v3.clone(), vtop, aLen)
    // 绘制三维三次贝赛尔曲线
    const curve = new THREE.CubicBezierCurve3(v0, v1, v2, v3)
    return curve
  }
  // 添加飞线
  addLines(v0, v3) {
    // 夹角
    const angle = (v0.angleTo(v3) * 1.8) / Math.PI / 0.1 // 0 ~ Math.PI
    const aLen = angle * 0.4
    const hLen = angle * angle * 12
    const p0 = new THREE.Vector3(0, 0, 0)
    // 法线向量
    const rayLine = new THREE.Ray(p0, this.getVCenter(v0.clone(), v3.clone()))
    // 顶点坐标
    const vtop = rayLine.at(hLen / rayLine.at(1).distanceTo(p0))
    // 控制点坐标
    const v1 = this.getLenVcetor(v0.clone(), vtop, aLen)
    const v2 = this.getLenVcetor(v3.clone(), vtop, aLen)
    // 绘制三维三次贝赛尔曲线
    const curve = new THREE.CubicBezierCurve3(v0, v1, v2, v3)
    const geometry = new LineGeometry()
    const points = curve.getSpacedPoints(50)
    const positions = []
    const colors = []
    const color = new THREE.Color()
    /**
     * HSL中使用渐变
     * h — hue value between 0.0 and 1.0
     * s — 饱和度 between 0.0 and 1.0
     * l — 亮度 between 0.0 and 1.0
     */
    for (let j = 0; j < points.length; j++) {
      color.setHSL(0.31666 + j * 0.005, 0.7, 0.7) // 绿色
      // color.setHSL(0.81666 + j, 0.88, 0.715 + j * 0.0025) // 粉色
      colors.push(color.r, color.g, color.b)
      positions.push(points[j].x, points[j].y, points[j].z)
    }

    geometry.setPositions(positions)
    geometry.setColors(colors)
    const matLine = new LineMaterial({
      linewidth: 0.0006,
      vertexColors: true,
      dashed: false
    })

    return {
      curve: curve,
      lineMesh: new Line2(geometry, matLine)
    }
  }

  // 计算v1,v2 的中点
  getVCenter(v1, v2) {
    const v = v1.add(v2)
    return v.divideScalar(2)
  }

  // 计算V1，V2向量固定长度的点
  getLenVcetor(v1, v2, len) {
    const v1v2Len = v1.distanceTo(v2)
    return v1.lerp(v2, len / v1v2Len)
  }

  /**
   * @description 初始化渲染场景
   */
  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.width, this.height)
    const containerDom = document.querySelector('#earth')
    containerDom.appendChild(this.renderer.domElement)
  }

  /**
   * @description 初始化相机
   */
  initCamera() {
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 10000)
    this.camera.position.set(5, -20, 200)
    this.camera.lookAt(0, 3, 0)
    window.camera = this.camera
  }

  changePivot(obj) {
    const center = new THREE.Vector3()
    const box = new THREE.BoxHelper(obj, 0x020924)
    box.geometry.computeBoundingBox()
    box.geometry.boundingBox.getCenter(center)
    // obj.geometry.computeBoundingBox()
    // obj.geometry.boundingBox.getCenter(center)
    const wrapper = new THREE.Object3D()
    wrapper.position.set(center.x, center.y, center.z)
    box.position.set(center.x, center.y, center.z)
    wrapper.add(box)
    this.scene.add(wrapper)
    return wrapper
  }
  /**
   * @description 初始化场景
   */
  async initScene() {
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x020924)
    this.scene.fog = new THREE.Fog(0x020924, 200, 1000)

    window.scene = this.scene
    const that = this
    const moon = this.loadGlb({ path: '/earth/build/scene.gltf' }).then(sliver => {
      sliver.scale.set(0.01, 0.01, 0.01)
      sliver.name = `moon`
      // sliver.position.x -= 25
      // sliver.rotateX(Math.PI / 2)
      sliver.position.set(15, 0, 10)
      that.groupParent.add(sliver)
      that.scene.add(that.groupParent)
    })
  }

  /**
   * 初始化用户交互
   **/
  initControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    // 如果使用animate方法时，将此函数删除
    // controls.addEventListener( 'change', render );
    // 使动画循环使用时阻尼或自转 意思是否有惯性
    this.controls.enableDamping = true
    // 动态阻尼系数 就是鼠标拖拽旋转灵敏度
    // controls.dampingFactor = 0.25;
    // 是否可以缩放
    this.controls.enableZoom = true
    // 是否自动旋转
    this.controls.autoRotate = false
    this.controls.autoRotateSpeed = 2
    // 设置相机距离原点的最远距离
    // controls.minDistance = 2;
    // 设置相机距离原点的最远距离
    // controls.maxDistance = 1000;
    // 是否开启右键拖拽
    this.controls.enablePan = true
  }

  initTween() {
    const tweena = this.cameraCon(3000)
    tweena.start()
  }

  cameraCon(time) {
    const that = this
    const tween1 = new TWEEN.Tween(this.camaPositions[0])
      .to(this.camaPositions[1], time)
      .easing(TWEEN.Easing.Quadratic.InOut)
    const update = () => {
      this.camera.position.set(this.camaPositions[0].x, this.camaPositions[0].y, this.camaPositions[0].z)
    }

    tween1.onUpdate(update)
    tween1.onComplete(function () {
      that.initFlag = true
      // 初始化点和曲线
      that.initDotAndFly()
      // 光柱效果和底部矩形
      that.initLightPillar()
    })
    return tween1
  }

  // 经纬度转地球坐标
  createPosition(lnglat) {
    const spherical = new THREE.Spherical()
    spherical.radius = this.radius
    const lng = lnglat[0]
    const lat = lnglat[1]
    const theta = (lng + 90) * (Math.PI / 180)
    const phi = (90 - lat) * (Math.PI / 180)
    spherical.phi = phi // 方位角
    spherical.theta = theta // 倾斜角
    const position = new THREE.Vector3()
    position.setFromSpherical(spherical)
    return position
  }

  /**
   * @description 初始化光
   */
  initLight() {
    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.5)
    this.scene.add(ambientLight)
    let directionalLight = new THREE.DirectionalLight(0xffffff, 0.2)
    directionalLight.position.set(1, 0.1, 0).normalize()
    const directionalLight2 = new THREE.DirectionalLight(0xff2ffff, 0.2)
    directionalLight2.position.set(1, 0.1, 0.1).normalize()
    // this.scene.add(directionalLight)
    // this.scene.add(directionalLight2)
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.2)
    hemiLight.position.set(0, 1, 0)
    this.scene.add(hemiLight)
    directionalLight = new THREE.DirectionalLight(0xffffff)
    directionalLight.position.set(1, 500, -20)
    directionalLight.castShadow = true
    directionalLight.shadow.camera.top = 18
    directionalLight.shadow.camera.bottom = -10
    directionalLight.shadow.camera.left = -52
    directionalLight.shadow.camera.right = 12
    this.scene.add(directionalLight)
  }

  /**
   * 初始化背景星空
   */
  initPoints() {
    const texture = new THREE.TextureLoader().load('/earth/gradient.png')
    const positions = []
    const colors = []
    const geometry = new THREE.BufferGeometry()
    for (let i = 0; i < 10000; i++) {
      const vertex = new THREE.Vector3()
      vertex.x = Math.random() * 2 - 1
      vertex.y = Math.random() * 2 - 1
      vertex.z = Math.random() * 2 - 1
      positions.push(vertex.x, vertex.y, vertex.z)
      const color = new THREE.Color()
      color.setHSL(Math.random() * 0.2 + 0.5, 0.55, Math.random() * 0.25 + 0.55)
      colors.push(color.r, color.g, color.b)
    }
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geometry.addAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
    const starsMaterial = new THREE.ParticleBasicMaterial({
      map: texture,
      size: 1,
      transparent: true,
      opacity: 1,
      vertexColors: true, // true：且该几何体的colors属性有值，则该粒子会舍弃第一个属性--color，而应用该几何体的colors属性的颜色
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    })
    this.stars = new THREE.ParticleSystem(geometry, starsMaterial)
    this.stars.scale.set(300, 300, 300)
    this.scene.add(this.stars)
  }

  /**
   * 包含2个，一个地球，一个辉光球体
   */
  initEarth() {
    const that = this
    // 地球
    const earth = this.globeTextureLoader.load('/earth/Material.002_diffuse.jpeg', async function (texture) {
      const globeGgeometry = await new THREE.SphereGeometry(that.radius, 100, 100)

      const globeMaterial = await new THREE.MeshStandardMaterial({
        map: texture,
        side: THREE.DoubleSide,
        metalness: 0.4,
        roughness: 0.9
      })
      const globeMesh = await new THREE.Mesh(globeGgeometry, globeMaterial)

      that.group.rotation.set(0.8, 2.5, 0.1)
      that.group.add(globeMesh)
      that.scene.add(that.group)
    })
    // 卫星特效
    this.initSatellite()

    // 地球光晕
    this.initEarthSprite()
    // 初始化动态星空背景
    this.initPoints()
    // 初始化点和曲线，放在tween动画完成后调用
    // initDotAndFly();

    // 外圈中国描边高亮
    this.initGeoJson()
    this.initControls()
    this.initTween()
  }

  /**
   * 包含2个，一个地球，一个辉光球体
   */
  initEarth2() {
    this.uniforms = {
      u_time: { value: 0.0 },
      c: { type: 'f', value: 2.3 }, // 2.1 								// 系数
      p: { type: 'f', value: 1.7 }, // 1.7 								// 强度
      diffuse: {
        // 用于实现扫描效果的贴图
        type: 't',
        value: new THREE.TextureLoader().load('/earth/earth2.jpg')
      },
      glowColor: { type: 'c', value: new THREE.Color(0x10105) }, // / 光罩的颜色
      viewVector: {
        // 相机位置
        type: 'v3',
        value: new THREE.Vector3(0, 0, 1)
      },
      blending: THREE.AdditiveBlending
    }
    this.uniforms['diffuse'].value.wrapS = this.uniforms['diffuse'].value.wrapT = THREE.RepeatWrapping
    const material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: this.vertexShader,
      fragmentShader: this.fragmentShader,
      side: THREE.DoubleSide
      // depthWrite: false,
      // transparent: true,
    })
    const globeGgeometry = new THREE.SphereGeometry(this.radius, 100, 100)
    const globeMesh = new THREE.Mesh(globeGgeometry, material)
    this.group.rotation.set(0.5, 2.9, 0.1)
    this.group.add(globeMesh)
    this.scene.add(this.group)
  }

  /**
   * 创建地球光晕特效
   */
  initEarthSprite() {
    const texture = this.globeTextureLoader.load('/earth/earth_aperture.png')
    const spriteMaterial = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 0.4,
      depthWrite: false
    })
    const sprite = new THREE.Sprite(spriteMaterial)
    sprite.scale.set(this.radius * 3, this.radius * 3, 1)
    this.group.add(sprite)
  }

  /**
   * 添加卫星特效
   */
  initSatellite() {
    // 光环
    const that = this
    this.globeTextureLoader.load('/earth/halo.png', function (texture) {
      const geometry = new THREE.PlaneGeometry(22, 22) // 矩形平面
      const material = new THREE.MeshLambertMaterial({
        map: texture, // 给纹理属性map赋值
        transparent: true,
        side: THREE.DoubleSide, // 两面可见
        depthWrite: false,
        color: 0x00ffff
      }) // 材质对象
      const mesh = new THREE.Mesh(geometry, material) // 网格模型对象

      that.groupHalo.add(mesh)
    })
    // 小地球
    // that.globeTextureLoader.load('/earth/smallEarth.png', function(texture) {
    //   let p1 = new THREE.Vector3(-7, 0, 0) // 顶点1坐标
    //   let p2 = new THREE.Vector3(7, 0, 0) // 顶点2坐标
    //   const points = [p1, p2]
    //   const geometry = new THREE.BufferGeometry().setFromPoints(points)
    //   let material = new THREE.PointsMaterial({
    //     map: texture, // 给纹理属性map赋值
    //     transparent: true,
    //     side: THREE.DoubleSide, // 两面可见
    //     size: 1, // 点对象像素尺寸
    //     depthWrite: false
    //   }) // 材质对象
    //   let earthPoints = new THREE.Points(geometry, material) // 点模型对象
    //   that.groupHalo.add(earthPoints) // 点对象添加到场景中
    // })
    const spaceStation = this.loadGlb({ path: '/earth/spacestation/scene.gltf' }).then(sliver => {
      sliver.scale.set(0.06, 0.06, 0.06)
      sliver.name = `spaceStation`
      sliver.position.set(0, 11, 0)
      sliver.rotation.set(0, 2.5, 2)
      that.groupHalo.add(sliver) // 点对象添加到场景中
      // 自转
      // that.rotateObj.push(that.changePivot(sliver))
    })
    that.groupHalo.rotation.set(1.9, 0.5, 1)
    that.scene.add(that.groupHalo)
  }

  /**
   * 光柱特效
   */
  createLightPillar(pos) {
    const height = this.radius * 0.1 // 光柱高度，和地球半径相关，这样调节地球半径，光柱尺寸跟着变化
    const geometry = new THREE.PlaneBufferGeometry(this.radius * 0.05, height) // 默认在XOY平面上
    geometry.rotateX(Math.PI / 2) // 光柱高度方向旋转到z轴上
    geometry.translate(0, 0, height / 2) // 平移使光柱底部与XOY平面重合
    const textureLoader = new THREE.TextureLoader() // TextureLoader创建一个纹理加载器对象

    const material = new THREE.MeshBasicMaterial({
      map: textureLoader.load('/earth/光柱.png'),
      color: 0x44ffaa, // 光柱颜色，光柱map贴图是白色，可以通过color调节颜色
      transparent: true, // 使用背景透明的png贴图，注意开启透明计算
      side: THREE.DoubleSide, // 双面可见
      depthWrite: false // 是否对深度缓冲区有任何的影响
    })

    const mesh = new THREE.Mesh(geometry, material)

    const group = new THREE.Group()
    // 两个光柱交叉叠加

    group.add(mesh, mesh.clone().rotateZ(Math.PI / 2)) // 几何体绕x轴旋转了，所以mesh旋转轴变为z

    group.position.set(pos.x, pos.y, pos.z) // 设置mesh位置

    const coordVec3 = new THREE.Vector3(pos.x, pos.y, pos.z).normalize()
    const meshNormal = new THREE.Vector3(0, 0, 1)
    // 四元数属性.quaternion表示mesh的角度状态
    // .setFromUnitVectors();计算两个向量之间构成的四元数值

    group.quaternion.setFromUnitVectors(meshNormal, coordVec3)
    return group
  }

  /**
   * 光柱底部的矩形平面特效
   */
  createLightWaveMesh(pos, texture) {
    const geometry = new THREE.PlaneBufferGeometry(1, 1) // 默认在XOY平面上
    const material = new THREE.MeshBasicMaterial({
      color: 0x22ffcc,
      map: texture,
      transparent: true, // 使用背景透明的png贴图，注意开启透明计算
      // side: THREE.DoubleSide, //双面可见
      depthWrite: false // 禁止写入深度缓冲区数据
    })
    const mesh = new THREE.Mesh(geometry, material)
    const size = this.radius * 0.05 // 矩形平面Mesh的尺寸
    mesh.scale.set(size, size, size) // 设置mesh大小
    return mesh
  }

  /**
   * 光柱效果
   */
  initLightPillar() {
    const that = this
    const texture = new THREE.TextureLoader().load('/earth/标注.png')
    const datas = [
      {
        lng: 86.39895905468748,
        lat: 45.15923349468924 // 合肥
      },
      {
        lng: 106.54041,
        lat: 29.40268 // 重庆
      }
    ]
    datas.forEach(function (obj) {
      const pos = that.lglt2xyz(obj.lng, obj.lat)
      const LightPillar = that.createLightPillar(pos)
      that.groupDots.add(LightPillar)
      const waveMesh = that.createLightWaveMesh(pos, texture)
      LightPillar.add(waveMesh)
    })
  }

  /**
   * @description 初始化点和曲线
   */
  initDotAndFly() {
    const that = this
    // 创建标注点
    this.setRandomDot(this.groupDots)
    // 随机点加载group上面
    this.group.add(this.groupDots)
    // 曲线
    const animateDots = []

    this.groupDots.children.forEach(elem => {
      if (this.groupDots.children[0].position.x === elem.position.x) {
        return true
      }
      //  生成路径
      const line = that.addLines(this.groupDots.children[0].position, elem.position)
      // 生成飞线
      const lines = that.addlines2(elem.position, this.groupDots.children[0].position)
      this.testFlyLine = new FlyLine(lines, {
        color: 0x00ffff,
        segFlag: true,
        radius: 0.05
      })
      this.groupnormalLine.add(line.lineMesh)
      // let line = this.addLines(this.groupDots.children[0].position, elem.position)
      // animateDots.push(line.curve.getPoints(100)) // 这个是里面球
      this.groupLines.add(this.testFlyLine)
    })
    // this.groupLines.name = 'flyLine'
    this.group.add(this.groupLines)
    this.group.add(this.groupnormalLine)
    // // 添加动画
    // for (let i = 0; i < animateDots.length; i++) {
    //   const aGeo = new THREE.SphereGeometry(0.03, 0.03, 0.03)
    //   const aMater = new THREE.MeshPhongMaterial({ color: '#F8D764' })
    //   const aMesh = new THREE.Mesh(aGeo, aMater)
    //   this.aGroup.add(aMesh)
    // }

    // let vIndex = 0

    // function animateLine() {
    //   that.aGroup.children.forEach((elem, index) => {
    //     const v = animateDots[index][vIndex]
    //     elem.position.set(v.x, v.y, v.z)
    //   })
    //   vIndex++
    //   if (vIndex > 100) {
    //     vIndex = 0
    //   }
    //   setTimeout(animateLine, 20)
    // }

    // this.group.add(this.aGroup)
    // animateLine()
    this.scene.add(this.group)
  }

  /**
   * 中国描边高亮
   */
  initGeoJson() {
    const that = this
    const loader = new THREE.FileLoader()
    loader.load('/geoJson/china.json', function (data) {
      const jsonData = JSON.parse(data)
      that.initMap(jsonData)
    })
    loader.load('/geoJson/china-outline.json', function (data) {
      const jsonData = JSON.parse(data)
      that.outLineMap(jsonData)
    })
  }

  outLineMap(json) {
    const that = this
    json.features.forEach(elem => {
      // 新建一个省份容器：用来存放省份对应的模型和轮廓线
      const province = new THREE.Object3D()
      const coordinates = elem.geometry.coordinates
      coordinates.forEach(multiPolygon => {
        multiPolygon.forEach(polygon => {
          // 这里的坐标要做2次使用：1次用来构建模型，1次用来构建轮廓线
          if (polygon.length > 200) {
            const v3ps = []
            for (let i = 0; i < polygon.length; i++) {
              const pos = that.lglt2xyz(polygon[i][0], polygon[i][1])
              v3ps.push(pos)
            }

            const curve = new THREE.CatmullRomCurve3(v3ps, false /* 是否闭合*/)
            const color = new THREE.Vector3(0.5999758518718452, 0.7798940272761521, 0.6181903838257632)
            const flyLine = that.initFlyLine(
              curve,
              {
                speed: 0.4,
                // color: randomVec3Color(),
                color: color,
                number: 3, // 同时跑动的流光数量
                length: 0.2, // 流光线条长度
                size: 3 // 粗细
              },
              5000
            )
            province.add(flyLine)
          }
        })
      })
      that.map.add(province)
    })
    that.group.add(that.map)
  }

  initMap(chinaJson) {
    // 遍历省份构建模型
    const that = this
    chinaJson.features.forEach(elem => {
      // 新建一个省份容器：用来存放省份对应的模型和轮廓线
      const province = new THREE.Object3D()
      const coordinates = elem.geometry.coordinates
      coordinates.forEach(multiPolygon => {
        multiPolygon.forEach(polygon => {
          const lineMaterial = new THREE.LineBasicMaterial({ color: 0xf19553 }) // 0x3BFA9E
          const positions = []
          const linGeometry = new THREE.BufferGeometry()
          for (let i = 0; i < polygon.length; i++) {
            const pos = that.lglt2xyz(polygon[i][0], polygon[i][1])
            positions.push(pos.x, pos.y, pos.z)
          }

          linGeometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
          const line = new THREE.Line(linGeometry, lineMaterial)
          province.add(line)
        })
      })
      that.map.add(province)
    })
    that.group.add(that.map)
  }

  /**
   * @param curve {THREE.Curve} 路径,
   * @param matSetting {Object} 材质配置项
   * @param pointsNumber {Number} 点的个数 越多越细致
   * */
  initFlyLine(curve, matSetting, pointsNumber) {
    const points = curve.getPoints(pointsNumber)
    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    const length = points.length
    const percents = new Float32Array(length)
    for (let i = 0; i < points.length; i += 1) {
      percents[i] = i / length
    }

    geometry.addAttribute('percent', new THREE.BufferAttribute(percents, 1))
    const lineMaterial = this.initLineMaterial(matSetting)
    const flyLine = new THREE.Points(geometry, lineMaterial)
    return flyLine
  }

  initLineMaterial(setting) {
    const that = this
    const number = setting ? Number(setting.number) || 1.0 : 1.0
    const speed = setting ? Number(setting.speed) || 1.0 : 1.0
    const length = setting ? Number(setting.length) || 0.5 : 0.5
    const size = setting ? Number(setting.size) || 3.0 : 3.0
    const color = setting ? setting.color || new THREE.Vector3(0, 1, 1) : new THREE.Vector3(0, 1, 1)
    const singleUniforms = {
      u_time: that.uniforms2.u_time,
      number: { type: 'f', value: number },
      speed: { type: 'f', value: speed },
      length: { type: 'f', value: length },
      size: { type: 'f', value: size },
      color: { type: 'v3', value: color }
    }

    const lineMaterial = new THREE.ShaderMaterial({
      uniforms: singleUniforms,
      vertexShader: this.vertexShader2,
      fragmentShader: this.fragmentShader2,
      transparent: true
      // blending:THREE.AdditiveBlending,
    })
    return lineMaterial
  }

  /**
   * 窗口变动
   **/
  onWindowResize() {
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
    this.renders()
    this.renderer.setSize(this.width, this.height)
  }
  /**
   * @description 渲染
   */
  renders() {
    this.renderer.clear()
    this.renderer.render(this.scene, this.camera)
  }
  getFirstIntersectObj(event) {
    if (!event) {
      return
    }
    // 通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
    const mouse = new THREE.Vector2()
    mouse.x = ((event.clientX - 165) / window.innerWidth) * 2 - 1
    mouse.y = -((event.clientY - 80) / window.innerHeight) * 2 + 1
    // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
    this.raycaster.setFromCamera(mouse, this.camera)
    // 获取raycaster直线和所有模型相交的数组集合
    const obj = this.raycaster.intersectObjects(this.scene.children, true)[0]

    // if (obj.object.name === 'roof') {
    //   this.outlinePass.selectedObjects = [obj.object.parent]
    // } else {
    //   this.outlinePass.selectedObjects = [obj.object]
    // }
    return obj
  }
  /**
   * 更新
   **/
  animate() {
    const that = this
    window.requestAnimationFrame(() => {
      if (that.controls) that.controls.update()
      if (that.stats) that.stats.update()
      if (TWEEN) TWEEN.update()
      if (that.initFlag) {
        // 光环
        that.groupHalo.rotation.z = that.groupHalo.rotation.z + 0.01
        // 光环2
        // that.groupHalo2.rotation.z = that.groupHalo2.rotation.z + 0.01
        if (!that.hoverEarth) {
          that.group.rotation.y = that.group.rotation.y + 0.001
        }

        // that.groupSliver.rotation.y = that.groupSliver.rotation.y + 0.01
        // 所有波动光圈都有自己的透明度和大小状态
        // 一个波动光圈透明度变化过程是：0~1~0反复循环
        if (that.WaveMeshArr.length) {
          that.WaveMeshArr.forEach(function (mesh) {
            mesh._s += 0.007
            mesh.scale.set(mesh.size * mesh._s, mesh.size * mesh._s, mesh.size * mesh._s)
            if (mesh._s <= 1.5) {
              // mesh._s=1，透明度=0 mesh._s=1.5，透明度=1
              mesh.material.opacity = (mesh._s - 1) * 2
            } else if (mesh._s > 1.5 && mesh._s <= 2) {
              // mesh._s=1.5，透明度=1 mesh._s=2，透明度=0
              mesh.material.opacity = 1 - (mesh._s - 1.5) * 2
            } else {
              mesh._s = 1.0
            }
          })
        }
      }

      if (that.stars) {
        that.stars.rotation.y += 0.0001
      }
      that.groupParent.rotation.y = that.groupParent.rotation.y + 0.005
      // 自转
      // that.rotateObj.forEach(item => {
      //   item.children[0].object.rotation.y -= 0.05
      // })
      // 飞线
      this.group.children

      this.groupLines.children.forEach(item => {
        item.update()
      })
      // this.testFlyLine && this.testFlyLine.update()
      that.uniforms2.u_time.value += 0.007
      that.renders()
      that.animate()
    })
  }
}
