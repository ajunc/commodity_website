<template>
  <el-container direction="vertical">
    <header-view></header-view>
    <el-container class="product-main" direction="vertical" :gutter="20">
      <el-row class="product-buy">
        <el-col :span="8" :offset="4">
          <el-carousel
            ref="productCarouselRef"
            class="product-image"
            :autoplay="false"
            arrow="always"
            indicator-position="out"
          >
            <el-carousel-item v-for="item in 6" :key="item">
              <div class="el-carousel-item">{{ item }}</div>
            </el-carousel-item>
          </el-carousel>
          <el-row class="product-image" :gutter="10">
            <el-col :span="4" v-for="item in 6" :key="item">
              <el-image
                @click="clickProductImg(item)"
                :class="'product-show-image' + (item % 2)"
                :src="require('../assets/logo.png')"
              >
              </el-image>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8" class="product-title">
          <h3>商品标题</h3>
          <h4>商品促销信息</h4>
        </el-col>
        <el-col :span="8" :offset="1">
          <el-col class="product-price">
            <el-row>
              <el-col :span="5" class="product-price-line">
                <div>价格</div>
              </el-col>
              <el-col :span="7" class="product-price-line" :offset="1">
                <div>￥3659</div>
              </el-col>
              <el-col :span="7" class="product-price-line">
                <div>[￥3659]</div>
              </el-col>
            </el-row>
            <el-row style="margin-top:10px">
              <el-col :span="5" class="product-price-line">
                <div>促销</div>
              </el-col>
              <el-col :span="7" class="product-price-line" :offset="1">
                <div>￥3659</div>
              </el-col>
              <el-col :span="7" class="product-price-line">
                <div>[￥3659]</div>
              </el-col>
            </el-row>
          </el-col>
          <el-col class="product-package">
            <el-row>
              <el-col :span="4">
                <div class="product-package-tips">选择版本</div>
              </el-col>
              <el-col :span="20" align="start" class="product-package-radio-group">
                <el-radio-group v-model="selectInfo">
                  <el-radio-button label="套餐一"></el-radio-button>
                  <el-radio-button label="套餐二"></el-radio-button>
                  <el-radio-button label="套餐三"></el-radio-button>
                  <el-radio-button label="套餐四"></el-radio-button>
                </el-radio-group>
              </el-col>
            </el-row>
          </el-col>
          <el-col class="product-added-service">
            <el-row>
              <el-col :span="4">
                <div class="product-added-service-tips">增值服务</div>
              </el-col>
              <el-col :span="20" align="start">
                <el-dropdown>
                  <span ref="addServiceTextRef" class="product-added-service-info"
                    >保修服务 ￥168<i
                      class="el-icon-arrow-down el-icon--right"
                    ></i
                  ></span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                      ><el-checkbox v-model="checked" @change="addedServiceChange"
                        >保修服务 ￥168</el-checkbox
                      ></el-dropdown-item
                    >
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
            </el-row>
          </el-col>
          <el-col class="product-buy-service">
            <el-row>
              <el-col align="start">
                <el-input-number
                  class="product-buy-input-num"
                  v-model="productNum"
                  @change="productNumChange"
                  :min="1"
                  label="购买件数"
                ></el-input-number>
                <el-button class="product-buy-btn" type="success">
                  加入购物车
                </el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-col>
      </el-row>
    </el-container>
    <footer-view></footer-view>
  </el-container>
</template>
<script>
import HeaderView from '../views/HeaderView'
import FooterView from '../views/FooterView'

export default {
  data () {
    return {
      selectInfo: '套餐一',
      checked: false,
      productNum: 1
    }
  },
  components: {
    HeaderView,
    FooterView
  },
  methods: {
    clickProductImg: function (index) {
      let itemIndex = index - 1
      console.log(index)
      this.$refs.productCarouselRef.setActiveItem(itemIndex)
    },
    productNumChange: function (num) {
      console.log(`product num change:${num}`)
      this.productNum = num
    },
    addedServiceChange: function (checked) {
      var addServiceClass = 'product-added-service-info'
      if (checked) {
        addServiceClass = 'product-added-service-info-checked'
      }
      this.$refs.addServiceTextRef.setAttribute('class', addServiceClass)
    }
  }
}
</script>
<style scoped>
.product-main {
  min-height: 500px;
}
.product-buy {
  margin-top: 20px;
}
.product-image {
  margin-top: 20px;
  margin-bottom: 20px;
}
.product-image el-carousel {
  height: 300px;
}
.product-show-image0 {
  height: 30px;
  width: 30px;
  background-color: #475669;
}
.product-show-image1 {
  height: 30px;
  width: 30px;
  background-color: #99a9bf;
}
.el-carousel__item div {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 300px;
}
.el-carousel-item {
  background-color: #99a9bf;
}
.product-title {
  margin-left: 16px;
  margin-top: 16px;
}
.product-price {
  background-color: #f5f5f5;
  padding-top: 16px;
  padding-bottom: 16px;
}
.product-price-line {
  width: 80px;
}
.product-price-line div {
  font-size: 16px;
  text-align: start;
  margin-left: 14px;
}
.product-package {
  margin-top: 12px;
}
.product-package-tips {
  line-height: 40px;
  font-size: 14px;
}
.product-package-radio-group {
  padding-left: 8px;
}
.product-added-service {
  margin-top: 12px;
}
.product-added-service-tips {
  line-height: 40px;
  font-size: 14px;
}
.product-added-service-info {
  font-size: 14px;
  line-height: 40px;
  margin-left: 8px;
}
.product-added-service-info-checked {
  font-size: 14px;
  line-height: 40px;
  margin-left: 6px;
  padding: 2px;
  border: 2px solid #67C23A;
}
.product-buy-service {
  margin-top: 14px;
}
.product-buy-input-num {
  width: 120px;
  margin-left: 10px;
}
.product-buy-btn {
  width: 140px;
  margin-left: 60px;
}
</style>
