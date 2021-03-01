<template>
  <div id="app" data-app>
    <div class="main display-flex box-column">
      <div class="header-box center-width display-flex box-around">
        <div class="name-logo display-flex box-center">
          <div class="logo-icon"><img src="../assets/image/logo@2x.png" alt=""></div>
          <div>SEAWEED</div>
        </div>
        <div class="display-flex box-center-Y tab-box">
          <div class="tab-list box-flex1 display-flex box-center-Y">
            <div class="box-flex1 tab-item no-select" :class="{active: tab === i}" v-for="(v, i) in tabs" :key="`tab${i}`" @click="selectTab(i)">{{v}}</div>
          </div>
          <div class="btn-disconnect no-select">DisConnect</div>
        </div>
      </div>
      <div class="box-flex1 content no-scroller" style="overflow-y: scroll;">
        <div class="head-box">
          <div class="center-width desc">THE SimpLESTem OPTIONS TRADING</div>
          <div class="center-width sub-desc">Trade non-custodial options for profits or to hedge your positions Enjoy fixed price and Nnlimited upside of the options contracts.No registration, KYC or email required.</div>
          <div class="line-withe"></div>
          <div class="connect-wallet no-select">CONNECT  WALLET</div>
        </div>
        <nuxt />
        <div class="join-box center-width display-flex box-center-start">
          <div class="sub-title-box">
            <div class="display-flex box-center-end">
              <div class="line1"></div>
              <div class="box-flex1 line2"></div>
            </div>
            <div class="text1">JOIN THE </div>
            <div class="text2">COMMUNITY</div>
            <div class="text3">A GROUP OF <span class="emColor"> PEOPLE</span></div>
          </div>
          <div class="box-flex1 con-box display-flex box-center-Y">
            <div class="join-item display-flex box-center-start" v-for="(v, i) in joinList" :key="`join-item${i}`">
              <div class="img"><img :src="v.icon" alt=""></div>
              <div class="box-flex1">
                <div class="title">{{v.title}}</div>
                <div>{{v.text}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="connect-us"><span class="emColor">Need Help</span>? Email at xx@xx.com</div>
      </div>
    </div>
  </div>
<!--    <v-app>-->
<!--      <v-main>-->
<!--        <v-container>-->
<!--          <nuxt />-->
<!--        </v-container>-->
<!--      </v-main>-->
<!--    </v-app>-->
<!--  <v-app>-->
<!--    <v-main>-->
<!--      <v-container>-->
<!--        <nuxt />-->
<!--      </v-container>-->
<!--    </v-main>-->
<!--    <v-dialog-->
<!--      v-model="dialogAccount"-->
<!--      fullscreen-->
<!--      hide-overlay-->
<!--      transition="dialog-bottom-transition"-->
<!--    >-->
<!--      <div class="dialog-account-box">-->
<!--        <div class="display-flex box-center-Y account-title">-->
<!--          <div class="fs36 fw5 box-flex1">Account</div>-->
<!--          <v-btn-->
<!--            icon-->
<!--            @click="$store.dispatch('updateDialogAccount', false)"-->
<!--          >-->
<!--            <v-icon>mdi-close</v-icon>-->
<!--          </v-btn>-->
<!--        </div>-->
<!--        <div class="account-info-box">-->
<!--          <div class="account-info-con">-->
<!--            <div>Connect to MeatMask</div>-->
<!--            <div class="fs36 fw5" v-if="account">{{account.substring(0,6)}}...{{account.substring(account.length - 4, account.length)}}</div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="transaction-list" v-if="all_transaction.length > 0">-->
<!--          <div class="recent-transaction display-flex box-center-Y">-->
<!--            <div class="box-flex1">Recent Transactions</div>-->
<!--            <div class="clear-transaction" @click="clearAll">（Clear All）</div>-->
<!--          </div>-->
<!--          <div class="transaction-item display-flex box-center-Y" v-for="(v, i) in all_transaction" :key="`transaction${i}`">-->
<!--            <div class="box-flex1">{{v.summary}}</div>-->
<!--            <div class="status">{{getTransactionStatus(v)}}</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </v-dialog>-->
<!--    <div class="loading-box" v-show="isLoading">-->
<!--      <div class="loading">-->
<!--        <span></span>-->
<!--        <span></span>-->
<!--        <span></span>-->
<!--        <span></span>-->
<!--        <span></span>-->
<!--      </div>-->
<!--    </div>-->
<!--  </v-app>-->
</template>

<script>
export { default } from './js/default'
</script>
<style scoped lang="scss">
  @import "./css/loading";
  .no-scroller::-webkit-scrollbar{
    display: none;
    overflow-y: auto;
  }
  .header-box{
    height: 108px;
    width: 1210px;
    .name-logo {
      font-size: 40px;
      font-family: Impact;
      font-weight: 400;
      line-height: 58px;
      color: $block;
      .logo-icon {
        width: 40px;
        height: 40px;
        margin-right: 18px;
      }
    }
    .tab-box {
      font-size: 18px;
      font-family: Impact;
      font-weight: 600;
      text-align: center;
      .tab-list {
        .tab-item {
          cursor: pointer;
          position: relative;
          height: 108px;
          width: 132px;
          line-height: 108px;
          &.active {
            background-color: $emColor;
          }
        }
      }

      .btn-disconnect {
        cursor: pointer;
        width: 178px;
        height: 44px;
        line-height: 44px;
        border: 2px solid #B7B7B7;
        border-radius: 22px;
        margin-left: 65px;
        box-sizing: border-box;
      }
    }
  }
  .head-box {
      width: 100%;
      background-image: url(../assets/image/img_header.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
      color: $colorFFF;
      padding-top: 202px;
      padding-bottom: 227px;
      .desc {
        color: $colorFFF;
        font-size: 82px;
        font-family: Impact;
        font-weight: 400;
        line-height: 98px;
      }

      .sub-desc {
        text-align: center;
        max-width: 848px;
        margin-top: 38px;
        color: $colorFFF;
        font-size: 20px;
        font-family: DIN-RegularItalic;
        font-weight: 400;
        line-height: 30px;
        font-style: oblique
      }

      .line-withe {
        width: 58px;
        height: 6px;
        margin: 26px auto 0;
        background: #FFFFFF;
      }

      .connect-wallet {
        margin: 78px auto 0;
        width: 346px;
        height: 60px;
        background-color: $emColor;
        opacity: 1;
        text-align: center;
        line-height: 60px;
        border-radius: 4px;
        font-size: 20px;
        font-family: DINCond-BlackAlternate;
        font-weight: 400;
        cursor: pointer;
      }
    }
  .join-box{
    padding: 104px 0 146px;
    border-bottom: 1px solid #B7B7B7;
    .sub-title-box{
      padding-bottom: 7px;
      .text1{
        font-size: 50px;
        color: $block;
        line-height: 71px;
      }
      .text2{
        width: 100%;
        font-size: 36px;
        line-height: 40px;
        color: $block;
      }
      .text3{
        margin-top: 12px;
        font-size: 22px;
        color: $block;
      }
    }
    .con-box{
      flex-wrap: wrap;
      .join-item{
        width: 270px;
        margin-right: 56px;
        &:nth-child(3n) {
          margin-right: 0;
        }
        &:nth-child(-n+3) {
          padding-bottom: 48px;
          border-bottom: 2px solid #E6E6E6;
        }
        &:nth-child(n+4){
          padding-top: 48px;
        }
        .img{
          width: 32px;
          height: 32px;
        }
        >.box-flex1{
          margin-left: 14px;
          color: $color666;
          font-weight: 400;
          font-size: 14px;
          .title{
            color: $block;
            font-weight: 600;
            font-size: 24px;
            height: 32px;
            line-height: 32px;
            margin-bottom: 16px;
          }
        }
      }
    }
  }
  .connect-us{
    text-align: center;
    padding: 18px 0 170px;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    color: $color666;
  }
</style>
