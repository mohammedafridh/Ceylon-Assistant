import Layout from "../../../Components/layouts/Layout";
import SubNavigation from "../../../Components/layouts/SubNavigation";
import ConfirmedBookingList from "../../../Components/PageComponents/BookingComponents/ConfirmedBookingList";
import PendingBookingList from "../../../Components/PageComponents/BookingComponents/PendingBookingList";

function Bookings(){
    return <Layout>
        <SubNavigation />
        <ConfirmedBookingList />
        <PendingBookingList />    
    </Layout>
    
}

export default Bookings;