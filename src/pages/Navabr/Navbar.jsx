import logo from '../../assets/logo.png';
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <a href="home"><img src={logo} /></a>
      </div>

      <ul className='app__navbar-links'>
        {['What is NSBE', 'Becoming a Member', 'Events', 'Member Resources', 'Sponsor NSBE', 'Excutive Members', 'Collections'].map((item) => {
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
