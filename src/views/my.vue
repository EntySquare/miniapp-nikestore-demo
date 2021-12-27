<template>
  <div style="background: black;height: 100vh;width: 100%;text-align: center">
    <div style="height: 50vh"></div>
    <div style="color: #BEBEBE;font-weight: 900;font-size: 20px">token:</div>
    <div style="color: #BEBEBE;font-weight: 900;font-size: 20px">{{ tokenStr }}</div>
    <div style="height: 20px"></div>
    <button style="background: #5EDE99;color: white" @click="getToken()">get token</button>
    <div style="height: 20px"></div>
    <button style="background: #5EDE99;color: white" @click="deleteToken()">delete token</button>
<!--    <div :style="style.button" @click="goToHtml('broadcast')" style="text-align: center">get token</div>-->
  </div>
</template>

<script>
const style = {
  img: {
    margin: '10px 0px'
  }
}

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      style,
      tokenStr: "null",
    }
  },
  methods: {
    //跳转
    getToken() {
      // eslint-disable-next-line no-undef
      kraken.methodChannel.invokeMethod('getToken')
          .then(result => {
            this.tokenStr = result.toString();
          })
          .catch(err => {
            this.tokenStr = err.toString();
          });
    },
    deleteToken() {
      this.tokenStr = "null"
    }
  }
}
</script>
