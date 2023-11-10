<template>
  <div class="container">
    <div class="header">
      <el-button @click="gernateData(10, 500)">500列</el-button>
      <el-button @click="gernateData(10, 1000)">1000列</el-button>
    </div>
    <div class="listWrapper" ref="listWrap" @scroll="onScroll">
      <div
        class="scrollWraper"
        ref="list"
        :style="{ width: `${allColumns.length * 150}px`, height: '1px' }"
      ></div>
      <el-table
        border
        :data="tableData"
        ref="tableBox"
        v-loading="loading"
        force-scroll="horizontal"
      >
        <el-table-column
          v-for="col in virtualColumns"
          :key="col.key"
          :prop="col.key"
          :label="col.name"
          width="150"
          align="right"
          :formatter="formatCellThousand"
        />
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "index-home",
  data() {
    return {
      loading: false,
      tableData: [],
      allColumns: [],
      virtualColumns: [],
      startCol: 0,
      endCol: 20,
    };
  },
  methods: {
    generateColumns(num) {
      const columns = [];
      for (let i = 0; i < num; i++) {
        columns.push({
          key: `col${i}`,
          name: `列${i}`,
        });
      }
      this.allColumns = columns;
    },
    gernateData(rows, cols) {
      this.loading = true;
      setTimeout(() => {
        this.generateColumns(cols);
        const data = [];
        for (let row = 0; row < rows; row++) {
          const item = {};
          for (let i = 0; i < cols; i++) {
            item[`col${i}`] = `row${row}-col${i}`;
          }
          data.push(item);
        }
        this.tableData = data;
        this.loading = false;
        this.calcColumns();
      }, 500);
    },
    formatCellThousand(row, column, cellValue) {
      return "$:" + cellValue;
    },
    calcColumns() {
      this.virtualColumns = this.allColumns.slice(this.startCol, this.endCol);
    },
    onScroll() {
      const scrollLeft = this.$refs.listWrap.scrollLeft;
      console.log(scrollLeft);
      console.log(this.$refs.listWrap.scrollWidth);
      console.log(this.$refs.listWrap.clientWidth);
      const newIndex = Math.floor(scrollLeft / 150);
      if (newIndex !== this.startCol) {
        this.startCol = Math.floor(scrollLeft / 150);
        this.endCol = this.startCol + 20;
        this.$refs.tableBox.$el.style.marginLeft = `${scrollLeft}px`;
        this.calcColumns();
      }
      if (scrollLeft === 0) {
        this.$refs.tableBox.$el.style.marginLeft = `${scrollLeft}px`;
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
.listWrapper .el-table__body-wrapper {
  overflow-x: hidden !important;
}
.listWrapper {
  overflow-x: auto;
}
</style>