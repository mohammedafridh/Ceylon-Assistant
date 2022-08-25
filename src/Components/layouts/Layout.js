import classes from './Layout.module.css'
import MainNavigation from "./MainNavigation";
import Footer from './Footer'
import Header from './Header'


function Layout(props){
    return(<div>
        <MainNavigation />
        {/* <Header /> */}
        <main className = {classes.main}>{props.children}</main>
        <Footer />
    </div>
        
    )

}

export default Layout;