import { Modal, useMantineTheme} from '@mantine/core';
import { useEffect,useState } from 'react';
import './ProfileUpdateModal.css'
import { db, storage } from "../../Firebase";
import { query, doc, updateDoc, setDoc } from "firebase/firestore";
import { toast } from 'react-hot-toast';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import loadingGif from '../../assets/loading-gif.gif'

function TouristProfileUpdateModal({modalOpened,setModalOpened,user}) {
  const theme = useMantineTheme();
  const [number,setNumber] = useState(user.contactNumber)
  const[firstName,setFirstName] = useState(user.firstName)
  const[lastName,setLastName] = useState(user.lastName)
  const[profile,setProfile]=useState('')
  const[imgError,setImgError] = useState()
  const[loading,setLoading] = useState(false)

  useEffect(()=>{
    setNumber(user.contactNumber)
    setFirstName(user.firstName)
    setLastName(user.lastName)
  },[user])

  const setImage = (e, imageFolder, setUrl) => {
    const image = e.target.files[0];
    const storageImageRef = ref(
      storage,
      `${imageFolder}/${image?.name + v4()}`
    );
    if (image === null || image === undefined || image === "") {
      console.log("No file selected");
      setImgError(true);
      return;
    }
    uploadBytes(storageImageRef, image).then(() => {
      setImgError(false);
      getDownloadURL(storageImageRef)
        .then((url) => {
          setUrl(url);
          console.log({ profile: url });
        })
        .catch((error) => {
          console.log({ error });
        });
    });
  };

  const updateDetails = async (data) => {
    setLoading(true)
    setDoc(
      doc(db, "Tourist", data.id),
      {
        firstName: firstName,
        lastName: lastName,
        contactNumber: number,
        image: profile ? profile : data.image,
      },
      { merge: true }
    ).then(() => {
        setLoading(false)
      toast.success("Details Updated Successfully");
      setModalOpened(false);
    });

  };

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size = '55%'
      opened = {modalOpened}
      onClose = {()=>setModalOpened(false)}
    >

        <div className = 'infoForm'>
            <h3>Update Profile</h3>

            <div>
                <input 
                    type="text" 
                    className='infoInput' 
                    name = 'Name' 
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                />

                <input 
                    type="text" 
                    className='infoInput'  
                    placeholder='Last Name'
                    value = {lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                />

                <input 
                    type="number" 
                    className='infoInput' 
                    name = 'Name' 
                    placeholder='Contact Number'
                    value = {number}
                    onChange = {(e)=>setNumber(e.target.value)}
                />
            </div>

            <span className="authProfiles">
                <span>Profile Image</span>
                <img src={profile ? profile : user.image} width={150} height={150} alt="profile" />
                <input
                    type="file"
                    name="coverImg"
                    placeholder="Update Image"
                    onChange={(e) => setImage(e, "Tourist_Profile", setProfile)}
                    required
                />
            </span>

            {loading?
            <button type = 'submit' className="profileUpdateBtn">
            <img className='loadingIcon' src={loadingGif} />
            </button>: 

            <button className="profileUpdateBtn"
            onClick={()=>updateDetails(user)}>Update</button>}
        </div>
    </Modal>
  );
}

export default TouristProfileUpdateModal




