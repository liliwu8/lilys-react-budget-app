import { Link } from 'react-router-dom'
function Transaction({ transaction, index }) {
  let formatDate = new Date(transaction.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
  return (
    <tr>
      <td>{formatDate}</td>
      <td>
        <Link to={`/transactions/${index}`}>{transaction.item_name}</Link>
      </td>
      <td>{transaction.amount}</td>
    </tr>
  )
}

export default Transaction
