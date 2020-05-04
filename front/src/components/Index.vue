<template>
  <el-container align="center">
    <el-header>{{$t('message.app_name')}}</el-header>
    <el-main>
      <el-row>
        <el-button type="primary" round @click="openLoginDialog" icon="el-icon-message">{{$t('message.index.login')}}</el-button>
      </el-row>
      <el-row>
        <el-button type="primary" round @click="goToRegister" icon="el-icon-edit">{{$t('message.index.register')}}</el-button>
      </el-row>
      <login-dialog ref="loginRef" :dialogVisible="loginDilaogVisible" @dialogClose="loginDialogClose" @goToRegister="loginToRegister"></login-dialog>
      <register-dialog ref="registerRef" :dialogVisible="registerDilaogVisible" @dialogClose="registerDialogClose"></register-dialog>
    </el-main>
  </el-container>
</template>

<script>
import LoginDialog from '../views/LoginDialog'
import RegisterDialog from '../views/RegisterDialog'

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
    RegisterDialog
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  text-align: center;
  line-height: 60px;
}
.el-row {
  margin-top: 40px;
}
.el-button {
  width: 180px;
}
</style>
