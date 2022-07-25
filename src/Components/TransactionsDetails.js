import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
let API = process.env.REACT_APP_API_URL

function TransactionsDetails() {

  const [transaction, setTransaction] = useState([])
  let { index } = useParams()
  let navigate = useNavigate()
  let formatDate = new Date(transaction.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
   
  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => {
          setTransaction(res.data)
          navigate(`/transactions/${index}`)
      })
      .catch(() => {
        navigate('/not-found')
      })
  }, [index, navigate])

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate('/transactions')
      })
      .catch((err) => {
        console.warn(err)
      })
  }

  return (
    <article>
      <p>Date: {formatDate}</p>
      <p>Name: {transaction.item_name}</p>
      <p>Amount: {transaction.amount}</p>
      <p>From: {transaction.from}</p>
      <div className='showNavigation'>
        <Link to={`/transactions`}>
          <button>Back</button>
        </Link>{' '}
        <Link to={`/transactions/${index}/edit`}>
          <button>Edit</button>
        </Link>{' '}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </article>
  )
}

export default TransactionsDetails
