import { Modal, useMantineTheme, Select, MultiSelect  } from '@mantine/core';
import classes from './ViewBookingDetailsModal.module.css'

function ViewBookingDetailsModal({modalOpened,setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size = '40%'
      opened = {modalOpened}
      onClose = {()=>setModalOpened(false)}
    >

        <div className = {classes.infoForm}>
            <h3>View Booking</h3>

          <div className = {classes.bookerWrapper}>
            <img src = "https://firebasestorage.googleapis.com/v0/b/ceylon-assistant.appspot.com/o/Tour_Guide_Images%2Fff2ab708-d1ef-4400-9c02-1adabd3a2a27.jpg428f69cd-af41-4d8b-b7dc-fa46fdcb994c?alt=media&token=aabcbf7d-4f43-47da-9cef-674db5357da5" alt = '' />
            <div className = {classes.bookerDetails}>
              <div className = {classes.details}>
                <label>Name : </label>
                <span>Abc</span>
              </div>
              <div className = {classes.details}>
                <label>Gender : </label>
                <span>abc</span>
              </div>
              <div className = {classes.details}>
                <label>Contact Number : </label>
                <span>Abc</span>
              </div>
              <div className = {classes.details}>
                <label>Email : </label>
                <span>Abc</span>
              </div>  

              <div className = {classes.actions}>
                <button className = {classes.rjct}>Reject</button>
                <button className = {classes.acpt}>Accept</button>
              </div>      
            </div> 
          </div>
        </div>
    </Modal>
  );
}

export default ViewBookingDetailsModal




