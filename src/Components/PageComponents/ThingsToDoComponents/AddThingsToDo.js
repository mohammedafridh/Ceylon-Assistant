import {useState} from 'react'
import classes from './AddThingsToDo.module.css'
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../../../Firebase'

function AddThingsToDo() {

  const [type,setType] = useState('')
  const [url,setUrl] = useState('')
  const [description,setDescription] = useState('')

  const addThings = ()=>{
      const addDetails =  collection(db, 'ThingsToDo')
        addDoc(addDetails,{activityType:type, imageURL: url, description:description}).then(()=>{
          setType('')
          setUrl('')
          setDescription('')
        })
  }

  return (
    <div className = {classes.addThingsToDoContainer}>
      <div className = {classes.addThingsToDo}>
          <h3>Add Things To Do</h3>
          <div className = {classes.addThings}>

            <div className = {classes.add}>
                <input type = 'text' value = {type} placeholder = 'Activity Type' 
                onChange= {(e)=>setType(e.target.value)} required/>
            </div>
            <div className = {classes.add}>
                <input type = 'text' value = {url} placeholder = 'Image Url'
                 onChange= {(e)=> setUrl(e.target.value)}/>
            </div>
            <div className = {classes.add}>
                <textarea value = {description} placeholder = 'Description'
                 onChange= {(e)=> setDescription(e.target.value)}></textarea>
            </div>

            <div className = {classes.actionsContainer}>
                <button onClick = {addThings}>Submit</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AddThingsToDo