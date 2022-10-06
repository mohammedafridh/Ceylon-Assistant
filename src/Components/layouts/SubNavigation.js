import classes from './SubNavigation.module.css'
import * as Icons from 'react-icons/fa'
import {Link} from 'react-router-dom'

function SubNavigation(){
    return(
        <header className={classes.header}>
            <ul>
                <li><Link to = '/tourGuides'><Icons.FaUsers  className = {classes.icon}/> Guides</Link></li>
                <li><Link to = '/bookings'><Icons.FaBook className = {classes.icon}/> Bookings</Link></li>
                <li><Link to = '/tours'><Icons.FaCar className = {classes.icon}/> Tours</Link></li>           
            </ul>
        </header>
    )
}

export default SubNavigation