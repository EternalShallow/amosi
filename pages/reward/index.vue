<template>
  <div class="reward-box">
    <div class="user-info center-width">
      <div class="avatar-img"><img src="../../assets/image/logo@2x.png" alt=""></div>
      <div class="user-name">BONDING</div>
      <div class="balance-list display-flex box-center-Y">
        <div class="balance-item">
          <div class="title">Your Transferrable <br>
                             GlC Holdings
          </div>
          <div class="amount">3345</div>
        </div>
        <div class="balance-item">
          <div class="title">Your Staked Hegic</div>
          <div class="amount">345</div>
        </div>
        <div class="balance-item">
          <div class="title">Current HEGIC Price</div>
          <div class="amount">$3345</div>
        </div>
        <div class="balance-item">
          <div class="title">Total USD Value</div>
          <div class="amount">21312</div>
        </div>
      </div>
    </div>
    <div class="interface-box center-width display-flex box-center-start">
      <div class="sub-title-box">
        <div class="display-flex box-center-end">
          <div class="line1"></div>
          <div class="box-flex1 line2"></div>
        </div>
        <div class="text1">CHOOSE THE</div>
        <div class="text2">INTERFACE</div>
        <div class="text3">THAT YOU WANT TO</div>
        <div class="text4">NTERACT <span>WITH</span></div>
      </div>
      <div class="con-box box-flex1">
        <div class="interface-tab display-flex box-center-Y">
          <div class="interface-tab-item no-select" @click="changeInterfaceTab(i)"
               :class="{active: interfaceTab.index === i}" v-for="(v, i) in interfaceTab.list"
               :key="`interface-list-${i}`" v-html="v.name"></div>
        </div>
        <div v-show="interfaceTab.list[interfaceTab.index].type === 'ending'">
          <div class="item-title">LOCK WRITE (LP) TOKENS AND EARN HEGIC REWARDS</div>
          <div class="item-desc">Liquidity providers can claim rewards in HEGIC After providing WBTC or ETH to one of
                                 the pools you will receive writeWBTC or writeETH tokens. You will need to lock these
                                 write tokens to start receiving rewards in HEGIC tokens After locking them your share
                                 in rewards will be increasing each block. You will need to manually claim HEIC.
          </div>
          <div class="end-tab display-flex box-center-Y">
            <div class="end-item no-select" @click="changeEndTab(i)" :class="{active: endTab.index === i}"
                 v-for="(v, i) in endTab.list" :key="`endTab-list-${i}`" v-html="v.currency"></div>
          </div>
          <div class="total-box display-flex box-center-Y">
            <div class="total-title">Total Provided:</div>
            <div class="emColor">14.780.276</div>
            <div class="currency-text">writeETH</div>
          </div>
          <div class="display-flex box-center-Y total-list">
            <div class="total-item" v-for="(v, i) in endTotalList" :key="`total-list${i}`">
              <div class="icon-img"><img :src="v.icon_url" alt=""></div>
              <div class="number-box display-flex box-center-end">
                <div>{{v.balance}}</div>
                <div class="currency-b">{{v.currency}}</div>
              </div>
              <div class="line"></div>
              <div class="title">{{v.title}}</div>
              <div class="sub-title">{{v.sub_title}}</div>
              <div class="btn-total no-select">{{v.btn_text}}</div>
            </div>
          </div>
        </div>
        <div v-show="interfaceTab.list[interfaceTab.index].type === 'utilization'">
          <div class="item-title">TRADE WBTC ETH OPTIONS AND EARN HEGIC REWARDS</div>
          <div class="item-desc">Options buyers can claim rewitrdls ir HEGIC After buying ETH or WBTCoptions an Hegie
                                 you will be able to clalm your rewards Rewards can be claimed for each option. Rewards
                                 size in HEdIC tokens depends on the size-and period of an option.You will need to
                                 imiumiaMly elaine HEnIC.
          </div>
          <div class="end-tab display-flex box-center-Y">
            <div class="end-item no-select" @click="changeUtilizationTab(i)"
                 :class="{active: utilizationTab.index === i}" v-for="(v, i) in utilizationTab.list"
                 :key="`utilization-list-${i}`" v-html="v.currency"></div>
          </div>
          <div class="utilization-data">
            <div class="utilization-item header display-flex box-center-Y">
              <div class="box-flex1">ID</div>
              <div class="box-flex1">Type</div>
              <div class="box-flex1">Amount</div>
              <div class="box-flex1">Fee</div>
              <div class="box-flex1">Reward</div>
              <div class="box-flex1">Claim</div>
            </div>
            <div class="utilization-item display-flex box-center-Y" v-for="(v, i) in utilizationData"
                 :key="`utilizationData-${i}`">
              <div class="box-flex1">{{v.id}}</div>
              <div class="box-flex1">{{v.type}}</div>
              <div class="box-flex1">{{v.amount}}</div>
              <div class="box-flex1">{{v.fee}}</div>
              <div class="box-flex1">{{v.reward}}</div>
              <div class="box-flex1">{{v.claim}}</div>
            </div>
          </div>
        </div>
        <div v-show="interfaceTab.list[interfaceTab.index].type === 'stakeEarn'">
          <div class="item-title">HOLD STAKING LOTS AND EARN WBTC OR ETH</div>
          <div class="item-desc">You need 888,000 HEGIC for a staking lot. ou can buy a staking lot by converting
                                 888,000 HEGIC into a staking lot that you will be able to stake for receiving a share
                                 of staking rewards distributed among lots holder.One lot can be used to receive rewards
                                 in WBTC or ETH Current rewards size: 1% of each options size.
          </div>
          <div class="end-tab display-flex box-center-Y">
            <div class="end-item no-select" @click="changeEndTab(i)" :class="{active: endTab.index === i}"
                 v-for="(v, i) in endTab.list" :key="`endTab-list-${i}`" v-html="v.currency"></div>
          </div>
          <div class="total-box display-flex box-center-Y">
            <div class="total-title">Total Provided:</div>
            <div class="emColor">14.780.276</div>
            <div class="currency-text">writeETH</div>
          </div>
          <div class="display-flex box-center-Y total-list">
            <div class="total-item stake-earn" v-for="(v, i) in stakeEarnList" :key="`stake-list${i}`">
              <div class="icon-img"><img :src="v.icon_url" alt=""></div>
              <div class="number-box display-flex box-center-end">
                <div>{{v.balance}}</div>
                <div class="currency-b">{{v.currency}}</div>
              </div>
              <div class="line"></div>
              <div class="title">{{v.title}}</div>
              <div class="sub-title">{{v.sub_title}}</div>
              <div class="btn-total no-select">{{v.btn_text}}</div>
            </div>
          </div>
        </div>
        <div v-show="interfaceTab.list[interfaceTab.index].type === 'bonding'">
          <div class="item-title">BONDING CURVE CONTRACT:BUY OR SELL HEGIC TOKENS</div>
          <div class="end-tab display-flex box-center-Y">
            <div class="end-item no-select" @click="changeBoundTab(i)" :class="{active: boundTab.index === i}"
                 v-for="(v, i) in boundTab.list" :key="`endTab-list-${i}`" v-html="v"></div>
          </div>
          <div class="bound-info display-flex box-center-Y">
            <div class="box-flex1">
              <div class="title">Your Buy Price</div>
              <div class="number-box display-flex box-center-end">
                <div>35465</div>
                <div class="currency-b">ETH</div>
              </div>
            </div>
            <div class="box-flex1">
              <div class="title">Acquired on the Bonding Curve</div>
              <div class="number-box display-flex box-center-end">
                <div>122131</div>
                <div class="currency-b">HEGIC</div>
              </div>
            </div>
            <div class="box-flex1">
              <div class="title">Your Buy Price</div>
              <div class="number-box display-flex box-center-end">
                <div>122131</div>
                <div class="currency-b">HEGIC</div>
              </div>
            </div>
          </div>
          <div class="title-curw">HEGIC Bonding Curw</div>
          <div class="liquidity-main display-flex box-center-start">
            <div class="liquidity-text-box">
              <div class="liquidity-text-item">
                <div class="display-flex box-center-Y">
                  <div class="icon-img"><img src="../../assets/image/logo@2x.png" alt=""></div>
                  <div>Problem</div>
                </div>
                <div class="text-desc">Writers(Liquidity providers)receive writeWBTC tokens(ERC20)that give them a share in the poots premiums that are distributed to them after the options contracts</div>
              </div>
              <div class="liquidity-text-item">
                <div class="display-flex box-center-Y">
                  <div class="icon-img"><img src="../../assets/image/logo@2x.png" alt=""></div>
                  <div>Remind</div>
                </div>
                <div class="text-desc">Click the"Deposit button and 1 WBTC will be sent from your Ethereum address to the liquidity pool contract After the transaction is confirmed by miners, you will</div>
              </div>
            </div>
            <div class="box-flex1">
              <div class="input-item">
                <div class="display-flex box-center-Y input-item-title">
                  <div class="input-item-title-icon"><img src="../../assets/image/logo@2x.png" alt=""></div>
                  <div class="box-flex1">You are buying this amount of HEGIC</div>
                </div>
                <div class="display-flex box-center-Y currency-input">
                  <y-number-input :point="18" ></y-number-input>
                  <div class="currency">HEIGC</div>
                </div>
              </div>
              <div class="input-item">
                <div class="display-flex box-center-Y input-item-title">
                  <div class="input-item-title-icon"><img src="../../assets/image/logo@2x.png" alt=""></div>
                  <div class="box-flex1">You are sending this amount of ETH</div>
                </div>
                <div class="display-flex box-center-Y currency-input">
                  <y-number-input :point="18" ></y-number-input>
                  <div class="currency">ETH</div>
                </div>
              </div>
              <div class="btn-liquidity-deposit no-select">BUY</div>
            </div>
          </div>
        </div>
        <div class="token-box" v-show="interfaceTab.list[interfaceTab.index].type === 'token'">
          <div class="display-flex box-center-Y">
            <div class="box-flex1">
              <div class="token-title">Total Staked</div>
              <div class="number-box display-flex box-center-end">
                <div>122131</div>
                <div class="currency-b">HEGIC</div>
              </div>
            </div>
            <div class="box-flex1">
              <div class="token-title">Active Lots</div>
              <div class="number-box display-flex box-center-end">
                <div>122131</div>
              </div>
            </div>
            <div class="box-flex1">
              <div class="token-title">Settlements Fee Rate</div>
              <div class="number-box display-flex box-center-end">
                <div>122131</div>
                <div class="currency-b">%</div>
              </div>
            </div>
          </div>
          <div class="display-flex box-center-Y token-2">
            <div class="box-flex1">
              <div class="token-title">Total Settements Fees</div>
              <div class="number-box display-flex box-center-end">
                <div>$122131</div>
              </div>
            </div>
            <div class="box-flex1">
              <div class="token-title">Settements Fees in WBTC</div>
              <div class="number-box display-flex box-center-end">
                <div>122</div>
                <div class="currency-b">WBTC</div>
              </div>
            </div>
            <div class="box-flex1">
              <div class="token-title">Settements Fees in ETH</div>
              <div class="number-box display-flex box-center-end">
                <div>12</div>
                <div class="currency-b">ETH</div>
              </div>
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
