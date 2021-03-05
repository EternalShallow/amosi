import { isAddress, useTokenContract, useTokenContractWeb3 } from '../../../utils/web3/web3Utils'
import { BigNumber } from '@ethersproject/bignumber'
import COIN_ABI from '../../../utils/web3/coinABI'
import { useContractMethods } from '../../../utils/web3/contractEvent'
import { approveEvent } from '../../../utils/web3/contractApprove'
import * as echarts from 'echarts'
let that
export default {
  data () {
    return {
      tokenContract: null,
      account: '',
      tradeTab: {
        list: [{
          name: 'HETH',
          contract: process.env.coin_address_HETH
        }, {
          name: 'HBTC',
          contract: process.env.coin_address_HBTC
        }, {
          name: 'WHT',
          contract: process.env.coin_address_WHT
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
      contractDataList: [
        {
          type: 'type',
          size: 21321,
          strikePrice: 123.12,
          nowPrice: 235.1,
          breakEven: 21,
          PL: 12,
          placedAt: 'akss',
          expireIn: '2021.12.2',
          exercise: 1,
          share: 90
        },
        {
          type: 'type',
          size: 21321,
          strikePrice: 123.12,
          nowPrice: 235.1,
          breakEven: 21,
          PL: 12,
          placedAt: 'akss',
          expireIn: '2021.12.2',
          exercise: 1,
          share: 90
        },
        {
          type: 'type',
          size: 21321,
          strikePrice: 123.12,
          nowPrice: 235.1,
          breakEven: 21,
          PL: 12,
          placedAt: 'akss',
          expireIn: '2021.12.2',
          exercise: 1,
          share: 90
        },
        {
          type: 'type',
          size: 21321,
          strikePrice: 123.12,
          nowPrice: 235.1,
          breakEven: 21,
          PL: 12,
          placedAt: 'akss',
          expireIn: '2021.12.2',
          exercise: 1,
          share: 90
        },
        {
          type: 'type',
          size: 21321,
          strikePrice: 123.12,
          nowPrice: 235.1,
          breakEven: 21,
          PL: 12,
          placedAt: 'akss',
          expireIn: '2021.12.2',
          exercise: 1,
          share: 90
        },
        {
          type: 'type',
          size: 21321,
          strikePrice: 123.12,
          nowPrice: 235.1,
          breakEven: 21,
          PL: 12,
          placedAt: 'akss',
          expireIn: '2021.12.2',
          exercise: 1,
          share: 90
        },
        {
          type: 'type',
          size: 21321,
          strikePrice: 123.12,
          nowPrice: 235.1,
          breakEven: 21,
          PL: 12,
          placedAt: 'akss',
          expireIn: '2021.12.2',
          exercise: 1,
          share: 90
        },
        {
          type: 'type',
          size: 21321,
          strikePrice: 123.12,
          nowPrice: 235.1,
          breakEven: 21,
          PL: 12,
          placedAt: 'akss',
          expireIn: '2021.12.2',
          exercise: 1,
          share: 90
        },
        {
          type: 'type',
          size: 21321,
          strikePrice: 123.12,
          nowPrice: 235.1,
          breakEven: 21,
          PL: 12,
          placedAt: 'akss',
          expireIn: '2021.12.2',
          exercise: 1,
          share: 90
        },
        {
          type: 'type',
          size: 21321,
          strikePrice: 123.12,
          nowPrice: 235.1,
          breakEven: 21,
          PL: 12,
          placedAt: 'akss',
          expireIn: '2021.12.2',
          exercise: 1,
          share: 90
        }
      ],
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
      console.log(this.tradeTab.list[this.tradeTab.index].contract)
      const contract = this.tradeTab.list[this.tradeTab.index].contract
      // const tokenContract = useTokenContract(contract, COIN_ABI.futures_HT)
      const tokenContract = useTokenContractWeb3(COIN_ABI.futures_HT, contract)
      try {
        const fees = await tokenContract.methods.fees(
          this.holdTime[this.tradeForm.hold] * 24 * 60 * 60,
          this.$web3_http.utils.toWei(this.tradeForm.optionSize, 'ether'),
          this.$web3_http.utils.toWei(this.tradeForm.strikePrice, 'ether'),
          this.optionsType).call()
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
    async buyOptions () {
      if (!this.tradeForm.strikePrice || !this.tradeForm.optionSize) {
        return
      }
      const contract = this.tradeTab.list[this.tradeTab.index].contract
      const tokenContract = useTokenContract(contract, COIN_ABI.futures_HT)
      const tokenContractEvent = useTokenContractWeb3(COIN_ABI.futures_HT, contract)
      await tokenContractEvent.getPastEvents('Create', {
        filter: { _from: '0xc4cd3bd2b2b5b1e66a440eaa3857ec2f12f42f44' },
        fromBlock: 0,
        toBlock: 'latest'
        // eslint-disable-next-line handle-callback-err
      }, (error, events) => {
        console.log(events)
      })
      console.log(
        this.holdTime[this.tradeForm.hold] * 24 * 60 * 60,
        this.$web3_http.utils.toWei(this.tradeForm.optionSize, 'ether'),
        this.$web3_http.utils.toWei(this.tradeForm.strikePrice, 'ether'),
        this.optionsType
      )
      await useContractMethods({
        contract: tokenContract,
        methodName: 'create',
        parameters: [
          this.holdTime[this.tradeForm.hold] * 24 * 60 * 60,
          '1',
          this.$web3_http.utils.toWei(this.tradeForm.strikePrice, 'ether'),
          this.optionsType
        ]
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
    async submit (v) {
      if (!that.$account) {
        return that.$toastBox.showToastBox({
          type: 'none',
          text: '请先连接ETH账号'
        })
      }
      const parameters = []
      if (v.inputs.length > 0) {
        for (let i = 0; i < v.inputs.length; i++) {
          if (!v.inputs[i].value) {
            return that.$toastBox.showToastBox({
              type: 'none',
              text: `please input ${v.inputs[i].name} (${v.inputs[i].type})`
            })
          }
          if (v.inputs[i].type === 'address' && !isAddress(v.inputs[i].value)) {
            return that.$toastBox.showToastBox({
              type: 'none',
              text: '地址不合法'
            })
          }
          parameters.push(v.inputs[i].value)
        }
      }
      if (v.name === 'approve') {
        await approveEvent(process.env.pool_coin_UNIV2_YF_USDT, {
          approve_amount: parameters[1],
          symbol: 'YF',
          address: parameters[0],
          wei: 'ether'
        })
      } else {
        await useContractMethods({
          contract: that.tokenContract,
          methodName: v.name,
          parameters: parameters,
          summary: 'Stake UNIV2'
        })
      }
      console.log(v)
    },
    async submitQuery (v, i) {
      const methodName = v.name
      if (!that.$account) {
        return that.$toastBox.showToastBox({
          type: 'none',
          text: '请先连接ETH账号'
        })
      }
      const parameters = []
      if (v.inputs.length > 0) {
        for (let i = 0; i < v.inputs.length; i++) {
          if (!v.inputs[i].value) {
            return that.$toastBox.showToastBox({
              type: 'none',
              text: `please input ${v.inputs[i].name} (${v.inputs[i].type})`
            })
          }
          if (v.inputs[i].type === 'address' && !isAddress(v.inputs[i].value)) {
            return that.$toastBox.showToastBox({
              type: 'none',
              text: '地址不合法'
            })
          }
          parameters.push(v.inputs[i].value)
        }
      }
      let method
      if (parameters.length < 1) {
        method = that.tokenContract[methodName]()
      } else if (parameters.length === 1) {
        method = that.tokenContract[methodName](parameters[0])
      } else if (parameters.length === 2) {
        method = that.tokenContract[methodName](parameters[0], parameters[1])
      } else if (parameters.length === 3) {
        method = that.tokenContract[methodName](parameters[0], parameters[1], parameters[2])
      } else if (parameters.length === 4) {
        method = that.tokenContract[methodName](parameters[0], parameters[1], parameters[2], parameters[3])
      }
      const value = await method
      console.log(value)
      v.value = value
      if (BigNumber.isBigNumber(value)) {
        v.value = value.toString()
      }
      console.log(v)
      this.read_contract.splice(i, 1, v)
    },
    errors () {
    },
    setAccount () {
      this.initPage()
    },
    initPage () {
      that = this
      if (that.$account) {
        console.log(that.$web3_http)
        that.account = that.$account
        that.initContract()
      }
    },
    async initABI () {
      this.write_contract = COIN_ABI.heco_abi.filter(item => (item.type === 'event' || item.type === 'function') && !item.constant && item.type !== 'constructor')
      this.read_contract = COIN_ABI.heco_abi.filter(item => !((item.type === 'event' || item.type === 'function') && !item.constant) && item.type !== 'constructor')
      console.log(this.write_contract)
      console.log(this.read_contract)
      for (let i = 0; i < this.write_contract.length; i++) {
        const event = this.write_contract[i]
        const inputs = event.inputs
        for (let j = 0; j < inputs.length; j++) {
          event.inputs[j].value = ''
        }
        this.write_contract.splice(i, 1, event)
      }
      for (let i = 0; i < this.read_contract.length; i++) {
        const event = this.read_contract[i]
        const inputs = event.inputs
        if (inputs.length > 0) {
          event.value = ''
          for (let j = 0; j < inputs.length; j++) {
            event.inputs[j].value = ''
          }
        } else {
          const value = await that.tokenContract[event.name]()
          if (BigNumber.isBigNumber(value)) {
            event.value = value.toString()
          } else {
            event.value = value
            console.log(event.name, await that.tokenContract[event.name]())
          }
        }
        this.read_contract.splice(i, 1, event)
      }
    },
    async initContract () {
      try {
        that.tokenContract = useTokenContract('0xfc84727e575bb68fa5205f542e43130f33be868d', COIN_ABI.heco_abi)
        console.log(await that.tokenContract.balanceOf(that.account))
        await this.initABI()
      } catch (e) {
        console.log(e)
      }
    }
  }
}
