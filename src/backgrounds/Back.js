import classes from './Back.module.css'

function Back(props){
    return <div className = {classes.back}>{props.children}</div>
}

export default Back;