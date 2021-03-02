<template>
  <div class="stake-box">
    <div class="earn-out-box">
      <div class="earn-box center-width display-flex box-center-start">
        <div class="sub-title-box">
          <div class="display-flex box-center-end">
            <div class="line1"></div>
            <div class="box-flex1 line2"></div>
          </div>
          <div class="text1">Your</div>
          <div class="text2">EArinings</div>
          <div class="text3">DYnamic</div>
        </div>
        <div class="box-flex1 con-box display-flex box-around">
          <div class="box1">
            <div class="display-flex box-around">
              <div class="deposit-item">
                <div>Liquidity Provided</div>
                <div class="number-box display-flex box-center-Y">
                  <div>0</div>
                  <div class="currency-a">WBTC</div>
                </div>
                <div class="display-flex btn-deposit-out">
                  <div class="btn-deposit no-select">DEPOSIT</div>
                </div>
              </div>
              <div class="deposit-item">
                <div>Liquidity Provided</div>
                <div class="number-box display-flex box-center-Y">
                  <div>0</div>
                  <div class="currency-a">WBTC</div>
                </div>
                <div class="display-flex btn-deposit-out">
                  <div class="btn-deposit no-select">DEPOSIT</div>
                </div>
              </div>
            </div>
            <div class="earn-info">
              <div class="rate-box">
                <div class="text display-flex box-center-Y">
                  <div>Your Share in the Pool</div>
                  <div class="box-flex1"></div>
                  <div>WBTC Pool Si</div>
                </div>
                <div class="rate-text display-flex box-center-Y">
                  <div>100%</div>
                  <div class="box-flex1"></div>
                  <div>568.914WBTC</div>
                </div>
                <div class="rate-line-out">
                  <div class="rate-line"></div>
                </div>
                <div class="pl-box display-flex box-center-Y">
                  <div class="icon-img"><img src="../../assets/image/icon_echart@2x.png" alt=""></div>
                  <div>P&L DYNAMICS</div>
                </div>
              </div>
            </div>
          </div>
          <div class="box2">
            <div class="desc">Option contract value dynamics depending
                              on the price of an underlying:</div>
          </div>
        </div>
      </div>
    </div>
    <div class="historical-out-box">
      <div class="historical-box center-width display-flex box-center-start">
        <div class="sub-title-box">
          <div class="display-flex box-center-end">
            <div class="line1"></div>
            <div class="box-flex1 line2"></div>
          </div>
          <div class="text1">CUMULATIVE</div>
          <div class="text2">HISTORICAL</div>
          <div class="text3 display-flex box-around">
            <div>OPTIONS</div>
            <div>VOLUME</div>
          </div>
        </div>
        <div class="box-flex1 con-box display-flex box-around">
          <div class="historical-item" v-for="(v, i) in historicalList" :key="`historical-${i}`">
            <div class="icon-img"><img :src="v.icon_url" alt=""></div>
            <div class="number-box display-flex box-center-end">
              <div>{{v.number}}</div>
              <div class="currency-b">{{v.currency}}</div>
            </div>
            <div class="line"></div>
            <div class="title">{{v.title}}</div>
            <div class="sub-title">{{v.sub_title}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="pool-out-box">
      <div class="pool-box center-width display-flex box-center-start">
        <div class="sub-title-box">
          <div class="display-flex box-center-end">
            <div class="line1"></div>
            <div class="box-flex1 line2"></div>
          </div>
          <div class="text1">SWITCH THE</div>
          <div class="text2">ACTIVE</div>
          <div class="text3">POOL</div>
        </div>
        <div class="box-flex1 con-box display-flex box-center-Y">
          <div class="pool-item" v-for="(v, i) in poolList" :key="`pool-list-${i}`">
            <div class="icon-img"><img :src="v.icon_url" alt=""></div>
            <div class="title">{{v.title}}</div>
            <div class="desc">{{v.desc}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export { default } from './js/index'
</script>

<style scoped lang="scss">
  @import "index";
</style>
