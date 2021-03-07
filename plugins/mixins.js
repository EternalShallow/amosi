import Vue from 'vue'
import { mapState } from 'vuex'
import { getWeb3 } from '../utils/web3/getWeb3'
import { TRANSACTION_ACTIONS } from '../utils/web3/constants'
import { keepPoint, milliFormat } from '../utils/function'
export default {
  computed: {
    'store.state.accounts': function () {
      return this.$store.state.accounts
    },
    ...mapState({})
  },
  watch: {
    // 获取用户信息
    '$store.state.accounts': function (val) {
      this.setAccount(val)
    }
  },
  data () {
    return {
      resolve: '',
      reject: '',
      account: '',
      promise: '' // 保存promise对象
    }
  },
  mounted () {
    window.ethereum.on('accountsChanged', function (accounts) {
      window.location.reload()
    })
    window.ethereum.on('chainIdChanged', function (accounts) {
      window.location.reload()
    })
  },
  methods: {
    async disConnectAccount () {
      console.log(this.$web3_http.currentProvider)
      // await this.$web3_http.currentProvider.disconnect()
      Vue.prototype.$account = ''
      Vue.prototype.$accounts = []
      this.account = ''
      this.$store.dispatch('updateAccounts', [])
    },
    async initWeb3 () {
      const that = this
      that.promise = new Promise((resolve, reject) => {
        that.reject = reject
        that.resolve = resolve
      })
      const { web3, web3_http, library } = await getWeb3()
      try {
        Vue.prototype.$web3_http = web3_http
        Vue.prototype.$web3 = web3
        Vue.prototype.$library = library
        const transaction = await web3_http.eth.getTransaction('0x683016ae30865e6518e0170e94cf967f1607d6f3fdc08d90dee43f7bde1e02e4')
        console.log(transaction)
        const inputs = web3_http.utils.toAscii(transaction.input)
        web3_http.eth.abi.decodeLog([{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }, {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address'
        }, { indexed: false, internalType: 'uint256', name: 'settlementFee', type: 'uint256' }, {
          indexed: false,
          internalType: 'uint256',
          name: 'totalFee',
          type: 'uint256'
        }],
        '0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000748656c6c6f252100000000000000000000000000000000000000000000000000',
        ['0x000000000000000000000000000000000000000000000000000000000000f310', '0x0000000000000000000000000000000000000000000000000000000000000010'])
        console.log(inputs)
        let accounts
        if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask) {
          // 请求账号授权
          await window.ethereum.enable()
          accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        } else {
          accounts = await web3.eth.getAccounts()
        }
        console.log(accounts)
        Vue.prototype.$account = accounts[0]
        Vue.prototype.$accounts = accounts
        that.account = accounts[0]
        await that.$store.dispatch('updateAccounts', accounts)
        that.initTransactions()
        if (!accounts) {
          setTimeout(function () {
            that.initWeb3()
          }, 500)
        } else {
          if (accounts.length < 1) {
            console.log('no accounts')
          }
          that.resolve({
            code: 200,
            message: 'success',
            data: accounts
          })
          return that.promise
        }
      } catch (err) {
        console.log(err)
        that.resolve(err)
        return that.promise
      }
    },
    async connectAccount () {
      const { web3 } = await getWeb3()
      if (!web3) {
        return this.initWeb3()
      }
      const that = this
      try {
        let accounts
        if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask) {
          // 请求账号授权
          await window.ethereum.enable()
          accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        } else {
          accounts = await web3.eth.getAccounts()
        }
        console.log(accounts)
        Vue.prototype.$account = accounts[0]
        Vue.prototype.$accounts = accounts
        that.account = accounts[0]
        await that.$store.dispatch('updateAccounts', accounts)
      } catch (err) {
        console.log(err)
      }
    },
    milliFormat (num) {
      return milliFormat(num)
    },
    keepPoint (num, point, isRound) {
      return keepPoint(num, point, isRound)
    },
    initTransactions () {
      this.$store.dispatch('updateTransactions', {
        hash: null,
        type: TRANSACTION_ACTIONS.INIT
      })
    },
    setAccount (val) {
      this.account = val[0]
    },
    closeLoading () {
      this.$store.dispatch('updateLoading', false)
    },
    openLoading () {
      this.$store.dispatch('updateLoading', true)
    }
  }
}
