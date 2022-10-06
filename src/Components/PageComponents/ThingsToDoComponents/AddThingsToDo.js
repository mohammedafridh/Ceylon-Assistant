import React from 'react'
import classes from './AddThingsToDo.module.css'

function AddThingsToDo() {
  return (
    <div className = {classes.addThingsToDoContainer}>
      <div className = {classes.addThingsToDo}>
          <h3>Add Things To Do</h3>
          <div className = {classes.addThings}>

            <div className = {classes.add}>
                <label>Activity Type</label>
                <input type = 'text' />
            </div>
            <div className = {classes.add}>
                <label>Image URL</label>
                <input type = 'text' />
            </div>
            <div className = {classes.add}>
                <label>Description</label>
                <input type = 'text' />
            </div>
          </div>
      </div>
    </div>
  )
}

export default AddThingsToDo