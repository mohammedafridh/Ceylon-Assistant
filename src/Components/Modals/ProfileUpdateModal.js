import { Modal, useMantineTheme, Select, MultiSelect  } from '@mantine/core';
import './ProfileUpdateModal.css'

function ProfileUpdateModal({modalOpened,setModalOpened}) {
  const theme = useMantineTheme();


  const data = [
    { value: 'Sinhala', label: 'Sinhala' },
    { value: 'English', label: 'English' },
    { value: 'Hindi', label: 'Hindi' },
    { value: 'Malayalam', label: 'Malayalam' },
    { value: 'Urdu', label: 'Urdu' },   
    { value: 'French', label: 'French' },
    { value: 'Arabic', label: 'Arabic' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Russian', label: 'Russian' },
    { value: 'Chinese', label: 'Chinese' },
    { value: 'Japanese', label: 'Japanese' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Korean', label: 'Korean' },
  ];

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
            <h3>Update Profile</h3>

            <div>
                <input 
                    type="text" 
                    className='infoInput' 
                    name = 'Name' 
                    placeholder='First Name'
                />

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
                <input 
                    type="text" 
                    className='infoInput' 
                    onChange = '' 
                    placeholder='NIC number'
                />
            </div>

            <div>
                <input 
                    type="text" 
                    className='infoInput' 
                    onChange = ''
                    placeholder='Address'
                />
            </div>

            <div>
                <Select 
                    style = {{width:"21rem", outline:"none"}} 
                    onChange = '' 
                    placeholder='District'

                    data={[
                        { value: 'Hambanthota', label: 'Hambanthota' },
                        { value: 'Matara', label: 'Matara' },
                        { value: 'Galle', label: 'Galle' },
                        { value: 'Badulla', label: 'Badulla' },
                        { value: 'Monaragala', label: 'Monaragala' },
                        { value: 'Trincomalee', label: 'Trincomalee' },
                        { value: 'Batticaloa', label: 'Batticaloa' },
                        { value: 'Ampara', label: 'Ampara' },
                        { value: 'Kegalle', label: 'Kegalle' },
                        { value: 'Rathnapura', label: 'Rathnapura' },
                        { value: 'Matale', label: 'Matale' },
                        { value: 'Kandy', label: 'Kandy' },
                        { value: 'Nuwara-Eliya', label: 'Nuwara Eliya' },
                        { value: 'Anuradhapura', label: 'Anuradhapura' },
                        { value: 'Polonnaruwa', label: 'Polonnaruwa' },
                        { value: 'Gampaha', label: 'Gampaha' },
                        { value: 'Colombo', label: 'Colombo' },
                        { value: 'Kalutara', label: 'Kalutara' },
                        { value: 'Puttalam', label: 'Puttalam' },
                        { value: 'Kurunegala', label: 'Kurunegala' },
                        { value: 'Jaffna', label: 'Jaffna' },
                        { value: 'Kilinochchi', label: 'Kilinochchi' },
                        { value: 'Mannar', label: 'Mannar' },
                        { value: 'Mullativu', label: 'Mullativu' },
                        { value: 'Vavuniya', label: 'Vavuniya' },
                    ]}
                />

                <MultiSelect
                    data={data}
                    style = {{width:"21rem", outline:"none"}}
                    placeholder="Select Known Languages"
                />
            </div>

            <div>
                <input 
                    type="number" 
                    className='infoInput' 
                    onChange = '' 
                    placeholder='Rate'
                />

                <input 
                    type="number" 
                    className='infoInput' 
                    onChange = '' 
                    placeholder='Per Km Rate'
                />
            </div>

            <div>
                <Select 
                style = {{width:"21rem", outline:"none"}} 
                onChange = '' 
                placeholder='Vehicle Type'

                data={[
                    { value: 'Car', label: 'Car' },
                    { value: 'Van', label: 'Van' },
                    { value: 'Mini-Jeep', label: 'Mini Jeep' },
                  ]}
                />        

                <input 
                    type="text" 
                    className='infoInput' 
                    onChange = '' 
                    placeholder='Vehicle Model'
                />
            </div>

            <div>
                <input 
                    type="text" 
                    className='infoInput' 
                    onChange = ''
                    placeholder='Email Address'
                />
            </div>

            <div>
                <input 
                    type="password" 
                    className='infoInput' 
                    onChange = ''
                    placeholder='Password'
                />

                <input 
                    type="password" 
                    className='infoInput' 
                    onChange = ''
                    placeholder='Confirm Password'
                />
            </div>

            <div>
                Profile Image
                <input 
                    type="file" 
                    name = 'profileImg' 
                />
                Vehicle Image
                <input 
                    type="file" 
                    name = 'coverImg' 
                />
            </div>
            
            <button className="button infoButton">Update</button>
        </form>
    </Modal>
  );
}

export default ProfileUpdateModal




