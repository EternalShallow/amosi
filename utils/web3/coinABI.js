const COIN_ABI = {
  futures_HT: [{ inputs: [{ internalType: 'contract AggregatorV3Interface', name: 'pp', type: 'address' }, { internalType: 'contract ISeaweedStakingHT', name: 'staking', type: 'address' }, { internalType: 'contract SeaweedHTPool', name: '_pool', type: 'address' }], stateMutability: 'nonpayable', type: 'constructor' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }, { indexed: true, internalType: 'address', name: 'account', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'settlementFee', type: 'uint256' }, { indexed: false, internalType: 'uint256', name: 'totalFee', type: 'uint256' }], name: 'Create', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }, { indexed: false, internalType: 'uint256', name: 'profit', type: 'uint256' }], name: 'Exercise', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }, { indexed: false, internalType: 'uint256', name: 'premium', type: 'uint256' }], name: 'Expire', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' }, { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }], name: 'OwnershipTransferred', type: 'event' }, { inputs: [{ internalType: 'uint256', name: 'period', type: 'uint256' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }, { internalType: 'uint256', name: 'strike', type: 'uint256' }, { internalType: 'enum ISeaweedOptions.OptionType', name: 'optionType', type: 'uint8' }], name: 'create', outputs: [{ internalType: 'uint256', name: 'optionID', type: 'uint256' }], stateMutability: 'payable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'optionID', type: 'uint256' }], name: 'exercise', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'period', type: 'uint256' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }, { internalType: 'uint256', name: 'strike', type: 'uint256' }, { internalType: 'enum ISeaweedOptions.OptionType', name: 'optionType', type: 'uint8' }], name: 'fees', outputs: [{ internalType: 'uint256', name: 'total', type: 'uint256' }, { internalType: 'uint256', name: 'settlementFee', type: 'uint256' }, { internalType: 'uint256', name: 'strikeFee', type: 'uint256' }, { internalType: 'uint256', name: 'periodFee', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'impliedVolRate', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'count', type: 'uint256' }], name: 'migrate', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'optionCollateralizationRatio', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'options', outputs: [{ internalType: 'enum ISeaweedOptions.State', name: 'state', type: 'uint8' }, { internalType: 'address payable', name: 'holder', type: 'address' }, { internalType: 'uint256', name: 'strike', type: 'uint256' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }, { internalType: 'uint256', name: 'lockedAmount', type: 'uint256' }, { internalType: 'uint256', name: 'premium', type: 'uint256' }, { internalType: 'uint256', name: 'expiration', type: 'uint256' }, { internalType: 'enum ISeaweedOptions.OptionType', name: 'optionType', type: 'uint8' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'pool', outputs: [{ internalType: 'contract SeaweedHTPool', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'priceProvider', outputs: [{ internalType: 'contract AggregatorV3Interface', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'setImpliedVolRate', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: 'oldAddr', type: 'address' }], name: 'setOldSeaweedHTOptions', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'setOptionCollaterizationRatio', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'contract ISeaweedStakingHT', name: 'recipient', type: 'address' }], name: 'setSettlementFeeRecipient', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'settlementFeeRecipient', outputs: [{ internalType: 'contract ISeaweedStakingHT', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'stopMigrationProcess', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'optionID', type: 'uint256' }, { internalType: 'address payable', name: 'newHolder', type: 'address' }], name: 'transfer', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'transferPoolOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'optionID', type: 'uint256' }], name: 'unlock', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256[]', name: 'optionIDs', type: 'uint256[]' }], name: 'unlockAll', outputs: [], stateMutability: 'nonpayable', type: 'function' }],
  heco_abi: [
    {
      inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor'
    }, {
      anonymous: false,
      inputs: [{ indexed: true, internalType: 'address', name: 'owner', type: 'address' }, {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address'
      }, { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }],
      name: 'Approval',
      type: 'event'
    }, {
      anonymous: false,
      inputs: [{ indexed: true, internalType: 'address', name: 'from', type: 'address' }, {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address'
      }, { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }],
      name: 'Transfer',
      type: 'event'
    }, {
      constant: false,
      inputs: [{ internalType: 'address', name: '_minter', type: 'address' }],
      name: 'addMinter',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      constant: true,
      inputs: [{ internalType: 'address', name: 'owner', type: 'address' }, {
        internalType: 'address',
        name: 'spender',
        type: 'address'
      }],
      name: 'allowance',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    }, {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' }, {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        }],
      name: 'approve',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      constant: true,
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    }, {
      constant: false,
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }, {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }],
      name: 'burn',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      constant: true,
      inputs: [],
      name: 'burnAddress',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    }, {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    }, {
      constant: false,
      inputs: [{ internalType: 'address', name: 'spender', type: 'address' }, {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256'
      }],
      name: 'decreaseAllowance',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      constant: true,
      inputs: [],
      name: 'governance',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    }, {
      constant: false,
      inputs: [{ internalType: 'address', name: 'spender', type: 'address' }, {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256'
      }],
      name: 'increaseAllowance',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        }],
      name: 'mint',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      constant: true,
      inputs: [
        {
          internalType: 'address', name: '', type: 'address'
        }],
      name: 'minters',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    }, {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    }, {
      constant: false,
      inputs: [{ internalType: 'address', name: '_minter', type: 'address' }],
      name: 'removeMinter',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      constant: false,
      inputs: [{ internalType: 'address', name: '_governance', type: 'address' }],
      name: 'setGovernance',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    }, {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    }, {
      constant: false,
      inputs: [{ internalType: 'address', name: 'recipient', type: 'address' }, {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }],
      name: 'transfer',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      constant: false,
      inputs: [{ internalType: 'address', name: 'sender', type: 'address' }, {
        internalType: 'address',
        name: 'recipient',
        type: 'address'
      }, { internalType: 'uint256', name: 'amount', type: 'uint256' }],
      name: 'transferFrom',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }]
}
export default COIN_ABI
