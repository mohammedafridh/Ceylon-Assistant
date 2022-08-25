import React from 'react'
import classes from './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUsers, faBook, faCar, faUser } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
    <div className = 'headerContainer'>
      <div className= 'headerList'>
        <div className='headerListItems'>
        <Link to = '/'>
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
        </Link>
        </div>
        <div className='headerListItems'>
        <Link to = '/users'>
            <FontAwesomeIcon icon={faUsers} />
            <span>All Users</span>
        </Link>
        </div>
        <div className='headerListItems'>
        <Link to = '/bookings'>
            <FontAwesomeIcon icon={faBook} />
            <span>Bookings</span>
        </Link>
        </div>
        <div className='headerListItems'>
        <Link to = '/tours'>
            <FontAwesomeIcon icon={faCar} />
            <span>Tours</span>
        </Link>
        </div>
        <div className='headerListItems'>
        <Link to = '/profile'>
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
        </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header;
