<template>
  <div class="select-style">
    <el-select
      ref="select_item"
      v-bind="$attrs"
      v-model="avalue"
      v-on="$listeners"
      :multiple="multiple"
      :clearable="clearable"
      :filterable="filterable"
      size="small"
      collapse-tags
      placeholder="请选择"
      :popper-append-to-body="false"
      :style="{ width: width + 'px;' }"
    >
      <i slot="prefix" :class="['el-input__icon', flag ? 'el-icon-zoom-in': 'el-icon-zoom-out']"></i>
      <el-option-group>
        <el-option value="checkListValue" disabled>
          <el-checkbox-group v-model="checkList">
            <div style="display: flex">
              <div style="flex: 1">
                <el-checkbox label="包含" @change="boxChange('包含')" />
              </div>
              <div style="flex: 1">
                <el-checkbox label="不包含" @change="boxChange('不包含')"/>
              </div>
            </div>
          </el-checkbox-group>
        </el-option>
      </el-option-group>
      <el-option-group>
        <el-option
          v-for="item in options"
          :key="item[optionsControl.value]"
          :label="item[optionsControl.label]"
          :value="item[optionsControl.value]"
        />
      </el-option-group>
    </el-select>
  </div>
</template>

<script>
export default {
  // 父组件 v-model 传参 / 函数
  model: {
    prop: "pValue",
    event: "change",
  },
  props: {
    // 组件宽度
    width: {
      type: Number,
      default: 300,
    },
    multiple: {
      type: Boolean,
      default: true,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    filterable: {
      type: Boolean,
      default: true,
    },
    // 数据
    options: {
      type: Array,
      default: () => { return [] }
    },
    // 数据key
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
      avalue: [],
      flag: true,
      checkList: ['包含']
    };
  },
  watch: {
    flag(val) {
      // 回调修改包含状态
      this.$emit('changeFlag', val)
    }
  },
  created() {
  },
  methods: {
    // 选择变化
    boxChange(type) {
      // 复选改单选
      this.checkList = [type]
      
      // 同步包含状态
      if (this.checkList && this.checkList.length > 0) {
        this.flag = this.checkList[0] === '包含'
      } else {
        this.flag = true;
      }
    }
  },
};
</script>

<style lang="scss">
.select-style {
  .el-select {
    .el-select__tags {
      width: auto !important;
      left: 26px;
      right: 26px;
      .el-select__input {
        margin-left: 5px;
      }
    }
  }
}
</style>