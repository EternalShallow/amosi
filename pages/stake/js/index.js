import * as echarts from 'echarts'
import { approveEvent } from '../../../utils/web3/contractApprove'
import { useTokenContract, useTokenContractWeb3 } from '../../../utils/web3/web3Utils'
import { MaxUint256 } from '@ethersproject/constants'
import COIN_ABI from '../../../utils/web3/coinABI'
import { keepPoint, numAdd, numDiv, numMulti, numSub } from '../../../utils/function'
import { sendTransactionEvent, useContractMethods } from '../../../utils/web3/contractEvent'
let that
export default {
  data () {
    return {
      tokenContract: null,
      account: '',
      amount: '',
      receive: '',
      allowance: 0,
      currentLiquidity: null,
      poolContract: null,
      isApprove: true,
      totalBalance: 0,
      totalSupply: 0,
      historicalList: [
        {
          icon_url: require('../../../assets/image/icon_historical_1@2x.png'),
          number: 0,
          currency: 'WBTC',
          title: 'CUMULATIVE HISTORICAL OPTIONS VOLUME',
          sub_title: 'Provide WBTC to this pool to start selling WBTC call and put options and earning yield on WBTC'
        },
        {
          icon_url: require('../../../assets/image/icon_historical_2@2x.png'),
          number: 0,
          currency: 'WBTC',
          title: 'Writers\' Liquidity Historical lurnover ',
          sub_title: 'Provide WBTC to this pool to start selling WBTC call and put options and earning yield on WBTC'
        },
        {
          icon_url: require('../../../assets/image/icon_historical_3@2x.png'),
          number: 0,
          currency: 'WBTC',
          title: 'CUMULATIVE HISTORICAL OPTIONS VOLUME',
          sub_title: 'Provide WBTC to this pool to start selling WBTC call and put options and earning yield on WBTC'
        }
      ],
      poolList: [
        {
          icon_url: require('../../../assets/image/icon_pool_1@2x.png'),
          name: 'WBTC POOL',
          desc: 'Provide WBTC to this pool to start selling WBTC call and put options and earning yield on WBTC'
        },
        {
          icon_url: require('../../../assets/image/icon_pool_2@2x.png'),
          name: 'ETH POOL',
          desc: 'Provide ETH to this pool to start selling ETH call and put options and earning yield on ETH'
        }
      ],
      liquidity: {
        list: [
          {
            currency: 'HBTC',
            contractCurrency: process.env.currency_HBTC,
            contractPool: process.env.pool_HT,
            icon_url: require('../../../assets/image/icon_pool_1@2x.png'),
            desc: 'Provide WBTC to this pool to start selling WBTC call and put options and earning yield on WBTC'
          }, {
            currency: 'HETH',
            contractCurrency: process.env.currency_HETH,
            contractPool: process.env.pool_HT,
            icon_url: require('../../../assets/image/icon_pool_2@2x.png'),
            desc: 'Provide ETH to this pool to start selling ETH call and put options and earning yield on ETH'
          }, {
            currency: 'HT',
            contractCurrency: process.env.currency_HT,
            contractPool: process.env.pool_HT,
            icon_url: require('../../../assets/image/icon_pool_2@2x.png'),
            desc: 'Provide ETH to this pool to start selling ETH call and put options and earning yield on ETH'
          }
        ],
        index: 0
      },
      liquidityValue: 45,
      option: {
        grid: {
          x: 10,
          y: 0,
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
        tooltip: {
          trigger: 'axis', // 坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        series: [
          {
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
          }
        ]
      }
    }
  },
  mounted () {
    // that = this
    this.initPage()
    this.initChart()
  },
  methods: {
    async initPage () {
      that = this
      await that.getContractInit()
      console.log(MaxUint256)
      if (that.$account) {
        that.account = that.$account
      }
    },
    async getAllowance () {
      const allowance = await that.poolContract.allowance(that.account, that.currentLiquidity.contractPool)
      that.allowance = allowance.toString()
      console.log(that.allowance, that.$web3.utils.toWei(that.amount.toString()))
      that.isApprove = parseInt(allowance) >= parseInt(that.$web3.utils.toWei(that.amount.toString()))
      console.log(that.isApprove)
    },
    async getContractInit () {
      console.log(that.liquidity.list[that.liquidity.index])
      try {
        that.currentLiquidity = that.liquidity.list[that.liquidity.index]
        that.poolContract = useTokenContract(that.currentLiquidity.contractPool, COIN_ABI.pool_HT)
        // if (that.currentLiquidity.currency === 'HT') {
        //   that.poolContract = useTokenContract(that.currentLiquidity.contractPool, COIN_ABI.pool_HT)
        // } else {
        //   that.poolContract = useTokenContract(that.currentLiquidity.contractPool, COIN_ABI.pool_HBTC)
        // }
        console.log(that.poolContract)
        const totalBalance = await that.poolContract.totalBalance()
        const totalSupply = await that.poolContract.totalSupply()
        that.totalBalance = parseFloat(that.$web3_http.utils.fromWei(totalBalance.toString()))
        that.totalSupply = parseFloat(that.$web3_http.utils.fromWei(totalSupply.toString()))
      } catch (e) {
        console.log(e)
      }
    },
    changeAmount (val) {
      if (!val) {
        that.receive = ''
        return
      }
      that.amount = parseFloat(val)
      if (that.amount < that.totalBalance) {
        console.log(numMulti(that.totalSupply, that.amount - 0.0001), numSub(that.totalBalance, that.amount - 0.0001))
        console.log(numDiv(numMulti(that.totalSupply, that.amount), numSub(that.totalBalance, that.amount)))
        that.receive = parseFloat(keepPoint(numDiv(numMulti(that.totalSupply, that.amount), numSub(that.totalBalance, that.amount)), 8))
      } else {
        console.log(numMulti(that.totalSupply, that.amount - 0.0001), numSub(that.totalBalance, that.amount - 0.0001))
        that.receive = parseFloat(keepPoint(numDiv(numMulti(that.totalSupply, that.amount - 0.0001), numSub(that.totalBalance, that.amount - 0.0001)), 8))
      }
      that.getAllowance()
    },
    changeReceive (val) {
      if (!val) {
        that.amount = ''
        return
      }
      that.receive = parseFloat(val)
      that.amount = parseFloat(keepPoint(numDiv(numMulti(that.totalBalance, that.receive), numAdd(that.receive, that.totalSupply)), 8))
      that.getAllowance()
    },
    initChart () {
      var chartDom = document.getElementById('stakeChart')
      var myChart = echarts.init(chartDom)
      that.option && myChart.setOption(that.option)
    },
    setAccount () {
      this.initPage()
    },
    async changeLiquidity (i) {
      that.liquidity.index = i
      await that.getContractInit()
    },
    approve () {
      approveEvent(that.currentLiquidity.contractPool, {
        approve_amount: that.amount,
        symbol: that.currentLiquidity.currency,
        address: that.currentLiquidity.contractCurrency,
        wei: 'ether'
      }, that.poolContract, function () {
        that.getAllowance()
      })
    },
    async deposit () {
      if (!that.amount || !that.receive) {
        return alert('数据不能为空')
      }
      const tokenContract = useTokenContractWeb3(COIN_ABI.pool_HT, that.currentLiquidity.contractPool)
      sendTransactionEvent(tokenContract.methods.provide('0').send({
        from: that.account,
        value: that.$web3_http.utils.toWei(that.amount.toString())
      }), {
        summary: `provide ${that.amount} ${that.currentLiquidity.currency}`
      }, function () {
        that.amount = ''
        that.changeAmount('')
        console.log(`provide ${that.amount} ${that.currentLiquidity.currency} success...`)
      })
    },
    async withdraw () {
      await useContractMethods({
        contract: that.poolContract,
        methodName: 'withdraw',
        parameters: [
          that.$web3_http.utils.toWei(that.amount.toString())
        ]
      }, function () {
        console.log('provide success...')
      })
    }
  }
}
