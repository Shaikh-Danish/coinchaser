import React from 'react'
import { NavLink } from 'react-router-dom'
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import NewspaperSharpIcon from '@mui/icons-material/NewspaperSharp';
import './NavBar.sass'

function Navbar() {
  return (
    <>
        <nav className='nav'>
            <div className='nav__logo'>
                <NavLink to="/">CoinChaser</NavLink>
            </div>
            <ul className="nav__links">
                <li>    
                    <NavLink to='/'>
                        <HomeSharpIcon />
                        <span>
                            Home
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/cryptocurrencies'>
                        <ShowChartRoundedIcon />
                        <span>
                        Cryptocurrencies
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/news'>
                        <NewspaperSharpIcon />
                        <span>
                            News
                        </span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </>        
  )
}

export default Navbar