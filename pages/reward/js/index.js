// let that
import * as echarts from 'echarts'
export default {
  data () {
    return {
      tokenContract: null,
      account: '',
      interfaceTab: {
        list: [{
          name: 'LIQUIDITY<br>ENDING REWARDS',
          type: 'ending'
        }, {
          name: 'LIQUIDITY<br>UTILIZATION REWARDS',
          type: 'utilization'
        }, {
          name: 'STAKING EARN<br>WBTC OR ETH',
          type: 'stakeEarn'
        }, {
          name: 'BONDING CURVE<br>BUY OR SELL HEGIC',
          type: 'bonding'
        }, {
          name: 'HEGIC TOKEN<br>ANALYTICS',
          type: 'token'
        }],
        index: 0
      },
      endTab: {
        list: [
          {
            currency: 'WBTC'
          },
          {
            currency: 'ETH'
          }
        ],
        index: 0
      },
      endTotalList: [
        {
          icon_url: require('../../../assets/image/icon_reward_end_1@2x.png'),
          balance: 0,
          type: 'claim',
          currency: 'RHEGIC2',
          btn_text: 'CLAIM REWARDS',
          title: 'ETH POOL LIQUIDITY MINING REWARDS',
          sub_title: 'Click the Claim Rewards button and confirm the transaction forreceiving ta be able to withdraw'
        },
        {
          icon_url: require('../../../assets/image/icon_reward_end_2@2x.png'),
          balance: 0,
          type: 'lock',
          currency: 'ETH',
          btn_text: 'LOCK TOKENS',
          title: 'Your Address Balance',
          sub_title: 'Lock wniteETH to start receiving. You will need to manually claim HEGIC'
        },
        {
          icon_url: require('../../../assets/image/icon_reward_end_3@2x.png'),
          balance: 0,
          type: 'unlock',
          currency: 'ETH',
          btn_text: 'UNLOCK TOKENS',
          title: 'Locked',
          sub_title: 'Unlock writrETH ta be able to withdraw awards in rHEGIC tokens your ETH from the liquidity pool'
        }
      ],
      stakeEarnList: [
        {
          icon_url: require('../../../assets/image/icon_reward_stake_1@2x.png'),
          balance: 0,
          type: 'withdraw',
          currency: 'RHEGIC2',
          btn_text: 'WITHDRAW',
          title: 'Total Staked',
          sub_title: 'Click the Claim Rewards button and confirm the transaction forreceiving ta be able to withdraw'
        },
        {
          icon_url: require('../../../assets/image/icon_reward_stake_2@2x.png'),
          balance: 0,
          type: 'stake',
          currency: 'ETH',
          btn_text: 'STAKE HEGIC',
          title: 'Your Address Balance',
          sub_title: 'Lock wniteETH to start receiving. You will need to manually claim HEGIC'
        },
        {
          icon_url: require('../../../assets/image/icon_reward_stake_3@2x.png'),
          balance: 0,
          type: 'clalm',
          currency: 'ETH',
          btn_text: 'CLALM REWARDA',
          title: 'Rewards',
          sub_title: 'Unlock writrETH ta be able to withdraw awards in rHEGIC tokens your ETH from the liquidity pool'
        }
      ],
      utilizationTab: {
        list: [
          {
            currency: 'ALL'
          },
          {
            currency: 'WBTC'
          },
          {
            currency: 'ETH'
          }
        ],
        index: 0
      },
      utilizationData: [
        {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        },
        {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        },
        {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }
      ],
      boundTab: {
        list: ['BUY', 'SELL'],
        index: 0
      },
      option: {
        grid: {
          x: 10,
          y: 30,
          x2: 10,
          y2: 10
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            show: false
          },
          axisTick: { // y轴刻度线
            show: false
          },
          data: ['', '', '', '', '', '', '']
        },
        yAxis: {
          axisLabel: {
            show: false
          },
          type: 'value'
        },
        legend: {
          data: ['Worthless Expiration', 'Unlimited Upside']
        },
        tooltip: {
          trigger: 'axis', // 坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        series: [
          {
            name: 'Unlimited Upside',
            itemStyle: {
              normal: {
                color: '#9CB918',
                lineStyle: {
                  color: '#9CB918'
                }
              }
            },
            data: [789, 932, 91, 934, 560, 670, 20],
            type: 'line',
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 0.5, [{
                  offset: 0,
                  color: 'rgba(152, 180, 26, 0.5)'
                }, {
                  offset: 1,
                  color: 'rgba(152, 180, 26, 0.05) '
                }])
              }
            },
            smooth: true
          },
          {
            name: 'Worthless Expiration',
            itemStyle: {
              normal: {
                color: '#C51313',
                lineStyle: {
                  color: '#C51313'
                }
              }
            },
            data: [820, 932, 901, 934, 1290, 330, 130],
            type: 'line',
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 0.5, [{
                  offset: 0,
                  color: 'rgba(197, 19, 19, 0.5) '
                }, {
                  offset: 1,
                  color: 'rgba(197, 19, 19, 0.05) '
                }])
              }
            },
            smooth: true
          }
        ]
      }
    }
  },
  mounted () {
    // that = this
    this.initChart()
  },
  methods: {
    initChart () {
      var chartDom = document.getElementById('hegicChart')
      var myChart = echarts.init(chartDom)
      this.option && myChart.setOption(this.option)
    },
    setAccount () {
    },
    changeInterfaceTab (i) {
      this.interfaceTab.index = i
    },
    changeUtilizationTab (i) {
      this.utilizationTab.index = i
    },
    changeEndTab (i) {
      this.endTab.index = i
    },
    changeBoundTab (i) {
      this.boundTab.index = i
    }
  }
}
