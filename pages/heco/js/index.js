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
      name: '',
      email: '',
      paramsGroup: {},
      write_contract: [],
      read_contract: [],
      tabs: ['Read Contract', 'Write Contract'],
      tab: null
    }
  },
  mounted () {
    this.initPage()
  },
  methods: {
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
