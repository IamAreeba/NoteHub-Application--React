import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';


const Signup = () => {

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  })
  
  const {name, email, password, cpassword} = credentials

  // Navigating to Home page if we have auth-token
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
    })

    const json = await response.json()
    console.log(json)
    if(json.success){
      // Save the auth-token and redirect 
       localStorage.setItem('token', json.authtoken); 
        navigate("/")
    }
    else{
      alert("Invalid Credentials")

    }

  }

  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" name="name" onChange={onChange} className="form-control" id="name" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email"  name="email" onChange={onChange} className="form-control" id="email" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name="password" minLength={5} required onChange={onChange} className="form-control" id="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" name="cpassword" minLength={5} required onChange={onChange} className="form-control" id="cpassword" />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
