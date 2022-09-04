import {useState} from 'react'
import classes from './BookGuide.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import {Button} from 'react-bootstrap'

function BookGuide() {

    const [openDate,setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

  return (
    <div className = {classes.bookingContainer}>
        <h1 className = {classes.title}>Make Guide Booking in Seconds</h1>
        <div className = {classes.bookingInputs}>
            <div className = {classes.travelContainer}>
                <label>Tour Location</label>
                <input type = 'text' placeholder='Travelling Location' />
            </div>
            <div className = {classes.travelContainer}>
                <label>Pick-up Destination</label>
                <input type = 'text' placeholder='Pick-up Destination' />
            </div>
            
            <div className = {classes.dateContainer}>
            <label>Tour Date Range</label>
            <div className = {classes.bookingDate}>
                <FontAwesomeIcon icon = {faCalendarDays} className = {classes.searchIcon} />
                <span onClick = {()=>setOpenDate(!openDate)} className = {classes.searchDate}>
                    {`${format(date[0].startDate, "MM/dd/yyyy")} to 
                    ${format(date[0].endDate, "MM/dd/yyyy")}`}
                </span>
                {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date} className = {classes.date}
                />}
            </div>
            <div className = {classes.timeContainer}>
                <label>Pickup Time</label>
                <input type = 'time'/>
            </div>
            <div className = {classes.buttonContainer}>
                <Button>Confirm Booking</Button>
            </div>
            </div>  
        </div>
    </div>
  )
}

export default BookGuide;
