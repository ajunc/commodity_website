<template>
    <el-container direction="vertical" class="footer-content">
          <el-row :gutter="20">
            <el-col  :offset="4" :span="2">
              <el-button type="text" class="footer-link-text" @click="onClickAboutUs">About us</el-button>
            </el-col>
            <el-col :offset="3" :span="2">
              <el-button type="text" class="footer-link-text" @click="onClickConnectUs">Connect us</el-button>
            </el-col>
            <el-col :offset="3" :span="2">
              <el-button type="text" class="footer-link-text">Blog</el-button>
            </el-col>
            <el-col :offset="3" :span="2">
              <el-button type="text" class="footer-link-text">Privacy/Terms of Use</el-button>
            </el-col>
          </el-row>
          <el-row tag="div" style="margin-top:100px">© All rights reserved 2020</el-row>
        </el-container>
</template>

<script>
export default {
  methods: {
    onClickAboutUs: function () {
      console.log('click about us')
    },
    onClickConnectUs: function () {
      console.log('click connect us')
    }
  }
}
</script>

<style scoped>
.footer-content {
    width: 100%;
    height: 180px;
}
.footer-link-text {
  color:#909399
}
</style>
