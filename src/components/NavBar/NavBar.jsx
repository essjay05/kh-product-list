import './NavBar.styles.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <header className='nav-bar-section'>
      <h1>KH Products</h1>
      <nav>
        <ul className='nav-links'>
          <li className='title-style-4'>
            <NavLink to='/'>Home</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar