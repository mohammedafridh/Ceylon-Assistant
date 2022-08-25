import {Link} from 'react-router-dom'
import { useUserAuth } from '../../Context/Context'
import classes from './MainNavigation.module.css'
import * as Icons from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import {Dropdown, DropdownButton} from 'react-bootstrap'

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
            {/* <div className = {classes.logo}>
                <img src ='https://firebasestorage.googleapis.com/v0/b/ceylon-assistant.appspot.com/o/logos%2FWhatsApp%20Image%202022-08-17%20at%2010.55.49%20PM%20(1).jpeg?alt=media&token=72c21d23-5832-4cf4-9001-aa34f4b4f702' alt = 'logo' />
            </div>  */}
            <h1 className={classes.title1}>Ceylon Assistant</h1>
            <ul>
                <li><Link to = '/'><FontAwesomeIcon icon={faHouse} className = {classes.icon}/> Home</Link></li>
                {/* <li><Link to = '/users'><Icons.FaUsers  className = {classes.icon}/> All Users</Link></li>
                <li><Link to = '/guides'><Icons.FaUsers  className = {classes.icon}/> Tour Guides</Link></li> */}
                <li><Link to = '/bookings'><Icons.FaBook className = {classes.icon}/> Bookings</Link></li>
                <li><Link to = '/tours'><Icons.FaCar className = {classes.icon}/> Tours</Link></li>
                <li><Link to = '/profile'><Icons.FaUser className = {classes.icon}/> Profile</Link></li>  
                
            </ul>
            {/* <button className = {classes.signOut} onClick = {handleLogOut}>Sign Out</button> */}
            <Dropdown className = {classes.drop}>
                <Dropdown.Toggle className = {classes.dropContainer} variant="secondary">
                Options
                </Dropdown.Toggle>

                <Dropdown.Menu className = {classes.dropMenu} variant="dark">
                <Dropdown.Item>Register</Dropdown.Item>
                <Dropdown.Item>Login</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item><Link to = '/login'>Sign Out</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </header>
    )
}

export default MainNavigation;
