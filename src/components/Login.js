import React, { useState } from 'react'
import { useNavigate  } from "react-router-dom";

const Login = (props) => {

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })
  

  // Navigating to Home page if we have auth-token
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: credentials.email, password: credentials.password})
    })

    const json = await response.json()
    console.log(json)
    if(json.success){
      // Save the auth-token and redirect 
       localStorage.setItem('token', json.authtoken); 
      navigate("/")
      props.showAlert("Logged in Successfully", "success")
    }
    else{
      props.showAlert("Invalid Credentials", "danger")
    }

  }

  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <form >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' onChange={onChange} value={credentials.email} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={credentials.password} />
        </div>

        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login
