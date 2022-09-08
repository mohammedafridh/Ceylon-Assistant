import Layout from "../Components/layouts/Layout";
import ProfileHeader from "../Components/PageComponents/ProfileComponents/ProfileHeader";
// import { useUserAuth } from "../Context/Context";

function Profile(){
    // const {user} = useUserAuth();
    return <Layout>
        {/* <h1>Profile</h1>
        {user && user.email}  */}
        <ProfileHeader />
    </Layout>
}

export default Profile;