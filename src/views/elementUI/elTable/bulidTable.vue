<template>
  <div>
    <el-button @click="aaaa()">aaaaaa</el-button>
    <el-table :data="tableDateTest" style="width: 100%">
      <!-- 循环单元 -->
      <template v-for="(dayuan, index) in tableTest">
        <el-table-column :label="dayuan.danyuanName" :key="index">
          <!-- 循环楼层房间号 -->
          <template v-for="(haoma, index2) in dayuan.loucengFangjianhao">
            <!-- 单独列，只在第一列显示 start -->
            <el-table-column
              class="fangjian-louceng"
              sortable
              prop="loucenghao"
              v-if="index == 0 && index2 == 0"
              :key="'loucenghao_' + index + '_' + index2"
            >
              <template slot="header">
                <span>楼层\房间</span>
              </template>
              <template slot-scope="scope">
                <span> {{ scope.row.loucenghao }} 楼 </span>
              </template>
            </el-table-column>
            <!-- 单独列，只在第一列显示 end -->

            <!-- 楼层房间号对应列 -->
            <el-table-column
              :prop="haoma.prod"
              :label="haoma.tongyiBianma"
              :key="'fangjian_' + index + '_' + index2"
            >
              <template slot-scope="scope">
                <div
                  :class="[
                    'td-item',
                    scope.row[`${haoma.prod + '_status'}`] == 1
                      ? 'bg-shoukong'
                      : scope.row[`${haoma.prod + '_status'}`] == 2
                      ? 'bg-qianyue'
                      : scope.row[`${haoma.prod + '_status'}`] == 3
                      ? 'bg-rengou'
                      : '',
                  ]"
                >
                  {{ scope.row[`${haoma.prod}`] }}
                </div>
              </template>
            </el-table-column>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <div style="width: 200px;">
      神里绫华护理费啦神里绫华护理费啦神里绫华护理费啦神里绫华护理费啦神里绫华护理费啦神里绫华护理费啦
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableTest: [],
      tableDateTest: [],
    };
  },
  created() {
    this.aaaa();
  },
  methods: {
    aaaa: function () {
      this.tableTest = [
        {
          danyuanName: "4单元",
          danyuanCode: 4,
          loucengFangjianhao: [
            {
              tongyiBianmaCode: "1",
              prod: "haoma_1",
              tongyiBianma: "1",
            },
            {
              tongyiBianmaCode: "2",
              prod: "haoma_2",
              tongyiBianma: "2",
            },
          ],
        },
        {
          danyuanName: "3单元",
          danyuanCode: 3,
          loucengFangjianhao: [
            {
              tongyiBianmaCode: "1",
              prod: "haoma_3",
              tongyiBianma: "1",
            },
            {
              tongyiBianmaCode: "2",
              prod: "haoma_4",
              tongyiBianma: "2",
            },
          ],
        },
        {
          danyuanName: "2单元",
          danyuanCode: "2",
          loucengFangjianhao: [
            {
              tongyiBianmaCode: "1",
              prod: "haoma_5",
              tongyiBianma: "1",
            },
            {
              tongyiBianmaCode: "2",
              prod: "haoma_6",
              tongyiBianma: "2",
            },
          ],
        },
        {
          danyuanName: "1单元",
          danyuanCode: "1",
          loucengFangjianhao: [
            {
              tongyiBianmaCode: "1",
              prod: "haoma_7",
              tongyiBianma: "1",
            },
            {
              tongyiBianmaCode: "2",
              prod: "haoma_8",
              tongyiBianma: "2",
            },
          ],
        },
      ];
      this.tableDateTest = [
        {
          haoma_2: "102",
          haoma_1: "101",
          haoma_4: "102",
          haoma_1_status: "1",
          haoma_2_status: "1",
          haoma_3: "101",
          haoma_4_status: "1",
          haoma_5_status: "1",
          haoma_3_status: "1",
          haoma_6_status: "1",
          haoma_8_status: 3,
          haoma_7_status: 3,
          loucenghao: "1",
          haoma_6: "102",
          haoma_5: "101",
          loucengCode: "1",
          haoma_8: "102",
          haoma_7: "101",
        },
        {
          haoma_2: "202",
          haoma_1: "201",
          haoma_4: "202",
          haoma_1_status: "1",
          haoma_2_status: "1",
          haoma_3: "201",
          haoma_4_status: "1",
          haoma_5_status: "1",
          haoma_3_status: "1",
          haoma_6_status: "1",
          haoma_8_status: 3,
          haoma_7_status: 3,
          loucenghao: "2",
          haoma_6: "202",
          haoma_5: "201",
          loucengCode: "2",
          haoma_8: "202",
          haoma_7: "201",
        },
        {
          haoma_2: "302",
          haoma_1: "301",
          haoma_4: "302",
          haoma_1_status: "1",
          haoma_2_status: "1",
          haoma_3: "301",
          haoma_4_status: "1",
          haoma_5_status: "1",
          haoma_3_status: "1",
          haoma_6_status: "1",
          haoma_8_status: "1",
          haoma_7_status: "1",
          loucenghao: "3",
          haoma_6: "302",
          haoma_5: "301",
          loucengCode: "3",
          haoma_8: "302",
          haoma_7: "301",
        },
        {
          haoma_2: "402",
          haoma_1: "401",
          haoma_4: "402",
          haoma_1_status: "1",
          haoma_2_status: "1",
          haoma_3: "401",
          haoma_4_status: "1",
          haoma_5_status: "1",
          haoma_3_status: "1",
          haoma_6_status: "1",
          haoma_8_status: "1",
          haoma_7_status: "1",
          loucenghao: "4",
          haoma_6: "402",
          haoma_5: "401",
          loucengCode: "4",
          haoma_8: "402",
          haoma_7: "401",
        },
        {
          haoma_2: "502",
          haoma_1: "501",
          haoma_4: "502",
          haoma_1_status: "1",
          haoma_2_status: "1",
          haoma_3: "501",
          haoma_4_status: "1",
          haoma_5_status: "1",
          haoma_3_status: "1",
          haoma_6_status: "1",
          haoma_8_status: "1",
          haoma_7_status: "1",
          loucenghao: "5",
          haoma_6: "502",
          haoma_5: "501",
          loucengCode: "5",
          haoma_8: "502",
          haoma_7: "501",
        },
        {
          haoma_2: "602",
          haoma_1: "601",
          haoma_4: "602",
          haoma_1_status: "1",
          haoma_2_status: "1",
          haoma_3: "601",
          haoma_4_status: "1",
          haoma_5_status: "1",
          haoma_3_status: "1",
          haoma_6_status: "1",
          haoma_8_status: "1",
          haoma_7_status: "1",
          loucenghao: "6",
          haoma_6: "602",
          haoma_5: "601",
          loucengCode: "6",
          haoma_8: "602",
          haoma_7: "601",
        },
      ];
    },
  },
};
</script>
 <style rel="stylesheet/scss" lang="scss">
.el-table__row {
  td {
    margin: 0;
    padding: 0;
    div.cell {
      margin: 0;
      padding: 0;
      height: 40px;
      line-height: 40px;
    }
  }
}
.td-item {
  background: #ffffff;
}
.td-item.bg-shoukong {
  background: #dadada;
}
.td-item.bg-qianyue {
  background: #f81e1e;
}
.td-item.bg-rengou {
  background: #f7f313;
}
</style>