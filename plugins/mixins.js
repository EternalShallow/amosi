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
    },
    closeLoading () {
      this.$store.dispatch('updateLoading', false)
    },
    openLoading () {
      this.$store.dispatch('updateLoading', true)
    }
  }
}
