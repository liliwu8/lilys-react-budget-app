import { Link } from 'react-router-dom'
import './Transaction.css'

function Transaction({ transaction, index }) {
  let formatDate = new Date(transaction.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
  let dollarUSLocale = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <tr>
      <td>{formatDate}</td>
      <td className='item-name'>
        <Link to={`/transactions/${index}`}>{transaction.item_name}</Link>
      </td>
      <td>{dollarUSLocale.format(transaction.amount)}</td>
    </tr>
  )
}

export default Transaction
