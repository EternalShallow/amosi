<template>
  <div class="holder-box no-scroller">
    <div class="head-box no-scroller">
      <div class="name-logo display-flex box-center center-width">
        <div class="logo-icon"><img src="../../assets/image/yswap@2x.png" alt=""></div>
        <div>SEAWEED</div>
      </div>
      <div class="display-flex box-center-Y center-width tab-box">
        <div class="tab-list box-flex1 display-flex box-center-Y">
          <div class="box-flex1 tab-item no-select" :class="{active: tab === i}" v-for="(v, i) in tabs" :key="`tab${i}`" @click="selectTab(i)">{{v}}</div>
        </div>
        <div class="btn-disconnect no-select">DisConnect</div>
      </div>
      <div class="center-width desc">THE SimpLESTem OPTIONS TRADING</div>
      <div class="center-width sub-desc">Trade non-custodial options for profits or to hedge your positions Enjoy fixed price and Nnlimited upside of the options contracts.No registration, KYC or email required.</div>
      <div class="line-withe"></div>
      <div class="connect-wallet no-select">CONNECT  WALLET</div>
    </div>
    <div class="content">
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
            </div>
            <div class="box-flex1">
<!--              <div class="input-item">-->
<!--                <div class="display-flex box-center-Y input-item-title">-->
<!--                  <div class="input-item-title-icon"><img src="../../assets/image/yswap@2x.png" alt=""></div>-->
<!--                  <div class="box-flex1">Option Type</div>-->
<!--                </div>-->
<!--                <div class="display-flex box-center currency-input option-type-list">-->
<!--                  <div class="option-type-item box-flex1 no-select" :class="{active: optionsType.index === i}" @click="changeOptionType(i)" v-for="(v, i) in optionsType.list" :key="`option-type-${i}`">{{v.name}}</div>-->
<!--                </div>-->
<!--              </div>-->
              <div class="input-item">
                <div class="display-flex box-center-Y input-item-title">
                  <div class="display-flex box-center-Y">
                    <div class="input-item-title-icon"><img src="../../assets/image/yswap@2x.png" alt=""></div>
                    <div>Option Size</div>
                  </div>
                  <div class="box-flex1">
                    <v-radio
                      label="success"
                      color="success"
                      value="success"
                    ></v-radio>
                  </div>
                </div>
                <div class="display-flex box-center-Y currency-input">
                  <y-number-input :point="18" v-model="tradeForm.optionSize" @input="changeVal"></y-number-input>
                  <div class="currency">{{tradeTab.list[tradeTab.index]}}</div>
                </div>
              </div>
              <div class="input-item">
                <div class="display-flex box-center-Y input-item-title">
                  <div class="input-item-title-icon"><img src="../../assets/image/yswap@2x.png" alt=""></div>
                  <div class="box-flex1">Strike  Price</div>
                </div>
                <div class="display-flex box-center-Y currency-input">
                  <y-number-input :point="18" v-model="tradeForm.strikePrice" @input="changeVal"></y-number-input>
                  <div class="currency">USD</div>
                </div>
              </div>
              <div class="input-item">
                <div class="display-flex box-center-Y input-item-title">
                  <div class="input-item-title-icon"><img src="../../assets/image/yswap@2x.png" alt=""></div>
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
      <div class="document-out-box">
        <div class="document-box center-width display-flex box-center-start">
          <div class="sub-title-box">
            <div class="display-flex box-center-end">
              <div class="line1"></div>
              <div class="box-flex1 line2"></div>
            </div>
            <div class="text1">DOCUMENTS</div>
            <div class="text2">Hegic Protocol</div>
            <div class="text3">Learn Options Basics</div>
          </div>
          <div class="box-flex1 con-box display-flex box-center-Y document-list">
            <div class="box-flex1 document-item">
              <div class="document-title">Hegic protocol Whitpaper</div>
              <div>My Spring Festival To tell you the truth, I don't like the Spring Festival at all. When I was young I liked it very muchLost and Found My name is Jack.I picked up a couple of yellow keys in the library.If you are the owner,please call me at i have a friend who is falling in love. she honestly claims the sky is blue My Spring Festival To tell you the truth, I don't like the Spring Festival at all. When I was young ...
              </div>
            </div>
            <div class="box-flex1 document-item">
              <div class="document-title">GitBook：learn Options Basics</div>
              <div>My Spring Festival To tell you the truth, I don't like the Spring Festival at all. When I was young I liked it very muchLost and Found My name is Jack.I picked up a couple of yellow keys in the library.If you are the owner,please call me at i have a friend who is falling in love. she honestly claims the sky is blue My Spring Festival To tell you the truth, I don't like the Spring Festival at all. When I was young ...</div>
            </div>
          </div>
        </div>
      </div>
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
</template>

<script>
export { default } from './js/index'
</script>

<style scoped lang="scss">
  @import "../../assets/css/main";
  .holder-box{
    .head-box{
      width: 100%;
      background-image: url(../../assets/image/img_header.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
      min-height: 768px;
      color: $colorFFF;
      padding-bottom: 107px;
      img{
        height: 100%;
      }
      .name-logo{
        padding-top: 102px;
        font-size: 48px;
        font-family: DINCond-BlackAlternate;
        font-weight: 400;
        line-height: 58px;
        .logo-icon{
          width: 57px;
          height: 57px;
          margin-right: 22px;
        }
      }
      .tab-box{
        font-size: 18px;
        font-family: DINCond-BlackAlternate;
        font-weight: 400;
        margin-top: 55px;
        text-align: center;
        .tab-list{
          .tab-item{
            cursor: pointer;
            position: relative;
            &.active{
              color: $emColor;
            }
            &.active:after{
              position: absolute;
              content: '';
              width: 50px;
              height: 2px;
              background: $emColor;
              left: 50%;
              transform: translateX(-50%);
              bottom: -10px;
            }
          }
        }
        .btn-disconnect{
          cursor: pointer;
          width: 178px;
          height: 44px;
          line-height: 44px;
          border: 1px solid $colorFFF;
          opacity: 1;
          border-radius: 22px;
          margin-left: 65px;
        }
      }
      .desc{
        color: $colorFFF;
        margin-top: 172px;
        font-size: 82px;
        font-family: Impact;
        font-weight: 400;
        line-height: 98px;
      }
      .sub-desc{
        text-align: center;
        max-width: 848px;
        margin-top: 38px;
        color: $colorFFF;
        font-size: 20px;
        font-family: DIN-RegularItalic;
        font-weight: 400;
        line-height: 30px;
        font-style:oblique
      }
      .line-withe{
        width: 58px;
        height: 6px;
        margin: 26px auto 0;
        background: #FFFFFF;
      }
      .connect-wallet{
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
    .content{
      .con-box {
        margin-left: 110px;
      }
      padding-top: 88px;
      .sub-title-box{
        text-align: center;
        width: 175px;
        padding: 10px 0 12px;
        border-bottom: 3px solid $block;
        font-family: Impact;
        color: $block;
        .line1{
          width: 32px;
          height: 7px;
          background: $emColor;
        }
        .line2{
          height: 2px;
          background: $block;
        }
        .text1{
          font-size: 44px;
          line-height: 69px;
        }
        .text2{
          font-size: 57px;
          line-height: 69px;
          color: $emColor;
        }
        .text3{
          font-size: 23px;
        }
      }
      .trade-box{
        padding-bottom: 130px;
        .con-box{
          .trade-tab{
            border-bottom: 2px solid rgba(0, 0, 0, 0.1);
            .trade-tab-item{
              text-align: center;
              width: 140px;
              font-weight: 600;
              line-height: 52px;
              position: relative;
              color: $block;
              padding-bottom: 14px;
              cursor: pointer;
              font-size: 30px;
              &.active{
                color: $emColor;
              }
              &.active:after{
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: $emColor;
              }
            }
          }
          .right-con{
            margin-top: 46px;
            .text-box{
              width: 382px;
              font-size: 20px;
              line-height: 32px;
              color: $color666;
              .price-desc{
                margin-top: 46px;
                color: $block;
                font-size: 15px;
                line-height: 20px;
              }
            }
            >.box-flex1{
              margin-left: 27px;
              .input-item{
                margin-top: 28px;
                &:first-child{
                  margin-top: 0;
                }
                .input-item-title{
                  font-size: 24px;
                  font-weight: 400;
                  line-height: 28px;
                  color: $block;
                  .input-item-title-icon{
                    width: 30px;
                    height: 30px;
                  }
                }
                .currency-input{
                  margin-top: 15px;
                  height: 64px;
                  border: 1px solid #E6E6E6;
                  border-radius: 4px;
                  padding-left: 15px;
                  position: relative;
                  &.hold-select{
                    padding: 0 20px;
                  }
                  .my-number-input{
                    font-size: 18px;
                  }
                  .currency{
                    font-size: 18px;
                    font-weight: 400;
                    color: #303030;
                    width: 88px;
                    background-color: #E6E6E6;
                    border-radius: 0px 4px 4px 0px;
                    text-align: center;
                    line-height: 64px;
                  }
                  &.option-type-list{
                    width: 100%;
                    border-color: $emColor;
                    text-align: center;
                    height: 100%;
                    padding-left: 0;
                    .option-type-item{
                      cursor: pointer;
                      font-size: 20px;
                      color: $emColor;
                      line-height: 64px;
                      &.active{
                        background-color: $emColor;
                        color: $colorFFF;
                      }
                    }
                  }
                }
              }
              .trade-data-box{
                margin-top: 44px;
                >.box-flex1{
                  font-size: 14px;
                  font-weight: 400;
                  color: #B7B7B7;
                  .number{
                    margin-top: 8px;
                    font-size: 20px;
                    font-weight: 400;
                    color: $block;
                  }
                }
              }
              .trade-btn{
                cursor: pointer;
                margin-top: 44px;
                width: 100%;
                height: 48px;
                background-color: $emColor;
                border-radius: 4px;
                font-size: 16px;
                font-weight: 400;
                line-height: 48px;
                color: $colorFFF;
                text-align: center;
              }
            }
          }
        }
      }
      .contracts-out-box{
        background-color: $emColor;
        padding-top: 85px;
        padding-bottom: 69px;
        .contracts-box{
          .sub-title-box{
            margin-top: 80px;
            border-bottom-color: $colorFFF;
            .line1{
              background-color: $colorFFF;
            }
            .line2{
              background-color: $colorFFF;
            }
            .text1{
              font-size: 91px;
              line-height: 111px;
            }
            .text2{
              font-size: 47px;
              line-height: 57px;
              color: $colorFFF;
            }
            .text3{
              font-size: 34px;
              line-height: 48px;
              color: $colorFFF;
            }
          }
          .con-box{
            .contract-tab{
              border-bottom: 2px solid rgba(255, 255, 255, 0.2);
              .contract-tab-item{
                text-align: center;
                width: 190px;
                font-weight: 600;
                line-height: 52px;
                position: relative;
                color: rgba(255, 255, 255, 0.6);
                padding-bottom: 14px;
                cursor: pointer;
                font-size: 30px;
                &.active{
                  color: $colorFFF;
                }
                &.active:after{
                  content: '';
                  position: absolute;
                  bottom: -2px;
                  left: 0;
                  width: 100%;
                  height: 2px;
                  background-color: $colorFFF;
                }
              }
            }
            .data-list{
              .data-item{
                height: 46px;
                border-bottom: 2px solid rgba(255, 255, 255, 0.2);
                text-align: center;
                color: $colorFFF;
                &.data-head{
                  color: rgba(255, 255, 255, 0.6);
                }
              }
            }
          }
        }
      }
      .document-out-box{
        padding: 74px 0 56px;
        background-color: #F1F3F6;
        .document-box{
          .sub-title-box{
            padding-bottom: 11px;
            .text1{
              font-size: 34px;
              color: $emColor;
              line-height: 71px;
            }
            .text2{
              width: 100%;
              height: 44px;
              text-align: center;
              background-color: $block;
              font-size: 24px;
              line-height: 44px;
              color: $colorFFF;
            }
            .text3{
              margin-top: 8px;
              font-size: 18px;
              color: $block;
            }
          }
          .document-list{
            .document-item{
              padding: 55px 24px;
              width: 454px;
              height: 415px;
              border-radius: 8px;
              background-color: $bgColor;
              font-size: 18px;
              line-height: 32px;
              color: $color666;
              &:last-child{
                margin-left: 16px;
              }
              .document-title{
                font-size: 24px;
                line-height: 30px;
                color: $block;
                font-weight: 600;
                padding-bottom: 26px;
              }
            }
          }
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
    }
  }
</style>
