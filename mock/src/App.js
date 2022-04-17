import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

function App() {
  const [userSignedIn, setUserSignedIn] = useState(false);

  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signOut" element={<SignOut />} />
      </Routes>
    </div>
  );
}

export default App;
