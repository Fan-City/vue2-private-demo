<template>
  <div>
    <textarea
      id="diffText1"
      name="text1"
      rows="12"
      cols="80"
      placeholder="text1"
    ></textarea>
    <textarea
      id="diffText2"
      name="text2"
      rows="12"
      cols="80"
      placeholder="text2"
    ></textarea>
    <div style="margin-bottom: 20px">
      <label for="diffline">Line based:</label>
      <input id="diffline" type="checkbox" name="line" value="line" />
      <button @click="diff()">show diffs!</button>
    </div>
    <div id="diffconsumed"></div>
    <p></p>
    <div id="diffresult" style="white-space: pre-wrap" v-html="diffHtml"></div>
  </div>
</template>

<script>
import "@/utils/diff.js";
export default {
  data() {
    return {
      diffHtml: "",
    };
  },
  methods: {
    diff() {
      var e = new DiffCompare(),
        t = document.getElementById("diffText1"),
        n = document.getElementById("diffText2"),
        d = document.getElementById("diffline"),
        m = document.getElementById("diffconsumed"),
        l = document.getElementById("diffresult"),
        u = e.diff(t.value, n.value, d.checked);
      (m.innerHTML = "diff耗时：" + e.timeConsumed + "ms<br>"),
        // l.innerHTML = e.prettyHtml(u),
        (this.diffHtml = this.toHtml(e.prettyHtml(u))),
        // this.diffHtml = e.prettyHtml(u),
        console.log(this.diffHtml);
    },
    // 转换结果中的转移标签。方便html展示
    toHtml(str) {
      var arrEntities = {
        lt: "<",
        gt: ">",
        nbsp: " ",
        amp: "&",
        quot: '"',
      };
      return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (all, t) {
        return arrEntities[t];
      });
    },
  },
};
</script>

<style>
</style>