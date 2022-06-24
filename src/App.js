import './App.css';
import {Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import TourGuides from './pages/TourGuides';
import Search from './pages/Search';
import Bookings from './pages/Bookings';
import Profile from './pages/Profile';
import Layout from './Components/layouts/Layout';

function App() {
    return(<div>
        <Layout>
        <Routes>
            <Route path = '/' element = {<Homepage />} />
            <Route path = '/guides' element = {<TourGuides />} />
            <Route path = '/search' element = {<Search />}/>
            <Route path = '/booking' element = {<Bookings />} />
            <Route path = '/profile' element = {<Profile />} />
        </Routes>
        </Layout>   
    </div>  
    )
}

export default App;
