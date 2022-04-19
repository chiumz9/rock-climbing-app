import React, {useEffect, useRef} from 'react'
import { Container, H1, FormContainer, Label, H3, SignUpHeader, Button, SignInput } from "./styles"


export default function SignUp({ handleNameChange, handleEmailChange, handlePasswordChange, handleSignUp }) {

  return (
    <>
      <Container>
      <SignUpHeader>
          <H1>Sign Up</H1>
            <H3>Join our community of climbers to get the best information and gym deals in NYC</H3>
            </SignUpHeader>
        <FormContainer>
          <form>
            
        <div>
          <Label><label htmlFor='name'>Name </label></Label>
          <SignInput type='text' name="name" onChange={handleNameChange}/>
        </div>
        <div>
          <Label><label htmlFor='email'>Email </label></Label>
          <SignInput type='text' name="email" onChange={handleEmailChange}/>
        </div>
        <div>
        <Label> <label htmlFor='password'>Password </label> </Label>
         <SignInput type='password' name="email" onChange={handlePasswordChange}/>
        </div>
        <div>
        <Button type='submit' value="Submit" onSubmit={handleSignUp}>Submit</Button>
        </div>
          </form>
          </FormContainer>
      </Container>
      
    </>
  )
}
