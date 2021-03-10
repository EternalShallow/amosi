import { useTokenContract } from '../../../utils/web3/web3Utils'
import COIN_ABI from '../../../utils/web3/coinABI'
import { useContractMethods } from '../../../utils/web3/contractEvent'
import { keepPoint } from '../../../utils/function'
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
      stakeEarnList: [
        {
          icon_url: require('../../../assets/image/icon_reward_stake_1@2x.png'),
          balance: 0,
          type: 'withdraw',
          currency: 'RHEGIC2',
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
          title: 'Your Address Balance',
          sub_title: 'Lock wniteETH to start receiving. You will need to manually claim HEGIC'
        },
        {
          icon_url: require('../../../assets/image/icon_reward_stake_3@2x.png'),
          balance: 0,
          type: 'clalm',
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
      const rewardsTokenContract = useTokenContract(rewardsToken, COIN_ABI.r_seeweed)
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
    changeInterfaceTab (i) {
      this.interfaceTab.index = i
    },
    changeUtilizationTab (i) {
      this.utilizationTab.index = i
    },
    changeBoundTab (i) {
      this.boundTab.index = i
    }
  }
}
