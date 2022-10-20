import { Modal, useMantineTheme} from '@mantine/core';
import './ProfileUpdateModal.css'
import { useState } from 'react';

function BookingModal({modalOpened,setModalOpened}) {
  const theme = useMantineTheme();

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
                    onChange = '' 
                    placeholder='Tour Location'
                />
            </div>

            <div>
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
            </div>

            <div>
                <label>Date To : </label>
                <input 
                    type="date" 
                    className='infoInput' 
                    onChange = ''
                    placeholder='Date To'
                />
            </div>

            <div style = {{width:"17.5rem"}}>
                <label>Time : </label>
                <input 
                
                    type="time" 
                    className='infoInput' 
                    onChange = ''
                    placeholder='Select Time'
                />
            </div>
            <button className="button infoButton">Confirm</button>
        </form>
    </Modal>
  );
}

export default BookingModal