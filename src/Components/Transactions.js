import { useEffect, useState } from 'react'
import axios from 'axios'
import Transaction from './Transaction'
import './Transactions.css'
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
    let amt = 0
    for (let sum of amount) {
      if (typeof sum.amount === 'string') {
        amt += parseInt(sum.amount)
      } else {
        amt += sum.amount
      }
    }
    return amt
  }

  let colorNum = (amount) => {
    if (amount >= 1000) {
      return 'green'
    } else if (amount <= 1000 && amount >= 0) {
      return 'grey'
    } else {
      return 'red'
    }
  }

  return (
    <div className='Transactions'>
      <section>
        <h1>
          Bank Amount Total:{' '}
          <span className={colorNum(total(transactions))}>
            {dollarUSLocale.format(total(transactions))}
          </span>
        </h1>
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
