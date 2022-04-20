import React, { useState, useEffect } from 'react'
import GymContainer from './components/GymContainer';
import Header from './components/Header'
import { GlobalStyle } from './styles';
import DetailPanel from './components/DetailPanel';
import Search from './components/Search';
import { Transition } from 'react-transition-group'
import NavBar from './components/NavBar';
import jwt_decode from "jwt-decode"
import axios from "axios"
import { Routes, Route, useNavigate, Navigate } from "react-router-dom"
import SignUp from './components/SignUp'
import SignOut from './components/SignOut';
import SignIn from './components/SignIn';
import GymEdit from './cruds/screens/GymEdit.jsx'
import CreateGym from './cruds/screens/GymCreate.jsx'
import "./App.css"

const App = () => {
  const [gyms, setGyms] = useState([])
  const [selectedGym, setSelectedGym] = useState(null)
  const [showPanel, setShowPanel] = useState(false)
  const [showSignUp, setSignUp] = useState(true)
  const [filteredGyms, setFilteredGyms] = useState([])
  const [trigger,setTrigger] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await fetch('https://rock-climbing-api.herokuapp.com/api/gyms')
        const response = await fetch('http://localhost:3000/api/gyms')

        const gyms = await response.json()
        setGyms(gyms)
        //need to set filteredGyms or else page will render empty
        setFilteredGyms(gyms)
      } catch (errors) {
        console.error(errors, "error")
      }
    }
    fetchData()
  }, [trigger])
  const pickGym = (gym) => {
    setSelectedGym(gym)
    setShowPanel(true)
  }
  const closePanel = () => {
    setShowPanel(false)
  }

  const filterGyms = (searchTerm) => {
    //Convert the array and the input to lowercase & string to make non-case-sensitive
    const stringSearch = (gymAttribute, searchTerm) =>
      gymAttribute.toLowerCase().includes(searchTerm.toLowerCase())
    //if searchTerm returns falsey value, display all gyms
    if (!searchTerm) {
      setFilteredGyms(gyms)
    } else {
      setFilteredGyms(
        gyms.filter(
          (gym) => stringSearch(gym.name, searchTerm) || stringSearch(gym.location.city, searchTerm || stringSearch(gym.autoBelay, searchTerm))
        )
      )
    }
  }
  // Conditionally Render Title for Gym Container
  // Compares the length of the filteredGyms array and the gyms array... if they do not === one another, filter has happened
  const hasFiltered = filteredGyms.length !== gyms.length
  //sign in process
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
<<<<<<< HEAD
=======

  // const signedUp = () => {
  //   setShowSignedUp(false)
  // }

  // const notSignedUp = () => {
  //   setShowSignedUp(true)
  // }

>>>>>>> f718692528ef3b5d6b50028a45f8d284cb41531f
  const handleSignUp = (e) => {
    e.preventDefault();
    setSignedIn(true);
    setUserName(name);
<<<<<<< HEAD
    setShowGymContainer(null)
=======
  //  signedUp();


>>>>>>> f718692528ef3b5d6b50028a45f8d284cb41531f
    axios
      .post("https://rock-climbing-api.herokuapp.com/api/signup", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.token = res.data.token;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
<<<<<<< HEAD
=======

  let navigate = useNavigate()
>>>>>>> f718692528ef3b5d6b50028a45f8d284cb41531f
  const handleLogIn = (e) => {
    e.preventDefault();
    setSignedIn(true);
    

    axios
      .post("https://rock-climbing-api.herokuapp.com/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.token = res.data.token;
        const test = jwt_decode(res.data.token);
        setUserName(test.name);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/", { replace: true })
    window.location.reload()
  };


  return (
    <div clasName="App-Background">
      <GlobalStyle />
      <Header >
<<<<<<< HEAD
        <NavBar />
=======
        <NavBar signedIn={signedIn}/>
>>>>>>> f718692528ef3b5d6b50028a45f8d284cb41531f
        <Search filterGyms={filterGyms} />
      </Header>
      <div className="Routes">
        <Routes>
<<<<<<< HEAD
        <Route path="/create-gym" element={<CreateGym/>} />
          <Route
=======
          {!signedIn && <Route
>>>>>>> f718692528ef3b5d6b50028a45f8d284cb41531f
            path="/"
            element={
             <GymContainer
                gyms={filteredGyms}
                pickGym={pickGym}
                isPanelOpen={showPanel}
                userName={userName}
                signedIn={signedIn}
                title={hasFiltered ? 'Search results' : "All Gyms"} />}
              
            
          />} 
         {!signedIn && <Route
            path="/signUp"
            element={
              <SignUp 
                handleNameChange={handleNameChange}
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
                handleSignUp={handleSignUp}
              />
            }
          />}
          {!signedIn && <Route
            path={signedIn ? "/" : "/signIn"}
            element={
              <SignIn
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
                handleLogIn={handleLogIn}

              />
            }
<<<<<<< HEAD
          />
          <Route
=======
          />}
           <Route
>>>>>>> f718692528ef3b5d6b50028a45f8d284cb41531f
            path="/gyms"
            element={<GymContainer />}

          />
          <Route
            path="/signOut"
            element={<SignOut setSignedIn={setSignedIn} setUserName={setUserName}/>}
          />
        </Routes>
      </div>
      
      <Transition in={showPanel} timeout={300}>
        {(state) => <DetailPanel gym={selectedGym} closePanel={closePanel} state={state} />}
      </Transition>
    </div>
  );
}

export default App;
