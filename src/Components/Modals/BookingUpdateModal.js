import { Modal, useMantineTheme} from '@mantine/core';
import './ProfileUpdateModal.css'
import { useState } from 'react';

function BookingUpdateModal({modalOpened,setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size = '55%'
      opened = {modalOpened}
      onClose = {()=>setModalOpened(false)}
    >

        <form className = 'infoForm'>
            <h3>Update Booking</h3>

            <div>
                <input 
                    type="text" 
                    className='infoInput' 
                    onChange = '' 
                    placeholder='Tour Location'
                />

                <input 
                    type="text" 
                    className='infoInput' 
                    onChange = '' 
                    placeholder='Pickup Destination'
                />
            </div>

            <div>
                <label>Date From : </label>
                <input
                    type = 'date'
                    className='infoInput' 
                    onChange = ''
                    placeholder="Date From"
                />

                <label>Date To : </label>
                <input 
                    type="date" 
                    className='infoInput' 
                    onChange = ''
                    placeholder='Date To'
                />
            </div>
            <div style = {{width:"20rem"}}>
                <label>Time</label>
                <input 
                
                    type="time" 
                    className='infoInput' 
                    onChange = ''
                    placeholder='Select Time'
                />
            </div>
            <button className="button infoButton">Update</button>
        </form>
    </Modal>
  );
}

export default BookingUpdateModal