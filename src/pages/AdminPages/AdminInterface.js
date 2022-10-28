import React from 'react'
import {Router,Routes,Route} from 'react-router-dom';
import AdminHomeContent from '../../AdminComponents/AdminPages/Homepage/AdminHomeContent'
import Users from '../../AdminComponents/AdminPages/Users/Users';
import SideBar from '../../AdminComponents/SideBar/SideBar'
import TopBar from '../../AdminComponents/TopBar/TopBar'
// import AdminNavigation from '../../Components/layouts/AdminNavigation'
import classes from './AdminInterface.module.css'

const AdminInterface = () => {
  return (
    <div className = {classes.adminPanel}>
      <div className = {classes.blur} style = {{top:'36%', left:'-8rem'}}></div>
          <TopBar />
          <div className = {classes.container}>
            <SideBar />
            <AdminHomeContent />                 
          </div>

        
    </div>
  )
}

export default AdminInterface