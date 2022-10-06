import Layout from "../../../Components/layouts/Layout";
import SubNavigation from "../../../Components/layouts/SubNavigation";
import BookingList from "../../../Components/PageComponents/BookingComponents/BookingList";

function Bookings(){
    return <Layout>
        <SubNavigation />
        <BookingList />
    </Layout>
    
}

export default Bookings;