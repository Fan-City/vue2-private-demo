<template>
  <el-form
    ref="form"
    v-model="pForm"
    label-width="100px"
    label-position="left"
  >
    <el-form-item label="选择">
      <my-select
        v-model="pForm.pValue"
        :width="300"
        :multiple="multiple"
        :clearable="clearable"
        :filterable="filterable"
        :options="options"
        :optionsControl="optionsControl"
        @change="change"
        @changeFlag="changeFlag"
      />
    </el-form-item>
    <!-- <el-form-item>
      <el-button
        type="primary"
        size="small"
        @click="getValue()"
      >
        获取
      </el-button>
    </el-form-item> -->
  </el-form>
</template>

<script>
import MySelect from "./components/mySelect";
export default {
  components: {
    MySelect
  },
  props: {
    multiple: {
      type: Boolean,
      default: true
    },
    clearable: {
      type: Boolean,
      default: true
    },
    filterable: {
      type: Boolean,
      default: true
    },
    options: {
      type: Array,
      default: () => {
        return [
          {
            value: "选项1",
            label: "黄金糕",
          },
          {
            value: "选项2",
            label: "双皮奶",
          },
          {
            value: "选项3",
            label: "蚵仔煎",
          },
          {
            value: "选项4",
            label: "龙须面",
          },
          {
            value: "选项5",
            label: "北京烤鸭",
          }
        ]
      }
    },
    optionsControl: {
      type: Object,
      default: () => {
        return {
          value: 'value',
          label: 'label'
        }
      }
    }
  },
  data() {
    return {
      pForm: {
        pValue: null
      },
      includeFlag: true
    };
  },
  methods: {
    change() {
      this.getValue()
    },
    changeFlag(flag) {
      this.includeFlag = flag;
      this.getValue();
    },
    // 统一数据出口，根据后面实际情况调用父级方法。
    getValue() {
      const res = {
        ...this.pForm,
        includeFlag: this.includeFlag
      }
      console.log(res, 'getValue');
    }
  }
};
</script>
