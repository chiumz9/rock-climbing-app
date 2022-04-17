import "./App.css";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
