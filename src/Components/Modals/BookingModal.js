import { Modal, useMantineTheme} from '@mantine/core';
import './ProfileUpdateModal.css'
import { useState } from 'react';
import {useUserAuth} from '../../Context/Context' 
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../../Firebase'

function BookingModal({modalOpened,setModalOpened, guide}) {
  const theme = useMantineTheme();
  const {user} = useUserAuth();
  const [tourGuide,setTourGuide] = useState(guide.id)
    const[tourist,setTourist] = useState(user.uid)
    const[tourLocation,setTourLocation] = useState('')
    const[destination,setDestination] = useState('')
    const[startData,setStartDate] = useState('')
    const[endDate,setEndDate] = useState('')
    const[time,setTime] = useState('')
    const [status,setStatus] = useState('Active')
    const current = new Date();
    const addDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    
    const bookingHandler = async (e)=>{
        e.preventDefault()
        try{
            const addDetails = collection(db, 'pending_booking')
            try{
            if (!tourLocation || !destination ) {
              alert('Please fill required fields');
              return;
            }
            await addDoc(addDetails,{location:tourLocation, destination:destination, 
                guide:tourGuide,tourist:tourist,startData:startData, endDate:endDate, time:time,
            date:addDate, status:status})
            .then(()=>{
              setTourLocation('')
              setDestination('')
              setStartDate('')
              setEndDate('')
              setTime('')
            })
      
            }catch(err){
              err.message('Cant add FAQ')
            }
          }catch(err){
            err.message('Cant Connect. Please Try Again!')
          }
    }


  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.25}
      overlayBlur={0.5}
      size = '25%'
      opened = {modalOpened}
      onClose = {()=>setModalOpened(false)}
    >

        <form className = 'infoForm'>
            <h3>Book Guide</h3>

            <div>
                <input 
                    type="text" 
                    className='infoInput' 
                    onChange = {(e)=>setTourLocation(e.target.value)} 
                    placeholder='Tour Location'
                    required
                />
            </div>

            <div>
                <input 
                    type="text" 
                    className='infoInput' 
                    onChange = {(e)=>setDestination(e.target.value)} 
                    placeholder='Pickup Destination'
                />
            </div>

            <div>
                <label>Date From : </label>
                <input
                    type = 'date'
                    className='infoInput' 
                    onChange = {(e)=>setStartDate(e.target.value)}
                    placeholder="Date From"
                />
            </div>

            <div>
                <label>Date To : </label>
                <input 
                    type="date" 
                    className='infoInput' 
                    onChange = {(e)=>setEndDate(e.target.value)}
                    placeholder='Date To'
                />
            </div>

            <div style = {{width:"17.5rem"}}>
                <label>Time : </label>
                <input 
                
                    type="time" 
                    className='infoInput' 
                    onChange = {(e)=>setTime(e.target.value)}
                    placeholder='Select Time'
                />
            </div>
            <button className="button infoButton"
            onClick = {bookingHandler}>Confirm</button>
        </form>
    </Modal>
  );
}

export default BookingModal