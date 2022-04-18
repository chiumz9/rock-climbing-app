import { useState, useEffect } from 'react'
import NavBar from './NavBar'

export default function Home({signedIn, userName}) {
  const [user, setUser] = useState("")
  
  //need to import username if signed in.
  //need to use effect to change the page when user signed in
  useEffect(() => {
    setUser(userName)
  }, [userName])


  return (
    <div className='top-container'>
      <header className='top'>
        <h1 className='hello'>Hello {signedIn ? ", " + userName : null}</h1>
        <NavBar/>
      </header>
    </div>
  )
}
