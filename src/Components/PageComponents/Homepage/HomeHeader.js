import {useState} from 'react'
import HomepageBg from "../../../backgrounds/HomepageBg";
import Layout from "../../layouts/Layout";
import * as Icons from 'react-icons/fa'
import classes from './HomeHeader.css'
import {Link} from 'react-router-dom'
import {useUserAuth} from '../../../Context/Context'
// import TourGuides from './TourGuides'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faLocation } from '@fortawesome/free-solid-svg-icons'
import {Form, Button} from 'react-bootstrap'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'

function HomeHeader(){
    const {user} = useUserAuth();
    const [openDate,setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    return(<div>
        <HomepageBg />         
            <div className = 'searchContainer'>
                <Form className = 'selectItem'>
                <Form.Group id = 'district'> 
                <Form.Select aria-label="Default select example">      
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
                <div className = 'searchItem'>
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
                <div className = 'searchItem'>
                    <Button className = 'searchBtn'>Search</Button>
                </div>
            </div>
    </div>
    )  
}

export default HomeHeader;