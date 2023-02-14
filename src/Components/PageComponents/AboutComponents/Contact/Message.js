import React,{useState,useEffect} from 'react'
import classes from './ContactContents.module.css'
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../../../../Firebase'
import SuccessMessageModal from '../../../Modals/successMessageModal';
import { useUserAuth } from '../../../../Context/Context';
import { toast } from 'react-hot-toast';
import loadingGif from '../../../../assets/loading-gif.gif'

const Message = () => {

    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[subject,setSubject] = useState('');
    const[message,setMessage] = useState('');
    const[status,setStatus] = useState('active')
    const[formStatus,setFormStatus] = useState('')
    const[loading,setLoading]=useState(false)
    // const {user} = useUserAuth()

    const messageHandler = async(e)=>{
        e.preventDefault()
        try{
          setLoading(true)
          const addDetails = collection(db, 'messages')
          await addDoc(addDetails,{name:name, email: email, subject:subject, message:message, status:status})
          .then(()=>{
            toast.success("Message Sent!")
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
            setLoading(false)
            
            // setFormStatus('Success')
          })
    
        }catch(err){
          err.message('Cant Connect. Please Try Again!')
          setLoading(false)
        }
        
      }

  return (
    <div className = {classes.fillDetails}>
              <form onSubmit={messageHandler} className={classes.bookingForm}>
                <h3>Message Us</h3>

                <div>
                    <label>Your Name*</label>
                    <input type="text" 
                    className={classes.bookingInput} 
                    onChange = {(e)=> setName(e.target.value)}
                    value = {name}/>
                    
                </div>

                <div>
                    <label>Your Email*</label>
                    <input type="text" 
                    className={classes.bookingInput} 
                    onChange = {(e)=> setEmail(e.target.value)}
                    value = {email}
                    required/>
                </div>

                <div>
                    <label>Subject*</label>
                    <input type="text" 
                    className={classes.bookingInput} 
                    onChange = {(e)=> setSubject(e.target.value)}
                    value = {subject}/>
                </div>

                <span>
                    <label>Message*</label>
                    <textarea 
                      className = {classes.bookingDescription}
                      onChange= {(e)=> setMessage(e.target.value)}
                      value = {message}
                      required>
                    </textarea>
                </span>

              {loading?
                  <button type = 'submit' className={classes.bookBtn}>
                  <img className='loadingIcon' src={loadingGif} />
                </button>:  
                <button type = 'submit' className = {classes.bookBtn}>Send Message</button>}
                <SuccessMessageModal modalOpened={formStatus === 'Success' ?  true : false} setModalOpened={() => {setFormStatus('')}}/>
            </form>
            
          </div>
  )
}

export default Message