<template>
  <div id="FormPlus">
    <el-form
      ref="ruleForm"
      :rules="rules"
      :inline="inline"
      :model="ruleForm"
      class="ruleForm"
      :label-width="labelWidth"
      :style="formStyle"
    >
      <template v-for="(item, index) in list">
        <template v-if="!item.type || item.type === 'input'">
          <el-form-item
            :key="index"
            :label="item.label"
            :prop="item.model"
            :required="item.required"
          >
            <el-input
              v-model.trim="ruleForm[item.model]"
              :clearable="item.clearable === undefined || item.clearable"
              filterable
              :placeholder="item.placeholder"
            />
          </el-form-item>
        </template>
        <template v-if="item.type === 'select'">
          <el-form-item
            :key="index"
            :label="item.label"
            :prop="item.model"
            :required="item.required"
          >
            <el-select
              :style="`width: ${formItemContentWidth}`"
              v-model.trim="ruleForm[item.model]"
              :clearable="item.clearable === undefined || item.clearable"
              filterable
              :placeholder="item.placeholder || ''"
            >
              <!-- 使用上文提到的 OptionPlus 组件 -->
              <OptionPlus
                v-for="(i, key) in item.options"
                :key="i[item.optionsKey] || key"
                :label="i[item.optionsLabel] || i.label"
                :value="i[item.optionsValue] || i.value"
                v-bind:width="formItemContentWidth"
              />
            </el-select>
          </el-form-item>
        </template>
        <template v-if="item.type === 'date-picker'">
          <el-form-item
            :key="index"
            :prop="item.model"
            :label="item.label"
            :required="item.required"
          >
            <el-date-picker
              v-model.trim="ruleForm[item.model]"
              :clearable="item.clearable === undefined || item.clearable"
              :type="item.pickerType"
              :placeholder="item.placeholder"
              :format="item.format"
              :value-format="item.valueFormat"
              :picker-options="item.pickerOptions"
            />
          </el-form-item>
        </template>
      </template>
      <slot />
    </el-form>
    <el-row>
      <el-col class="btn-container">
        <el-button class="el-icon-search" type="primary" @click="submitForm"
          >查询</el-button
        >
        <el-button class="el-icon-refresh" @click="resetForm">重置</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import OptionPlus from "./OptionPlus.vue";
export default {
  components: { OptionPlus },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    inline: {
      type: Boolean,
      default: true,
    },
    labelWidth: {
      type: String,
      default: "100px",
    },
    formItemWidth: {
      type: String,
      default: "400px",
    },
    formItemContentWidth: {
      type: String,
      default: "250",
    },
    rules: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      ruleForm: {},
    };
  },
  computed: {
    formStyle() {
      return {
        "--formItemWidth": this.formItemWidth,
        "--formItemContentWidth": this.formItemContentWidth,
      };
    },
  },
  watch: {
    list: {
      handler(list) {
        this.handleList(list);
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    // 所填写数据
    submitForm() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          const exportData = { ...this.ruleForm };
          this.$emit("submitForm", exportData);
        } else {
          return false;
        }
      });
    },
    // 默认清空所填写数据
    resetForm() {
      this.$refs.ruleForm.resetFields();
      this.handleList(this.list);
      this.$emit("resetForm");
    },
    handleList(list) {
      for (let i = 0; i < list.length; i++) {
        const formitem = list[i];
        const { model } = formitem;
        this.$set(this.ruleForm, model, "");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#FormPlus {
  .ruleForm {
    width: 100%;
    ::v-deep.el-form-item {
      width: var(--formItemWidth);
    }
    ::v-deep.el-form-item__content {
      width: var(--formItemContentWidth);
    }
    ::v-deep.el-form-item__content .el-date-editor,
    .el-input {
      width: var(--formItemContentWidth);
    }
  }
  .btn-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
}
</style>
