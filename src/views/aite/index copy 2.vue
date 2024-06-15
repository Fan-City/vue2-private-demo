<template>
  <!-- <at :members="members" name-key="name" class="11111aa">
    <template slot="item" slot-scope="s">
      <span v-text="s.item.name"></span>
    </template>
    <div class="editor" contenteditable v-html="html"></div>
  </at> -->
  <at-ta :members="members" v-model="html" name-key="name" value="name" class="myAt">
    <textarea class="your-editor"></textarea>
  </at-ta>
</template>

<script>
// import At from "vue-at";
import AtTa from 'vue-at/dist/vue-at-textarea'

export default {
  components: { AtTa },
  data() {
    return {
      members: [
        {
          avatar: "https://randomuser.me/api/portraits/men/2.jpg",
          name: "myrtie.green",
        },
        {
          avatar: "https://randomuser.me/api/portraits/men/8.jpg",
          name: "椿木",
        },
      ],
      html: ''
    };
  },
  watch: {
    html(val) {
      console.log(val)
    }
  }
};
</script>

<style lang="scss">
.myAt.atwho-wrap {
  .atwho-panel {
    .atwho-view {
      top: 21px;
      bottom: auto;
    }
  }
}
// ::v-deep .atwho-view {
//   top: 21px;
// }
</style>
