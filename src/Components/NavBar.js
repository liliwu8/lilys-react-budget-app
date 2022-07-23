import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <h1>
        <Link to='/transactions'>Transactions</Link>
      </h1>
      <h1>Account Total</h1>
      <h1>
        <Link to='/transactions/new'>New Bookmark</Link>
      </h1>
    </nav>
  )
}

export default NavBar
