import { Modal, useMantineTheme} from '@mantine/core';
import './ProfileUpdateModal.css'
import { useState, useEffect } from 'react';
import {useUserAuth} from '../../Context/Context' 
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../../Firebase'

function BookingModal({modalOpened,setModalOpened, guide}) {
  const theme = useMantineTheme();
  const {user} = useUserAuth();
  const [tourGuide,setTourGuide] = useState()
    const[tourist,setTourist] = useState(user.uid)
    const[tourLocation,setTourLocation] = useState('')
    const[destination,setDestination] = useState('')
    const[startData,setStartDate] = useState('')
    const[endDate,setEndDate] = useState('')
    const[time,setTime] = useState('')
    const [status,setStatus] = useState('Active')
    const current = new Date();
    const addDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    useEffect(()=>{
      setTourGuide(guide.id)
      console.log(guide.id)
    },[guide])

    const bookingHandler = async()=>{
      try{
        const addDetails = collection(db, 'pending_bookings')
        await addDoc(addDetails,{guide:guide.id, tourist: user.uid, location:tourLocation, destination: destination, startData: startData, 
        endDate:endDate, time: time, status:status})
        .then(()=>{
          setModalOpened(false)
        })

      }catch(err){
        err.message('Error!')
      }
      
    }


  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.10}
      overlayBlur={0.5}
      size = '25%'
      opened = {modalOpened}
      onClose = {()=>{setModalOpened(false); setTourLocation(''); setDestination('')
      ; setStartDate(''); setEndDate(''); setTime('')}}
    >

        <form className = 'infoForm' onSubmit = {()=>bookingHandler()}>
            <h3>Book Guide</h3>

            <div>
                <input 
                    type="text" 
                    className='infoInput' 
                    // onChange = {(e)=>setTourLocation(e.target.value)} 
                    placeholder='Tour Location'
                    value = {tourGuide}
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
            <button type = 'submit' className="button infoButton">Confirm</button>
        </form>
    </Modal>
  );
}

export default BookingModal