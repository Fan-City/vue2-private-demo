<template>
  <div>
    <div class="code-container" ref="container"></div>
  </div>
</template>
 
<script>
// import "./icon/iconfont.css";
import * as monaco from "monaco-editor";
// import vCompletion from "./sql.js"; //语法提示文件
export default {
  name: "codeEditor",
  props: {
    opts: {
      type: Object,
      default() {
        return {
          language: "java", // shell、sql、python
          readOnly: false, // 不能编辑
        };
      },
    },
    value: {
      type: String,
      default: "",
    },
  },
  watch: {
    value: {
      handler(n) {
        if (this.showInit) {
          //初次传值初始化一次
          this.init();
          this.showInit = false;
        }
        this.monacoInstance.setValue(n); //剩余全部更新内容
      },
      deep: true,
    },
  },
  data() {
    return {
      monacoInstance: null,
      provider: null,
      hints: [],
      color: null,
      showInit: true,
    };
  },
  // created() {
  //   this.init();
  // },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.dispose();
  },

  methods: {
    cloneDeep(suggestions) {
      return JSON.parse(JSON.stringify(suggestions));
    },
    dispose() {
      if (this.monacoInstance) {
        if (this.monacoInstance.getModel()) {
          this.monacoInstance.getModel().dispose();
        }
        this.monacoInstance.dispose();
        this.monacoInstance = null;
        if (this.provider) {
          this.provider.dispose();
          this.color.dispose();
          this.provider = null;
        }
      }
    },
    init() {
      let that = this;
      this.dispose();
      this.provider = monaco.languages.registerCompletionItemProvider("sql", {
        provideCompletionItems(model, position) {
          return {
            suggestions: {}, //自定义语法提示，代码补全
          };
        },
        triggerCharacters: ["."], //输入点可触发代码提示
      });
      //自定义语法高亮
      this.color = monaco.languages.setMonarchTokensProvider("sql", {
        ignoreCase: true,
        tokenizer: {
          //需要什么颜色，就在里面用正则匹配
          root: [
            [
              /currentUser|#@|RsOk|#string|#switch|#case|selectSql|uuid|addOrderBy|addConditionRequired|countSql|addGroupBy|currentDateTime|addFieldExist|formData|simplePage|RsJson|[@]|RsJsonData|Local|select|#set|#include|#render|#end|#for|#if|#else|#elseif|from|where|addField|addConditionExist|table|SqlUtil|GROUP_CONCAT|BY|AND|ADD|Data|page|IF|as|SUM|MAX|min|AVG|COUNT|ROUND|LEFT|JOIN/,
              { token: "keyword" },
            ], //蓝色
            [
              /[+]|[-]|[*]|[/]|[%]|[>]|[<]|[=]|[!]|[:]|[&&]|[||]/,
              { token: "string" },
            ], //红色
            [/'.*?'|".*?"/, { token: "string.escape" }], //橙色
            [/#--.*?\--#/, { token: "comment" }], //绿色
            [/null/, { token: "regexp" }], //粉色
            [/[{]|[}]/, { token: "type" }], //青色
            // [/[\u4e00-\u9fa5]/, { token: 'predefined' }],//亮粉色
            // [/''/, { token: 'invalid' }],//红色
            // [/[\u4e00-\u9fa5]/, { token: 'number.binary' }],//浅绿
            [/(?!.*[a-zA-Z])[0-9]/, { token: "number.hex" }], //浅绿
            [/[(]|[)]/, { token: "number.octal" }], //浅绿
            // [/[\u4e00-\u9fa5]/, { token: 'number.float' }],//浅绿
          ],
        },
      });
      // 初始化编辑器实例
      this.monacoInstance = monaco.editor.create(this.$refs["container"], {
        value: this.value,
        theme: "vs-dark",
        autoIndex: true,
        ...this.opts,
      });
      // 监听编辑器content变化事件
      this.monacoInstance.onDidChangeModelContent(() => {
        this.$emit("input", this.monacoInstance.getValue());
      });
    },
  },
};
</script>
<style lang="scss" scope>
.code-container {
  width: 100%;
  height: 500px;
  overflow: hidden;
  border: 1px solid #eaeaea;
  .monaco-editor .scroll-decoration {
    box-shadow: none;
  }
}
</style>