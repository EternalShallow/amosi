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
        <div class="box-flex1 con-box">
          <div class="earn-tab display-flex box-center-Y">
            <div class="earn-tab-item no-select display-flex box-center-Y" :class="{active: liquidity.index === i}" v-for="(v, i) in liquidity.list" :key="`earn-item-${i}`" @click="changeLiquidity(i)">
              <div class="item-img">
                <img :src="v.icon_url" alt="">
              </div>
              <div class="box-flex1">
                <div class="name">{{v.currency}} Pool</div>
                <div class="desc">{{v.desc}}</div>
              </div>
            </div>
          </div>
          <div class="display-flex box-around">
            <div class="box1">
              <div class="deposit-list">
                <div class="deposit-item">
                  <div>Liquidity Provided</div>
                  <div class="number-box display-flex box-center-Y">
                    <div>{{milliFormat(totalBalance)}}</div>
                    <div class="currency-a">{{liquidity.list[liquidity.index].currency}}</div>
                  </div>
                  <div class="display-flex btn-deposit-out">
                    <div class="btn-deposit no-select" @click="scrollToLiquidity">DEPOSIT</div>
                  </div>
                </div>
                <div class="deposit-item">
                  <div>Net P&L</div>
                  <div class="number-box display-flex box-center-Y">
                    <div>{{selfPoolBalance}}</div>
                    <div class="currency-a">{{liquidity.list[liquidity.index].currency}}</div>
                  </div>
                  <div class="display-flex btn-deposit-out">
                    <div class="btn-deposit no-select" @click="showWithdraw = true">WITHDRAW NET PROFITS</div>
                  </div>
                </div>
              </div>
              <div class="earn-info">
                <div class="rate-box">
                  <div class="pl-box display-flex box-center-Y">
                    <div class="icon-img"><img src="../../assets/image/icon_echart@2x.png" alt=""></div>
                    <div>Your Share in the Pool</div>
                  </div>
                  <div class="text display-flex box-center-Y">
                    <div></div>
                    <div class="box-flex1"></div>
                    <div>{{liquidity.list[liquidity.index].currency}} Pool Si</div>
                  </div>
                  <div class="rate-text display-flex box-center-Y">
                    <div>{{balanceRate}}%</div>
                    <div class="box-flex1"></div>
                    <div>{{milliFormat(totalBalance)}} {{liquidity.list[liquidity.index].currency}}</div>
                  </div>
                  <div class="rate-line-out">
                    <div :style="{
                      width: `${balanceRate}%`
                    }" class="rate-line"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="box2">
              <div class="desc">Option contract value dynamics depending
                                on the price of an underlying:</div>
              <div class="process-box display-flex box-center-X">
                <v-progress-circular
                  :width="20"
                  :size="238"
                  :rotate="360"
                  :value="balanceRate"
                  color="indigo darken-2"
                >
                  <div class="net-text">Total {{liquidity.list[liquidity.index].currency}}</div>
                  <div class="number-box display-flex box-center-end">
                    <div>{{ totalBalance }}</div>
                  </div>
                </v-progress-circular>
              </div>
              <div v-if="account" class="stake-btn no-select" @click="showWithdraw = true">WIRHDRAW</div>
              <div v-else class="stake-btn no-select" @click="connectAccount">WAITING FOR CONNECTION</div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    <div class="historical-out-box">-->
<!--      <div class="historical-box center-width display-flex box-center-start">-->
<!--        <div class="sub-title-box">-->
<!--          <div class="display-flex box-center-end">-->
<!--            <div class="line1"></div>-->
<!--            <div class="box-flex1 line2"></div>-->
<!--          </div>-->
<!--          <div class="text1">CUMULATIVE</div>-->
<!--          <div class="text2">HISTORICAL</div>-->
<!--          <div class="text3 display-flex box-around">-->
<!--            <div>OPTIONS</div>-->
<!--            <div>VOLUME</div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="box-flex1 con-box display-flex box-around">-->
<!--          <div class="historical-item" v-for="(v, i) in historicalList" :key="`historical-${i}`">-->
<!--            <div class="icon-img"><img :src="v.icon_url" alt=""></div>-->
<!--            <div class="number-box display-flex box-center-end">-->
<!--              <div>{{v.number}}</div>-->
<!--              <div class="currency-b">{{v.currency}}</div>-->
<!--            </div>-->
<!--            <div class="line"></div>-->
<!--            <div class="title">{{v.title}}</div>-->
<!--            <div class="sub-title">{{v.sub_title}}</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="pool-out-box">-->
<!--      <div class="pool-box center-width display-flex box-center-start">-->
<!--        <div class="sub-title-box">-->
<!--          <div class="display-flex box-center-end">-->
<!--            <div class="line1"></div>-->
<!--            <div class="box-flex1 line2"></div>-->
<!--          </div>-->
<!--          <div class="text1">SWITCH THE</div>-->
<!--          <div class="text2">ACTIVE</div>-->
<!--          <div class="text3">POOL</div>-->
<!--        </div>-->
<!--        <div class="box-flex1 con-box display-flex box-center-Y">-->
<!--          <div class="pool-item" v-for="(v, i) in poolList" :key="`pool-list-${i}`">-->
<!--            <div class="icon-img"><img :src="v.icon_url" alt=""></div>-->
<!--            <div class="title">{{v.title}}</div>-->
<!--            <div class="desc">{{v.desc}}</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="liquidity-box center-width display-flex box-center-start" id="liquidity">
      <div class="sub-title-box">
        <div class="display-flex box-center-end">
          <div class="line1"></div>
          <div class="box-flex1 line2"></div>
        </div>
        <div class="text1">PROVIDE</div>
        <div class="text2">LIQUIDITY</div>
        <div class="text3">DYnamic</div>
      </div>
      <div class="box-flex1 con-box">
        <div class="display-flex box-center-Y liquidity-tab">
          <div class="liquidity-tab-item no-select" @click="changeLiquidity(i)" :key="`liquidity-tab${i}`" v-for="(v, i) in liquidity.list" :class="{active: i === liquidity.index}">{{v.currency}}</div>
        </div>
<!--        <div class="liquidity-info-box display-flex box-center-Y">-->
<!--          <div class="box-flex1 liquidity-info-item">-->
<!--            <div class="title">AVg.Returns(30Days)</div>-->
<!--            <div class="number-box display-flex box-center-end">-->
<!--              <div>0</div>-->
<!--              <div class="currency-b">TAB</div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="box-flex1 liquidity-info-item">-->
<!--            <div class="title">ProjectedReturns(apy)</div>-->
<!--            <div class="number-box display-flex box-center-end">-->
<!--              <div>0</div>-->
<!--              <div class="currency-b">TAB</div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="box-flex1 liquidity-info-item">-->
<!--            <div class="title">Gross Premiums</div>-->
<!--            <div class="number-box display-flex box-center-end">-->
<!--              <div>0</div>-->
<!--              <div class="currency-b">WBTC</div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <div class="liquidity-main display-flex box-center-start">
          <div class="liquidity-text-box">
            <div class="liquidity-text-item">
              <div class="display-flex box-center-Y">
                <div class="icon-img"><img src="../../assets/image/icon_problem@2x.png" alt=""></div>
                <div>Problem</div>
              </div>
              <div class="text-desc">Writers(Liquidity providers)receive writeWBTC tokens(ERC20)that give them a share in the poots premiums that are distributed to them after the options contracts</div>
            </div>
            <div class="liquidity-text-item">
              <div class="display-flex box-center-Y">
                <div class="icon-img"><img src="../../assets/image/icon_remind@2x.png" alt=""></div>
                <div>Remind</div>
              </div>
              <div class="text-desc">Click the"Deposit button and 1 WBTC will be sent from your Ethereum address to the liquidity pool contract After the transaction is confirmed by miners, you will</div>
            </div>
          </div>
          <div class="box-flex1">
            <div class="input-item">
              <div class="display-flex box-center-Y input-item-title">
                <div class="input-item-title-icon"><img src="../../assets/image/icon_trade_1@2x.png" alt=""></div>
                <div class="box-flex1">Amount for Providing to the pool:</div>
              </div>
              <div class="display-flex box-center-Y currency-input">
                <y-number-input :point="4" v-model="amount" @input="changeAmount"></y-number-input>
                <div class="currency">{{liquidity.list[liquidity.index].currency}}</div>
              </div>
            </div>
            <div class="input-item">
              <div class="display-flex box-center-Y input-item-title">
                <div class="input-item-title-icon"><img src="../../assets/image/icon_trade_2@2x.png" alt=""></div>
                <div class="box-flex1">You Will Receive</div>
              </div>
              <div class="display-flex box-center-Y currency-input">
                <y-number-input :point="4" v-model="receive" @input="changeReceive"></y-number-input>
                <div class="currency write">write{{liquidity.list[liquidity.index].currency}}</div>
              </div>
            </div>
            <div v-if="!account" class="btn-liquidity-deposit no-select" @click="connectAccount">WAITING FOR CONNECTION</div>
            <div v-else-if="!isApprove" class="btn-liquidity-deposit no-select" @click="approve">Approve</div>
            <div v-else class="btn-liquidity-deposit no-select" @click="deposit">DEPOSIT</div>
          </div>
        </div>
      </div>
    </div>
    <dialogConfirm :isShow="showWithdraw" @saveDialog="withdrawProfit" @closeDialog="showWithdraw=false">
      <div class="dialog-title">Lock Token From The Pool</div>
      <div class="dialog-input">
        <div class="text">Amount for Lock Token:</div>
        <div class="input-box display-flex box-center-Y">
          <y-number-input v-model="withdrawProfitAmount" :placeholder="`Please input amount`" class="box-flex1" :point="6" @input="changeWithdrawProfitWriteAmount"></y-number-input>
          <div class="currency">{{liquidity.list[liquidity.index].currency}}</div>
        </div>
        <div class="write-balance">Your Balance: {{balanceWrite}} write{{liquidity.list[liquidity.index].currency}}</div>
        <div class="write-info" v-show="withdrawProfitAmount"><span>{{withdrawProfitWriteAmount}} write{{liquidity.list[liquidity.index].currency}}</span> to <span>{{withdrawProfitAmount}}{{liquidity.list[liquidity.index].currency}}</span></div>
      </div>
    </dialogConfirm>
  </div>
</template>

<script>
export { default } from './js/index'
</script>

<style scoped lang="scss">
  @import "index";
</style>
