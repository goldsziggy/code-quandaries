/* global jest describe describe expect */

/*
Given "Funding" and list of "Contributions" & "GoalAccounts"
* GoalAccounts should not be funded over the target
* Contributions are in priority order
* if a Contribution.amount and GoalAccount.target is 0 consider this infinity


return a list of 'Transaction's that should be applied to the 'GoalAccount's
*/

type Contribution = {
  amount: number
  accountId: number
}

type GoalAccount = {
  id: number
  target: number
}

type Transaction = {
  accountId: number
  amount: number
}

function getAmount(target, currentFunding, amount, remainingFunds) {
  const val = target - (currentFunding + amount)
  if (amount > remainingFunds) {
    return remainingFunds
  } else if (val < 0 && target !== 0) {
    return amount - Math.abs(val)
  }
  return amount
}
function getTransactions(
  accounts: Array<GoalAccount>,
  contributions: Array<Contribution>,
  funding: number
): Array<Transaction> {
  // easier data-structure
  const inMemAccts = accounts.reduce((acc, val) => {
    acc[val.id] = { ...val, funding: 0 }
    return acc
  }, {})

  //get all transactiosn
  const trans = contributions.map(({ amount, accountId }) => {
    const account = inMemAccts[accountId]
    if (account.funding < account.target || account.target === 0) {
      const applyAmount = getAmount(account.target, account.funding, amount, funding)

      inMemAccts[accountId].funding += applyAmount
      funding -= applyAmount
      return { accountId, amount: applyAmount }
    }
  })
  //redistribute remaining funding across all 0 accounts
  const distribution = funding / trans.filter((t) => t.amount === 0).length
  if (distribution > 0) {
    return trans.map(({ amount, accountId }) => {
      if (amount === 0) {
        return { amount: distribution, accountId }
      }
      return { amount, accountId }
    })
  }
  return trans.filter((t) => t.amount !== 0)
}

describe('should work for simple case', () => {
  test('simple case', () => {
    const accounts = [
      {
        id: 1,
        target: 0,
      },
      {
        id: 2,
        target: 1000,
      },
    ]

    const contributions = [
      {
        accountId: 2,
        amount: 5,
      },
      {
        accountId: 1,
        amount: 5,
      },
      {
        accountId: 2,
        amount: 10,
      },
      {
        accountId: 1,
        amount: 0,
      },
    ]

    expect(getTransactions(accounts, contributions, 14)).toStrictEqual([
      {
        accountId: 2,
        amount: 5,
      },
      {
        accountId: 1,
        amount: 5,
      },
      {
        accountId: 2,
        amount: 4,
      },
    ])

    expect(getTransactions(accounts, contributions, 20)).toStrictEqual([
      {
        accountId: 2,
        amount: 5,
      },
      {
        accountId: 1,
        amount: 5,
      },
      {
        accountId: 2,
        amount: 10,
      },
    ])
    expect(getTransactions(accounts, contributions, 9)).toStrictEqual([
      {
        accountId: 2,
        amount: 5,
      },
      {
        accountId: 1,
        amount: 4,
      },
    ])
  })

  test('Exceed target for account 2', () => {
    const accounts = [
      {
        id: 1,
        target: 0,
      },
      {
        id: 2,
        target: 9,
      },
    ]

    const contributions = [
      {
        accountId: 2,
        amount: 5,
      },
      {
        accountId: 1,
        amount: 5,
      },
      {
        accountId: 2,
        amount: 10,
      },
      {
        accountId: 1,
        amount: 0,
      },
    ]
    expect(getTransactions(accounts, contributions, 20)).toStrictEqual([
      {
        accountId: 2,
        amount: 5,
      },
      {
        accountId: 1,
        amount: 5,
      },
      {
        accountId: 2,
        amount: 4,
      },
      {
        accountId: 1,
        amount: 6,
      },
    ])
  })
})
