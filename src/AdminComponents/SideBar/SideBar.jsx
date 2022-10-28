import React from 'react'
import './SideBar.css'
import {HelpCenter, People, PlaylistAddCheck, TimeToLeave,TravelExplore,Collections, Mail, Home} from '@mui/icons-material';

const SideBar = () => {
  return (
    <div className="sideBar">
        <div className="sideBarWrapper">
            <div className="sideBarMenu">
                <h3>Dashboard</h3>
                <ul className="sideBarList">
                    <li className="sideBarListItem active">
                        <Home/>Home
                    </li>
                </ul>
            </div>

            <div className="sideBarMenu">
                <h3>Quick Menu</h3>
                <ul className="sideBarList">

                    <li className="sideBarListItem">
                        <People/>Users
                    </li>
                    <li className="sideBarListItem">
                        <TimeToLeave/>Tours
                    </li>
                    <li className="sideBarListItem">
                        <TravelExplore/>Discover Gallery
                    </li>
                    <li className="sideBarListItem">
                        <PlaylistAddCheck/>Things To Do Gallery
                    </li>
                    <li className="sideBarListItem">
                        <Collections/>Tours Gallery
                    </li>
                    <li className="sideBarListItem">
                        <HelpCenter/>FAQ
                    </li>
                </ul>
            </div>

            <div className="sideBarMenu">
                <h3>Notifications </h3>
                <ul className="sideBarList">
                    
                    <li className="sideBarListItem">
                        <Mail/>Messages
                    </li>

                    <li className="sideBarListItem">
                        <Mail/>Guide Requests
                    </li>

                    <li className="sideBarListItem">
                        <Mail/>Mail Subscription
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SideBar