import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from './logo.png'

function NavBar() {
  return (
    <nav>
      <Link to='/'>
        <img src={logo} alt='logo' height={90} width={90} />
      </Link>
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
