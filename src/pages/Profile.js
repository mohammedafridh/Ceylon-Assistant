import Layout from "../Components/layouts/Layout";
import ProfileDetails from "../Components/PageComponents/ProfileComponents/ProfileDetails";
import ProfileHeader from "../Components/PageComponents/ProfileComponents/ProfileHeader";
// import { useUserAuth } from "../Context/Context";

function Profile(){
    // const {user} = useUserAuth();
    return <Layout>
        {/* <h1>Profile</h1>
        {user && user.email}  */}
        <ProfileHeader />
        <ProfileDetails />
    </Layout>
}

export default Profile;