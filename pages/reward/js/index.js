// let that
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
            currency: 'WBTC'
          },
          {
            currency: 'ETH'
          }
        ],
        index: 0
      },
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
    // that = this
  },
  methods: {
    setAccount () {
    },
    changeInterfaceTab (i) {
      this.interfaceTab.index = i
    },
    changeUtilizationTab (i) {
      this.utilizationTab.index = i
    },
    changeEndTab (i) {
      this.endTab.index = i
    },
    changeBoundTab (i) {
      this.boundTab.index = i
    }
  }
}
