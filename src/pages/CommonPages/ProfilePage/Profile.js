import Layout from "../../../Components/layouts/Layout";
import ProfileDetails from "../../../Components/PageComponents/ProfileComponents/ProfileDetails";
// import { useUserAuth } from "../Context/Context";

function Profile(){
    // const {user} = useUserAuth();
    return <Layout>
        <ProfileDetails />
    </Layout>
}

export default Profile;