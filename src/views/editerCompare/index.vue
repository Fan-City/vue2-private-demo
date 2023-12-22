<template>
  <div class="dialog-mark-diff">
    <el-card>
      <h3>上次修改</h3>
      <div class="compare-report-info" v-html="preReportInfo"></div>
    </el-card>
    <el-card>
      <h3>选中记录</h3>
      <div class="compare-report-info" v-html="nowReportInfo"></div>
    </el-card>
  </div>
</template>

<script>
import compareReportInfo from "./Compare.js";
global.compareReportInfo = compareReportInfo;
export default {
  data() {
    return {
      preReportInfo: "",
      preReportInfoLabel: "",
      nowReportInfo: "",
      nowReportInfoLabel: "",
    };
  },
  methods: {
    //报告痕迹对比列表点击事件
    openMarkTableDetails(row) {
      var newsListData1 = [];
      newsListData1.push({
        currentDate: row.Ftime.replace(/T/g, " "),
        nowReportInfo: row.Describle.replace(/null/g, " "),
      });
      var newsListData2 = [];
      for (var i = 0; i < this.dialogTableData.length; i++) {
        if (this.dialogTableData[i].tid == row.tid - 1) {
          newsListData2.push({
            prevDate: this.dialogTableData[i].Ftime.replace(/T/g, " "),
            preReportInfo: this.dialogTableData[i].Describle.replace(
              /null/g,
              " "
            ),
          });
        }
      }
      if (newsListData2[0] == undefined) {
        this.prevDate = "";
        this.preReportInfoLabel = "无";
        this.currentDate = newsListData1[0].currentDate;
        this.nowReportInfoLabel = newsListData1[0].nowReportInfo;
      } else {
        this.prevDate = newsListData2[0].prevDate;
        this.preReportInfoLabel = newsListData2[0].preReportInfo;
        this.currentDate = newsListData1[0].currentDate;
        this.nowReportInfoLabel = newsListData1[0].nowReportInfo;
      }
      let op = compareReportInfo.eq({
        preReportInfo: this.preReportInfoLabel,
        preReportInfoLabel: this.nowReportInfoLabel,
      });
      this.preReportInfo = op.preReportInfo;
      this.nowReportInfo = op.preReportInfoLabel;
      let op1 = compareReportInfo.eq({
        preReportInfo: this.preReportInfoLabel,
        preReportInfoLabel: this.nowReportInfoLabel,
      });
      this.preReportInfo = op1.preReportInfo;
      this.nowReportInfo = op1.preReportInfoLabel;
    },
  },
};
</script>

<style>
</style>