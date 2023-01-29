import {useState,useEffect} from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useUserAuth } from '../../Context/Context'
import classes from './MainNavigation.module.css'
import * as Icons from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import TouristRegisterModal from '../Modals/AuthenticationModals/TouristRegisterModel'
import GuideRegisterModal from '../Modals/AuthenticationModals/GuideRegisterModal'
import LoginModal from '../Modals/AuthenticationModals/LoginModal'

function MainNavigation(){

    const {logOut} = useUserAuth();
    const [touristModal,setTouristModal] = useState(false)
    const [guideModal,setGuideModal] = useState(false)
    const[loginModel,setLoginModel] = useState(false)

    const handleLogOut = async ()=>{
        try{
            await logOut()
        }catch(err){
            console.log(err.message)
        }
    }

    return(
        <header className={classes.header}>
            <h1 className={classes.title}>
                Ceylon<span className = {classes.titleSub}>Assistant</span>
            </h1>
            <ul>
                <li>
                    <NavLink to = '/' className={({ isActive }) =>
                        isActive ? "navigationItem active" : "navigationItem"} end>
                        Home
                    </NavLink>
                </li>
                <li><NavLink to = ''>Tourings
                <FontAwesomeIcon icon={faChevronDown} className = {classes.iconRight}/></NavLink>
                    <div className = {classes.dropDown}>
                        <ul>
                            <li><NavLink to = '/tourGuides'>All Guides</NavLink></li>
                            <li><NavLink to = '/bookings'>Bookings</NavLink></li>
                        </ul>
                    </div>
                </li> 
                <li><NavLink to = '/thingsToDo'>Things To Do</NavLink></li>                 
                <li><NavLink to = ''>About Us
                <FontAwesomeIcon icon={faChevronDown} className = {classes.iconRight}/></NavLink>
                    <div className = {classes.dropDown}>
                        <ul>
                            <li><NavLink to = '/about'> About</NavLink></li>
                            <li><NavLink to = '/toursGallery'>Tours Gallery</NavLink></li>
                        </ul>
                    </div>
                </li>
                {/* <li><NavLink to = '/admin'>Admin Login</NavLink></li>  */}
            </ul>

            <div>
                <ul>
                    <li><NavLink to = ''>Options <FontAwesomeIcon icon={faChevronDown} className = {classes.iconRight}/></NavLink>
                        <div className = {classes.dropDown}>
                            <ul>
                                <li><NavLink to = '/profile'>Profile</NavLink></li>
                                <li><NavLink to = '' onClick={()=>setGuideModal(true)}>Register Guide</NavLink></li>
                                    <GuideRegisterModal 
                                        guideModal = {guideModal} 
                                        setGuideModal = {setGuideModal}
                                    />

                                <li><NavLink to = '' onClick={()=>setTouristModal(true)}>Register Tourist</NavLink></li>
                                    <TouristRegisterModal 
                                        touristModal = {touristModal} 
                                        setTouristModal = {setTouristModal}
                                    />

                                <li><NavLink to = '' onClick={()=>setLoginModel(true)}>Log In</NavLink></li>
                                    <LoginModal 
                                        loginModel = {loginModel} 
                                        setLoginModel = {setLoginModel}
                                    />

                                <li><NavLink to = '/login'>Log Out</NavLink></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default MainNavigation;


