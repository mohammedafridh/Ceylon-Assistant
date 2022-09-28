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
            <Route path = '/touristReg' element = {<TouristReg />}/>
            <Route path = '/' element = {<Homepage />} />
            <Route path = '/selectedGuide' element = {<SelectedGuide />} />
            <Route path = '/selectedBooker' element = {<SelectedBooker />}/>
            <Route path = '/tourGuides' element = {<TourGuides />} />
            <Route path = '/tours' element = {<ProtectedRoute><Tours /></ProtectedRoute>} />
            <Route path = '/bookings' element = {<ProtectedRoute><Bookings /></ProtectedRoute>} />
            <Route path = '/profile' element = {<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>    
    </div>  
    )
}

export default App;
