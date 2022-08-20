import {useState, useEffect} from 'react'
import {Form, Card, Button} from 'react-bootstrap';
import classes from './PopupPages.module.css'
import { useUserAuth } from "../Context/Context";
import {addDoc} from 'firebase/firestore'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../Firebase';

function SetBooking(props){

  const {user} = useUserAuth();
  const [guide,setGuide] = useState('')
  const [tourist,setTourist] = useState('')
  const [pickup,setPickup] = useState('')
  const [destination,setDestination] = useState('')
  const [date,setDate] = useState('')
  const [time,setTime] = useState('')
  const [days,setDays] = useState('')
  // const [loading,setLoading] = (false)
  const [tourists,setTourists] = ([])
  const [error,setError] = useState('')

  function createBooking(){
      
  }

//   useEffect(()=>{
//     // setLoading(true);
//     const unsub = onSnapshot(collection(db,"Tourists"),(snapshot)=>{
        
//         let list = [];
//         snapshot.docs.forEach((doc)=>{
//           console.log(doc)
//             list.push({
//                 id:doc.id,
//                 ...doc.data()
//             })
//         });
//         setTourists(list);
//         console.log(tourists)
//         // setLoading(false)
//     },
//     (error)=>{
//         setError(error.message);
//     }
//     );
//     return ()=>{
//         unsub()
//     };
// },[]);

  return (
      <div className = {classes.container}>
        <Card className = {classes.card} >
        <Form className={classes.form} onSubmit = {createBooking}> 
          <div className = {classes.closeAll}>
            <Button className = {classes.close} onClick = {props.onCancel}>x</Button>
          </div>

          <div className = {classes.details}>
            <div class = 'row'>
            <div class = 'col-6'>
            <Form.Group className="mb-3">
              <Form.Label><b>Tour Guide Name : </b></Form.Label><br></br>
              <Form.Control type = 'text' value = {props.guideName} disabled />
              
            </Form.Group>
            </div>
            <div class = 'col-6'>
            <Form.Group className="mb-3">
              <Form.Label><b>Tourist Email Address : </b></Form.Label>
              <Form.Control type = 'text' value = {user && user.email} disabled />
            </Form.Group>
            </div>
            </div>
            <Form.Group className="mb-3">
              <Form.Label><b>Image url : </b></Form.Label><br></br>
              <Form.Control type = 'text' value = {props.guideName} disabled />
            </Form.Group>
            <div class = 'row'>
              <div class = 'col-6'>
              <Form.Group id = 'pickup' className = {classes.fill1}>
                  <Form.Label className = {classes.label}><b>Pickup Location</b></Form.Label>
                <Form.Control type = 'text' required />
              </Form.Group>
              </div>
              <div class = 'col-6'>
                <Form.Group id = 'destination' className = {classes.fill1}>
                    <Form.Label className = {classes.label}><b>Traveling Location</b></Form.Label>
                  <Form.Control type = 'text' required/>
                </Form.Group>
              </div>
            </div>

            <div class = 'row'>
            <div class = 'col-4'>
            <Form.Group id = 'date' className = {classes.fill1}>
                <Form.Label className = {classes.label}><b>Tour Date</b></Form.Label>
              <Form.Control type = 'date' required/>
            </Form.Group>
            </div>
            <div class = 'col-4'>
            <Form.Group id = 'time' className = {classes.fill1}>
                <Form.Label className = {classes.label}><b>Tour time</b></Form.Label>
              <Form.Control type = 'time' required/>
            </Form.Group>
            </div>
            <div class = 'col-4'>
            <Form.Group id = 'days' className = {classes.fill1}>
                <Form.Label className = {classes.label}><b>No of Days</b></Form.Label>
              <Form.Control type = 'number' required/>
            </Form.Group>
            </div>
            </div>
          </div>

          <div className = {classes.actions}>
            <Button type = 'submit' className = {classes.cncl} onClick = {props.onCancel}>Cancel</Button>
            <Button type = 'submit' className = {classes.book}>Confirm</Button>
          </div>
          
        </Form>
        </Card>
      </div>
    );
}

export default SetBooking;