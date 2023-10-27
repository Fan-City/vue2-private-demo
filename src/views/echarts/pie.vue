<template>
  <div class="pie-wapper">
    <div id="pieDom"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: "pie",
  data() {
    return {
      pieData: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
      pieDom: null,
      pieEchart: null,
      resizeOb: null,
    };
  },
  mounted() {
    this.initPie();
  },
  methods: {
    initPie() {
      this.pieDom = document.getElementById("pieDom")
      this.pieEchart = echarts.init(this.pieDom);
      let option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: this.pieData,
          },
        ]
      };

      this.pieEchart.setOption(option);

      this.resizeOb = new ResizeObserver(entries => {
        for(let item of entries) {
          console.log("resizing item----", item);
          this.pieEchart.resize();
        }
      });
      this.resizeOb.observe(this.pieDom);
    }
  },
  beforeDestroy() {
    this.resizeOb.unobserve(this.pieDom);
  }
};
</script>

<style lang="scss" scoped>
.pie-wapper {
  height: 100%;
  #pieDom {
    height: 100%;
  }
}
</style>
