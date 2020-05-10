<template>
<el-container class="header-content" type="flex" direction="vertical">
  <el-row type="flex" align="middle" justify="center" :gutter="20">
    <el-col :span="2">
      <el-button type="text">侧标栏</el-button>
    </el-col>
    <el-col :span="4">
      <el-image
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        fit="fit"
        style="height:60px;width:120px"
        @click="goIndexPage"
      ></el-image>
    </el-col>
    <el-col :span="2">
      <el-link class="header-link-item" :underline="false">{{$t('message.header.benefits')}}</el-link>
    </el-col>
    <el-col :span="3">
      <el-link class="header-link-item" :underline="false">{{$t('message.header.introduce')}}</el-link
      >
    </el-col>
    <el-col :span="2">
      <el-link class="header-link-item" href="/appinfo" :underline="false">{{$t('message.header.appinfo')}}</el-link>
    </el-col>
    <el-col :span="2">
      <el-link class="header-link-item" :underline="false">{{$t('message.header.reviews')}}</el-link>
    </el-col>
    <el-col :span="2">
      <el-link class="header-link-item" :underline="false">{{$t('message.header.helper')}}</el-link>
    </el-col>
    <el-col :span="3">
      <el-button type="success" round>{{$t('message.header.shopping')}}</el-button>
    </el-col>
    <el-col :span="2" style="margin-left:-15px">
      <el-tooltip class="header-lang-tooltip">
        <div slot="content">
          <el-button
            class="header-lang-item"
            type="text"
            icon="el-icon-search"
            @click="changeLanguage('zh')"
            >{{$t('message.lang.zh')}}</el-button
          >
          <br />
          <el-button
            class="header-lang-item"
            type="text"
            icon="el-icon-search"
            @click="changeLanguage('en')"
            >{{$t('message.lang.en')}}</el-button
          >
        </div>
        <el-button type="text" icon="el-icon-search">{{currentLang}}</el-button>
      </el-tooltip>
    </el-col>
    <el-col :span="1">
      <el-image class="header-avatar" fit="fill" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" size="medium" @click="loginOrLogout"></el-image>
    </el-col>
  </el-row>
  <login-dialog ref="loginDialogRef"  :dialogVisible="loginDialogVisible"
        @dialogClose="loginDialogClose"
></login-dialog>
  <div class="header-divider"></div>
</el-container>
</template>
<script>
import i18n from '../i18n/i18n'
import LoginDialog from '../views/LoginDialog'

export default {
  data () {
    return {
      currentLang: this.getLanguageName(i18n.locale),
      loginDialogVisible: false
    }
  },
  components: {
    LoginDialog
  },
  methods: {
    getLanguageName: function (lang) {
      if (lang === 'zh') {
        return this.$t('message.lang.zh')
      }
      if (lang === 'en') {
        return this.$t('message.lang.en')
      }
    },
    goIndexPage: function () {
      console.log('goIndexPage')
      this.$router.push('/')
    },
    changeLanguage: function (lang) {
      console.log('changeLanguge:' + lang)
      if (lang) {
        i18n.locale = lang
        localStorage.local = lang
        this.currentLang = this.getLanguageName(lang)
      }
    },
    loginOrLogout: function () {
      // TODO 判断当前登录状态
      this.loginDialogVisible = !this.loginDialogVisible
    },
    loginDialogClose: function (result) {
      this.loginDialogVisible = !result
    }
  }
}
</script>
<style scoped>
.header-content {
  width: 100%;
  height: 81px;
  margin-top: -60px;
  margin-bottom: -20px;
}
.header-link-item {
  margin: 10px 10px;
  font-size: 16px;
}
.header-link-large-item {
  margin: 10px 10px;
  font-size: 16px;
}
.header-lang-tooltip {
  text-align: center;
  margin: 20px 20px;
}
.header-divider {
  box-shadow: 0 1px 2px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  height: 1px;
}
.header-avatar {
  width:40px;
  height:40px
}
</style>
