<template>
  <div>
<!--  <div :style="style.home">-->
<!--    <div :style="style.router">router is {{$route.path}}</div>-->
    <div>
      <router-view/>
    </div>
    <div :style="style.navigation" style="position: fixed;bottom: 0;width: 100%;height: 70px;color: #474747;padding-top: 10px;border-top: 1px solid #eee;background-color: #fff;">
      <div style="width: 25%;float: left;cursor: pointer; text-align: center">
        <div :style="style.button" @click="goToVue">
          首页
        </div>
      </div>
      <div style="width: 25%;float: left;cursor: pointer; text-align: center" >
        <div :style="style.button" @click="goToKraken">
          直播
        </div>
      </div>
      <div style="width: 25%;float: left;cursor: pointer; text-align: center" >
        <div :style="style.button" @click="goToKraken">
          购物车
        </div>
      </div>
      <div style="width: 25%;float: left;cursor: pointer; text-align: center"  >
        <div :style="style.button" @click="goToKraken">
          我的
        </div>
      </div>
    </div>
  </div>

</template>



<script>
// import HelloWorld from './components/HelloWorld.vue'

const style = {
  router: {
    margin: '30px 0px',
  },
  home: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    margin: '27vw 0vw 0vw',
    padding: '0vw',
    minWidth: '0vw',
    alignItems: 'center',
  },
  info: {
    alignItems: 'center',
    fontSize: '18px',
    margin: '5px 0',
    color: '#555555',
  },
  button: {
    padding: '10px 10px',
    border: '1px solid #333333',
    margin: '0px 10px'
  },
  changeRouter: {
    display: 'flex',
    marginTop: '20px',
  },
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
    goToVue () {
      this.$router.replace('vue')
    },
    goToKraken () {
      this.$router.replace('kraken')
    }
  }
}
</script>

<style>

</style>
