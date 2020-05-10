<template>
  <el-container direction="vertical">
    <header-view></header-view>
    <el-container
      style="height:900px;"
      direction="vertical"
    >
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
