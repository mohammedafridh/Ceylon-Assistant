import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useUserAuth } from '../../Context/Context'
import classes from './MainNavigation.module.css'
import * as Icons from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import TouristRegisterModal from '../Modals/AuthenticationModals/TouristRegisterModel'
import GuideRegisterModal from '../Modals/AuthenticationModals/GuideRegisterModal'

function MainNavigation(){

    const {logOut} = useUserAuth();
    const [touristModal,setTouristModal] = useState(false)
    const [guideModal,setGuideModal] = useState(false)

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
                <li><Link to = '/'>Home</Link></li>
                <li><Link to = ''>Tourings
                <FontAwesomeIcon icon={faChevronDown} className = {classes.iconRight}/></Link>
                    <div className = {classes.dropDown}>
                        <ul>
                            <li><Link to = '/tourGuides'>All Guides</Link></li>
                            <li><Link to = '/bookings'>Bookings</Link></li>
                        </ul>
                    </div>
                </li> 
                <li><Link to = '/thingsToDo'>Things To Do</Link></li>                 
                <li><Link to = ''>About Us
                <FontAwesomeIcon icon={faChevronDown} className = {classes.iconRight}/></Link>
                    <div className = {classes.dropDown}>
                        <ul>
                            <li><Link to = '/about'> About</Link></li>
                            <li><Link to = '/toursGallery'>Tours Gallery</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>

            <div>
                <ul>
                    <li><Link to = ''>Options <FontAwesomeIcon icon={faChevronDown} className = {classes.iconRight}/></Link>
                        <div className = {classes.dropDown}>
                            <ul>
                                <li><Link to = '/profile'>Profile</Link></li>
                                <li><Link to = '' onClick={()=>setGuideModal(true)}>Register Guide</Link></li>
                                    <GuideRegisterModal 
                                        guideModal = {guideModal} 
                                        setGuideModal = {setGuideModal}
                                    />

                                <li><Link to = '' onClick={()=>setTouristModal(true)}>Register Tourist</Link></li>
                                    <TouristRegisterModal 
                                        touristModal = {touristModal} 
                                        setTouristModal = {setTouristModal}
                                    />

                                <li><Link to = '/login'>Log In</Link></li>
                                <li><Link to = '/login'>Log Out</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default MainNavigation;


