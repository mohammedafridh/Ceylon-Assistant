import {useState} from 'react'
import HomepageBg from "../../../backgrounds/HomepageBg";
import classes from './HomeHeader.css'
import {useNavigate} from 'react-router-dom'
import {useUserAuth} from '../../../Context/Context'
// import TourGuides from './TourGuides'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import {Form, Button} from 'react-bootstrap'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'

function HomeHeader(){
    // const {user} = useUserAuth();
    const [openDate,setOpenDate] = useState(false)
    const [searchDistrict,setSearchDistrict] = useState('')
    const navigate = useNavigate()
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const handleSearch = ()=>{
        navigate('/newTourGuides', {state:{searchDistrict,date}})
      }

    return(<div>    
        <HomepageBg />   
            <div className = 'searchContainer'>
                <Form className = 'selectItems'>
                <Form.Group id = 'district'> 
                <Form.Select aria-label="Default select example" 
                onChange = {(e)=>setSearchDistrict(e.target.value)}>      
                    <option hidden>Select District</option>
                    <option>Colombo</option>
                    <option>Gampaha</option>
                    <option>Kalutara</option>
                    <option>Kandy</option>
                    <option>Matale</option>
                    <option>Nuwara Eliya</option>
                    <option>Galle</option>
                    <option>Matara</option>
                    <option>Hambanthota</option>
                    <option>Jaffna</option>
                    <option>Kilinochchi</option>
                    <option>Mannar</option>
                    <option>Vavuniya</option>
                    <option>Mulativu</option>
                    <option>Batticaloa</option>
                    <option>Ampara</option>
                    <option>Trincomalee</option>
                    <option>Kurunegala</option>
                    <option>Puttalam</option>
                    <option>Anuradhapura</option>
                    <option>Polonnaruwa</option>
                    <option>Badulla</option>
                    <option>Moneragala</option>
                    <option>Rathnapura</option>
                    <option>Kegalla</option>
                    </Form.Select>           
                </Form.Group>
                </Form>
                <div className = 'searchItems'>
                    <FontAwesomeIcon icon = {faCalendarDays} className = 'searchIcon' />
                    <span onClick = {()=>setOpenDate(!openDate)} className = 'searchDate'>
                        {`${format(date[0].startDate, "MM/dd/yyyy")} to 
                        ${format(date[0].endDate, "MM/dd/yyyy")}`}
                    </span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date} className = 'date'
                    />}
                </div>
                <div className = 'searchItems'>
                    <Button className = 'searchBtn'
                    onClick = {handleSearch}>Search</Button>
                </div> 
            </div>          
    </div>
    )  
}

export default HomeHeader;