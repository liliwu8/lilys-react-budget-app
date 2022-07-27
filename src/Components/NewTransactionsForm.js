import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NewTransactionsForm.css'
const API = process.env.REACT_APP_API_URL

function NewTransactionForm() {
  const navigate = useNavigate()
  const [transaction, setTransaction] = useState({
    item_name: '',
    date: '',
    amount: 0,
    from: '',
  })

 

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post(`${API}/transactions`, transaction)
      .then(() => {
        navigate('/transactions')
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
          value={transaction.date}
          type='date'
          onChange={handleTextChange}
          // placeholder='date'
          required
        />
        <br />
        <br />
        <label htmlFor='item_name'>Name</label>
        <br />
        <input
          id='item_name'
          name='item_name'
          value={transaction.item_name}
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
          value={transaction.amount}
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
          value={transaction.from}
          onChange={handleTextChange}
          type='text'
          placeholder='from'
          required
        />
        <br />
        <br />
        <input type='submit' value='CREATE NEW ITEM' className='button' />
      </form>
    </div>
  )
}

export default NewTransactionForm
