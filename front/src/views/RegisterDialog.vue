<template>
   <el-dialog :title="register_title" :visible.sync="openDialog" @close="dialogClose">
    <el-main>
      <el-form ref="form" :model="form" method="post" novalidate="true">
        <el-row style="margin-top:0px" type="flex" justify="center" align="middle">
          <el-col :span="10">
            <el-input ref="nicknameRef" v-model="form.nickname" :placeholder="nickname_placehoder"></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="10">
            <el-input ref="accountRef" v-model="form.account" :placeholder="account_placehoder"></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="10">
            <el-input
              ref="passwordRef"
              v-model="form.password"
              :placeholder="psw_placeholder"
              show-password
            ></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle" class="last-child">
          <el-col :span="10">
            <el-button style="width:100%" type="primary" round @click="register">{{$t('message.register.register')}}</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-main>
  </el-dialog>
</template>

<script>
import httpUtils from '../http/http_utils'
import formatUtils from '../utils/format_utils'

export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      openDialog: this.dialogVisible,
      register_title: this.$t('message.register.register'),
      nickname_placehoder: this.$t('message.register.account_nickname_placeholder'),
      account_placehoder: this.$t('message.register.account_placeholder'),
      psw_placeholder: this.$t('message.register.psw_placeholder'),
      form: {
        nickname: '',
        account: '',
        password: '',
        verifyCode: ''
      }
    }
  },
  watch: {
    dialogVisible (val) {
      this.openDialog = val
      // fix: 切换语言文本不更新问题
      if (this.openDialog) {
        this.register_title = this.$t('message.register.register')
        this.nickname_placehoder = this.$t('message.register.account_nickname_placeholder')
        this.account_placehoder = this.$t('message.register.account_placeholder')
        this.psw_placeholder = this.$t('message.register.psw_placeholder')
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
    register: function () {
      // check account nickname length
      if (this.form.nickname === undefined || this.form.nickname.length <= 0) {
        this.$refs.nicknameRef.focus()
        this.showErrorMessage(this.$t('message.register.nickname_empty'))
        return
      }
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
        this.$refs.nicknameRef.focus()
        this.showErrorMessage(this.$t('message.login.account_format_error'))
        return
      }
      // register
      httpUtils
        .register(this.form)
        .then(res => {
          if (res.status === 200) {
            // register success
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
        nickname: '',
        account: '',
        password: '',
        verifyCode: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row {
  margin-top: 32px;
}
.last-child {
  margin-bottom: -20px;
}
</style>
