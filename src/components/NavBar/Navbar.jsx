import { faListSquares } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
// import HomeSharpIcon from '@mui/icons-material/HomeSharp';
// import NewspaperSharpIcon from '@mui/icons-material/NewspaperSharp';
import './NavBar.sass'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
        <nav className='nav'>
            <div className='nav__logo'>
                <NavLink to="/">CoinChaser</NavLink>
            </div>
            <button className="nav__ham-menu " onClick={() => {
                setIsOpen(prev => !prev)
            }}>
                <svg viewBox="0 0 100 100" width="50" height="20" fill="white">
                    <rect x="" y="10" width="150" height="15"></rect>
                    <rect x="" y="40" width="150" height="15"></rect>
                    <rect x="" y="70" width="150" height="15"></rect>
                </svg>
            </button>
            <ul className="nav__links" aria-expanded={isOpen}>
                <NavItem link="/" name="Home" />
                <NavItem link="/cryptocurrencies" name="Cryptocurrencies" />
                <NavItem link="/news" name="News" />
            </ul>
        </nav>
    </>        
  )
}


function NavItem(props) {

    return (
        <li>    
            <NavLink to={props.link}>
                <span>
                   {props.name}
                </span>
            </NavLink>
        </li>
    )

}

export default Navbar