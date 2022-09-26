import {useState, useEffect} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import classes from './TourGuideReg.module.css'
import RegisterBg from '../../backgrounds/RegisterBg';
import {Link, useNavigate} from 'react-router-dom'
import { useUserAuth } from '../../Context/Context';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {db,storage } from '../../Firebase';
import {collection,addDoc,doc,setDoc} from 'firebase/firestore'
//import {ref} from 'firebase/storage'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
import {Multiselect} from 'multiselect-react-dropdown'
import {auth} from '../../Firebase'

function TourGuideReg() {

    const [newName,setNewName] = useState('');
    const [newGender,setNewGender] = useState('');
    const [newContactNumber,setNewContactNumber] = useState('');
    const [newAge,setNewAge] = useState('');
    const [newAddress,setNewAddress] = useState('');
    const [newDistrict,setNewDistrict] = useState('');
    const [newVehType,setNewVehType] = useState('');
    const [newModel,setNewModel] = useState('');
    const [newPassengers,setNewPassengers] = useState('');
    const[newEmail,setNewEmail] = useState('')
    const[newPassword,setNewPassword] = useState('')
    const[newLanguage,setNewLanguage] = useState([])
    const[newRate,setNewRate] = useState('')
    const [perKmRate,setPerKmRate] = useState('')
    const [image,setImage] = useState(null)
    const[url,setUrl] = useState(null)
    const [error,setError] = useState('')
    const {signUp} = useUserAuth();
    const navigate = useNavigate()

    //multi select dropdown options
    const languages = [
        // {Language:'Tamil', id:1},
        // {Language:'Sinhala', id:2},
        // {Language:'English', id:3},
        // {Language:'French', id:4},
        // {Language:'Telugu', id:5},
        {Language:'Tamil', value:'Tamil'},
        {Language:'Sinhala', value:'Sinhala'},
        {Language:'English', value:'English'},
        {Language:'French', value:'French'},
        {Language:'Telugu', value:'Telugu'},
    ]

    const [selection] = useState(languages);

    useEffect(() => {
        const getImageUrl = async () => {
            const imageRef = ref(storage, `Tour_Guide_Images/${image.name + v4()}`);
            uploadBytes(imageRef, image)
              .then(() => {
                getDownloadURL(imageRef)
                  .then((url) => {
                    console.log({ url });
                    setUrl(url);
                    //add details part
                    console.log("I'm here");
                    // const addDetails = doc(db, "Tourists")
                    // setDoc(addDetails,{name:newName, image:url, email:newEmail, gender:newGender,
                    //          contact_Number:newContactNumber})
                  })
                  .catch((err) => {
                    setError(err.message, "error getting the image");
                  });
              })
              .catch((err) => {
                setError(err);
              });
          };
        const imageUrl = async () => {
          await getImageUrl();
        };
        imageUrl();
      }, [image]);
    
      // getting image url and adding details to storage and firestore db
      
      //
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
          createUserWithEmailAndPassword(auth, newEmail, newPassword)
            .then((data) => {
              console.log({ url });
              const addDetails = doc(db, "Tour_Guides", data.user.uid);
              const details = {
                name: newName,
                image: url,
                email: newEmail,
                gender: newGender,
                contact_Number: newContactNumber,
                age: newAge,
                address: newAddress,
                district: newDistrict,
                vehicle_type: newVehType,
                model: newModel,
                No_of_passengers: newPassengers,
                age: newAge,
                languages: newLanguage,
                rate:newRate,
                per_Km_Rate: perKmRate
              };
              setDoc(addDetails, details);
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (err) {
          setError(err.message);
          console.log(err);
        } finally {
          navigate("/");
        }
      };

  return (
    <div className = {classes.tGuideBg}>
      <Card className = {classes.card}>
        <Card.Body>
            <h2 className = {classes.heading}>Tour Guide Sign up</h2>
            {error && <Alert variant = 'danger'>{error}</Alert>}
            <Form className={classes.form} onSubmit = {handleSubmit}>  
            <div class = 'row'>
                <div class = 'col-6'>        
                <Form.Group id = 'name' className = {classes.fill1}>
                    <Form.Label className = {classes.label}>Name</Form.Label>
                    <Form.Control type = 'text' onChange = {(e)=> setNewName(e.target.value)} required/>
                </Form.Group>
                </div> 

                <div class = 'col-6'>
                <Form.Group id = 'image'>
                    <Form.Label  className = {classes.label}>Add your real image</Form.Label>
                    <Form.Control type = 'file' onChange = {(e) => setImage(e.target.files[0])} required />
                </Form.Group>
                </div>
            </div>

            <div class='row'> 
                <div class = 'col-5'> 
                <Form.Group id = 'gender' className = {classes.fill2}>
                    <Form.Label  className = {classes.label}>Gender</Form.Label>
                    <Form.Select aria-label="Default select example" onChange = {(e)=>setNewGender(e.target.value)} required>
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    </Form.Select>
                </Form.Group>
                </div>           
            
                <div class = 'col-4'>
                <Form.Group id = 'contactNumber' className = {classes.fill3}>
                    <Form.Label  className = {classes.label}>Contact Number</Form.Label>
                    <Form.Control type = 'text' onChange = {(e)=>setNewContactNumber(e.target.value)} required/>
                </Form.Group>
                </div>
                <div class = 'col-2'>
                <Form.Group id = 'age' className = {classes.fill4}>
                    <Form.Label  className = {classes.label}>Age</Form.Label>
                    <Form.Control type = 'number' onChange = {(e)=>setNewAge(e.target.value)} required/>
                </Form.Group>
                </div>
            </div>

            <div class = 'row'>
                <div class = 'col-6'>        
                    <Form.Group id = 'language' className = {classes.fill20}>
                        <Form.Label  className = {classes.label}>Known Languages</Form.Label>
                        <Multiselect options = {selection} displayValue = 'Language' onChange = {(e)=>setNewLanguage(e.target.value)} />
                    </Form.Group>
                </div> 
                <div class = 'col-3'>
                <Form.Group id = 'rate'>
                    <Form.Label  className = {classes.label}>Rate</Form.Label>
                    <Form.Control type = 'text' onChange = {(e)=>setNewRate(e.target.value)} required />
                </Form.Group>
                </div>
                <div class = 'col-3'>
                <Form.Group id = 'perKmRate'>
                    <Form.Label  className = {classes.label}>Per Km Rate</Form.Label>
                    <Form.Control type = 'text' onChange = {(e)=>setPerKmRate(e.target.value)} required />
                </Form.Group>
                </div>
            </div>

            <div class = 'row'>
                <div class = 'col-7'>
                <Form.Group id = 'address' className = {classes.fill5}>
                    <Form.Label  className = {classes.label}>Address</Form.Label>
                    <Form.Control type = 'text' onChange = {(e)=>setNewAddress(e.target.value)} required/>
                </Form.Group>
                </div>
                <div class = 'col-5'>
                <Form.Group id = 'district' className = {classes.fill6}>
                    <Form.Label  className = {classes.label}>District</Form.Label>
                    <Form.Control type = 'text' onChange = {(e)=>setNewDistrict(e.target.value)} required/>
                </Form.Group>
                </div>
            </div>
            <div class = 'row'>
            <div class = 'col-4'>
                <Form.Group id = 'vehicleType' className = {classes.fill7}>
                    <Form.Label  className = {classes.label}>Vehicle Type</Form.Label>
                    <Form.Select aria-label="Default select example" onChange = {(e)=>setNewVehType(e.target.value)} required>
                    <option>Select Type</option>
                    <option value="car">Car</option>
                    <option value="van">Van</option>
                    <option value="jeep">Jeep</option>
                    </Form.Select>
                </Form.Group>
                </div>
                <div class = 'col-4'>
                <Form.Group id = 'model' className = {classes.fill8}>
                    <Form.Label  className = {classes.label}>Model</Form.Label>
                    <Form.Control type = 'text' onChange = {(e)=>setNewModel(e.target.value)} required/>
                </Form.Group>
                </div>
                <div class = 'col-4'>
                <Form.Group id = 'passengerCapacity' className = {classes.fill9}>
                    <Form.Label  className = {classes.label}>No of Passengers</Form.Label>
                    <Form.Control type = 'text' onChange = {(e)=>setNewPassengers(e.target.value)} required/>
                </Form.Group>
                </div>
            </div>
            <center>
                <div class = 'col-6'>
                <Form.Group id = 'email' className = {classes.fill10}>
                    <Form.Label  className = {classes.label}>E-mail</Form.Label>
                    <Form.Control type = 'email' onChange = {(e)=> setNewEmail(e.target.value)} required/>
                </Form.Group>
                </div>
                <div class = 'col-6'>
                <Form.Group id = 'password1' className = {classes.fill11}>
                    <Form.Label  className = {classes.label}>Password</Form.Label>
                    <Form.Control type = 'password' onChange = {(e)=> setNewPassword(e.target.value)} required/>
                </Form.Group>
                </div>
                </center>
                {/* <Form.Group id = 'password2'>
                    <Form.Label  className = {classes.label}>Confirm Password</Form.Label>
                    <Form.Control type = 'password' ref = {password2} required />
                </Form.Group> */}
                
                <center><Button type = 'submit' className = {classes.register_Btn}>Register</Button></center>
            </Form>
            <div className = {classes.signIn_Btn}>
        Already have an account? <Link to = '/login'>Log in</Link>
      </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TourGuideReg;