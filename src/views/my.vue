<template>
  <div>
    my
    <img :style="style.img" alt="Kraken logo" src="https://img.alicdn.com/imgextra/i4/O1CN01GIxaZ01V0isGFLuJQ_!!6000000002591-2-tps-400-339.png">
    <img :style="style.img" alt="Kraken logo" src="https://img.alicdn.com/imgextra/i4/O1CN01GIxaZ01V0isGFLuJQ_!!6000000002591-2-tps-400-339.png">
    <img :style="style.img" alt="Kraken logo" src="https://img.alicdn.com/imgextra/i4/O1CN01GIxaZ01V0isGFLuJQ_!!6000000002591-2-tps-400-339.png">
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
    }
  },
}
</script>
