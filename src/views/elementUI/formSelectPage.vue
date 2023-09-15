<template>
  <FormPlus :list="formList" @submitForm="searchPage" @resetForm="resetForm" />
</template>

<script>
import FormPlus from "./components/FormPlus.vue";
export default {
  components: {
    FormPlus,
  },
  data() {
    return {
      formList: [
        { label: "编号", model: "applyNumber", placeholder: "请输入编号" },
        { label: "名称", model: "name", placeholder: "请输入名称" },
        {
          type: "date-picker",
          label: "开始时间",
          model: "startTime",
          valueFormat: "yyyy-MM-dd HH:mm:ss",
          placeholder: "请选择开始时间",
        },
        {
          type: "select",
          label: "状态",
          model: "status",
          placeholder: "请选择状态",
          options: [
            {
              value: "选项1",
              label: "黄金糕",
            },
            {
              value: "选项2",
              label: "双皮奶特别好吃，以顺德的最出名，推荐尝试",
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
      ],
    };
  },
  methods: {
    // 可以取到子组件传递过来的数据
    searchPage(ruleForm) {
      console.log(ruleForm, "ruleForm");
    },
    resetForm() {},
  },
};
</script>
