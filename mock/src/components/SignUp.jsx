import React from 'react'
const handleChange = () => {
  console.log("changed")
}
const handleSubmit = () => {
  console.log("submit")
}
export default function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' name="name" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='text' name="email" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' name="email" onChange={handleChange}/>
        </div>
        <div>
          <input type='submit' value="Submit" onSubmit={handleSubmit}/>
        </div>
      </form>
    </div>
  )
}
