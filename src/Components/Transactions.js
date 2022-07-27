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

  //a format to for $, comma ,and decimals
  let dollarUSLocale = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  // let total = transactions.reduce((pre, curr) => {
  //   return pre + curr.amount
  // }, 0)

  /**
   * this higher order func is to find a string to convert into number and add to get teh sum
   * @param {Number} amount data amount 
   * @returns Number 
   */
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

  /**
   * colorNum is to color number on certain condiiton 
   * @param {Number} amount  amount in data for each price
   * @returns 
   */
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
        <h2>
          Bank Amount Total:{' '}
          <span className={colorNum(total(transactions))}>
            {dollarUSLocale.format(total(transactions))}
          </span>
        </h2>
        <table className='table'>
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
