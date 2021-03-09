import { useTokenContract, useTokenContractWeb3 } from '../../../utils/web3/web3Utils'
// import { BigNumber } from '@ethersproject/bignumber'
import COIN_ABI from '../../../utils/web3/coinABI'
import { sendTransactionEvent, useContractMethods } from '../../../utils/web3/contractEvent'
import * as echarts from 'echarts'
import { timeToDate1 } from '../../../utils/function'

let that
export default {
  data () {
    return {
      tokenContract: null,
      account: '',
      tradeTab: {
        list: [{
          currency: 'HBTC',
          contract: process.env.options_HBTC
        }, {
          currency: 'ETH',
          contract: process.env.options_HBTC
        }, {
          currency: 'HT',
          contract: process.env.options_HT
        }],
        index: 0
      },
      items: ['1day', '1week(7days)', '2week(14days)', '3week(21days)', '4week(28days)'],
      holdTime: {
        '1day': 1,
        '1week(7days)': 7,
        '2week(14days)': 14,
        '3week(21days)': 21,
        '4week(28days)': 28
      },
      optionsType: '1',
      tradeForm: {
        optionSize: '',
        strikePrice: '',
        selectList: ['1day', '1week(7days)', '2week(14days)', '3week(21days)', '4week(28days)'],
        hold: '1day'
      },
      fees: {
        strikePrice: 0,
        totalCost: 0,
        breakEven: 0
      },
      contractTab: {
        list: ['ACTIVE', 'HISTORY'],
        index: 0
      },
      contractHead: ['Type', 'Size', 'Strike Price', 'Price Now', 'Break-even', 'P&L', 'Placed At', 'Expires in', 'Exercise', 'Share'],
      contractDataList: [],
      price_HT: 14,
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
  watch: {
    'tradeForm.hold': function (val) {
      console.log(val)
      this.getFees()
    },
    optionsType: function (val) {
      console.log(val)
      this.getFees()
    }
  },
  mounted () {
    this.initPage()
    this.initChart()
  },
  methods: {
    initChart () {
      var chartDom = document.getElementById('priceChart')
      var myChart = echarts.init(chartDom)
      this.option && myChart.setOption(this.option)
    },
    changeTradeTab (i) {
      this.tradeTab.index = i
      this.getFees()
      this.getContractDataList()
    },
    changeContractTab (i) {
      this.contractTab.index = i
    },
    changeVal (val) {
      this.getFees()
    },
    async getFees () {
      console.log(!this.tradeForm.strikePrice || !this.tradeForm.optionSize)
      if (!this.tradeForm.strikePrice || !this.tradeForm.optionSize) {
        return
      }
      const current_currency = this.tradeTab.list[this.tradeTab.index]
      console.log(current_currency.contract)
      const contract = current_currency.contract
      const tokenContract = useTokenContract(contract, COIN_ABI[`futures_${current_currency.currency}`])
      // const tokenContract = useTokenContractWeb3(COIN_ABI[`futures_${current_currency.currency}`], contract)
      try {
        const fees = await this.getFeesResult(
          tokenContract,
          this.holdTime[this.tradeForm.hold] * 24 * 60 * 60,
          this.tradeForm.optionSize,
          this.tradeForm.strikePrice,
          this.optionsType)
        this.fees = {
          total: fees.total.toString(),
          settlementFee: fees.settlementFee.toString(),
          strikeFee: fees.strikeFee.toString(),
          periodFee: fees.periodFee.toString(),
          strikePrice: parseFloat(this.tradeForm.strikePrice),
          totalFee: parseFloat(this.$web3_http.utils.fromWei(fees.total.toString(), 'ether'))
        }
        this.fees.totalCost = parseFloat(this.keepPoint(this.price_HT * this.fees.totalFee, 2))
        if (this.optionsType === '1') {
          this.fees.breakEven = parseFloat(this.keepPoint(this.fees.strikePrice + (this.fees.totalCost / this.tradeForm.optionSize), 2))
        } else {
          this.fees.breakEven = parseFloat(this.keepPoint(this.fees.strikePrice - (this.fees.totalCost / this.tradeForm.optionSize), 2))
        }
        console.log(this.fees)
      } catch (e) {
        console.log(e)
      }
    },
    async getFeesResult (tokenContract, hold, optionSize, strikePrice, optionsType) {
      try {
        return await tokenContract.fees(
          hold,
          this.$web3_http.utils.toWei(optionSize, 'ether'),
          this.$web3_http.utils.toWei(strikePrice, 'ether'),
          optionsType)
      } catch (e) {
        console.log(e)
        return null
      }
    },
    async buyOptions () {
      if (!this.tradeForm.strikePrice || !this.tradeForm.optionSize) {
        return
      }
      const contract = this.tradeTab.list[this.tradeTab.index].contract
      const tokenContract = useTokenContractWeb3(COIN_ABI.futures_HT, contract)
      sendTransactionEvent(
        tokenContract.methods.create(
          this.holdTime[this.tradeForm.hold] * 24 * 60 * 60,
          that.$web3_http.utils.toWei(that.tradeForm.optionSize),
          this.$web3_http.utils.toWei(this.tradeForm.strikePrice, 'ether'),
          this.optionsType)
          .send({
            from: that.account,
            value: that.$web3_http.utils.toWei(that.tradeForm.optionSize)
          }), {
          summary: `create ${that.amount}`
        }, function () {
          that.getContractDataList()
        })
    },
    async connectWallet () {
      const init_wab3 = await this.initWeb3()
      console.log(init_wab3)
      that.$toastBox.showToastBox({
        type: 'none',
        text: init_wab3.message
      })
    },
    setAccount () {
      this.initPage()
    },
    initPage () {
      that = this
      if (that.$account) {
        that.account = that.$account
        that.getContractDataList()
      }
    },
    // 解析 getTransaction input 输入的参数
    async decodeParamsOfCreate (txHash, func_abi) {
      func_abi = func_abi || [{ internalType: 'uint256', name: 'period', type: 'uint256' }, {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }, { internalType: 'uint256', name: 'strike', type: 'uint256' }, {
        internalType: 'enum ISeaweedOptions.OptionType',
        name: 'optionType',
        type: 'uint8'
      }]
      const txData = await this.$web3_http.eth.getTransaction(txHash)
      const input = '0x' + txData.input.substr(10)
      return this.$web3_http.eth.abi.decodeParameters(func_abi, input)
    },
    async getContractDataList () {
      const current_currency = this.tradeTab.list[this.tradeTab.index]
      const contract = current_currency.contract
      const tokenContract = useTokenContract(contract, COIN_ABI[`futures_${current_currency.currency}`])
      const event = tokenContract.interface.events
      console.log(event)
      const lastBlock = await this.$web3_http.eth.getBlock('latest')
      const logs = await this.$library.getLogs({
        fromBlock: lastBlock.number - 5000,
        toBlock: lastBlock.number,
        address: contract
      })
      console.log(logs)
      that.contractDataList = []
      for (let i = 0; i < logs.length; i++) {
        try {
          const createParams = await this.decodeParamsOfCreate(logs[i].transactionHash)
          const optionId = parseInt(logs[i].topics[1])
          const options = await tokenContract.options(optionId)
          const strikePrice = this.$web3_http.utils.fromWei(options.strike.toString())
          const input = await this.$web3_http.eth.abi.decodeLog([
            { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
            {
              indexed: true,
              internalType: 'address',
              name: 'account',
              type: 'address'
            },
            { indexed: false, internalType: 'uint256', name: 'settlementFee', type: 'uint256' },
            {
              indexed: false,
              internalType: 'uint256',
              name: 'totalFee',
              type: 'uint256'
            }],
          logs[i].data,
          logs[i].topics)
          console.log(input)
          const fees = await this.getFeesResult(tokenContract, createParams.period, options.amount.toString(), strikePrice, options.optionType)
          const totalFee = parseFloat(this.$web3_http.utils.fromWei(fees.total.toString(), 'ether'))
          const totalCost = parseFloat(this.keepPoint(this.price_HT * totalFee, 2))
          let breakEven = 0
          if (options.optionType === 1) {
            breakEven = parseFloat(this.keepPoint(strikePrice + (totalCost / options.amount.toString()), 2))
          } else {
            breakEven = parseFloat(this.keepPoint(strikePrice - (totalCost / options.amount.toString()), 2))
          }
          that.contractDataList.push({
            type: options.optionType === 2 ? 'CALL' : 'PUT',
            size: `${that.$web3_http.utils.fromWei(options.amount.toString())} ${current_currency.currency}`,
            strikePrice,
            nowPrice: 235.1,
            breakEven: breakEven,
            PL: 12,
            placedAt: `${logs[i].address.substr(0, 3)}...${logs[i].address.substr(logs[i].address.length - 4, logs[i].address.length)}`,
            expireIn: timeToDate1(options.expiration),
            expiration: options.expiration,
            exercise: 1,
            share: 90,
            optionId
          })
        } catch (e) {
          console.log(e)
        }
      }
    },
    async exercise (v) {
      const that = this
      const current_currency = this.tradeTab.list[this.tradeTab.index]
      const contract = current_currency.contract
      const tokenContract = useTokenContract(contract, COIN_ABI[`futures_${current_currency.currency}`])
      await useContractMethods({
        contract: tokenContract,
        methodName: 'exercise',
        parameters: [
          v.optionId
        ],
        callback: function () {
          that.getContractDataList()
        }
      })
    }
  }
}
