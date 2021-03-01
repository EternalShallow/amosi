import { isAddress, useTokenContract } from '../../../utils/web3/web3Utils'
import { BigNumber } from '@ethersproject/bignumber'
import COIN_ABI from '../../../utils/web3/coinABI'
import { useContractMethods } from '../../../utils/web3/contractEvent'
import { approveEvent } from '../../../utils/web3/contractApprove'

let that
export default {
  data () {
    return {
      tokenContract: null,
      account: '',
      tabs: ['Trade', 'Stake', 'Reward'],
      tab: 0,
      tradeTab: {
        list: ['HETH', 'HBTC', 'HT'],
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
      optionsType: {
        index: 0,
        list: [{
          name: 'PUT',
          type: 1
        },
        {
          name: 'CALL',
          type: 2
        }]
      },
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
      joinList: [
        {
          icon: require('../../../assets/image/yswap@2x.png'),
          title: 'TWItter',
          text: 'My Spring Festival To tell you the truth, I don like the Spring Festival at all.'
        },
        {
          icon: require('../../../assets/image/yswap@2x.png'),
          title: 'Telegram',
          text: 'My Spring Festival To tell you the truth, I don like the Spring Festival at all.'
        },
        {
          icon: require('../../../assets/image/yswap@2x.png'),
          title: 'Discord',
          text: 'My Spring Festival To tell you the truth, I don like the Spring Festival at all.'
        },
        {
          icon: require('../../../assets/image/yswap@2x.png'),
          title: 'GitHub',
          text: 'My Spring Festival To tell you the truth, I don like the Spring Festival at all.'
        },
        {
          icon: require('../../../assets/image/yswap@2x.png'),
          title: 'Medium',
          text: 'My Spring Festival To tell you the truth, I don like the Spring Festival at all.'
        },
        {
          icon: require('../../../assets/image/yswap@2x.png'),
          title: 'DeFi Pulse',
          text: 'My Spring Festival To tell you the truth, I don like the Spring Festival at all.'
        }
      ]
    }
  },
  watch: {
    'tradeForm.hold': function (val) {
      console.log(val)
      this.getFees()
    }
  },
  mounted () {
    this.initPage()
  },
  methods: {
    selectTab (i) {
      this.tab = i
    },
    changeOptionType (i) {
      this.optionsType.index = i
      this.getFees()
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
      const tokenContract = useTokenContract(process.env.future_HT, COIN_ABI.futures_HT)
      try {
        const fees = await tokenContract.fees(
          this.holdTime[this.tradeForm.hold] * 24 * 60 * 60,
          this.$web3_http.utils.toWei(this.tradeForm.optionSize, 'ether'),
          this.$web3_http.utils.toWei(this.tradeForm.strikePrice, 'ether'),
          this.optionsType.list[this.optionsType.index].type)
        this.fees = {
          total: fees.total.toString(),
          settlementFee: fees.settlementFee.toString(),
          strikeFee: fees.strikeFee.toString(),
          periodFee: fees.periodFee.toString(),
          strikePrice: parseFloat(this.tradeForm.strikePrice),
          totalFee: parseFloat(this.$web3_http.utils.fromWei(fees.total.toString(), 'ether'))
        }
        this.fees.totalCost = parseFloat(this.keepPoint(this.price_HT * this.fees.totalFee, 2))
        if (this.optionsType.list[this.optionsType.index].type === 1) {
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
      const tokenContract = useTokenContract(process.env.future_HT, COIN_ABI.futures_HT)
      console.log(
        this.holdTime[this.tradeForm.hold] * 24 * 60 * 60,
        this.$web3_http.utils.toWei(this.tradeForm.optionSize, 'ether'),
        this.$web3_http.utils.toWei(this.tradeForm.strikePrice, 'ether'),
        this.optionsType.list[this.optionsType.index].type
      )
      try {
        await useContractMethods({
          contract: tokenContract,
          methodName: 'create',
          parameters: [
            this.holdTime[this.tradeForm.hold] * 24 * 60 * 60,
            '99',
            this.$web3_http.utils.toWei(this.tradeForm.strikePrice, 'ether'),
            this.optionsType.list[this.optionsType.index].type
          ]
        })
      } catch (e) {
        console.log(e)
      }
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
