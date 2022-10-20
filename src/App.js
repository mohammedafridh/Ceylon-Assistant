import './App.css';
import {Routes,Route} from 'react-router-dom';
import Homepage from './pages/CommonPages/Homepage/Homepage';
import TourGuides from './pages/CommonPages/TourGuidesPage/TourGuides';
import Tours from './pages/CommonPages/ToursPage/Tours';
import Bookings from './pages/CommonPages/BookingPage/Bookings';
import Profile from './pages/CommonPages/ProfilePage/Profile';
import Login from './pages/AuthenticationPages/Login'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import TourGuideReg from './pages/AuthenticationPages/TourGuideReg';
import TouristReg from './pages/AuthenticationPages/TouristReg';
import List from './Components/PageComponents/TourGuideComponents/List';
import SelectedGuide from './Components/PageComponents/TourGuideComponents/SelectedGuide';
import SelectedBooker from './Components/PageComponents/BookingComponents/SelectedBooker'
import Contact from './pages/CommonPages/Contact/Contact';
import ThingsToDo from './pages/CommonPages/ThingsToDo/ThingsToDo';
import About from './pages/CommonPages/About/About';
import ToursGallery from './pages/CommonPages/ToursGallery/ToursGallery';
import AddThingsToDo from './Components/PageComponents/ThingsToDoComponents/AddThingsToDo';
import AdminInterface from './pages/AdminPages/AdminInterface';

function App() {

//     var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// );

    return(<div className = 'app'>
        <Routes>
            <Route path = '/admin' element = {<AdminInterface />} />
            <Route path = '/login' element = {<Login />} />
            <Route path = '/tourGuideReg' element = {<TourGuideReg />}/>
            <Route path = '/touristReg' element = {<TouristReg />}/>
            <Route path = '/' element = {<Homepage />} />
            <Route path = '/selectedGuide' element = {<SelectedGuide />} />
            <Route path = '/selectedBooker' element = {<SelectedBooker />}/>
            <Route path = '/tourGuides' element = {<TourGuides />} />
            <Route path = '/tours' element = {<Tours />} />
            <Route path = '/bookings' element = {<Bookings /> }/>
            <Route path = '/profile' element = {<Profile />} />
            <Route path = '/contact' element = {<Contact />} />
            <Route path = '/thingsToDo' element = {<ThingsToDo />} />
            <Route path = '/about' element = {<About />} />
            <Route path = '/toursGallery' element = {<ToursGallery />} />
            <Route path = '/addThingsToDo' element = {<AddThingsToDo />} />
        </Routes>    
    </div>  
    )
}

export default App;
