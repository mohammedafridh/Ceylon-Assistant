import {Link} from 'react-router-dom'
import { useUserAuth } from '../../Context/Context'
import classes from './MainNavigation.module.css'
import * as Icons from 'react-icons/fa'

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
                <li><Link to = '/home'><Icons.FaHome className = {classes.icon}/> Home</Link></li>
                <li><Link to = '/guides'><Icons.FaUsers  className = {classes.icon}/> Tour Guides</Link></li>
                <li><Link to = '/search'><Icons.FaSearch className = {classes.icon}/> Search</Link></li>
                <li><Link to = '/bookings'><Icons.FaBook className = {classes.icon}/> Bookings</Link></li>
                <li><Link to = '/profile'><Icons.FaUser className = {classes.icon}/> Profile</Link></li>    
            </ul>
            <button className = {classes.signOut} onClick = {handleLogOut}>Sign Out</button>
        </header>
    )
}

export default MainNavigation;
