import { Modal, useMantineTheme} from '@mantine/core';
import './ProfileUpdateModal.css'
import { useState, useEffect } from 'react';
import {useUserAuth} from '../../Context/Context' 
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../../Firebase'
import loadingGif from '../../assets/loading-gif.gif'
import { toast } from 'react-hot-toast';

function BookingModal({modalOpened,setModalOpened, guide}) {
  const theme = useMantineTheme();
  const {user} = useUserAuth();
  const [tourGuide,setTourGuide] = useState()
    // const[tourist,setTourist] = useState(user.uid)
    const[tourLocation,setTourLocation] = useState('')
    const[destination,setDestination] = useState('')
    const[startData,setStartDate] = useState('')
    const[endDate,setEndDate] = useState('')
    const[time,setTime] = useState('')
    const[loading,setLoading] = useState(false)
    const [status,setStatus] = useState('Active')
    const current = new Date();
    const addDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    useEffect(()=>{
      setTourGuide(guide.id)
    },[guide])

    const bookingHandler = async(e)=>{
      e.preventDefault();
      try{
        setLoading(true)
        const addDetails = collection(db, 'pending_booking')
        await addDoc(addDetails,{guide:guide.id, tourist: user.uid, location:tourLocation,
           destination: destination, startData: startData, 
        endDate:endDate, time: time, bookingDate:addDate, status:status})
        .then(()=>{
          setLoading(false)
          setModalOpened(false)
          toast.success('Booking Successful!')
        })

      }catch(err){
        err.message('Error!')
        alert('Booking Unsuccessful! Please Try Again.')
        setLoading(false)
      }
      
    }


  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.50}
      overlayBlur={0.8}
      size = '25%'
      opened = {modalOpened}
      onClose = {()=>{setModalOpened(false); setTourLocation(''); setDestination('')
      ; setStartDate(''); setEndDate(''); setTime('')}}
    >

        <div className = 'infoForm'>
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
                    required
                />
            </div>

            <div>
                <label>Date From : </label>
                <input
                    type = 'date'
                    className='infoInput' 
                    onChange = {(e)=>setStartDate(e.target.value)}
                    placeholder="Date From"
                    required
                />
            </div>

            <div>
                <label>Date To : </label>
                <input 
                    type="date" 
                    className='infoInput' 
                    onChange = {(e)=>setEndDate(e.target.value)}
                    placeholder='Date To'
                    required
                />
            </div>

            <div style = {{width:"17.5rem"}}>
                <label>Time : </label>
                <input 
                
                    type="time" 
                    className='infoInput' 
                    onChange = {(e)=>setTime(e.target.value)}
                    placeholder='Select Time'
                    required
                />
            </div>
            {loading?
            <button type = 'submit' className="confirmActionBtn">
              <img className='loadingIcon' src={loadingGif} />
            </button>:           
            <button  onClick={bookingHandler} className="confirmActionBtn">Confirm</button>}
        </div>
    </Modal>
  );
}

export default BookingModal