const COIN_ABI = {
  futures_HT: [
    {
      inputs: [{
        internalType: 'contract AggregatorV3Interface',
        name: 'pp',
        type: 'address'
      }, {
        internalType: 'contract ISeaweedStakingHT',
        name: 'staking',
        type: 'address'
      }, { internalType: 'contract SeaweedHTPool', name: '_pool', type: 'address' }],
      stateMutability: 'nonpayable',
      type: 'constructor'
    }, {
      anonymous: false,
      inputs: [{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }, {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      }, { indexed: false, internalType: 'uint256', name: 'settlementFee', type: 'uint256' }, {
        indexed: false,
        internalType: 'uint256',
        name: 'totalFee',
        type: 'uint256'
      }],
      name: 'Create',
      type: 'event'
    }, {
      anonymous: false,
      inputs: [{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }, {
        indexed: false,
        internalType: 'uint256',
        name: 'profit',
        type: 'uint256'
      }],
      name: 'Exercise',
      type: 'event'
    }, {
      anonymous: false,
      inputs: [{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }, {
        indexed: false,
        internalType: 'uint256',
        name: 'premium',
        type: 'uint256'
      }],
      name: 'Expire',
      type: 'event'
    }, {
      anonymous: false,
      inputs: [{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' }, {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }],
      name: 'OwnershipTransferred',
      type: 'event'
    }, {
      inputs: [{ internalType: 'uint256', name: 'period', type: 'uint256' }, {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }, { internalType: 'uint256', name: 'strike', type: 'uint256' }, {
        internalType: 'enum ISeaweedOptions.OptionType',
        name: 'optionType',
        type: 'uint8'
      }],
      name: 'create',
      outputs: [{ internalType: 'uint256', name: 'optionID', type: 'uint256' }],
      stateMutability: 'payable',
      type: 'function'
    }, {
      inputs: [{ internalType: 'uint256', name: 'optionID', type: 'uint256' }],
      name: 'exercise',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{ internalType: 'uint256', name: 'period', type: 'uint256' }, {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }, { internalType: 'uint256', name: 'strike', type: 'uint256' }, {
        internalType: 'enum ISeaweedOptions.OptionType',
        name: 'optionType',
        type: 'uint8'
      }],
      name: 'fees',
      outputs: [{ internalType: 'uint256', name: 'total', type: 'uint256' }, {
        internalType: 'uint256',
        name: 'settlementFee',
        type: 'uint256'
      }, { internalType: 'uint256', name: 'strikeFee', type: 'uint256' }, {
        internalType: 'uint256',
        name: 'periodFee',
        type: 'uint256'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [],
      name: 'impliedVolRate',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{ internalType: 'uint256', name: 'count', type: 'uint256' }],
      name: 'migrate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [],
      name: 'optionCollateralizationRatio',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      name: 'options',
      outputs: [{
        internalType: 'enum ISeaweedOptions.State',
        name: 'state',
        type: 'uint8'
      }, { internalType: 'address payable', name: 'holder', type: 'address' }, {
        internalType: 'uint256',
        name: 'strike',
        type: 'uint256'
      }, { internalType: 'uint256', name: 'amount', type: 'uint256' }, {
        internalType: 'uint256',
        name: 'lockedAmount',
        type: 'uint256'
      }, { internalType: 'uint256', name: 'premium', type: 'uint256' }, {
        internalType: 'uint256',
        name: 'expiration',
        type: 'uint256'
      }, { internalType: 'enum ISeaweedOptions.OptionType', name: 'optionType', type: 'uint8' }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [],
      name: 'owner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [],
      name: 'pool',
      outputs: [{ internalType: 'contract SeaweedHTPool', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [],
      name: 'priceProvider',
      outputs: [{ internalType: 'contract AggregatorV3Interface', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{ internalType: 'uint256', name: 'value', type: 'uint256' }],
      name: 'setImpliedVolRate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{ internalType: 'address', name: 'oldAddr', type: 'address' }],
      name: 'setOldSeaweedHTOptions',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{ internalType: 'uint256', name: 'value', type: 'uint256' }],
      name: 'setOptionCollaterizationRatio',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{ internalType: 'contract ISeaweedStakingHT', name: 'recipient', type: 'address' }],
      name: 'setSettlementFeeRecipient',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [],
      name: 'settlementFeeRecipient',
      outputs: [{ internalType: 'contract ISeaweedStakingHT', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [],
      name: 'stopMigrationProcess',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{ internalType: 'uint256', name: 'optionID', type: 'uint256' }, {
        internalType: 'address payable',
        name: 'newHolder',
        type: 'address'
      }],
      name: 'transfer',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [],
      name: 'transferPoolOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{ internalType: 'uint256', name: 'optionID', type: 'uint256' }],
      name: 'unlock',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{ internalType: 'uint256[]', name: 'optionIDs', type: 'uint256[]' }],
      name: 'unlockAll',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }],
  futures_HBTC: [
    {
      inputs: [{
        internalType: 'contract AggregatorV3Interface',
        name: '_priceProvider',
        type: 'address'
      }, { internalType: 'contract IMdexRouter', name: '__mdexRouter', type: 'address' }, {
        internalType: 'contract ERC20',
        name: 'token',
        type: 'address'
      }, { internalType: 'contract ISeaweedStakingERC20', name: '_settlementFeeRecipient', type: 'address' }],
      stateMutability: 'nonpayable',
      type: 'constructor'
    }, {
      anonymous: false,
      inputs: [{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }, {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      }, { indexed: false, internalType: 'uint256', name: 'settlementFee', type: 'uint256' }, {
        indexed: false,
        internalType: 'uint256',
        name: 'totalFee',
        type: 'uint256'
      }],
      name: 'Create',
      type: 'event'
    }, {
      anonymous: false,
      inputs: [{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }, {
        indexed: false,
        internalType: 'uint256',
        name: 'profit',
        type: 'uint256'
      }],
      name: 'Exercise',
      type: 'event'
    }, {
      anonymous: false,
      inputs: [{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }, {
        indexed: false,
        internalType: 'uint256',
        name: 'premium',
        type: 'uint256'
      }],
      name: 'Expire',
      type: 'event'
    }, {
      anonymous: false,
      inputs: [{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' }, {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }],
      name: 'OwnershipTransferred',
      type: 'event'
    }, {
      inputs: [],
      name: 'HBTC',
      outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [],
      name: 'approve',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{ internalType: 'uint256', name: 'period', type: 'uint256' }, {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }, { internalType: 'uint256', name: 'strike', type: 'uint256' }, {
        internalType: 'enum ISeaweedOptions.OptionType',
        name: 'optionType',
        type: 'uint8'
      }],
      name: 'create',
      outputs: [{ internalType: 'uint256', name: 'optionID', type: 'uint256' }],
      stateMutability: 'payable',
      type: 'function'
    }, {
      inputs: [{ internalType: 'uint256', name: 'optionID', type: 'uint256' }],
      name: 'exercise',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{ internalType: 'uint256', name: 'period', type: 'uint256' }, {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }, { internalType: 'uint256', name: 'strike', type: 'uint256' }, {
        internalType: 'enum ISeaweedOptions.OptionType',
        name: 'optionType',
        type: 'uint8'
      }],
      name: 'fees',
      outputs: [{ internalType: 'uint256', name: 'total', type: 'uint256' }, {
        internalType: 'uint256',
        name: 'totalHT',
        type: 'uint256'
      }, { internalType: 'uint256', name: 'settlementFee', type: 'uint256' }, {
        internalType: 'uint256',
        name: 'strikeFee',
        type: 'uint256'
      }, { internalType: 'uint256', name: 'periodFee', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      name: 'htToHBTCSwapPath',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [],
      name: 'impliedVolRate',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [],
      name: 'mdexRouter',
      outputs: [{ internalType: 'contract IMdexRouter', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [],
      name: 'optionCollateralizationRatio',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      name: 'options',
      outputs: [{
        internalType: 'enum ISeaweedOptions.State',
        name: 'state',
        type: 'uint8'
      }, { internalType: 'address payable', name: 'holder', type: 'address' }, {
        internalType: 'uint256',
        name: 'strike',
        type: 'uint256'
      }, { internalType: 'uint256', name: 'amount', type: 'uint256' }, {
        internalType: 'uint256',
        name: 'lockedAmount',
        type: 'uint256'
      }, { internalType: 'uint256', name: 'premium', type: 'uint256' }, {
        internalType: 'uint256',
        name: 'expiration',
        type: 'uint256'
      }, { internalType: 'enum ISeaweedOptions.OptionType', name: 'optionType', type: 'uint8' }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [],
      name: 'owner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [],
      name: 'pool',
      outputs: [{ internalType: 'contract SeaweedHBTCPool', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [],
      name: 'priceProvider',
      outputs: [{ internalType: 'contract AggregatorV3Interface', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{ internalType: 'uint256', name: 'value', type: 'uint256' }],
      name: 'setImpliedVolRate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{ internalType: 'uint256', name: 'value', type: 'uint256' }],
      name: 'setOptionCollaterizationRatio',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{ internalType: 'contract ISeaweedStakingERC20', name: 'recipient', type: 'address' }],
      name: 'setSettlementFeeRecipient',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [],
      name: 'settlementFeeRecipient',
      outputs: [{ internalType: 'contract ISeaweedStakingERC20', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{ internalType: 'uint256', name: 'optionID', type: 'uint256' }, {
        internalType: 'address payable',
        name: 'newHolder',
        type: 'address'
      }],
      name: 'transfer',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [],
      name: 'transferPoolOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{ internalType: 'uint256', name: 'optionID', type: 'uint256' }],
      name: 'unlock',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{ internalType: 'uint256[]', name: 'optionIDs', type: 'uint256[]' }],
      name: 'unlockAll',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }],
  currency_HT: [
    { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'src', type: 'address' }, { indexed: true, internalType: 'address', name: 'guy', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'wad', type: 'uint256' }], name: 'Approval', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'dst', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'wad', type: 'uint256' }], name: 'Deposit', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'src', type: 'address' }, { indexed: true, internalType: 'address', name: 'dst', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'wad', type: 'uint256' }], name: 'Transfer', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'src', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'wad', type: 'uint256' }], name: 'Withdrawal', type: 'event' }, { payable: true, stateMutability: 'payable', type: 'fallback' }, { constant: true, inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'address', name: '', type: 'address' }], name: 'allowance', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ internalType: 'address', name: 'guy', type: 'address' }, { internalType: 'uint256', name: 'wad', type: 'uint256' }], name: 'approve', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'balanceOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'decimals', outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [], name: 'deposit', outputs: [], payable: true, stateMutability: 'payable', type: 'function' }, { constant: true, inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ internalType: 'address', name: 'dst', type: 'address' }, { internalType: 'uint256', name: 'wad', type: 'uint256' }], name: 'transfer', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ internalType: 'address', name: 'src', type: 'address' }, { internalType: 'address', name: 'dst', type: 'address' }, { internalType: 'uint256', name: 'wad', type: 'uint256' }], name: 'transferFrom', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ internalType: 'uint256', name: 'wad', type: 'uint256' }], name: 'withdraw', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }],
  pool_HT: [
    { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'owner', type: 'address' }, { indexed: true, internalType: 'address', name: 'spender', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'Approval', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }, { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'Loss', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' }, { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }], name: 'OwnershipTransferred', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }, { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'Profit', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'account', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }, { indexed: false, internalType: 'uint256', name: 'writeAmount', type: 'uint256' }], name: 'Provide', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'from', type: 'address' }, { indexed: true, internalType: 'address', name: 'to', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'Transfer', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'account', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }, { indexed: false, internalType: 'uint256', name: 'writeAmount', type: 'uint256' }], name: 'Withdraw', type: 'event' }, { inputs: [], name: 'INITIAL_RATE', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: '', type: 'address' }], name: '_revertTransfersInLockUpPeriod', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'owner', type: 'address' }, { internalType: 'address', name: 'spender', type: 'address' }], name: 'allowance', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'spender', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'approve', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'availableBalance', outputs: [{ internalType: 'uint256', name: 'balance', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'account', type: 'address' }], name: 'balanceOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'decimals', outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'spender', type: 'address' }, { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' }], name: 'decreaseAllowance', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: 'spender', type: 'address' }, { internalType: 'uint256', name: 'addedValue', type: 'uint256' }], name: 'increaseAllowance', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'lastProvideTimestamp', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'lock', outputs: [], stateMutability: 'payable', type: 'function' }, { inputs: [], name: 'lockedAmount', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'lockedLiquidity', outputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }, { internalType: 'uint256', name: 'premium', type: 'uint256' }, { internalType: 'bool', name: 'locked', type: 'bool' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'lockedPremium', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'lockupPeriod', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'minMint', type: 'uint256' }], name: 'provide', outputs: [{ internalType: 'uint256', name: 'mint', type: 'uint256' }], stateMutability: 'payable', type: 'function' }, { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'bool', name: 'value', type: 'bool' }], name: 'revertTransfersInLockUpPeriod', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }, { internalType: 'address payable', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'send', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'setLockupPeriod', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: 'account', type: 'address' }], name: 'shareOf', outputs: [{ internalType: 'uint256', name: 'share', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'totalBalance', outputs: [{ internalType: 'uint256', name: 'balance', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'recipient', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'transfer', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: 'sender', type: 'address' }, { internalType: 'address', name: 'recipient', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'transferFrom', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }], name: 'unlock', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }, { internalType: 'uint256', name: 'maxBurn', type: 'uint256' }], name: 'withdraw', outputs: [{ internalType: 'uint256', name: 'burn', type: 'uint256' }], stateMutability: 'nonpayable', type: 'function' }],
  pool_HBTC: [
    { inputs: [{ internalType: 'contract AggregatorV3Interface', name: '_priceProvider', type: 'address' }, { internalType: 'contract IMdexRouter', name: '__mdexRouter', type: 'address' }, { internalType: 'contract ERC20', name: 'token', type: 'address' }, { internalType: 'contract ISeaweedStakingERC20', name: '_settlementFeeRecipient', type: 'address' }], stateMutability: 'nonpayable', type: 'constructor' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }, { indexed: true, internalType: 'address', name: 'account', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'settlementFee', type: 'uint256' }, { indexed: false, internalType: 'uint256', name: 'totalFee', type: 'uint256' }], name: 'Create', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }, { indexed: false, internalType: 'uint256', name: 'profit', type: 'uint256' }], name: 'Exercise', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }, { indexed: false, internalType: 'uint256', name: 'premium', type: 'uint256' }], name: 'Expire', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' }, { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }], name: 'OwnershipTransferred', type: 'event' }, { inputs: [], name: 'HBTC', outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'approve', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'period', type: 'uint256' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }, { internalType: 'uint256', name: 'strike', type: 'uint256' }, { internalType: 'enum ISeaweedOptions.OptionType', name: 'optionType', type: 'uint8' }], name: 'create', outputs: [{ internalType: 'uint256', name: 'optionID', type: 'uint256' }], stateMutability: 'payable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'optionID', type: 'uint256' }], name: 'exercise', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'period', type: 'uint256' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }, { internalType: 'uint256', name: 'strike', type: 'uint256' }, { internalType: 'enum ISeaweedOptions.OptionType', name: 'optionType', type: 'uint8' }], name: 'fees', outputs: [{ internalType: 'uint256', name: 'total', type: 'uint256' }, { internalType: 'uint256', name: 'totalHT', type: 'uint256' }, { internalType: 'uint256', name: 'settlementFee', type: 'uint256' }, { internalType: 'uint256', name: 'strikeFee', type: 'uint256' }, { internalType: 'uint256', name: 'periodFee', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'htToHBTCSwapPath', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'impliedVolRate', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'mdexRouter', outputs: [{ internalType: 'contract IMdexRouter', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'optionCollateralizationRatio', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'options', outputs: [{ internalType: 'enum ISeaweedOptions.State', name: 'state', type: 'uint8' }, { internalType: 'address payable', name: 'holder', type: 'address' }, { internalType: 'uint256', name: 'strike', type: 'uint256' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }, { internalType: 'uint256', name: 'lockedAmount', type: 'uint256' }, { internalType: 'uint256', name: 'premium', type: 'uint256' }, { internalType: 'uint256', name: 'expiration', type: 'uint256' }, { internalType: 'enum ISeaweedOptions.OptionType', name: 'optionType', type: 'uint8' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'pool', outputs: [{ internalType: 'contract SeaweedHBTCPool', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'priceProvider', outputs: [{ internalType: 'contract AggregatorV3Interface', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'setImpliedVolRate', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'setOptionCollaterizationRatio', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'contract ISeaweedStakingERC20', name: 'recipient', type: 'address' }], name: 'setSettlementFeeRecipient', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'settlementFeeRecipient', outputs: [{ internalType: 'contract ISeaweedStakingERC20', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'optionID', type: 'uint256' }, { internalType: 'address payable', name: 'newHolder', type: 'address' }], name: 'transfer', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'transferPoolOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'optionID', type: 'uint256' }], name: 'unlock', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256[]', name: 'optionIDs', type: 'uint256[]' }], name: 'unlockAll', outputs: [], stateMutability: 'nonpayable', type: 'function' }],
  stake_reward_ETH: [
    { inputs: [{ internalType: 'address', name: '_owner', type: 'address' }, { internalType: 'address', name: '_rewardsDistribution', type: 'address' }, { internalType: 'address', name: '_rewardsToken', type: 'address' }, { internalType: 'address', name: '_stakingToken', type: 'address' }], stateMutability: 'nonpayable', type: 'constructor' }, { anonymous: false, inputs: [{ indexed: false, internalType: 'address', name: 'oldOwner', type: 'address' }, { indexed: false, internalType: 'address', name: 'newOwner', type: 'address' }], name: 'OwnerChanged', type: 'event' }, { anonymous: false, inputs: [{ indexed: false, internalType: 'address', name: 'newOwner', type: 'address' }], name: 'OwnerNominated', type: 'event' }, { anonymous: false, inputs: [{ indexed: false, internalType: 'bool', name: 'isPaused', type: 'bool' }], name: 'PauseChanged', type: 'event' }, { anonymous: false, inputs: [{ indexed: false, internalType: 'address', name: 'token', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'Recovered', type: 'event' }, { anonymous: false, inputs: [{ indexed: false, internalType: 'uint256', name: 'reward', type: 'uint256' }], name: 'RewardAdded', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'user', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'reward', type: 'uint256' }], name: 'RewardPaid', type: 'event' }, { anonymous: false, inputs: [{ indexed: false, internalType: 'uint256', name: 'newDuration', type: 'uint256' }], name: 'RewardsDurationUpdated', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'user', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'Staked', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'user', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'Withdrawn', type: 'event' }, { inputs: [], name: 'acceptOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: 'account', type: 'address' }], name: 'balanceOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'account', type: 'address' }], name: 'earned', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'exit', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'getReward', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'getRewardForDuration', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'lastPauseTime', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'lastTimeRewardApplicable', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'lastUpdateTime', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: '_owner', type: 'address' }], name: 'nominateNewOwner', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'nominatedOwner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'reward', type: 'uint256' }], name: 'notifyRewardAmount', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'paused', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'periodFinish', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'tokenAddress', type: 'address' }, { internalType: 'uint256', name: 'tokenAmount', type: 'uint256' }], name: 'recoverERC20', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'rewardPerToken', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'rewardPerTokenStored', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'rewardRate', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'rewards', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'rewardsDistribution', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'rewardsDuration', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'rewardsToken', outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'bool', name: '_paused', type: 'bool' }], name: 'setPaused', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: '_rewardsDistribution', type: 'address' }], name: 'setRewardsDistribution', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: '_rewardsDuration', type: 'uint256' }], name: 'setRewardsDuration', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'stake', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'stakingToken', outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'userRewardPerTokenPaid', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'withdraw', outputs: [], stateMutability: 'nonpayable', type: 'function' }],
  r_seeweed: [
    { inputs: [{ internalType: 'string', name: 'name', type: 'string' }, { internalType: 'string', name: 'symbol', type: 'string' }], stateMutability: 'nonpayable', type: 'constructor' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'owner', type: 'address' }, { indexed: true, internalType: 'address', name: 'spender', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'Approval', type: 'event' }, { anonymous: false, inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }], name: 'Paused', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' }, { indexed: true, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' }, { indexed: true, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' }], name: 'RoleAdminChanged', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' }, { indexed: true, internalType: 'address', name: 'account', type: 'address' }, { indexed: true, internalType: 'address', name: 'sender', type: 'address' }], name: 'RoleGranted', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' }, { indexed: true, internalType: 'address', name: 'account', type: 'address' }, { indexed: true, internalType: 'address', name: 'sender', type: 'address' }], name: 'RoleRevoked', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'from', type: 'address' }, { indexed: true, internalType: 'address', name: 'to', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'Transfer', type: 'event' }, { anonymous: false, inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }], name: 'Unpaused', type: 'event' }, { inputs: [], name: 'DEFAULT_ADMIN_ROLE', outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'MINTER_ROLE', outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'PAUSER_ROLE', outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'owner', type: 'address' }, { internalType: 'address', name: 'spender', type: 'address' }], name: 'allowance', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'spender', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'approve', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: 'account', type: 'address' }], name: 'balanceOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'burn', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: 'account', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'burnFrom', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'decimals', outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'spender', type: 'address' }, { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' }], name: 'decreaseAllowance', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }], name: 'getRoleAdmin', outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }, { internalType: 'uint256', name: 'index', type: 'uint256' }], name: 'getRoleMember', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }], name: 'getRoleMemberCount', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }, { internalType: 'address', name: 'account', type: 'address' }], name: 'grantRole', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }, { internalType: 'address', name: 'account', type: 'address' }], name: 'hasRole', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'spender', type: 'address' }, { internalType: 'uint256', name: 'addedValue', type: 'uint256' }], name: 'increaseAllowance', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'mint', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'pause', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'paused', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }, { internalType: 'address', name: 'account', type: 'address' }], name: 'renounceRole', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }, { internalType: 'address', name: 'account', type: 'address' }], name: 'revokeRole', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: 'recipient', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'transfer', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'address', name: 'sender', type: 'address' }, { internalType: 'address', name: 'recipient', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'transferFrom', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'unpause', outputs: [], stateMutability: 'nonpayable', type: 'function' }],
  buy_sell: [
    { inputs: [{ internalType: 'contract IERC20', name: '_token', type: 'address' }, { internalType: 'uint256', name: 'k', type: 'uint256' }, { internalType: 'uint256', name: 'startPrice', type: 'uint256' }], stateMutability: 'nonpayable', type: 'constructor' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'account', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }, { indexed: false, internalType: 'uint256', name: 'ethAmount', type: 'uint256' }], name: 'Bought', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'account', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }, { indexed: false, internalType: 'uint256', name: 'ethAmount', type: 'uint256' }, { indexed: false, internalType: 'uint256', name: 'comission', type: 'uint256' }], name: 'Sold', type: 'event' }, { inputs: [{ internalType: 'uint256', name: 'tokenAmount', type: 'uint256' }], name: 'buy', outputs: [], stateMutability: 'payable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'tokenAmount', type: 'uint256' }], name: 'checkBuy', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'tokenAmount', type: 'uint256' }], name: 'checkSell', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'x0', type: 'uint256' }, { internalType: 'uint256', name: 'x1', type: 'uint256' }], name: 's', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'seaweedDevelopmentFund', outputs: [{ internalType: 'address payable', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'uint256', name: 'tokenAmount', type: 'uint256' }], name: 'sell', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'soldAmount', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'token', outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }],
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
