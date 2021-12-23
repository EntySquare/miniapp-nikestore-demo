<template>
  <div>
    <div>
      <router-view/>
    </div>
    <div :style="style.navigation"
         style="position: fixed;bottom: 0;width: 100%;height: 70px;color: #474747;padding-top: 10px;background-color: black;z-index: 3">

      <div :style="style.button" @click="goToHtml('/')" style="text-align: center">
        <img id="index_img" src="https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/index_icon_green.png"
             style="height: 32px;width: 32px" alt="">
        <div id="index_text" style="font-size: 10px;color: #5EDE99">首页</div>
      </div>
      <div :style="style.button" @click="goToHtml('broadcast')" style="text-align: center">
        <img id="broadcast_img" src="https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/broadcast_icon.png"
             style="height: 32px;width: 32px" alt="">
        <div id="broadcast_text" style="font-size: 10px;color: #BEBEBE">直播</div>
      </div>
      <div :style="style.button" @click="goToHtml('shopping')" style="text-align: center">
        <img id="shopping_img" src="https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/shopping_icon.png"
             style="height: 32px;width: 32px" alt="">
        <div id="shopping_text" style="font-size: 10px;color: #BEBEBE">购物车</div>
      </div>
      <div :style="style.button" @click="goToHtml('my')" style="text-align: center">
        <img id="my_img" src="https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/my_icon.png"
             style="height: 32px;width: 32px" alt="">
        <div id="my_text" style="font-size: 10px;color: #BEBEBE">我的</div>
      </div>
    </div>
  </div>

</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'

const style = {
  button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    // padding: '10px 10px',
    // border: '1px solid #333333',
    // margin: '0px 10px'
  },
  // changeRouter: {
  //   display: 'flex',
  //   marginTop: '20px',
  // },
  navigation: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    display: 'flex',
  }
}

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      style,
    }
  },
  mounted: function () {
    console.log("this.route.path");
  },
  methods: {
    //跳转
    goToHtml(str) {
      const index_text = document.getElementById('index_text');
      const broadcast_text = document.getElementById('broadcast_text');
      const shopping_text = document.getElementById('shopping_text');
      const my_text = document.getElementById('my_text');
      index_text.style.color = "#BEBEBE"
      broadcast_text.style.color = "#BEBEBE"
      shopping_text.style.color = "#BEBEBE"
      my_text.style.color = "#BEBEBE"

      const index_img = document.getElementById('index_img');
      const broadcast_img = document.getElementById('broadcast_img');
      const shopping_img = document.getElementById('shopping_img');
      const my_img = document.getElementById('my_img');

      index_img.src = "https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/index_icon.png"
      broadcast_img.src = "https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/broadcast_icon.png"
      shopping_img.src = "https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/shopping_icon.png"
      my_img.src = "https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/my_icon.png"
      switch (str) {
        case "/":
          index_text.style.color = "#5EDE99"
          index_img.src = "https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/index_icon_green.png"
          break;
        case "broadcast":
          broadcast_text.style.color = "#5EDE99"
          broadcast_img.src = "https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/broadcast_icon_green.png"
          break;
        case "shopping":
          shopping_text.style.color = "#5EDE99"
          shopping_img.src = "https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/shopping_icon_green.png"
          break;
        case "my":
          my_text.style.color = "#5EDE99"
          my_img.src = "https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/my_icon_green.png"
          break;
      }
      this.$router.replace(str);
    },
  }
}
</script>

<style>

</style>
