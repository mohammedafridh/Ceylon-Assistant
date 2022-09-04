import Layout from "../Components/layouts/Layout";
import BookingHeader from "../Components/PageComponents/BookingComponents/BookingHeader";
import BookingList from "../Components/PageComponents/BookingComponents/BookingList";
import MailList from '../Components/PageComponents/Homepage/MailList'

function Bookings(){
    return <Layout>
        <BookingHeader />
        <BookingList />
        <BookingList />
        <BookingList />
        <MailList />
    </Layout>
    
}

export default Bookings;