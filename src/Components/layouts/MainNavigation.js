import {Link} from 'react-router-dom'
import { useUserAuth } from '../../Context/Context'
import classes from './MainNavigation.module.css'

function MainNavigation(){

    const {logOut} = useUserAuth();

    const handleLogOut = async ()=>{
        try{
            await logOut()
        }catch(err){
            console.log(err.message)
        }
    }

    return(
        <header className={classes.header}>
            <h1 className={classes.title1}>Ceylon Assistant</h1>
            <ul>
                <li><Link to = '/home'>Home</Link></li>
                <li><Link to = '/guides'>Tour Guides</Link></li>
                <li><Link to = '/search'>Search</Link></li>
                <li><Link to = '/bookings'>Bookings</Link></li>
                <li><Link to = '/profile'>Profile</Link></li>    
            </ul>
            <button className = {classes.signOut} onClick = {handleLogOut}>Sign Out</button>
        </header>
    )
}

export default MainNavigation;
