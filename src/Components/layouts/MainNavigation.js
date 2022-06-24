import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavigation(){
    return(
        <header className={classes.header}>
            <h1 className={classes.title1}>Ceylon Assistant</h1>
            <ul>
                <li><Link to = '/'>Home</Link></li>
                <li><Link to = '/guides'>Tour Guides</Link></li>
                <li><Link to = '/search'>Search</Link></li>
                <li><Link to = '/booking'>Bookings</Link></li>
                <li><Link to = '/profile'>Profile</Link></li>    
            </ul>
            <button className = {classes.signOut}>Sign Out</button>
        </header>
    )
}

export default MainNavigation;
