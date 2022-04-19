import { Button, Container, FormContainer, Label } from "./styles";
import { Container, H1, FormContainer, Label, H3, SignUpHeader, Button, SignInput } from "./styles"


export default function SignIn({ handleEmailChange, handlePasswordChange, handleLogIn }) {
 
  return (
    <>
      <Container>
      <SignUpHeader>
          <H1>Sign In</H1>
        </SignUpHeader>
        <FormContainer>
      <form>
        <div>
         <Label> <label htmlFor='email'>Email </label></Label>
          <SignInput type='text' name="email" onChange={handleEmailChange}/>
        </div>
        <div>
        <Label> <label htmlFor='password'>Password </label></Label>
          <SignInput type='password' name="email" onChange={handlePasswordChange}/>
        </div>
        <div>
          <Button type='submit' value="Submit" onClick={handleLogIn}/>
        </div>
          </form>
          </FormContainer>
        </Container>
    </>
  )
}
