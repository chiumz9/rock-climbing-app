import React from 'react'

export default function SignOut() {

  const handleLogOut = (e) => { 
    e.preventDefault()
    //want to set logged out status here
    localStorage.clear()
  }
  return (
    <div>
      <div>
        <h1>Log Out</h1>

        <form>
          <input value='Log Out' type='submit' onClick={handleLogOut} />
        </form>
      </div>
    </div>
  )
}
