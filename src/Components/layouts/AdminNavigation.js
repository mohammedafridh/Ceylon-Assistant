import React from 'react'
import classes from './AdminNavigation.module.css'

const AdminNavigation = () => {
  return (
    <div className = {classes.AdminNavigation}>

        <div className = {classes.profileContainer}>
            <img src = "https://www.themandagies.com/wp-content/uploads/2017/01/Paris-Day-3-29-1500x1000.jpg" alt = "" />
            <h3>Afridh</h3>
            <hr/>
        </div>

        <div className = {classes.navigationPanel}>
            <ul>
                <li>Dashboard</li>
                <li>Users</li>
                <li>Tours</li>
                <li>Bookings</li>
                <li>Add things To Do</li>
                <li>FAQ</li>
            </ul>
        </div>

    </div>
  )
}

export default AdminNavigation