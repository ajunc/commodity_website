<template>
  <el-container direction="vertical">
    <header-view></header-view>
    <el-main>
      <el-row
        class="app_first_item"
        type="flex"
        direction="horizontal"
        style="padding-top:80px"
      >
        <el-col :offset="4" :span="6"><div>{{$t('message.appinfo.app_info')}}</div></el-col>
        <el-col :offset="4" :span="8">
          <el-col><div style="font-size:22px">{{$t('message.appinfo.install_app')}}</div></el-col>
          <el-col><div style="font-size:18px">{{$t('message.appinfo.install_channel')}}</div></el-col>
          <el-row
            style="margin-top:80px"
            justify="space-betwwen"
            align="middle"
            type="flex"
            direction="horizontal"
            :gutter="20"
          >
            <el-col :span="12">
              <el-image :src="appleStoreUrl" fit="fill" @click="goToAppleStore"> </el-image>
            </el-col>
            <el-col :span="12">
              <el-image :src="googlePlayUrl" fit="fill" @click="goToGooglePlay"> </el-image>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
       <el-row
        class="app_send_item"
        type="flex"
        direction="horizontal"
      >
       </el-row>
    </el-main>
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
  methods: {
    goToAppleStore: function () {
      this.$message({
        showClose: true,
        message: 'Please waiting for ...',
        type: 'info',
        duration: 2000
      })
    },
    goToGooglePlay: function () {
      this.$message({
        showClose: true,
        message: 'Please waiting for ...',
        type: 'info',
        duration: 2000
      })
    }
  },
  data () {
    return {
      appleStoreUrl: require('../assets/apple_store.png'),
      googlePlayUrl: require('../assets/google_play.png')
    }
  }
}
</script>
<style scoped>
.el-main {
  min-height: 500px;
}
.app_first_item {
  width:100%;
  min-height: 200px;
}
.app_send_item {
  width:100%;
  min-height: 200px;
  background-color: aliceblue;
}
</style>
