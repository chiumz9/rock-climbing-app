import { SignContainer, H1Sign, H3Sign, FormContainer, SignLabel, SignUpHeader, SignButton, SignInput } from "../../styles"


export default function SignIn({ handleEmailChange, handlePasswordChange, handleLogIn }) {
 
  return (
    <>
      <SignContainer>
      <SignUpHeader>
          <H1Sign>Sign In</H1Sign>
          <H3Sign>Welcome Back! <br />🤠</H3Sign>
        </SignUpHeader>
        <FormContainer>
      <form>
        <div>
         <SignLabel> <label htmlFor='email'>Email </label></SignLabel>
          <SignInput type='text' name="email" onChange={handleEmailChange}/>
        </div>
        <div>
        <SignLabel> <label htmlFor='password'>Password </label></SignLabel>
          <SignInput type='password' name="email" onChange={handlePasswordChange}/>
        </div>
        <div>
          <SignButton type='submit' value="Submit" onClick={handleLogIn}>Sign In</SignButton>
        </div>
          </form>
          </FormContainer>
        </SignContainer>
    </>
  )
}
