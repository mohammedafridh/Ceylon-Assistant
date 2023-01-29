import { Modal, useMantineTheme} from '@mantine/core';
import './ProfileUpdateModal.css'
import { useEffect, useState } from 'react';
import {query, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../Firebase'
import { toast } from 'react-hot-toast';

function BookingUpdateModal({modalOpened,setModalOpened,data}) {
  const theme = useMantineTheme();
  const [tourLocation,setTourLocation] = useState(data.location)
  const [destination,setDestination] = useState(data.destination)
  const [startDate,setStartDate] = useState(data.startData)
  const [endDate,setEndDate] = useState(data.endDate)
  const [time,setTime] = useState(data.time)

  useEffect(()=>{
    setTourLocation(data.location)
    setDestination(data.destination)
    setStartDate(data.startData)
    setEndDate(data.endDate)
    setTime(data.time)
  },[data])

  const updateBooking = async(data)=>{
    console.log(data.id)
    const bookingUpdate = query(doc(db,'pending_booking',data.id));
     await updateDoc(bookingUpdate, {
      location:tourLocation,
      destination:destination,
      startData:startDate,
      endDate:endDate,
      time:time
     }).then(async ()=>{
        setModalOpened(false)
        toast.success('Booking Updated Successfully')
     });
  }

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.10}
      overlayBlur={3}
      size = '55%'
      opened = {modalOpened}
      onClose = {()=>setModalOpened(false)}
    >

        <div className = 'infoForm'>
            <h3>Update Booking</h3>

            <div>
                <input 
                    type="text" 
                    className='infoInput' 
                    onChange = {(e)=> setTourLocation(e.target.value)}
                    placeholder='Tour Location'
                    value = {tourLocation}
                />

                <input 
                    type="text" 
                    className='infoInput' 
                    onChange = {(e)=> setDestination(e.target.value)}
                    placeholder='Pickup Destination'
                    value = {destination}
                />
            </div>

            <div>
                <label>Date From : </label>
                <input
                    type = 'date'
                    className='infoInput' 
                    onChange = {(e)=> setStartDate(e.target.value)}
                    placeholder="Date From"
                    value = {startDate}
                />

                <label>Date To : </label>
                <input 
                    type="date" 
                    className='infoInput' 
                    onChange = {(e)=> setEndDate(e.target.value)}
                    placeholder='Date To'
                    value = {endDate}
                />
            </div>
            <div style = {{width:"20rem"}}>
                <label>Time</label>
                <input 
                
                    type="time" 
                    className='infoInput' 
                    onChange = {(e)=> setTime(e.target.value)}
                    placeholder='Select Time'
                    value = {time}
                />
            </div>
            <button onClick = {()=>updateBooking(data)} className="button infoButton">Update</button>
        </div>
    </Modal>
  );
}

export default BookingUpdateModal