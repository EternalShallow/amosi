// let that
export default {
  data () {
    return {
      tokenContract: null,
      account: '',
      interfaceList: {
        list: ['LIQUIDITY<br>NDING REWARDS', 'LIQUIDITY<br>UTILIZATION REWARDS', 'STAKING EARN<br>WBTC OR ETH', 'BONDING CURVE<br>BUY OR SELL HEGIC', 'HEGIC TOKEN<br>ANALYTICS'],
        index: 0
      }
    }
  },
  mounted () {
    // that = this
  },
  methods: {
    setAccount () {
    },
    changeInterfaceTab (i) {
      this.interfaceList.index = i
    }
  }
}
