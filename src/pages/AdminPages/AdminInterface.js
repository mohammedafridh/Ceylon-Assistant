import React from 'react'
import classes from './AdminInterface.module.css'

const AdminInterface = () => {
  return (
    <div className={classes.AdminInterface}>
        <div className = {classes.navigationPanel}>
            <h3>Navigation Panel</h3>
        </div>

        <div className = {classes.detailsPanel}>
            <h1>Details Panel</h1>
        </div>
    </div>
  )
}

export default AdminInterface