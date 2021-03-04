<template>
  <div class="holder-box">
    <div class="trade-box center-width display-flex box-center-start">
      <div class="sub-title-box">
        <div class="display-flex box-center-end">
          <div class="line1"></div>
          <div class="box-flex1 line2"></div>
        </div>
        <div class="text1">IT IS THAT</div>
        <div class="text2">SIMPLE</div>
        <div class="text3">TO TRADE OPTIONS</div>
      </div>
      <div class="box-flex1 con-box">
        <div class="display-flex box-center-Y trade-tab">
          <div class="trade-tab-item no-select" @click="changeTradeTab(i)" :key="`trade-tab${i}`" v-for="(v, i) in tradeTab.list" :class="{active: i === tradeTab.index}">{{v}}</div>
        </div>
        <div class="display-flex box-center-start right-con">
          <div class="text-box">
            <p>If the price of underlying will rise higher than 1,601.25 during the next 1 day your option will expire worthless.</p>
            <p>If the price of underlying will fall down lower than 1,601.25 during the next 1 day you will be able to exercise your option and take profits.</p>
            <div class="price-desc">Option contract value dynamics depending on the price of an underlying:</div>
            <div class="price-chart" id="priceChart"></div>
          </div>
          <div class="box-flex1">
            <div class="input-item">
              <div class="display-flex box-center-Y input-item-title">
                <div class="display-flex box-center-Y">
                  <div class="input-item-title-icon"><img src="../../assets/image/logo@2x.png" alt=""></div>
                  <div>Option Size</div>
                </div>
                <v-radio-group
                    v-model="optionsType"
                    row
                  >
                    <v-radio
                      label="PUT"
                      color="success"
                      value="1"
                    ></v-radio>
                    <v-radio
                      label="CALL"
                      color="success"
                      value="2"
                    ></v-radio>
                  </v-radio-group>
              </div>
              <div class="display-flex box-center-Y currency-input">
                <y-number-input :point="18" v-model="tradeForm.optionSize" @input="changeVal"></y-number-input>
                <div class="currency">{{tradeTab.list[tradeTab.index]}}</div>
              </div>
            </div>
            <div class="input-item">
              <div class="display-flex box-center-Y input-item-title">
                <div class="input-item-title-icon"><img src="../../assets/image/logo@2x.png" alt=""></div>
                <div class="box-flex1">Strike  Price</div>
              </div>
              <div class="display-flex box-center-Y currency-input">
                <y-number-input :point="18" v-model="tradeForm.strikePrice" @input="changeVal"></y-number-input>
                <div class="currency">USD</div>
              </div>
            </div>
            <div class="input-item">
              <div class="display-flex box-center-Y input-item-title">
                <div class="input-item-title-icon"><img src="../../assets/image/logo@2x.png" alt=""></div>
                <div class="box-flex1">Period of Holding</div>
              </div>
              <div class="display-flex box-center-Y currency-input hold-select">
                <v-select
                  :items="items"
                  v-model="tradeForm.hold"
                ></v-select>
              </div>
            </div>
            <div class="display-flex box-center-Y trade-data-box">
              <div class="box-flex1">
                <div>Strike Price</div>
                <div class="number">${{milliFormat(fees.strikePrice)}}</div>
              </div>
              <div class="box-flex1">
                <div>Total Cost</div>
                <div class="number">${{milliFormat(fees.totalCost)}}</div>
              </div>
              <div class="box-flex1">
                <div>Break-even</div>
                <div class="number">${{milliFormat(fees.breakEven)}}</div>
              </div>
            </div>
            <div class="trade-btn no-select" @click="buyOptions">WAITING FOR CONNECTION</div>
          </div>
        </div>
      </div>
    </div>
    <div class="contracts-out-box">
      <div class="contracts-box center-width display-flex box-center-start">
        <div class="sub-title-box">
          <div class="display-flex box-center-end">
            <div class="line1"></div>
            <div class="box-flex1 line2"></div>
          </div>
          <div class="text1">Your</div>
          <div class="text2">options</div>
          <div class="text3">contracts</div>
        </div>
        <div class="box-flex1 con-box">
          <div class="contract-tab display-flex box-center-Y">
            <div class="contract-tab-item no-select" @click="changeContractTab(i)" :key="`contract-tab${i}`" v-for="(v, i) in contractTab.list" :class="{active: i === contractTab.index}">{{v}}</div>
          </div>
          <div class="data-list">
            <div class="data-head data-item display-flex box-center-Y">
              <div class="box-flex1" v-for="(v, i) in contractHead" :key="`data-head${i}`">{{v}}</div>
            </div>
            <div class="data-item display-flex box-center-Y" v-for="(v, i) in contractDataList" :key="`data-item${i}`" >
              <div class="box-flex1">{{v.type}}</div>
              <div class="box-flex1">{{v.size}}</div>
              <div class="box-flex1">{{v.strikePrice}}</div>
              <div class="box-flex1">{{v.nowPrice}}</div>
              <div class="box-flex1">{{v.breakEven}}</div>
              <div class="box-flex1">{{v.PL}}</div>
              <div class="box-flex1">{{v.placedAt}}</div>
              <div class="box-flex1">{{v.expireIn}}</div>
              <div class="box-flex1">{{v.exercise}}</div>
              <div class="box-flex1">{{v.share}}</div>
            </div>
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
