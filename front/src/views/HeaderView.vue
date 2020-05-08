<template>
  <el-row class="header-content" type="flex" align="middle" justify="center" :gutter="20">
    <el-col :span="3">
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
      <el-link class="header-link-item" :underline="false">Benifest</el-link>
    </el-col>
    <el-col :span="3">
      <el-link class="header-link-item" :underline="false"
        >How it Works</el-link
      >
    </el-col>
    <el-col :span="2">
      <el-link class="header-link-item" :underline="false">App</el-link>
    </el-col>
    <el-col :span="2">
      <el-link class="header-link-item" :underline="false">Reviews</el-link>
    </el-col>
    <el-col :span="2">
      <el-link class="header-link-item" :underline="false">Helper</el-link>
    </el-col>
    <el-col :span="3">
      <el-button type="success" round>Shopping Now</el-button>
    </el-col>
    <el-col :span="2" style="margin-left:-10px">
      <el-tooltip class="header-lang-tooltip">
        <div slot="content">
          <el-button
            class="header-lang-item"
            type="text"
            icon="el-icon-search"
            @click="changeLanguage('zh')"
            >China</el-button
          >
          <br />
          <el-button
            class="header-lang-item"
            type="text"
            icon="el-icon-search"
            @click="changeLanguage('en')"
            >USA</el-button
          >
        </div>
        <el-button type="text" icon="el-icon-search">{{currentLang}}</el-button>
      </el-tooltip>
    </el-col>
  </el-row>
</template>
<script>
import i18n from '../i18n/i18n'
export default {
  data () {
    return {
      currentLang: this.getLanguageName(i18n.locale)
    }
  },
  methods: {
    getLanguageName: function (lang) {
      if (lang === 'zh') {
        return 'China'
      }
      if (lang === 'en') {
        return 'USA'
      }
    },
    goIndexPage: function () {
      console.log('goIndexPage')
    },
    changeLanguage: function (lang) {
      console.log('changeLanguge:' + lang)
      if (lang) {
        this.currentLang = this.getLanguageName(lang)
        i18n.locale = lang
        localStorage.local = lang
      }
    }
  }
}
</script>
<style scoped>
.header-content {
  width: 100%;
  height: 80px;
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
</style>
