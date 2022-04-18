import React, { useState } from 'react'
import axios from 'axios'



export default function SignUp({handleNameChange, handleEmailChange, handlePasswordChange, handleSignUp}) {
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  // const handleNameChange = (e) => {
  //   setName(e.target.value) 
  // }

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value)
  // }

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value)
  // }

  // const handleSignUp = (e) => {
  //   e.preventDefault()
  //   setSignedIn(true)
  //   //use this for deployed database
  //   // .post("https://rock-climbing-api.herokuapp.com/api/signup"
  //   axios
  //     .post("http://localhost:3000/api/signup", {
  //     "name": name,
  //     "email": email,
  //     "password": password,
  //     })
  //     .then((res) => {
  //       localStorage.token = res.data.token
  //     })
  //     .catch((err)=>{console.log(err)})
  // }

  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <div>
          <label htmlFor='name'>Name </label>
          <input type='text' name="name" onChange={handleNameChange}/>
        </div>
        <div>
          <label htmlFor='email'>Email </label>
          <input type='text' name="email" onChange={handleEmailChange}/>
        </div>
        <div>
          <label htmlFor='password'>Password </label>
          <input type='password' name="email" onChange={handlePasswordChange}/>
        </div>
        <div>
          <input type='submit' value="Submit" onClick={handleSignUp}/>
        </div>
      </form>
    </div>
  )
}
