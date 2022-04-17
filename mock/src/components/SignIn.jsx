import React, { useState } from 'react'
import axios from "axios"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogIn = (e) => {
    e.preventDefault()
    //use this for deployed database
    // .post("https://rock-climbing-api.herokuapp.com/api/login"
    axios
      .post("http://localhost:3000/api/login", {
        "email": email,
        "password": password,
      })
      .then((res) => {
        localStorage.token = res.data.token
      })
      .catch((err) => { console.log(err) })
  }

  return (
    <div>
        <h1>Sign In</h1>
      <form>
        <div>
          <label htmlFor='email'>Email </label>
          <input type='text' name="email" onChange={handleEmailChange}/>
        </div>
        <div>
          <label htmlFor='password'>Password </label>
          <input type='password' name="email" onChange={handlePasswordChange}/>
        </div>
        <div>
          <input type='submit' value="Submit" onClick={handleLogIn}/>
        </div>
      </form>
    </div>
  )
}
