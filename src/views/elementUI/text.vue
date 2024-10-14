<template>
  <div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="用户管理" name="first">
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
      </el-tab-pane>
      <el-tab-pane label="消息管理" name="third">
        <span slot="label">
          消息管理
          <el-badge :value="10" size class="item" style="top: 3px;"></el-badge>
        </span>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
  }
}
</script>

<style>

</style>