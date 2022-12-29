import './NavBar.styles.css'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <header className='nav-bar-section'>
      <h1>KH Products</h1>
      <nav>
        <ul className='nav-links'>
          <li><Link to='/'>Home</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar