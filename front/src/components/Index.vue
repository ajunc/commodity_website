<template>
  <el-container align="center">
    <el-header>{{$t('message.app_name')}}</el-header>
    <el-main>
      <el-row>
        <el-button type="primary" round @click="goToLogin" icon="el-icon-message">{{$t('message.index.login')}}</el-button>
      </el-row>
      <el-row>
        <el-button type="primary" round @click="goToRegister" icon="el-icon-edit">{{$t('message.index.register')}}</el-button>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  methods: {
    goToLogin: function () {
      this.$router.push({name: 'login'})
    },
    goToRegister: function () {
      this.$router.push({name: 'register'})
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
