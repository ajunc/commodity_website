<template>
  <el-container>
    <el-header>{{$t('message.login.login')}}</el-header>
    <el-main>
      <el-form ref="form" :model="form" method="post" novalidate="true">
        <el-row>
          <el-input ref="accountRef" v-model="form.account" :placeholder="account_placehoder"></el-input>
        </el-row>
        <el-row>
          <el-input ref="passwordRef" v-model="form.password" :placeholder="psw_placehoder" show-password></el-input>
        </el-row>
        <el-row>
          <el-button type="primary" round @click="login">{{$t('message.login.login')}}</el-button>
        </el-row>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import httpUtils from '../http/http_utils'

export default {
  data () {
    return {
      account_placehoder: this.$t('message.login.account_placeholder'),
      psw_placehoder: this.$t('message.login.psw_placeholder'),
      form: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    validAccount: function (account) {
      return this.validEmail(account) || this.validPhone(account)
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    validPhone: function (phone) {
      var re = /^(13[0-9]{9})|(15[0-9]{9})|(17[0-9]{9})|(18[0-9]{9})|(19[0-9]{9})$/
      return re.test(phone)
    },
    login: function () {
      if (this.form.account === undefined || this.form.account.length <= 0) {
        this.$refs.accountRef.focus()
        alert(this.$t('message.login.account_empty'))
        return
      }
      // check password length
      if (this.form.password === undefined || this.form.password.length <= 0) {
        this.$refs.passwordRef.focus()
        alert(this.$t('message.login.password_empty'))
      }
      // check account format
      if (!this.validAccount(this.form.account)) {
        alert(this.$t('message.login.account_format_error'))
        return
      }
      // login
      httpUtils.login(this.form)
        .then(res => {
          console.log(`response:${res}`)
        })
        .catch(e => {
          console.log(`response error:${e}`)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row {
  margin: 40px;
}
.el-input {
  width: 320px;
}
.el-button {
  width: 320px;
}
</style>
