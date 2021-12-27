<template>
  <!--  <div>-->
  <!--    index-->
  <!--    <img :style="style.img" alt="Kraken logo" src="https://img.alicdn.com/imgextra/i4/O1CN01GIxaZ01V0isGFLuJQ_!!6000000002591-2-tps-400-339.png">-->
  <!--    <img :style="style.img" alt="Kraken logo" src="https://img.alicdn.com/imgextra/i4/O1CN01GIxaZ01V0isGFLuJQ_!!6000000002591-2-tps-400-339.png">-->
  <!--  </div>-->

  <div :style="style.div" style="background: black;color: white">
    <div style="padding: 20px">
      <div
          style="font-family: normal;font-style: normal;font-weight: bold;font-size: 28px;line-height: 32px;color: white">
        Today
      </div>
      <div style="height: 10px"></div>
      <div
          style="font-family: normal;font-style: normal;font-weight: bold;font-size: 28px;line-height: 32px;color: #474747">
        New&Popular <span style="color: white">Story</span>
      </div>
    </div>

    <!--    <div style="background-image: url('https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/red_shoes.png');background-repeat: no-repeat;background-position: center 0;background-size: cover;height: 550px;max-width: 550px">-->
    <div style="padding: 20px 20px 0 20px; position: relative;">
      <div style="position: relative;width: 100%" @click="this.$router.replace('shoes');">
        <img src="https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/red_shoes_v1.png"
             style="width: 100%;height: auto">
        <div style="position: absolute; z-index: 2; bottom: 0;left: 0; width: 100%">
          <div style="margin: 0 24px 24px 24px">
            <div style="font-style: normal;font-weight: bold;font-size: 20px;">Welcome X-S-Store</div>
            <div style="height: 8px"></div>
            <div style="font-style: normal;font-weight: bold;font-size: 14px;">X-S-Store</div>
          </div>
        </div>
      </div>
    </div>

    <div style="padding: 20px 20px 0 20px; position: relative;">
      <div style="position: relative; width: 100%; height: 280px; border: 1px solid transparent; border-radius: 20px; overflow: hidden;">
        <img src="https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/white_shoes_v1.png"
             style="width: 100%;height: auto">
<!--        <video-->
<!--            src="https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/mini_app_test.mp4"-->
<!--            autoplay="autoplay"-->
<!--            style="width: 110%;height: auto;"-->
<!--        />-->
        <div style="position: absolute; z-index: 2; bottom: 0;left: 0; width: 100%;">
          <div style="margin: 0 24px 24px 24px; color: purple">
            <div style="font-style: normal;font-weight: bold;font-size: 20px;">Nike Adapt BB Unboxing - Futuristic Self
              Lacing Sneakers
            </div>
            <div style="height: 8px"></div>
            <div style="font-style: normal;font-weight: bold;font-size: 14px;">Unbox Therapy <span
                style="font-weight: 400">949K Views 3 min ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="padding: 20px 20px 0 20px; position: relative;">
      <div style="position: relative; width: 100%">
        <img src="https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/powder_shoes_v1.png"
             style="width: 100%;height: auto">
        <div style="position: absolute; z-index: 2; bottom: 0;left: 0; width: 100%;">
          <div style="margin: 0 24px 24px 24px">
            <div style="font-style: normal;font-weight: bold;font-size: 20px;">Nike Alphafly Next% Full & Final Review |
              Carbon Fiber Plate Marathon Shoe
            </div>
            <div style="height: 8px"></div>
            <div style="font-style: normal;font-weight: bold;font-size: 14px;">Unbox Therapy <span
                style="font-weight: 400">949K Views 3 min ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="padding: 20px 20px 0 20px; position: relative">
      <div style="position: relative; width: 100%">
        <img src="https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/red_aj_shoes_v1.png"
             style="width: 100%;height: auto">
        <div style="position: absolute; z-index: 2; bottom: 0;left: 0; width: 100%">
          <div style="margin: 0 24px 24px 24px">
            <div style="font-style: normal;font-weight: bold;font-size: 20px;">About</div>
            <div style="font-style: normal;font-weight: bold;font-size: 20px;">Jordan 1 Mid Chicago Toe</div>
            <div style="font-style: normal;font-weight: bold;font-size: 14px;">TheOffWhiteDealer <span
                style="font-weight: 400">949K Views 3 min ago</span></div>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 100px"></div>
  </div>
</template>

<script>
const style = {
  img: {
    margin: '10px 0px',
  },
  div: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
}

export default {
  name: 'home',
  components: {},
  data() {
    return {
      style,
    }
  },
}
</script>
