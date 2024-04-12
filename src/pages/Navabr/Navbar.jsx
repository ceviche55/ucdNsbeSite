import logo from '../../assets/logo.png';
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <img src={logo} />
      <ul className='app__navbar-links'>
        {['HOME', 'NSBE', 'SPONSORSHIP', 'BOARD'].map((item) => {
          return <li className='app__flex p-text' key={`links-${item}`}>
            <div />
            <a href={`${item}`}>{item}</a>
          </li>
        }
        )}
      </ul>
    </nav>
  )
}

export default Navbar
