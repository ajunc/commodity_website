<template>
  <el-container direction="vertical">
    <header-view></header-view>
    <el-container
      style="height:900px;"
      direction="vertical"
    >
      <el-row style="margin-top:40px">
        <el-button
          style="width:180px"
          type="primary"
          round
          @click="openLoginDialog"
          icon="el-icon-message"
          >{{ $t("message.index.login") }}</el-button
        >
      </el-row>
      <el-row style="margin-top:40px;">
        <el-button
          style="width:180px"
          type="primary"
          round
          @click="goToRegister"
          icon="el-icon-edit"
          >{{ $t("message.index.register") }}</el-button
        >
      </el-row>
      <login-dialog
        ref="loginRef"
        :dialogVisible="loginDilaogVisible"
        @dialogClose="loginDialogClose"
        @goToRegister="loginToRegister"
      ></login-dialog>
      <register-dialog
        ref="registerRef"
        :dialogVisible="registerDilaogVisible"
        @dialogClose="registerDialogClose"
      ></register-dialog>
    </el-container>
    <footer-view></footer-view>
  </el-container>
</template>

<script>
import LoginDialog from '../views/LoginDialog'
import RegisterDialog from '../views/RegisterDialog'
import HeaderView from '../views/HeaderView'
import FooterView from '../views/FooterView'

export default {
  data () {
    return {
      register_title: this.$t('message.register.register'),
      loginDilaogVisible: false,
      registerDilaogVisible: false
    }
  },
  components: {
    LoginDialog,
    RegisterDialog,
    HeaderView,
    FooterView
  },
  methods: {
    openLoginDialog: function () {
      this.loginDilaogVisible = !this.$refs.loginRef.dialogVisible
    },
    goToRegister: function () {
      this.registerDilaogVisible = !this.$refs.registerRef.visible
    },
    loginDialogClose: function (result) {
      this.loginDilaogVisible = !result
    },
    registerDialogClose: function (result) {
      this.registerDilaogVisible = !result
    },
    loginToRegister: function () {
      this.loginDilaogVisible = false
      setTimeout(() => {
        this.registerDilaogVisible = !this.$refs.registerRef.visible
      }, 400)
    },
    goIndexPage: function () {
      console.log('goIndexPage')
    },
    changeLanguage: function (lang) {
      console.log('lang:' + lang)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
