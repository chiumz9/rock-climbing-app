import {Link} from "react-router-dom"
import { Button, Wrapper } from "./styles"

export default function NavBar() {
  const handleClick = () => {
  }
  
  return (
    <>
      <Wrapper>
      <Link to="/SignUp"><Button>Sign Up</Button></Link>
      <Link to="/SignIn"><Button>Sign In</Button></Link>
      <Link to="/SignOut"><Button onClick={handleClick}>Sign Out</Button></Link>
      </Wrapper>
    </>
  )
}
