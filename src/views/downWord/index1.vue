<template>
  <div class="downword-page" id="pdfContainer">
    <div class="download" @click="downLoadPdf">下载pdf</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-2">{{ text2 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-2">{{ text2 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-2">{{ text2 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <div class="title title-2">{{ text2 }}</div>
    <div class="title title-1">{{ text1 }}</div>
    <img src="https://img0.baidu.com/it/u=3232582821,3516640051&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1703350800&t=3ef9d06db70dfce7ba7535bb6182bf09" alt="">

    <div ref="myEcharts" id="myEcharts" class="downword-page-myEcharts itemClass"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import PdfLoader from "./htmlToPdfNew.js";

export default {
  name: "downwords",
  data() {
    return {
      text1: "测试关系图标题1",
      text2: "测试关系图标题2",
      myEcharts1: null,
      myEcharts2: null,
    };
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    downLoadPdf() {
      let ele = document.getElementById("pdfContainer");
      let pdf = new PdfLoader(ele, "测试", "itemClass");
      pdf.outPutPdfFn('分析报告')
    },
    initEcharts() {
      this.myEcharts = echarts.init(document.getElementById("myEcharts"));
      let option = {
        backgroundColor: "#1a4377",
        tooltip: {},
        /* legend: [{
        tooltip: {
          show: true
        },
        selectedMode: 'true',
        bottom: 20,
        // data: ['招标倾向性', '装饰装修项目', '房建项目', '园林绿化项目', '其他项目', '市政项目', '园林绿化项目']
      }], */
        animationDuration: 1000,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            name: "",
            type: "graph",
            layout: "force",
            edgeSymbol: ["none", "arrow"],
            // draggable: false,
            zoom: 1,
            roam: false,
            itemStyle: {
              normal: {
                borderWidth: 2,
              },
            },
            force: {
              repulsion: 300,
              edgeLength: 50,
              layoutAnimation: false,
            },
            data: [
              {
                id: 0,
                name: "招标倾向性",
                // "x": 0,
                // y: 0,
                symbolSize: [60, 60],
                category: "父节点",
                value: 200,
                itemStyle: {
                  normal: {
                    color: "rgba(250, 200, 88, 1)",
                    borderColor: "#f3aa06",
                  },
                },
                label: {
                  textBorderColor: "rgba(250, 200, 88, 1)",
                },
              },
              {
                id: 1,
                name: "房建项目",
                value: 25,
                symbolSize: 40,
                category: "项目类型",
                itemStyle: {
                  normal: {
                    color: "rgba(84, 112, 198, 1)",
                    borderColor: "#1647e0",
                  },
                },
                label: {
                  textBorderColor: "rgba(84, 112, 198, 1)",
                },
              },
              {
                id: 2,
                name: "市政项目",
                symbolSize: 32,
                category: "项目类型",
                value: 15,
                itemStyle: {
                  normal: {
                    color: "rgba(84, 112, 198, 1)",
                    borderColor: "#1647e0",
                  },
                },
                label: {
                  textBorderColor: "rgba(84, 112, 198, 1)",
                },
              },
              {
                id: 3,
                name: "装饰装修项目",
                symbolSize: 40,
                category: "项目类型",
                value: 15,
                itemStyle: {
                  normal: {
                    color: "rgba(84, 112, 198, 1)",
                    borderColor: "#1647e0",
                  },
                },
                label: {
                  textBorderColor: "rgba(84, 112, 198, 1)",
                },
              },
              {
                id: 4,
                name: "园林绿化项目",
                symbolSize: 40,
                category: "项目类型",
                value: 15,
                itemStyle: {
                  normal: {
                    color: "rgba(84, 112, 198, 1)",
                    borderColor: "#1647e0",
                  },
                },
                label: {
                  textBorderColor: "rgba(84, 112, 198, 1)",
                },
              },
              {
                id: 5,
                name: "其他项目",
                symbolSize: 40,
                category: "项目类型",
                value: 15,
                itemStyle: {
                  normal: {
                    color: "rgba(84, 112, 198, 1)",
                    borderColor: "#1647e0",
                  },
                },
                label: {
                  textBorderColor: "rgba(84, 112, 198, 1)",
                },
              },
              {
                id: 6,
                name: "定性评审法",
                symbolSize: 53,
                category: "评标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(145, 204, 117, 1)",
                    borderColor: "#3a980d",
                  },
                },
                label: {
                  textBorderColor: "rgba(145, 204, 117, 1)",
                },
              },
              {
                id: 7,
                name: "抽签定标法",
                symbolSize: 26,
                category: "评标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(145, 204, 117, 1)",
                    borderColor: "#3a980d",
                  },
                },
                label: {
                  textBorderColor: "rgba(145, 204, 117, 1)",
                },
              },
              {
                id: 8,
                name: "其他",
                symbolSize: 45,
                category: "评标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(145, 204, 117, 1)",
                    borderColor: "#3a980d",
                  },
                },
                label: {
                  textBorderColor: "rgba(145, 204, 117, 1)",
                },
              },
              {
                id: 9,
                name: "综合评估法",
                symbolSize: 45,
                category: "评标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(145, 204, 117, 1)",
                    borderColor: "#3a980d",
                  },
                },
                label: {
                  textBorderColor: "rgba(145, 204, 117, 1)",
                },
              },
              {
                id: 10,
                name: "综合定性评审法",
                symbolSize: 45,
                category: "评标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(145, 204, 117, 1)",
                    borderColor: "#3a980d",
                  },
                },
                label: {
                  textBorderColor: "rgba(145, 204, 117, 1)",
                },
              },
              {
                id: 11,
                name: "抽签定标法",
                symbolSize: 45,
                category: "评标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(145, 204, 117, 1)",
                    borderColor: "#3a980d",
                  },
                },
                label: {
                  textBorderColor: "rgba(145, 204, 117, 1)",
                },
              },
              {
                id: 12,
                name: "低价法",
                symbolSize: 45,
                category: "评标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(145, 204, 117, 1)",
                    borderColor: "#3a980d",
                  },
                },
                label: {
                  textBorderColor: "rgba(145, 204, 117, 1)",
                },
              },
              {
                id: 13,
                name: "抽签定标法",
                symbolSize: 26,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 14,
                name: "票决抽签",
                symbolSize: 45,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 15,
                name: "直接票决",
                symbolSize: 45,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 16,
                name: "逐轮票决",
                symbolSize: 45,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 17,
                name: "直接定标",
                symbolSize: 45,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 18,
                name: "随机抽取",
                symbolSize: 45,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 19,
                name: "先评后抽",
                symbolSize: 26,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 20,
                name: "集体议事法",
                symbolSize: 45,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 21,
                name: "价格法",
                symbolSize: 45,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 22,
                name: "价格竞争法",
                symbolSize: 45,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 23,
                name: "价格偏离法",
                symbolSize: 45,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 24,
                name: "其他",
                symbolSize: 45,
                category: "定标办法",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(238, 102, 102, 1)",
                    borderColor: "#b91e1e",
                  },
                },
                label: {
                  textBorderColor: "rgba(238, 102, 102, 1)",
                },
              },
              {
                id: 25,
                name: "特级",
                symbolSize: 45,
                category: "中标企业",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(115, 192, 222, 1)",
                    borderColor: "#0a7ca9",
                  },
                },
                label: {
                  textBorderColor: "rgba(115, 192, 222, 1)",
                },
              },
              {
                id: 26,
                name: "一级",
                symbolSize: 30,
                category: "中标企业",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(115, 192, 222, 1)",
                    borderColor: "#0a7ca9",
                  },
                },
                label: {
                  textBorderColor: "rgba(115, 192, 222, 1)",
                },
              },
              {
                id: 27,
                name: "二级",
                symbolSize: 25,
                category: "中标企业",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(115, 192, 222, 1)",
                    borderColor: "#0a7ca9",
                  },
                },
                label: {
                  textBorderColor: "rgba(115, 192, 222, 1)",
                },
              },
              {
                id: 28,
                name: "三级",
                symbolSize: 20,
                category: "中标企业",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(115, 192, 222, 1)",
                    borderColor: "#0a7ca9",
                  },
                },
                label: {
                  textBorderColor: "rgba(115, 192, 222, 1)",
                },
              },
              {
                id: 29,
                name: "其他",
                symbolSize: 45,
                category: "中标企业",
                value: 10,
                itemStyle: {
                  normal: {
                    color: "rgba(115, 192, 222, 1)",
                    borderColor: "#0a7ca9",
                  },
                },
                label: {
                  textBorderColor: "rgba(115, 192, 222, 1)",
                },
              },
            ],
            links: [
              {
                source: "0",
                target: "1",
              },
              {
                source: "0",
                target: "2",
              },
              {
                source: "0",
                target: "3",
              },
              {
                source: "0",
                target: "4",
              },
              {
                source: "0",
                target: "5",
              },
              {
                source: "1",
                target: "6",
              },
              {
                source: "1",
                target: "7",
              },
              {
                source: "1",
                target: "8",
              },
              {
                source: "2",
                target: "9",
              },
              {
                source: "2",
                target: "10",
              },
              {
                source: "2",
                target: "11",
              },
              {
                source: "3",
                target: "12",
              },
              {
                source: "6",
                target: "13",
              },
              {
                source: "6",
                target: "14",
              },
              {
                source: "6",
                target: "15",
              },
              {
                source: "7",
                target: "16",
              },
              {
                source: "7",
                target: "17",
              },
              {
                source: "8",
                target: "18",
              },
              {
                source: "9",
                target: "19",
              },
              {
                source: "9",
                target: "20",
              },
              {
                source: "10",
                target: "21",
              },
              {
                source: "10",
                target: "22",
              },
              {
                source: "11",
                target: "23",
              },
              {
                source: "12",
                target: "24",
              },
              {
                source: "14",
                target: "25",
              },
              {
                source: "14",
                target: "26",
              },
              {
                source: "14",
                target: "27",
              },
              {
                source: "14",
                target: "28",
              },
              {
                source: "14",
                target: "29",
              },
            ],
            categories: [
              {
                name: "项目类型",
              },
              {
                name: "评标办法",
              },
              {
                name: "父节点",
              },
              {
                name: "定标办法",
              },
              {
                name: "中标企业",
              },
            ],
            focusNodeAdjacency: true,
            edgeLabel: {
              normal: {
                show: true,
                formatter: function (x) {
                  return x.data.name;
                },
              },
            },
            label: {
              normal: {
                show: true,
                position: "inside",
                color: "#fff",
                textBorderWidth: 1,
              },
            },
            lineStyle: {
              normal: {
                color: "source",
                curveness: 0,
                type: "solid",
              },
            },
          },
        ],
      };
      this.myEcharts.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.downword-page {
  position: relative;
  .download {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100px;
    line-height: 35px;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    color: blue;
    cursor: pointer;
    border: 1px solid blue;
    border-radius: 5px;
    transition: 0.3s;
    &:hover {
      color: white;
      background: blue;
    }
  }
  .title {
    text-align: center;
    &.title-1 {
      font-size: 20px;
      line-height: 40px;
    }
    &.title-2 {
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 30px;
    }
  }
  &-myEcharts {
    height: 800px;
  }
}
</style>
