import { useState, useEffect } from 'react'
import NavBar from './NavBar'


export default function Home() {
  const [user, setUser] = useState("")
  const [userSignedIn, setUserSignedIn] = useState(false)
  //need to import username if signed in.
  //need to use effect to change the page when user signed in
  useEffect(() => {
    setUser("Stacey")
  }, [userSignedIn])

  return (
    <div className='top-container'>
      <header className='top'>
        <h1 className='hello'>Hello {user ? ", " + user : null}</h1>
        <NavBar />
      </header>
    </div>
  )
}
