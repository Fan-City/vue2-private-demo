<template>
  <div id="viewDiv" class="viewDiv"></div>
</template>

<script>
import { loadModules } from "esri-loader";
export default {
  data() {
    return {
      // 地图类
      map: {},
      // 地图视图
      view: {},
      // esri返回值
      ArcGISApi: {},
      // esri组件
      modules: [
        "esri/config",
        "esri/Map",
        "esri/WebMap",
        "esri/widgets/Locate",
        "esri/widgets/Track",
        "esri/layers/TileLayer",
        "esri/views/MapView",
        "esri/widgets/Locate",
        "esri/widgets/Track",
        "esri/Graphic",
        "esri/widgets/Zoom",
        "esri/geometry/Polygon",
        "esri/geometry/SpatialReference",
        "esri/layers/GraphicsLayer",
        "esri/layers/FeatureLayer",
        "esri/layers/VectorTileLayer",
        "esri/PopupTemplate",
        "esri/widgets/Popup",
        "esri/widgets/Sketch",
        "esri/widgets/Legend",
        "esri/symbols/TextSymbol",
        "esri/symbols/Font",
        "dojo/domReady!",
      ],
      graphicsLayers: {
        testGraphicsLayer: null,
      },
    };
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      loadModules(["esri/views/MapView", "esri/WebMap"])
        .then(([MapView, WebMap]) => {
          // then we load a web map from an id
          var webmap = new WebMap({
            portalItem: {
              // autocasts as new PortalItem()
              id: "f2e9b762544945f390ca4ac3671cfa72",
            },
          });
          // and we show that map in a container w/ id #viewDiv
          var view = new MapView({
            map: webmap,
            container: "viewDiv",
          });
        })
        .catch((err) => {
          // handle any errors
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.viewDiv {
  height: 300px;
  
}
</style>