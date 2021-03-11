import { TRANSACTION_ACTIONS } from './constants'
// import { getGasLimit } from './web3Utils'

export function useCallback (response, { summary, eventName, approval }, callback) {
  if (process.client) {
    const { $store } = window.$nuxt
    const { hash } = response
    $store.dispatch('updateTransactions', {
      hash,
      type: TRANSACTION_ACTIONS.ADDED,
      summary,
      eventName,
      approval
    })
    response.wait().then(res => {
      console.log(res)
      const { transactionHash } = res
      $store.dispatch('updateTransactions', {
        hash: transactionHash,
        type: TRANSACTION_ACTIONS.CONFIRMED
      })
      callback && callback()
    })
  }
}

export function sendTransactionEvent (sendEvent, { summary, approval }, callback) {
  if (process.client) {
    const { $store } = window.$nuxt
    sendEvent.on('transactionHash', function (hash) {
      console.log('transactionHash')
      $store.dispatch('updateTransactions', {
        hash,
        type: TRANSACTION_ACTIONS.ADDED,
        summary,
        approval
      })
    }).on('receipt', function (receipt) {
      console.log('receipt')
      $store.dispatch('updateTransactions', {
        hash: receipt.transactionHash,
        type: TRANSACTION_ACTIONS.CONFIRMED
      })
      callback && callback()
    }).catch(error => {
      const errInfo = JSON.parse(JSON.stringify(error))
      console.log(errInfo)
      if (errInfo?.receipt && !errInfo.receipt?.status) {
        alert('合约异常：Transaction has been reverted by the EVM')
      } else {
        alert(error.message)
      }
      if (error?.code === 4001) {
        console.log('Transaction rejected.')
      } else {
        const errInfo = JSON.parse(JSON.stringify(error))
        console.log(errInfo)
        console.log(`actions is failed: ${error.message}`)
        if (errInfo.receipt.transactionHash) {
          $store.dispatch('updateTransactions', {
            hash: errInfo.receipt.transactionHash,
            type: TRANSACTION_ACTIONS.CONFIRMED
          })
        }
      }
    })
  }
}

export async function useContractMethods ({ contract, methodName, parameters, eventName, summary }, callback) {
  if (!contract) {
    console.error('no contract')
    return
  }
  if (!methodName) {
    console.error('no methodName')
    return
  }
  // const estimatedGas = await getGasLimit(contract, methodName, parameters)
  let method
  if (parameters.length < 1 || !parameters) {
    method = contract[methodName]()
  } else if (parameters.length === 1) {
    method = contract[methodName](parameters[0])
  } else if (parameters.length === 2) {
    method = contract[methodName](parameters[0], parameters[1])
  } else if (parameters.length === 3) {
    method = contract[methodName](parameters[0], parameters[1], parameters[2])
  } else if (parameters.length === 4) {
    method = contract[methodName](parameters[0], parameters[1], parameters[2], parameters[3])
  } else if (parameters.length === 5) {
    method = contract[methodName](parameters[0], parameters[1], parameters[2], parameters[3], parameters[4])
  }
  method.then((response) => {
    useCallback(response, {
      summary: summary,
      eventName: eventName
    }, callback)
  })
    .catch((error) => {
      console.error('Failed to request', error)
      if (error?.data?.message) {
        alert(error?.data?.message || error.message)
      } else {
        alert(error.message)
      }
    })
}
