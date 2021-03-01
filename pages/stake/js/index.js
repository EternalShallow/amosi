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
      ]
    }
  },
  mounted () {
    // that = this
  },
  methods: {
    setAccount () {
    }
  }
}
