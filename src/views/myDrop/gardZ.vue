<template>
  <div class="container">
    <div class="header">
      <el-button @click="generateData(500)">500⾏</el-button>
      <el-button @click="generateData(1000)">1000⾏</el-button>
    </div>
    <div class="list-column-wrapper" ref="listWrap" @scroll="onScroll">
      <div
        class="scroll-wrapper"
        ref="list"
        :style="`height: ${allRows.length * 48}px; width: '1px;'`"
      ></div>
      <el-table :data="tableData" ref="tableBox" v-loading="loading">
        <el-table-column
          v-for="col in columnLength"
          :key="col"
          :prop="col + ''"
          :label="`第${col}列`"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "virtual-vertical-scroll",
  data() {
    return {
      loading: false,
      tableData: [],
      allRows: [],
      columnLength: 5,
      startRow: 0,
      endRow: 10,
    };
  },
  mounted() {
    // this.$refs.tableBox.style.height = "528px";
  },
  methods: {
    calcRows(list) {
      console.log("startRow", this.startRow);
      console.log("endRow", this.endRow);
      this.tableData = list.slice(this.startRow, this.endRow);
    },
    generateData(row) {
      this.loading = true;
      setTimeout(() => {
        const columns = [];
        for (let i = 0; i < row; i++) {
          const obj = {};
          for (let j = 0; j < this.columnLength; j++) {
            obj[j + 1] = `第${i + 1}⾏-第${j + 1}列`;
          }
          columns.push(obj);
        }
        this.loading = false;
        this.allRows = columns;
        this.calcRows(this.allRows);
      }, 500);
    },
    onScroll() {
      const scrollTop = this.$refs.listWrap.scrollTop;
      console.log(scrollTop);
      const newIndex = Math.floor(scrollTop / 48);
      if (newIndex !== this.startRow) {
        this.startRow = Math.floor(scrollTop / 48);
        this.endRow = this.startRow + 10;
        this.$refs.tableBox.$el.style.marginTop = `${scrollTop}px`;
        this.$refs.tableBox.$el.style.overflow = "visible";
        this.calcRows(this.allRows);
      }
      if (scrollTop === 0) {
        this.$refs.tableBox.$el.style.marginTop = `${scrollTop}px`;
      }
    },
  },
};
</script>
<style>
.container {
  padding: 20px;
}
.header {
  margin-bottom: 20px;
}
.list-column-wrapper .el-table__body-wrapper {
  overflow-y: hidden !important;
}
.list-column-wrapper {
  display: flex;
  overflow-y: auto;
  max-height: 528px;
}
</style>