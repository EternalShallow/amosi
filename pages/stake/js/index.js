// let that
export default {
  data () {
    return {
      tokenContract: null,
      account: '',
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
        list: ['WBTC', 'ETH'],
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
    changeLiquidity (i) {
      this.liquidity.index = i
    }
  }
}
