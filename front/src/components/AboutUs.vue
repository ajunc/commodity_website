<template>
  <el-container direction="vertical">
    <header-view></header-view>
    <el-container>
      <el-aside>
        <el-button type="text" class="aside-item">{{$t('message.aboutus.company_introduce')}}</el-button>
        <div class="aside-divider"></div>
        <el-button type="text" class="aside-item">{{$t('message.aboutus.company_team')}}</el-button>
        <div class="aside-divider"></div>
        <el-button type="text" class="aside-item">{{$t('message.aboutus.company_time_line')}}</el-button>
        <div class="aside-divider"></div>
        <el-button type="text" class="aside-item">{{$t('message.aboutus.company_privacy')}}</el-button>
        <div class="aside-divider"></div>
        <el-button type="text" class="aside-item">{{$t('message.aboutus.company_employment')}}</el-button>
      </el-aside>
      <el-main>
        <!-- TODO 内容待填充-->
      </el-main>
    </el-container>
    <footer-view></footer-view>
  </el-container>
</template>
<script>
import HeaderView from '../views/HeaderView'
import FooterView from '../views/FooterView'

export default {
  components: {
    HeaderView,
    FooterView
  },
  methods: {}
}
</script>
<style scoped>
.el-aside {
  margin-top: 40px;
  margin-left: 20px;
  margin-right: 20px;
}
.aside-divider {
  height: 1px;
}
.aside-item {
  height: 60px;
  border: 10px;
  width: 100%;
  text-align: center;
  border-radius: 0px;
  border-color: aqua;
  text-align: center;
  background-color: aliceblue;
}
.el-main {
  min-height: 500px;
  margin-top: 20px;
}
</style>
