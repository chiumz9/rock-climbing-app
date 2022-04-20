import React from 'react'
import { SignContainer, H1Sign, H3Sign, FormContainer, SignLabel, SignUpHeader, SignButton, SignInput } from "../../styles"
import { SignOutButton } from './styles'
export default function SignOut({setSignedIn, setUserName}) {

  const handleLogOut = (e) => { 
    e.preventDefault()
    setSignedIn(false)
    setUserName('')
    //want to set logged out status here
    localStorage.clear()
  }
  return (
    <>
      <SignContainer>
        <SignUpHeader>
          <H1Sign>Sign Out</H1Sign>
          <H3Sign>Thanks for hanging :)</H3Sign>
          </SignUpHeader>
        <FormContainer>
          <form>
          
              <SignOutButton value='Log Out' type='submit' onClick={handleLogOut}>Sign Out</SignOutButton>
    
        </form>
        </FormContainer>
        </SignContainer>
    </>
  )
}
