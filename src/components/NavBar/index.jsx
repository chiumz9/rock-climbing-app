import {Link} from "react-router-dom"
import {Wrapper } from "./styles"
import {Button} from '../../styles'

export default function NavBar() {

  return (
    <>
      <Wrapper>
        <Link to="/SignUp"><Button>Sign Up</Button></Link>
        <Link to={"/SignIn"}><Button>Sign In</Button></Link>
        <Link to="/SignOut"><Button>Sign Out</Button></Link>
      </Wrapper>
    </>
  )
}
