import { Modal, useMantineTheme, Select, MultiSelect  } from '@mantine/core';
import './ProfileUpdateModal.css'

function TouristProfileUpdateModal({modalOpened,setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size = '30%'
      opened = {modalOpened}
      onClose = {()=>setModalOpened(false)}
    >

        <form className = 'infoForm'>
            <h3>Update Profile</h3>

            <div>
                <input 
                    type="text" 
                    className='infoInput' 
                    name = 'Name' 
                    placeholder='First Name'
                />
            </div>

            <div>
                <input 
                    type="text" 
                    className='infoInput' 
                    onChange = '' 
                    placeholder='Last Name'
                />
            </div>

        
            <div>
                <input 
                    type="number" 
                    className='infoInput' 
                    name = 'Name' 
                    placeholder='Contact Number'
                />
            </div>
            <button className="button infoButton">Update</button>
        </form>
    </Modal>
  );
}

export default TouristProfileUpdateModal




