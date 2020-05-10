<template>
  <el-container>
  <el-dialog :title="login_title" :visible.sync="openDialog" @close="dialogClose">
    <el-form ref="form" :model="form" method="post" novalidate="true">
        <el-row style="margin-top:0px" type="flex" justify="center" align="middle">
          <el-col :span="10">
            <el-input ref="accountRef" v-model="form.account" :placeholder="account_placehoder"></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="10">
          <el-input
            ref="passwordRef"
            v-model="form.password"
            :placeholder="psw_placehoder"
            show-password
          ></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="10">
            <el-button type="primary" style="width:100%" round @click="login">{{$t('message.login.login')}}</el-button>
          </el-col>
        </el-row>
        <el-button style="margin-top:10px" type="text" round @click="goToRegister">{{$t('message.register.register')}}</el-button>
      </el-form>
  </el-dialog>
  <register-dialog :dialogVisible="registerDilaogVisible"
        @dialogClose="registerDialogClose"></register-dialog>
  </el-container>
</template>

<script>
import httpUtils from '../http/http_utils'
import formatUtils from '../utils/format_utils'
import RegisterDialog from '../views/RegisterDialog'

export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    RegisterDialog
  },
  data () {
    return {
      login_title: this.$t('message.login.login'),
      account_placehoder: this.$t('message.login.account_placeholder'),
      psw_placehoder: this.$t('message.login.psw_placeholder'),
      form: {
        account: '',
        password: ''
      },
      openDialog: this.dialogVisible,
      registerDilaogVisible: false
    }
  },
  watch: {
    dialogVisible (val) {
      this.openDialog = val
      // fix: 切换语言文本不更新问题
      if (this.openDialog) {
        this.login_title = this.$t('message.login.login')
        this.account_placehoder = this.$t('message.login.account_placeholder')
        this.psw_placehoder = this.$t('message.login.psw_placeholder')
      }
    }
  },
  methods: {
    showErrorMessage: function (msg) {
      if (msg) {
        this.$message({
          showClose: true,
          message: msg,
          type: 'error',
          duration: 2000
        })
      }
    },
    login: function () {
      // check account length
      if (this.form.account === undefined || this.form.account.length <= 0) {
        this.$refs.accountRef.focus()
        this.showErrorMessage(this.$t('message.login.account_empty'))
        return
      }
      // check password length
      if (this.form.password === undefined || this.form.password.length <= 0) {
        this.$refs.passwordRef.focus()
        this.showErrorMessage(this.$t('message.login.password_empty'))
        return
      }
      // check account format
      if (!formatUtils.validAccount(this.form.account)) {
        this.$refs.accountRef.focus()
        this.showErrorMessage(this.$t('message.login.account_format_error'))
        return
      }
      // login
      httpUtils
        .login(this.form)
        .then(res => {
          if (res.status === 200) {
            // login success
            this.$emit('dialogClose', true)
          }
        })
        .catch(e => {
          console.log(`response error:${e}`)
        })
    },
    dialogClose: function () {
      this.$emit('dialogClose', true)
      this.form = {
        account: '',
        password: ''
      }
    },
    goToRegister: function () {
      this.openDialog = false
      setTimeout(() => {
        this.registerDilaogVisible = !this.registerDilaogVisible
      }, 400)
    },
    registerDialogClose: function () {
      this.registerDilaogVisible = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row {
  margin-top: 40px
}
</style>
