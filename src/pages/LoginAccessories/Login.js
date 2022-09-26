// import LoginBackground from '../../backgrounds/LoginBackground';
import classes from './Login.module.css'
import LoginForm from './LoginForm';

function Login(){
        return (<div className = {classes.loginBg}>
          <LoginForm />
        </div>
         
        );
}



export default Login;