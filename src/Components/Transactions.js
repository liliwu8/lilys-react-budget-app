import { useEffect, useState } from 'react'
import axios from 'axios'
import Transaction from './Transaction'
const API = process.env.REACT_APP_API_URL

function Transactions() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    axios.get(`${API}/transactions`).then((res) => {
      setTransactions(res.data)
    })
  }, [])

  let dollarUSLocale = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  // let total = transactions.reduce((pre, curr) => {
  //   return pre + curr.amount
  // }, 0)

  const total = (amount) => {
    let array = []
    let amt = 0
    for (let sum of amount) {
      if (typeof sum.amount === 'string') {
        array.push(parseInt(sum.amount))
      } else {
        array.push(sum.amount)
      }
    }
    for (let arr of array) {
      amt += arr
    }
    return parseInt(amt)
  }
  
  return (
    <div className='Transactions'>
      <section>
        <h1>Bank Amount Total: {dollarUSLocale.format(total(transactions))}</h1>
        <table>
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <Transaction
                  key={index}
                  transaction={transaction}
                  index={index}
                />
              )
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Transactions
