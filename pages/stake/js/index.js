import * as echarts from 'echarts'
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
    this.initChart()
  },
  methods: {
    initChart () {
      var chartDom = document.getElementById('stakeChart')
      var myChart = echarts.init(chartDom)
      this.option && myChart.setOption(this.option)
    },
    setAccount () {
    },
    changeLiquidity (i) {
      this.liquidity.index = i
    },
    stakeBtn () {}
  }
}
