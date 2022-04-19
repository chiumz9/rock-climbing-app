import React, {useEffect, useRef} from 'react'
import { SignContainer, H1Sign, FormContainer, SignLabel, H3Sign, SignUpHeader, SignButton, SignInput } from "../../styles"


const SignUp = ({ handleNameChange, handleEmailChange, handlePasswordChange, handleSignUp}) => {

  return (
    <>
      <SignContainer>
      <SignUpHeader>
          <H1Sign>Sign Up</H1Sign>
          <H3Sign>It's pretty wild that your entire life led to this moment. <br /> <br />
            The moment you decide if you're going to get the best climbing information and gym deals in NYC. <br /> <br /> We can't decide for you, and we wouldn't want to. </H3Sign>
            </SignUpHeader>
        <FormContainer>
          <form>
            
        <div>
          <SignLabel><label htmlFor='name'>Name </label></SignLabel>
          <SignInput type='text' name="name" onChange={handleNameChange}/>
        </div>
        <div>
          <SignLabel><label htmlFor='email'>Email </label></SignLabel>
          <SignInput type='text' name="email" onChange={handleEmailChange}/>
        </div>
        <div>
        <SignLabel> <label htmlFor='password'>Password </label> </SignLabel>
         <SignInput type='password' name="email" onChange={handlePasswordChange}/>
        </div>
        <div>
        <SignButton type='submit' value="Submit" onSubmit={handleSignUp}>Submit</SignButton>
        </div>
          </form>
          </FormContainer>
      </SignContainer>
      
    </>
  )
}
export default SignUp