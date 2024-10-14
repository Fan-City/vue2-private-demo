<template>
  <div class="timeLine-wapper">
    <div class="time-line-container">
      <div
        class="icon-con"
      >
        <i class="el-icon-d-arrow-left"></i>
      </div>
      <div class="time-line-content">
        
        <div
          v-for="(item, index) in timeList"
          :key="index"
          class="line-item"
          :style="`background: ${item.flag?'white':'#fdfdfd00'};`"
        >
          <el-tooltip
            v-if="item.flag"
            :content="item.name"
          >
            <div style="height:100%;width:100%;">

            </div>
          </el-tooltip>
        </div>
      </div>
      <div
        class="icon-con"
      >
        <i class="el-icon-d-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeList: [
        {name: '2024-01-01', flag: true},
        {name: '2024-01-02', flag: false},
        {name: '2024-01-03', flag: false},
        {name: '2024-01-04', flag: true},
        {name: '2024-01-05', flag: false},
        {name: '2024-01-06', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: true},
        {name: '2024-01-07', flag: false},
        {name: '2024-01-07', flag: false},
      ]
    }
  }
}
</script>

<style lang="scss">
.timeLine-wapper {
  .time-line-container {
    width: 70%;
    margin: 20px auto;
    height: 40px;
    display: flex;
    border: 1px solid #c8c8c8;
    .icon-con {
      height: 20px;
      width: 25px;
      text-align: center;
      margin: auto 8px;
      font-size: 20px;
      line-height: 20px;
      color: #409eff;
      cursor: pointer;
      transition: .3s;
      &:hover {
        color: #198cff;
      }
    }

    .time-line-content {
      flex: 1;
      height: 20px;
      margin: auto 8px;
      border-radius: 5px;
      border: 1px solid #e6e6e6;
      background: #409eff;
      display: flex;
      .line-item {
        height: 100%;
        flex: 1;
      }
    }
  }
}
</style>