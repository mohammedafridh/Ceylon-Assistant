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
import { toast } from 'react-hot-toast'

function MainNavigation(){

    const {logOut,user} = useUserAuth();
    const [touristModal,setTouristModal] = useState(false)
    const [guideModal,setGuideModal] = useState(false)
    const[loginModel,setLoginModel] = useState(false)


    const handleLogOut = async ()=>{
        await logOut()
        toast.success('Logged Out Successfully!')
    }

    return(
        <header className={classes.header}>
            <h1 className={classes.title}>
                Ceylon<span className = {classes.titleSub}>Assistant</span>
            </h1>
            <ul>
                <li>
                    <NavLink to = '/' className={({ isActive }) =>
                        isActive ? classes.active:''} end>
                        Home
                    </NavLink>
                </li>
                <li><NavLink to = ''>Tourings
                <FontAwesomeIcon icon={faChevronDown} className = {classes.iconRight}/></NavLink>
                    <div className = {classes.dropDown}>
                        <ul>
                            <li><NavLink to = '/tourGuides' className={({ isActive }) =>
                        isActive ? classes.active:''} end>All Guides</NavLink></li>
                            {user &&

                                <li><NavLink to = '/bookings' className={({ isActive }) =>
                                isActive ? classes.active:''} end>Bookings</NavLink></li>
                            }
                        </ul>
                    </div>
                </li> 
                <li><NavLink to = '/thingsToDo' className={({ isActive }) =>
                        isActive ? classes.active:''} end>Things To Do</NavLink></li>   

                <li><NavLink to = ''>About Us
                <FontAwesomeIcon icon={faChevronDown} className = {classes.iconRight}/></NavLink>
                    <div className = {classes.dropDown}>
                        <ul>
                            <li><NavLink to = '/about' className={({ isActive }) =>
                        isActive ? classes.active:''} end> About</NavLink></li>

                            <li><NavLink to = '/toursGallery' className={({ isActive }) =>
                        isActive ? classes.active:''} end>Tours Gallery</NavLink></li>
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
                                {user &&
                                <li><NavLink to = '/profile' 
                                className={({ isActive }) =>
                                 isActive ? classes.active:''} end>Profile</NavLink></li>}

                            {!user &&
                                <li><NavLink to = '' onClick={()=>setGuideModal(true)}>Register Guide</NavLink></li>
                            }
                                    <GuideRegisterModal 
                                        guideModal = {guideModal} 
                                        setGuideModal = {setGuideModal}
                                    />
                            {!user &&
                                <li><NavLink to = '' onClick={()=>setTouristModal(true)}>Register Tourist</NavLink></li>
                            }
                                    <TouristRegisterModal 
                                        touristModal = {touristModal} 
                                        setTouristModal = {setTouristModal}
                                    />
                                    
                            {!user &&
                                <li><NavLink to = '' onClick={()=>setLoginModel(true)}
                                className={({ isActive }) =>isActive ? classes.active:''} end>
                            Log In</NavLink></li>
                            }
                                    <LoginModal 
                                        loginModel = {loginModel} 
                                        setLoginModel = {setLoginModel}
                                    />
                            
                                {user &&
                                    <li><NavLink to="/" onClick={handleLogOut}
                                    className={({ isActive }) =>isActive ? classes.active:''} end>
                                        Log Out</NavLink></li>
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default MainNavigation;

