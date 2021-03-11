import { approveEvent } from '../../../utils/web3/contractApprove'
import { useTokenContract, useTokenContractWeb3 } from '../../../utils/web3/web3Utils'
import { MaxUint256 } from '@ethersproject/constants'
import COIN_ABI from '../../../utils/web3/coinABI'
import { keepPoint, numAdd, numDiv, numMulti, numSub } from '../../../utils/function'
import { sendTransactionEvent, useContractMethods } from '../../../utils/web3/contractEvent'
let that
export default {
  data () {
    return {
      tokenContract: null,
      account: '',
      amount: '',
      receive: '',
      allowance: 0,
      currentLiquidity: null,
      poolContract: null,
      isApprove: true,
      selfPoolBalance: 0,
      balanceWrite: 0,
      balanceRate: '0',
      totalBalance: 0,
      totalSupply: 0,
      showWithdraw: false,
      withdrawProfitAmount: '',
      withdrawProfitWriteAmount: '',
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
        list: [
          {
            currency: 'HBTC',
            contractCurrency: process.env.currency_HBTC,
            contractPool: process.env.pool_HT,
            icon_url: require('../../../assets/image/icon_pool_1@2x.png'),
            desc: 'Provide WBTC to this pool to start selling WBTC call and put options and earning yield on WBTC'
          }, {
            currency: 'HETH',
            contractCurrency: process.env.currency_HETH,
            contractPool: process.env.pool_HT,
            icon_url: require('../../../assets/image/icon_pool_2@2x.png'),
            desc: 'Provide ETH to this pool to start selling ETH call and put options and earning yield on ETH'
          }, {
            currency: 'HT',
            contractCurrency: process.env.currency_HT,
            contractPool: process.env.pool_HT,
            icon_url: require('../../../assets/image/icon_pool_2@2x.png'),
            desc: 'Provide ETH to this pool to start selling ETH call and put options and earning yield on ETH'
          }
        ],
        index: 0
      },
      liquidityValue: 45
    }
  },
  mounted () {
    // that = this
    this.initPage()
  },
  methods: {
    async initPage () {
      that = this
      await that.getContractInit()
      console.log(MaxUint256.toHexString())
      if (that.$account) {
        that.account = that.$account
      }
    },
    async getAllowance () {
      const allowance = await that.poolContract.allowance(that.account, that.currentLiquidity.contractPool)
      that.allowance = allowance.toString()
      console.log(that.allowance, that.$web3.utils.toWei(that.amount.toString()))
      that.isApprove = parseInt(allowance) >= parseInt(that.$web3.utils.toWei(that.amount.toString()))
      console.log(that.isApprove)
    },
    async getContractInit () {
      console.log(that.liquidity.list[that.liquidity.index])
      try {
        that.currentLiquidity = that.liquidity.list[that.liquidity.index]
        that.poolContract = useTokenContract(that.currentLiquidity.contractPool, COIN_ABI.pool_HT)
        // if (that.currentLiquidity.currency === 'HT') {
        //   that.poolContract = useTokenContract(that.currentLiquidity.contractPool, COIN_ABI.pool_HT)
        // } else {
        //   that.poolContract = useTokenContract(that.currentLiquidity.contractPool, COIN_ABI.pool_HBTC)
        // }
        console.log(that.poolContract)
        const totalBalance = await that.poolContract.totalBalance()
        const totalSupply = await that.poolContract.totalSupply()
        that.totalBalance = parseFloat(that.$web3_http.utils.fromWei(totalBalance.toString()))
        that.totalSupply = parseFloat(that.$web3_http.utils.fromWei(totalSupply.toString()))
        const shareOf = await that.poolContract.shareOf(that.account)
        that.balanceRate = parseFloat(keepPoint(that.$web3_http.utils.fromWei(shareOf.toString()), 2))
        that.selfPoolBalance = parseFloat(keepPoint(numMulti(that.balanceRate / 100, that.totalBalance), 4))
        console.log(that.selfPoolBalance, that.totalBalance)
        const balanceWrite = await that.poolContract.balanceOf(that.account)
        that.balanceWrite = parseFloat(keepPoint(balanceWrite, 4))
      } catch (e) {
        console.log(e)
      }
    },
    changeAmount (val) {
      if (!val) {
        that.receive = ''
        return
      }
      that.amount = parseFloat(val)
      if (that.amount < that.totalBalance) {
        console.log(numMulti(that.totalSupply, that.amount), numSub(that.totalBalance, that.amount))
        console.log(numDiv(numMulti(that.totalSupply, that.amount), numSub(that.totalBalance, that.amount)))
        that.receive = parseFloat(keepPoint(numDiv(numMulti(that.totalSupply, that.amount), numSub(that.totalBalance, that.amount)), 4))
      } else {
        console.log(numMulti(that.totalSupply, that.amount), numSub(that.totalBalance, that.amount))
        that.receive = parseFloat(keepPoint(numDiv(numMulti(that.totalSupply, that.amount), numSub(that.totalBalance, that.amount)), 4))
      }
    },
    changeWithdrawProfitWriteAmount (val) {
      if (!val) {
        that.withdrawProfitWriteAmount = ''
        return
      }
      that.withdrawProfitAmount = parseFloat(val)
      if (that.withdrawProfitAmount < that.totalBalance) {
        that.withdrawProfitWriteAmount = numDiv(numMulti(that.totalSupply, that.withdrawProfitAmount), numSub(that.totalBalance, that.withdrawProfitAmount))
      } else {
        console.log(that.totalSupply, that.withdrawProfitAmount, that.totalBalance, that.withdrawProfitAmount)
        console.log(numMulti(that.totalSupply, that.withdrawProfitAmount), numSub(that.totalBalance, that.withdrawProfitAmount))
        console.log(numDiv(numMulti(that.totalSupply, that.withdrawProfitAmount), numSub(that.totalBalance, that.withdrawProfitAmount)))
        that.withdrawProfitWriteAmount = numDiv(numMulti(that.totalSupply, that.withdrawProfitAmount), numSub(that.totalBalance, that.withdrawProfitAmount))
      }
    },
    changeReceive (val) {
      if (!val) {
        that.amount = ''
        return
      }
      that.receive = parseFloat(val)
      that.amount = parseFloat(keepPoint(numDiv(numMulti(that.totalBalance, that.receive), numAdd(that.receive, that.totalSupply)), 8))
      that.getAllowance()
    },
    setAccount () {
      this.initPage()
    },
    async changeLiquidity (i) {
      that.liquidity.index = i
      await that.getContractInit()
    },
    approve () {
      approveEvent(that.currentLiquidity.contractPool, {
        approve_amount: that.amount,
        symbol: that.currentLiquidity.currency,
        address: that.currentLiquidity.contractCurrency,
        wei: 'ether'
      }, that.poolContract, function () {
        that.getAllowance()
      })
    },
    async deposit () {
      if (!that.amount || !that.receive) {
        return alert('数据不能为空')
      }
      const tokenContract = useTokenContractWeb3(COIN_ABI.pool_HT, that.currentLiquidity.contractPool)
      sendTransactionEvent(tokenContract.methods.provide('0').send({
        from: that.account,
        value: that.$web3_http.utils.toWei(that.amount.toString())
      }), {
        summary: `provide ${that.amount} ${that.currentLiquidity.currency}`
      }, function () {
        that.amount = ''
        that.changeAmount('')
        console.log(`provide ${that.amount} ${that.currentLiquidity.currency} success...`)
      })
    },
    async withdraw () {
      await useContractMethods({
        contract: that.poolContract,
        methodName: 'withdraw',
        parameters: [
          that.$web3_http.utils.toWei(that.amount.toString())
        ]
      }, function () {
        console.log('provide success...')
      })
    },
    async withdrawProfit () {
      await useContractMethods({
        contract: that.poolContract,
        methodName: 'withdraw',
        parameters: [
          that.$web3_http.utils.toWei(that.withdrawProfitAmount.toString()),
          MaxUint256.toHexString()
        ]
      }, function () {
        that.withdrawProfitAmount = ''
        that.showWithdraw = false
        console.log(`withdraw ${that.withdrawProfitAmount} ${that.currentLiquidity.currency} success...`)
      })
      // const tokenContract = useTokenContractWeb3(COIN_ABI.pool_HT, that.currentLiquidity.contractPool)
      // sendTransactionEvent(tokenContract.methods.withdraw(that.$web3_http.utils.toWei(that.withdrawProfitAmount.toString()), MaxUint256.toHexString()).send({
      //   from: that.account
      // }), {
      //   summary: `withdraw ${that.withdrawProfitAmount} ${that.currentLiquidity.currency}`
      // }, function () {
      //   that.withdrawProfitAmount = ''
      //   that.showWithdraw = false
      //   console.log(`withdraw ${that.withdrawProfitAmount} ${that.currentLiquidity.currency} success...`)
      // })
    }
  }
}
