import React,{useState,useEffect} from 'react'
import classes from './BookingList.module.css'
import Table from 'react-bootstrap/Table';
import ViewBookingDetailsModal from '../../Modals/ViewBookingDetailsModal'
import FinishTourModal from '../../Modals/FinishTourModal'
import {db, auth } from '../../../Firebase'
import {getDoc, doc, where, query} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

const ConfirmedBookingList = () => {

    const[finishTourModal, setFinishTourModal] = useState(false)
    const [modalOpened,setModalOpened] = useState(false)
    const [touristDetails, setTouristDetails] = useState('')
  const [tourGuideDetails,setTourGuideDetails] = useState('')

  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if(user){
        const tourist = await getDoc(doc(db,'Tourist',user.uid))
        const touristData = tourist.data()
        const tourGuide = await getDoc(doc(db,'Guides',user.uid))
        const tourGuideData = tourGuide.data()

        if(touristData===undefined){
          setTourGuideDetails(tourGuideData)
        }else if(tourGuideData===undefined){
          setTouristDetails(touristData)
        }
      }
    })
  },[])
    
  return (
    <div className  ={classes.tours}>
        <img src  ='https://www.srilankan.com/Images/pages/myb-header-image.jpg' 
        alt = 'abc' className={classes.bookingImage}/>

            {/* <h1>{tourist?'Confirmed Booking' : 'Tours'}</h1> */}
            
            <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th>Tour Destination</th>
                    <th>Pick-up Destination</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Tour Time</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Markvressdfervregg@gmail.com</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>
                      <div className = {classes.btnContainer}>
                        <button className = {classes.tourDelete}>Delete</button>
                        <button className = {classes.tourFinish} onClick = {()=>setFinishTourModal(true)}>Finish</button>
                        {touristDetails?
                          <FinishTourModal 
                            finishTourModal = {finishTourModal} 
                            setFinishTourModal = {setFinishTourModal}
                          />:
                        <ViewBookingDetailsModal 
                          modalOpened = {modalOpened} 
                          setModalOpened = {setModalOpened}
                        />}
                      </div>
                      
                    </td>
                  </tr>
                </tbody>
              </Table>
          </div>
  )
}

export default ConfirmedBookingList