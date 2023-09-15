import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import BaseThree from '../obj/obj'

export default class GLB extends BaseThree {
  constructor(app) {
    super(app)
    this.self = app
    console.log('app', app)
    this.GLTFLoader = new GLTFLoader() // glb加载器
  }
  load(path, level, childName) {
    const that = this
    const model = new THREE.Group() // 声明一个组对象，用来添加加载成功的三维场景
    const self = this.self
    console.log('level', level)
    return new Promise(res => {
      this.GLTFLoader.load(path, function (gltf) {
        // gltf加载成功后返回一个对象
        console.log('控制台查看gltf对象结构', gltf)
        // gltf.scene可以包含网格模型Mesh、光源Light等信息，至于gltf.scene是否包含光源，要看.gltf文件中
        // 把gltf.scene中的所有模型添加到model组对象中
        model.add(gltf.scene)
        self.scene.add(model)
        console.log('self', self)
        res(model)
      })
    })
  }
}
