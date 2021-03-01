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
  </div>
</template>

<script>
export { default } from './js/index'
</script>

<style scoped lang="scss">
  @import "../../assets/css/main";
  .holder-box{
    .trade-box{
      padding-top: 88px;
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
              .space-line{
                width: 150px;
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
  }
</style>
