import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        userName: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { userName, email, password, reEnterPassword } = user
        if( userName && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:8080/api/v1/users/register", user)
            .then( res => {
                // alert(res.data.message)
                history.push("/login")
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className='registerapp'>
            <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="userName" value={user.userName} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
        </div>
        
    )
}

export default Register