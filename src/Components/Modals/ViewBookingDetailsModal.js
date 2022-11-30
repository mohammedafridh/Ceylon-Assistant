import { Modal, useMantineTheme, Select, MultiSelect  } from '@mantine/core';
import classes from './ViewBookingDetailsModal.module.css'

function ViewBookingDetailsModal({modalOpened,setModalOpened,tourist}) {
  const theme = useMantineTheme();


  const AcceptBookingHandler = ()=>{

  }

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
            <img src = '' alt = '' />
            <div className = {classes.bookerDetails}>
              <div className = {classes.details}>
                <label>Name : </label>
                <span>abc</span>
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
                <button className = {classes.acpt} onClick = {AcceptBookingHandler}>Accept</button>
              </div>      
            </div> 
          </div>
        </div>
    </Modal>
  );
}

export default ViewBookingDetailsModal




