<template>
  <div>
    <div>
      <router-view/>
    </div>
    <div :style="style.navigation"
         style="position: fixed;bottom: 0;width: 100%;height: 70px;color: #474747;padding-top: 10px;background-color: black;">

      <div :style="style.button" @click="goToHtml('/')" style="text-align: center">
        <img id="index_img" src="https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/index_icon.png"
             style="height: 32px;width: 32px">
        <div id="index_text" style="font-size: 10px;color: #BEBEBE">首页</div>
      </div>
      <div :style="style.button" @click="goToHtml('broadcast')" style="text-align: center">
        <img id="broadcast_img" src="https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/broadcast_icon.png"
             style="height: 32px;width: 32px">
        <div id="broadcast_text" style="font-size: 10px;color: #BEBEBE">直播</div>
      </div>
      <div :style="style.button" @click="goToHtml('shopping')" style="text-align: center">
        <img id="shopping_img" src="https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/shopping_icon.png"
             style="height: 32px;width: 32px">
        <div id="shopping_text" style="font-size: 10px;color: #BEBEBE">购物车</div>
      </div>
      <div :style="style.button" @click="goToHtml('my')" style="text-align: center">
        <img id="my_img" src="https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/my_icon.png"
             style="height: 32px;width: 32px">
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
    //broadcast_img
    //broadcast_text
    // switch (this.route.path){
    //   case "/":
    //   case "/broadcast":
    //   case "/my":
    //   case "/shopping":
    // }
  },
  methods: {
    //跳转
    goToHtml(str) {
      document.getElementById("index_text").style.color = "#BEBEBE"
      document.getElementById("broadcast_text").style.color = "#BEBEBE"
      document.getElementById("shopping_text").style.color = "#BEBEBE"
      document.getElementById("my_text").style.color = "#BEBEBE"
      document.getElementById("index_img").src = "https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/index_icon.png"
      document.getElementById("broadcast_img").src = "https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/broadcast_icon.png"
      document.getElementById("shopping_img").src = "https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/shopping_icon.png"
      document.getElementById("my_img").src = "https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/my_icon.png"
      switch (str) {
        case "/":
          document.getElementById("index_text").style.color = "#5EDE99"
          document.getElementById("index_img").src = "https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/index_icon_green.png"
          // this.$router.replace('/');
          break;
        case "broadcast":
          document.getElementById("broadcast_text").style.color = "#5EDE99"
          document.getElementById("broadcast_img").src = "https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/broadcast_icon_green.png"
          // this.$router.replace('broadcast');
          break;
        case "shopping":
          document.getElementById("shopping_text").style.color = "#5EDE99"
          document.getElementById("shopping_img").src = "https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/shopping_icon_green.png"
          // this.$router.replace('/');
          break;
        case "my":
          document.getElementById("my_text").style.color = "#5EDE99"
          document.getElementById("my_img").src = "https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/my_icon_green.png"
          // this.$router.replace('/');
          break;
      }
      this.$router.replace(str);
    },
  }
}
</script>

<style>

</style>
