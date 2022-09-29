import {useState } from 'react'
import Layout from '../../layouts/Layout'
import './List.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import {Form,Button} from 'react-bootstrap'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import { useLocation } from 'react-router-dom'
import AllGuides from './AllGuides'

function List() {

    const location = useLocation();
    const [searchDistrict, setSearchDistrict] = useState(location.state.searchDistrict)
    const [date, setDate] = useState(location.state.date)
    const [openDate,setOpenDate] = useState(false)

  return (
    <div className = 'guideBackground'>
        <div className='listContainer'>
            <div className='listWrapper'>
                <div className = 'listSearch'>
                    <h1 className='searchTitle'>Search</h1>
                    <div className = 'searchItem'>
                        <label><b>Guide District</b></label>
                        {/* <input type = 'text' placeholder={searchDistrict}/> */}
                        <Form className = 'selectDistrict'>
                            <Form.Group id = 'district'> 
                            <Form.Select aria-label="Default select example" 
                            onChange = {(e)=>setSearchDistrict(e.target.value)}>      
                                <option hidden>{searchDistrict}</option>
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
                    </div>
                    <div className = 'searchItem'>
                        <label><b>Check-in Date</b></label>
                        <span onClick = {()=>setOpenDate(!openDate)}>
                            {`${format(date[0].startDate, "MM/dd/yyyy")} to 
                            ${format(date[0].endDate, "MM/dd/yyyy")}`}
                        </span>
                        {openDate && (
                        <DateRange 
                            onChange={(item)=> setDate([item.selection])}
                            minDate = {new Date()}
                            ranges = {date}
                        />
                        )}
                    </div>
                        <Button className = 'srchBtn'>Search</Button>
                    </div>
                <div className='listResult'>
                    <AllGuides />
                </div>
            </div>
        </div>
    </div>
  )
}

export default List;