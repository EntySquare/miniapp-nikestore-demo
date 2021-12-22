<template>
    <div @click="this.$router.replace('/')" style="background: rgba(18, 18, 29, 0.05);backdrop-filter: blur(20px);
    width: 50px;height: 50px;border-radius: 60px;z-index: 999;position:fixed; top:40px;left:20px;">
      <img src="https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/return.png" style="margin: 10px 0px 0px 10px;height: 30px;width: auto">
    </div>


    <div style="background: rgba(18, 18, 29, 0.05);backdrop-filter: blur(20px);
    width: 50px;height: 50px;border-radius: 60px;z-index: 999;position:fixed; top:40px;right:20px;">
      <img src="https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/more.png" style="margin: 10px 0px 0px 10px;height: 30px;width: auto">
    </div>

<!--  {/* 纵向排版: 垂直等间距 & 水平居中 */}-->
  <div :style="style.div">
    <div  style="background: black">
      <img style="width: 100%;height: auto" alt="Kraken logo" src="https://miniapp-nikestore-demo.oss-cn-beijing.aliyuncs.com/red_shoes_max.png">
    </div>

    <div  style="background: black;padding: 40px">
      <div style="font-size:20px;font-weight: 700;color: white">The stock market for things</div>
      <div style="height: 20px"></div>
      <div style="font-size:14px;font-weight: 400;color: grey">
        X-S-Store is the world’s first stock market for things – a live ‘bid/ask’ marketplace. Buyers place bids, sellers place asks and when a bid and ask meet, the transaction happens automatically. Retro Jordans, Nikes, Yeezys and more – now 100% authentic guaranteed.</div>
      <div style="height: 20px"></div>
    </div>

    <div  style="background: white;padding: 40px">
      <div style="font-size:20px;font-weight: 700;color: black">The Basic</div>
      <div style="height: 16px"></div>
      <div style="font-size:20px;font-weight: 700;color: black">Anonymity</div>
      <div style="height: 8px"></div>
      <div style="font-size:14px;font-weight: 400;color: #474747">Never worry about legit buyers or sellers – we’re in the middle.</div>

      <div style="height: 16px"></div>
      <div style="font-size:20px;font-weight: 700;color: black">Transparency</div>
      <div style="height: 8px"></div>
      <div style="font-size:14px;font-weight: 400;color: #474747">Real-time market data for intelligent buying and selling.</div>

      <div style="height: 16px"></div>
      <div style="font-size:20px;font-weight: 700;color: black">Authenticity</div>
      <div style="height: 8px"></div>
      <div style="font-size:14px;font-weight: 400;color: #474747">Our experts authenticate every product sold on X-S-Store.</div>
    </div>

    <div  style="background: #ECECEC;padding: 40px">
      <div style="font-size:20px;font-weight: 700;color: black">Buying on X-S-Store</div>
      <div style="height: 16px"></div>
      <div style="font-size:16px;font-weight: 700;color: black">Bid (Buy)</div>
      <div style="height: 8px"></div>
      <div style="font-size:14px;font-weight: 400;color: #474747">Make an offer that any seller can accept; or purchase immediately at the lowest Ask.</div>

      <div style="height: 16px"></div>
      <div style="font-size:16px;font-weight: 700;color: black">Authenticate</div>
      <div style="height: 8px"></div>
      <div style="font-size:14px;font-weight: 400;color: #474747">Seller ships to us. We authenticate, then we release funds to the seller.</div>

      <div style="height: 16px"></div>
      <div style="font-size:20px;font-weight: 700;color: black">Authenticity</div>
      <div style="height: 8px"></div>
      <div style="font-size:14px;font-weight: 400;color: #474747">We ship to you. You sip a daiquiri, knowing you will never get a fake.</div>
      <div style="height: 20px"></div>
      <div :style="style.middle">
        <div :style="style.middle" style="position: static;width: 160px;height: 56px;background: #42D70D;border-radius: 60px;">
          <div style="font-style: normal;font-weight: bold;font-size: 16px;color: white"> Learn More</div>
        </div>
      </div>
      <div style="height: 10px"></div>
    </div>

    <div  style="background: white;padding: 40px">
      <div style="font-size:20px;font-weight: bold;color: black">Selling on X-S-Store</div>
      <div style="height: 16px"></div>
      <div style="font-size:16px;font-weight: 700;color: black">Ask (Sell)</div>
      <div style="height: 8px"></div>
      <div style="font-size:14px;font-weight: 400;color: #474747">List an item for sale; or sell immediately at the highest Bid.</div>

      <div style="height: 16px"></div>
      <div style="font-size:16px;font-weight: 700;color: black">Authenticate</div>
      <div style="height: 8px"></div>
      <div style="font-size:14px;font-weight: 400;color: #474747">Ship your item within 2 business days. We authenticate, then we ship to the buyer.</div>

      <div style="height: 16px"></div>
      <div style="font-size:16px;font-weight: 700;color: black">Prosper</div>
      <div style="height: 8px"></div>
      <div style="font-size:14px;font-weight: 400;color: #474747">We release funds to you. You sip a daiquiri, knowing you will never get a chargeback.</div>
      <div style="height: 20px;"></div>
      <div :style="style.middle">
        <div :style="style.middle" style="position: static;width: 160px;height: 56px;background: #FF2343;border-radius: 60px;">
          <div style="font-style: normal;font-weight: bold;font-size: 16px;color: white"> Learn More</div>
        </div>
      </div>
      <div style="height: 80px"></div>

    </div>
  </div>
</template>

<script>
const style = {
  middle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  div:{
    // display: 'flex',
    // height: '200px',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: '#999',
    // marginTop: '10px',
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
