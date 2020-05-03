<template>
  <el-container>
    <el-header>{{$t('message.login.login')}}</el-header>
    <el-main>
      <el-row align="center">
        <el-input v-model="account" :placeholder="account_placehoder"></el-input>
      </el-row>
      <el-row>
        <el-input v-model="password" :placeholder="psw_placehoder" show-password></el-input>
      </el-row>
      <el-row>
        <el-button type="primary" round @click="register">{{$t('message.login.login')}}</el-button>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      account: '',
      account_placehoder: this.$t('message.login.account_placeholder'),
      password: '',
      psw_placehoder: this.$t('message.login.psw_placeholder')
    }
  },
  methods: {
    register: function () {
      console.log('register')
      // check format
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
