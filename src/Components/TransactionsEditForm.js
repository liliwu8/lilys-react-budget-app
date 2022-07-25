import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
const API = process.env.REACT_APP_API_URL

function TransactionsEditForm() {
  let { index } = useParams()
  const navigate = useNavigate()

  const [transactions, setTransactions] = useState({
    item_name: '',
    date: '',
    amount: 0,
    from: '',
  })

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => {
        setTransactions(res.data)
      })
      .catch((err) => {
        console.warn(err)
      })
  }, [index])

  const handleTextChange = (event) => {
    setTransactions({
      ...transactions,
      [event.target.id]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .put(`${API}/transactions/${index}`, transactions)
      .then((res) => {
        setTransactions(res.data)
        navigate(`/transactions/${index}`)
      })
      .catch((err) => {
        console.warn(err)
      })
  }
    
     
  return (
    <div className='New'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='date'> Date</label>
        <br />
        <input
          id='date'
          name='date'
          value={transactions.date}
          type='text'
          onChange={handleTextChange}
          placeholder='date'
          required
        />
        <br />
        <br />
        <label htmlFor='item_name'>Name</label>
        <br />
        <input
          id='item_name'
          name='item_name'
          value={transactions.item_name}
          type='text'
          placeholder='name'
          onChange={handleTextChange}
          required
        />
        <br />
        <br />
        <label htmlFor='amount'>Amount</label>
        <br />
        <input
          id='amount'
          name='amount'
          value={transactions.amount}
          type='number'
          placeholder='amount'
          onChange={handleTextChange}
          required
        />
        <br />
        <br />
        <label htmlFor='from'>From</label>
        <br />
        <input
          id='from'
          name='from'
          value={transactions.from}
          onChange={handleTextChange}
          type='text'
          placeholder='from'
          required
        />
        <br />
        <br />
        <input type='submit' />
      </form>
      <br />
      <Link to={`/transactions/${index}`}>
        <button>Back</button>
      </Link>
    </div>
  )
}

export default TransactionsEditForm
