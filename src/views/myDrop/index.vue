<template>
  <div class="myDrop-page">
    <div class="tool-wapper">
      <div
        draggable="true"
        data-effect="copy"
        :style="`background: rgb(${Math.random() * 256 +',' +Math.random() * 256 +',' +Math.random() * 256});`"
        class="tool-item"
      >
        工具1
      </div>
      <div
        draggable="true"
        data-effect="copy"
        :style="`background: rgb(${Math.random() * 256 +',' +Math.random() * 256 +',' +Math.random() * 256});`"
        class="tool-item"
      >
        工具2
      </div>
    </div>
    <div class="table-wapper">
      <thead>
        <tr>
          <th rowspan="2">姓名</th>
          <th colspan="2">个人信息</th>
        </tr>
        <tr>
          <th>性别</th>
          <th>年龄</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>张三</td>
          <td data-drop="true"></td>
          <td data-drop="true"></td>
        </tr>
        <tr>
          <td>李四</td>
          <td data-drop="true"></td>
          <td data-drop="true"></td>
        </tr>
      </tbody>
    </div>
  </div>
</template>

<script>
import InitDrag from "./js/drag.js";
export default {
  data() {
    return {
      dragTool: null,
    };
  },
  mounted() {
    this.dragTool = new InitDrag(".myDrop-page");
    this.dragTool.init();
  },
};
</script>

<style lang="scss" scoped>
.myDrop-page {
  height: 100%;
  display: flex;
  overflow: hidden;
  .tool-wapper {
    width: 100px;
    // height: 100%;
    margin-right: 10px;
    background: rgb(239, 239, 239);
    // padding: 5px;
    .tool-item {
      margin: 0 8px;
      margin-bottom: 8px;
      line-height: 28px;
      text-align: center;
      color: #ffffff;
      cursor: pointer;
      &:last-child {
        margin-bottom: 0;
      }
      &:first-child {
        margin-top: 8px;
      }
    }
  }
  .table-wapper {
    height: 100%;
    flex: 1;

    table {
      border-collapse: separate;
      border-top: 1px solid #dfe6ec;
      border-left: 1px solid #dfe6ec;
    }
    thead tr th {
      background-color: #f8f8f9;
      padding: 6px;
      text-align: center;
      border-bottom: 1px solid #dfe6ec;
      border-right: 1px solid #dfe6ec;
    }
    tbody tr td {
      padding: 6px;
      text-align: center;
      height: 34px; //设置单元格最小高度
      width: 150px;
      border-bottom: 1px solid #dfe6ec;
      border-right: 1px solid #dfe6ec;
      &.droped-td {
        background: #e3eef7;
      }
    }
  }
}
</style>
