<template>
  <div>
    <div>{{ diffDescription }}</div>
    <div ref="contrastDiv"></div>
  </div>
</template>

<script>
// import { codemirror } from "vue-codemirror";
require("codemirror/mode/javascript/javascript.js");
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/merge/merge.js";
import "codemirror/addon/merge/merge.css";
import DiffMatchPatch from "diff-match-patch";
window.diff_match_patch = DiffMatchPatch;
window.DIFF_DELETE = -1;
window.DIFF_INSERT = 1;
window.DIFF_EQUAL = 0;

export default {
  data() {
    return {
      leftText: "", //左侧展示文本
      rightText: "", //右侧展示文本
      diffDescription: "", //差异内容描述
    };
  },
  mounted() {
    this.prepareData();
    this.contrast();
  },
  methods: {
    prepareData() {
      for (let i = 0; i < 10; i++) {
        this.leftText += "a\n";
        this.rightText += "b\n";
      }
      for (let i = 0; i < 10; i++) {
        this.leftText += "a\n";
        this.rightText += "a\n";
      }
      for (let i = 0; i < 10; i++) {
        this.leftText += "abbbbbbbbbbfadsfasfasfasfasfadsfadsfds\n";
        this.rightText += "bweefdrrsxsssffasfsadfadsfadsfadsfasdfa\n";
      }
      for (let i = 0; i < 10; i++) {
        this.leftText += "bbb\n";
        this.rightText += "bbb\n";
      }
      for (let i = 0; i < 10; i++) {
        this.leftText += "xxxx\n";
      }
      for (let i = 0; i < 10; i++) {
        this.leftText += "bbb\n";
        this.rightText += "bbb\n";
      }
      for (let i = 0; i < 10; i++) {
        this.leftText += "a\n";
        this.rightText += "b\n";
      }
    },
    contrast() {
      this.$nextTick(() => {
        const target = this.$refs.contrastDiv;
        target.innerHTML = "";
        let difference = CodeMirror.MergeView(target, {
          value: this.leftText,
          originLeft: null,
          orig: this.rightText,
          lineNumbers: true,
          mode: "text/html",
          hightlightDifference: true,
          connect: "align",
          readOnly: true,
          theme: "dracula",
          smartIndent: true,
        });
        let diffCount = difference.right.chunks.length;
        console.log(diffCount);
        let description = "";
        if (diffCount === 0) {
          description = "左右文本内容一致";
        } else if (diffCount === 1) {
          description =
            "共1处差异，差异的开始行号为：" +
            (difference.right.chunks[0].origFrom + 1);
        } else {
          description = "共" + diffCount + "处差异，每处差异的开始行号为：";
          for (let i = 0; i < diffCount; i++) {
            description += difference.right.chunks[i].origFrom + 1;
            if (i !== diffCount - 1) {
              description += "、";
            }
          }
        }
        this.diffDescription = description;
      });
    },
  },
};
</script>

<style>
</style>