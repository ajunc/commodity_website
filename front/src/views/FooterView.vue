<template>
  <el-container direction="vertical" class="footer-content">
    <el-row>
      <div class="footer-divider"></div>
    </el-row>
    <el-row :gutter="20" style="margin-top:10px">
      <el-col :offset="4" :span="2">
        <el-link class="footer-link-text" href="/about" :underline="false">{{
          $t("message.footer.about")
        }}</el-link>
      </el-col>
      <el-col :offset="3" :span="2">
        <el-link class="footer-link-text" href="/contact" :underline="false">{{
          $t("message.footer.contact")
        }}</el-link>
      </el-col>
      <el-col :offset="3" :span="2">
        <el-link class="footer-link-text" href="/blog" :underline="false">{{
          $t("message.footer.blog")
        }}</el-link>
      </el-col>
      <el-col :offset="2" :span="3">
        <el-link class="footer-link-text" href="/privacy" :underline="false">{{
          $t("message.footer.privacy")
        }}</el-link>
      </el-col>
    </el-row>
    <el-row tag="div" style="margin-top:90px"
      >© All rights reserved 2020</el-row
    >
    <el-backtop targe=".page-component__scroll .el-scrollbar__wrap">
    </el-backtop>
  </el-container>
</template>

<script>
export default {
  methods: {
    onClickAboutUs: function () {
      console.log('click about us')
      this.$router.push('/aboutus')
    },
    onClickConnectUs: function () {
      console.log('click connect us')
    }
  }
}
</script>

<style scoped>
.footer-divider {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  height: 1px;
}
.footer-content {
  width: 100%;
  height: 180px;
}
.footer-link-text {
  color: #909399;
  font-size: 16px;
}
.el-col {
  height: 60px;
  text-align: center;
}
.el-link {
  width: 100%;
  height: 100%;
}
</style>
