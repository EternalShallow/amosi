// import { calculateGasMargin, getGasPrice, useTokenContract } from './web3Utils'
import { MaxUint256 } from '@ethersproject/constants'
import { useCallback } from './contractEvent'

export async function approveEvent (spender, token, tokenContract, callback) {
  if (!spender) {
    console.error('no spender')
    return
  }
  if (!token) {
    console.error('no token')
    return
  }
  if (!token.approve_amount) {
    console.error('missing amount to approve')
    return
  }
  // const tokenContract = useTokenContract(token.spender, ABI)
  if (!tokenContract) {
    console.error('tokenContract is null')
    return
  }
  console.log(tokenContract)
  let useExact = false
  let approveAmount = 0
  if (process.client) {
    const { $web3_http, $store } = window.$nuxt
    approveAmount = $web3_http.utils.toWei(parseFloat(token.approve_amount).toString(), token.wei)
    console.log($store.state.accounts[0])
    console.log(tokenContract.interface.getFunction('balanceOf'))
  }
  // eslint-disable-next-line no-unused-vars
  const estimatedGas = await tokenContract.estimateGas.approve(spender, MaxUint256).catch(() => {
    // general fallback for tokens who restrict approval amounts
    useExact = true
    return tokenContract.estimateGas.approve(spender, approveAmount)
  })
  tokenContract
    .approve(spender, useExact ? approveAmount : MaxUint256, {
      // ...{
      //   gasLimit: calculateGasMargin(estimatedGas)
      // },
      // ...await getGasPrice()
    })
    .then((response) => {
      useCallback(response, {
        summary: 'Approve ' + token.symbol,
        approval: { tokenAddress: token.address, spender: spender }
      }, callback)
    })
    .catch((error) => {
      console.error('Failed to approve token', error)
      throw error
    })
}
