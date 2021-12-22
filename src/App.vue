<template>
  <div>
    <div>
      <router-view/>
    </div>
    <div :style="style.navigation" style="position: fixed;bottom: 0;width: 100%;height: 70px;color: #474747;padding-top: 10px;border-top: 1px solid #eee;background-color: #fff;">
      <div style="width: 25%;float: left;cursor: pointer; text-align: center">
        <div :style="style.button" @click="this.$router.replace('/')">
          首页
        </div>
      </div>
      <div style="width: 25%;float: left;cursor: pointer; text-align: center" >
        <div :style="style.button" @click="this.$router.replace('broadcast')">
          直播
        </div>
      </div>
      <div style="width: 25%;float: left;cursor: pointer; text-align: center" >
        <div :style="style.button" @click="this.$router.replace('shopping')">
          购物车
        </div>
      </div>
      <div style="width: 25%;float: left;cursor: pointer; text-align: center"  >
        <div :style="style.button" @click="this.$router.replace('shoes')">
          我的
        </div>
      </div>
    </div>
  </div>

</template>



<script>
// import HelloWorld from './components/HelloWorld.vue'

const style = {
  button: {
    padding: '10px 10px',
    border: '1px solid #333333',
    margin: '0px 10px'
  },
  // changeRouter: {
  //   display: 'flex',
  //   marginTop: '20px',
  // },
  navigation:{
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
  methods: {
    //跳转
    goToHtml () {
      // var height = $(window).height() - $("header").height() - $("#description").height() - $("#menu").height();
      // $("#content").height(height + "px");
    },
    // goToVue () {
    //   this.$router.replace('vue')
    // },
    // goToKraken () {
    //   this.$router.replace('kraken')
    // }
  }
}
</script>

<style>

</style>
