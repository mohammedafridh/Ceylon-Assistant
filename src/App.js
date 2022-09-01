import './App.css';
import {Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import TourGuides from './pages/TourGuides';
import Tours from './pages/Tours';
import Bookings from './pages/Bookings';
import Profile from './pages/Profile';
import Login from './pages/LoginAccessories/Login'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import TourGuideReg from './pages/LoginAccessories/TourGuideReg';
import TouristReg from './pages/LoginAccessories/TouristReg';
import Inbox from './pages/Inbox';
import SetBooking from './PopupPages/SetBooking';
import TouristRegDemo from './pages/LoginAccessories/TouristRegDemo';
import Users from './pages/Users';
import List from './Components/PageComponents/TourGuideComponents/List';
import NewTourGuide from './pages/NewTourGuide';
import SelectedGuide from './Components/PageComponents/TourGuideComponents/SelectedGuide';


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

    return(<div>
        <Routes>
            <Route path = '/login' element = {<Login />} />
            <Route path = '/tourGuideReg' element = {<TourGuideReg />}/>
            <Route path = '/touristRegDemo' element = {<TouristRegDemo />}/>
            <Route path = '/' element = {<Homepage />} />
            <Route path = '/selectedGuide' element = {<SelectedGuide />} />
            {/* <Route path = '/newTourGuides' element = {<List />} /> */}
            <Route path = '/newTourGuides' element = {<NewTourGuide />} />
            <Route path = '/users' element = {<ProtectedRoute><Users /></ProtectedRoute>} />
            {/* <Route path = '/guides' element = {<ProtectedRoute><TourGuides /></ProtectedRoute>} /> */}
            <Route path = '/tours' element = {<ProtectedRoute><Tours /></ProtectedRoute>} />
            <Route path = '/bookings' element = {<ProtectedRoute><Bookings /></ProtectedRoute>} />
            <Route path = '/profile' element = {<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path = '/setBookings' element = {<ProtectedRoute><SetBooking /></ProtectedRoute>} />
        </Routes>    
    </div>  
    )
}

export default App;
