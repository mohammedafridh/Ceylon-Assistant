import Layout from "../../../Components/layouts/Layout";
import SubNavigation from "../../../Components/layouts/SubNavigation";
import MailList from '../../../Components/PageComponents/Homepage/MailList'
import TourDetails from "../../../Components/PageComponents/TourComponents/TourDetails";

function Tours(){
    return <Layout>
        <SubNavigation />
        <TourDetails />
    </Layout>
}

export default Tours;