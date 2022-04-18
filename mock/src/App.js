import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setSignedIn(true);
    setUserName(name);
    //use this for deployed database
    // .post("https://rock-climbing-api.herokuapp.com/api/signup"
    axios
      .post("http://localhost:3000/api/signup", {
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

  const handleLogIn = (e) => {
    e.preventDefault();
    setSignedIn(true);
    //use this for deployed database
    // .post("https://rock-climbing-api.herokuapp.com/api/login"
    axios
      .post("http://localhost:3000/api/login", {
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
  };

  return (
    <div className="App">
      <Home signedIn={signedIn} userName={userName} />
      <Routes>
        <Route
          path="/signUp"
          element={
            <SignUp
              handleNameChange={handleNameChange}
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              handleSignUp={handleSignUp}
            />
          }
        />
        <Route
          path="/signIn"
          element={
            <SignIn
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              handleLogIn={handleLogIn}
            />
          }
        />
        <Route
          path="/signOut"
          element={<SignOut setSignedIn={setSignedIn} />}
        />
      </Routes>
    </div>
  );
}

export default App;
