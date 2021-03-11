import { useTokenContract, useTokenContractWeb3 } from '../../../utils/web3/web3Utils'
import COIN_ABI from '../../../utils/web3/coinABI'
import { sendTransactionEvent, useContractMethods } from '../../../utils/web3/contractEvent'
import { keepPoint, numDiv } from '../../../utils/function'
import { approveEvent } from '../../../utils/web3/contractApprove'
let that
export default {
  data () {
    return {
      tokenContract: null,
      account: '',
      interfaceTab: {
        list: [{
          name: 'LIQUIDITY<br>ENDING REWARDS',
          type: 'ending'
        }, {
          name: 'LIQUIDITY<br>UTILIZATION REWARDS',
          type: 'utilization'
        }, {
          name: 'STAKING EARN<br>WBTC OR ETH',
          type: 'stakeEarn'
        }, {
          name: 'BONDING CURVE<br>BUY OR SELL HEGIC',
          type: 'bonding'
        }, {
          name: 'HEGIC TOKEN<br>ANALYTICS',
          type: 'token'
        }],
        index: 0
      },
      endTab: {
        list: [
          {
            currency: 'WBTC',
            contract: process.env.stake_reward_HBTC,
            contractPool: process.env.pool_HT
          },
          {
            currency: 'ETH',
            contract: process.env.stake_reward_ETH,
            contractPool: process.env.pool_HT
          },
          {
            currency: 'HT',
            contract: process.env.stake_reward_HT,
            contractPool: process.env.pool_HT
          }
        ],
        index: 0
      },
      totalProvided: 0,
      lockTokenAmount: '',
      showLockToken: false,
      showUnlockToken: false,
      unlockTokenAmount: '',
      initContractEnd: null,
      currentCurrencyEnd: {},
      endTotalList: [
        {
          icon_url: require('../../../assets/image/icon_reward_end_1@2x.png'),
          balance: 0,
          type: 'claim',
          currency: 'RHEGIC2',
          btn_text: 'CLAIM REWARDS',
          title: 'ETH POOL LIQUIDITY MINING REWARDS',
          sub_title: 'Click the Claim Rewards button and confirm the transaction forreceiving ta be able to withdraw'
        },
        {
          icon_url: require('../../../assets/image/icon_reward_end_2@2x.png'),
          balance: 0,
          type: 'lock',
          currency: 'ETH',
          btn_text: 'LOCK TOKENS',
          title: 'Your Address Balance',
          sub_title: 'Lock wniteETH to start receiving. You will need to manually claim HEGIC'
        },
        {
          icon_url: require('../../../assets/image/icon_reward_end_3@2x.png'),
          balance: 0,
          type: 'unlock',
          currency: 'ETH',
          btn_text: 'UNLOCK TOKENS',
          title: 'Locked',
          sub_title: 'Unlock writrETH ta be able to withdraw awards in rHEGIC tokens your ETH from the liquidity pool'
        }
      ],
      stakeTab: {
        list: [
          {
            currency: 'HBTC',
            contract: process.env.stake_reward_HBTC,
            contractPool: process.env.stake_HBTC
          },
          {
            currency: 'ETH',
            contract: process.env.stake_reward_ETH,
            contractPool: process.env.stake_HETH
          },
          {
            currency: 'HT',
            contract: process.env.stake_reward_HT,
            contractPool: process.env.stake_HT
          }
        ],
        index: 0
      },
      showStakeWithdraw: false,
      stakeWithdrawAmount: '',
      showStakeBuy: false,
      stakeBuyAmount: '',
      currentStakeTab: {},
      initContractStake: null,
      potTotalSupply: 0,
      stakeEarnList: [
        {
          icon_url: require('../../../assets/image/icon_reward_stake_1@2x.png'),
          balance: 0,
          type: 'withdraw',
          currency: 'SWF',
          btn_text: 'WITHDRAW',
          title: 'Total Staked',
          sub_title: 'Click the Claim Rewards button and confirm the transaction forreceiving ta be able to withdraw'
        },
        {
          icon_url: require('../../../assets/image/icon_reward_stake_2@2x.png'),
          balance: 0,
          type: 'stake',
          currency: 'ETH',
          btn_text: 'STAKE HEGIC',
          title: 'Your Pots',
          sub_title: 'Lock wniteETH to start receiving. You will need to manually claim HEGIC'
        },
        {
          icon_url: require('../../../assets/image/icon_reward_stake_3@2x.png'),
          balance: 0,
          type: 'claim',
          currency: 'ETH',
          btn_text: 'CLALM REWARDA',
          title: 'Rewards',
          sub_title: 'Unlock writrETH ta be able to withdraw awards in rHEGIC tokens your ETH from the liquidity pool'
        }
      ],
      utilizationTab: {
        list: [
          {
            currency: 'ALL'
          },
          {
            currency: 'WBTC'
          },
          {
            currency: 'ETH'
          }
        ],
        index: 0
      },
      utilizationData: [
        {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        },
        {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        },
        {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }, {
          id: 'type',
          type: 1231,
          amount: 2819,
          fee: 212,
          reward: 12,
          claim: 123
        }
      ],
      putAmount: '',
      getAmount: '',
      getAmountOriginal: '',
      boundTab: {
        list: ['BUY', 'SELL'],
        index: 0
      }
    }
  },
  mounted () {
    this.initPage()
  },
  methods: {
    initPage () {
      that = this
      that.account = that.$account
      that.getEndInfo()
    },
    setAccount () {
      this.initPage()
    },
    // stake start
    changeStakeTab (i) {
      that.stakeTab.index = i
      that.currentStakeTab = that.stakeTab.list[that.stakeTab.index]
      that.getStakeInfo()
    },
    async getStakeInfo () {
      that.currentStakeTab = that.stakeTab.list[that.stakeTab.index]
      that.stakeEarnList[1].currency = that.currentStakeTab.currency
      that.stakeEarnList[2].currency = that.currentStakeTab.currency
      // 初始化合约
      that.initContractStake = useTokenContract(that.currentStakeTab.contractPool, COIN_ABI.stake)
      const seaweedAddress = await that.initContractStake.Seaweed()
      const seaweedContract = useTokenContract(seaweedAddress, COIN_ABI.stake_seaweed)
      const withdrawBalance = await seaweedContract.balanceOf(that.account)
      that.stakeEarnList[0].balance = parseFloat(keepPoint(that.$web3_http.utils.fromWei(withdrawBalance.toString()), 6))
      const balance = await that.initContractStake.balanceOf(that.account)
      that.potTotalSupply = await that.initContractStake.totalSupply()
      that.stakeEarnList[1].balance = balance
      const profitOf = await that.initContractStake.profitOf(that.account)
      that.stakeEarnList[2].balance = parseFloat(keepPoint(that.$web3_http.utils.fromWei(profitOf.toString()), 6))
    },
    async stakeSell () {
      if (!that.stakeWithdrawAmount) {
        return alert('amount 不能为空')
      }
      const seaweedAddress = await that.initContractStake.Seaweed()
      // const seaweedContract = useTokenContract(seaweedAddress, COIN_ABI.stake_seaweed)
      const allowance = await that.initContractStake.allowance(that.account, that.currentStakeTab.contractPool)
      const allowanceFormat = allowance.toString()
      console.log(allowanceFormat)
      if (parseInt(allowanceFormat) >= parseInt(that.$web3_http.utils.toWei(parseFloat(that.stakeWithdrawAmount).toString()))) {
        await that.stakeSureSell()
      } else {
        await approveEvent(that.currentStakeTab.contractPool, {
          approve_amount: that.stakeWithdrawAmount,
          symbol: 'SWF',
          address: seaweedAddress,
          wei: 'ether'
        }, that.initContractStake, function () {
          that.stakeSureSell()
        })
      }
    },
    async stakeSureSell () {
      await useContractMethods({
        contract: that.initContractStake,
        methodName: 'sell',
        parameters: [
          that.$web3_http.utils.toWei(that.stakeWithdrawAmount.toString())
        ]
      }, function () {
        that.showStakeWithdraw = false
        that.getStakeInfo()
        console.log('stake claimProfit success...')
      })
    },
    async stakeBuy () {
      if (!that.stakeBuyAmount) {
        return alert('amount 不能为空')
      }
      await useContractMethods({
        contract: that.initContractStake,
        methodName: 'buy',
        parameters: [
          that.stakeBuyAmount
        ]
      }, function () {
        that.showStakeBuy = false
        that.getStakeInfo()
        console.log('stake claimProfit success...')
      })
    },
    async claimProfit () {
      await useContractMethods({
        contract: that.initContractStake,
        methodName: 'claimProfit',
        parameters: []
      }, function () {
        that.showUnlockToken = false
        that.getEndInfo()
        console.log('stake claimProfit success...')
      })
    },
    // stake end
    // LIQUIDITY ENDING REWARDS start
    changeEndTab (i) {
      that.endTab.index = i
      that.currentCurrencyEnd = that.endTab.list[that.endTab.index]
      that.getEndInfo()
    },
    async getEndInfo () {
      that.currentCurrencyEnd = that.endTab.list[that.endTab.index]
      console.log(that.currentCurrencyEnd.currency)
      that.endTotalList[1].currency = that.currentCurrencyEnd.currency
      that.endTotalList[2].currency = that.currentCurrencyEnd.currency
      // 初始化合约
      that.initContractEnd = useTokenContract(that.currentCurrencyEnd.contract, COIN_ABI.stake_reward_ETH)
      const contractPool = useTokenContract(that.currentCurrencyEnd.contractPool, COIN_ABI.pool_HT)
      // Total Provide
      const totalProvided = await that.initContractEnd.totalSupply()
      that.totalProvided = parseFloat(keepPoint(that.$web3_http.utils.fromWei(totalProvided.toString()), 2))
      if (!that.account) {
        return
      }
      // Pool Liquidity mining rewards
      const rewardsToken = await that.initContractEnd.rewardsToken()
      const rewardsTokenContract = useTokenContract(rewardsToken, COIN_ABI.r_seaweed)
      const rewardBalance = await rewardsTokenContract.balanceOf(that.account)
      that.endTotalList[0].balance = parseFloat(keepPoint(that.$web3_http.utils.fromWei(rewardBalance.toString()), 2))
      // Your Address Balance
      const balanceAddress = await contractPool.balanceOf(that.account)
      that.endTotalList[1].balance = parseFloat(keepPoint(that.$web3_http.utils.fromWei(balanceAddress.toString()), 2))
      // locked
      const balance = await that.initContractEnd.balanceOf(that.account)
      that.endTotalList[2].balance = parseFloat(keepPoint(that.$web3_http.utils.fromWei(balance.toString()), 2))
    },
    async getReward () {
      console.log('getReward。。。')
      await useContractMethods({
        contract: that.initContractEnd,
        methodName: 'getReward',
        parameters: []
      }, function () {
        console.log('getReward success...')
      })
    },
    async lockToken () {
      if (!that.lockTokenAmount) {
        return alert('amount 不能为空')
      }
      const contractPool = useTokenContract(that.currentCurrencyEnd.contractPool, COIN_ABI.pool_HT)
      const allowance = await contractPool.allowance(that.account, that.currentCurrencyEnd.contractPool)
      const allowanceFormat = allowance.toString()
      if (parseInt(allowanceFormat) >= parseInt(that.$web3.utils.toWei(parseFloat(that.lockTokenAmount).toString()))) {
        await that.lockTokenStake()
      } else {
        approveEvent(that.currentCurrencyEnd.contract, {
          approve_amount: that.lockTokenAmount,
          symbol: that.currentCurrencyEnd.currency,
          address: that.currentCurrencyEnd.contract,
          wei: 'ether'
        }, contractPool, function () {
          that.lockTokenStake()
        })
      }
    },
    async lockTokenStake () {
      await useContractMethods({
        contract: that.initContractEnd,
        methodName: 'stake',
        parameters: [
          that.$web3_http.utils.toWei(parseFloat(that.lockTokenAmount).toString())
        ]
      }, function () {
        that.showLockToken = false
        that.getEndInfo()
        console.log('stake success...')
      })
    },
    async withdraw () {
      if (!that.unlockTokenAmount) {
        return alert('amount 不能为空')
      }
      await useContractMethods({
        contract: that.initContractEnd,
        methodName: 'withdraw',
        parameters: [
          that.$web3_http.utils.toWei(parseFloat(that.unlockTokenAmount).toString())
        ]
      }, function () {
        that.showUnlockToken = false
        that.getEndInfo()
        console.log('withdraw success...')
      })
    },
    // LIQUIDITY ENDING REWARDS end
    changeInterfaceTab (v, i) {
      this.interfaceTab.index = i
      switch (v.type) {
        case 'ending':
          that.getEndInfo()
          break
        case 'utilization':
          break
        case 'stakeEarn':
          that.getStakeInfo()
          break
        case 'bonding':
          break
        case 'token':
          break
      }
    },
    changeUtilizationTab (i) {
      this.utilizationTab.index = i
    },
    // bound start
    changeBoundTab (i) {
      this.boundTab.index = i
      that.putAmount = ''
      that.getAmountOriginal = ''
      that.getAmount = ''
    },
    async changePutAmount (val) {
      if (!val) {
        that.getAmountOriginal = ''
        that.getAmount = ''
        return
      }
      const tokenContract = useTokenContractWeb3(COIN_ABI.buy_sell, process.env.buy_sell_HT)
      let checkAmount = 0
      if (that.boundTab.index === 0) {
        checkAmount = await tokenContract.methods.checkBuy(that.$web3_http.utils.toWei(parseFloat(val).toString())).call()
      } else {
        checkAmount = await tokenContract.methods.checkSell(that.$web3_http.utils.toWei(parseFloat(val).toString())).call()
      }
      that.getAmountOriginal = checkAmount
      that.getAmount = parseFloat(keepPoint(that.$web3_http.utils.fromWei(checkAmount), 6))
      console.log(that.getAmount)
    },
    buy () {
      const tokenContract = useTokenContractWeb3(COIN_ABI.buy_sell, process.env.buy_sell_HT)
      sendTransactionEvent(
        tokenContract.methods.buy(
          that.$web3_http.utils.toWei(parseFloat(that.putAmount).toString())
        )
          .send({
            from: that.account,
            value: that.getAmountOriginal
          }), {
          summary: `buy ${that.putAmount} HT`
        }, function () {
          that.putAmount = ''
          that.getAmountOriginal = ''
          that.getAmount = ''
          console.log('buy success。。。')
        })
    },
    async sell () {
      const tokenContract = useTokenContract(process.env.buy_sell_HT, COIN_ABI.buy_sell)
      const token = await tokenContract.token()
      const tokenContract2 = useTokenContract(token, COIN_ABI.r_seaweed)
      const allowance = await tokenContract2.allowance(that.account, process.env.buy_sell_HT)
      const allowanceFormat = allowance.toString()
      if (parseInt(allowanceFormat) >= parseInt(that.$web3_http.utils.toWei(parseFloat(that.putAmount).toString()))) {
        await that.sellSure()
      } else {
        approveEvent(process.env.buy_sell_HT, {
          approve_amount: that.putAmount,
          symbol: 'HT',
          address: token,
          wei: 'ether'
        }, tokenContract2, function () {
          that.sellSure()
        })
      }
    },
    async sellSure () {
      const tokenContract = useTokenContract(process.env.buy_sell_HT, COIN_ABI.buy_sell)
      await useContractMethods({
        contract: tokenContract,
        methodName: 'sell',
        parameters: [
          that.$web3_http.utils.toWei(parseFloat(that.putAmount).toString())
        ]
      }, function () {
        console.log('sell success...')
      })
    }
    // bound start
  }
}
