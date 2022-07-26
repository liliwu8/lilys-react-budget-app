import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <nav>
      <h1>
        <Link to='/transactions'>Transactions</Link>
      </h1>
      <h1>
        <Link to='/transactions/new'>New Transaction</Link>
      </h1>
    </nav>
  )
}

export default NavBar
