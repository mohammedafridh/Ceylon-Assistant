import Layout from "../Components/layouts/Layout";
import { useUserAuth } from "../Context/Context";

function Profile(){
    const {user} = useUserAuth();
    return <Layout>
        <h1>Profile</h1>
        {user && user.email} 
    </Layout>
}

export default Profile;