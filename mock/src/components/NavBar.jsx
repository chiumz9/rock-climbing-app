import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"

export default function NavBar() {
  // const [userSignedIn, setUserSignedIn] = useState(true)
  // useEffect(() => {
  //  setUserSignedIn(false)
  // }, [userSignedIn])
  const handleClick = () => {
    console.log("signed out")
  }
  
  return (
    <div>
      {/* {userSignedIn ? <Link to="/SignOut"><button>Sign Out</button></Link> : 
      (<Link to="/SignUp"><button>Sign Up</button></Link>,
       <Link to="/SignIn"><button>Sign In</button></Link>)} */}
      <Link to="/SignUp"><button>Sign Up</button></Link>
      <Link to="/SignIn"><button>Sign In</button></Link>
      <Link to="/SignOut"><button onClick={handleClick}>Sign Out</button></Link>
      
    </div>
  )
}
