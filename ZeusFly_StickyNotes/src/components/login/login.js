import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        userName:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
        
    }

    const login = () => {
        axios.post(`http://localhost:8080/api/v1/users/login/${user.userName}`, user.password)
       
        .then(res => {
            console.log(user)
            // console.log(res.data)
            // alert(res.data.message)
            setLoginUser(res.data.user)
            window.localStorage.setItem('userName',user.userName)
            history.push("/notes")
        })
        .catch(err => {
            alert("Invalid credentials")
            console.log(err);
        })
       
        // history.push('/notes');
    }

    return (
        <div className="loginapp">
            <div className="login">
            <h1>Login</h1>
            <input type="text" name="userName" value={user.userName} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="text" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>
        </div>
        
    )
}

export default Login