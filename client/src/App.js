import './App.css';
import Gyms from "./screens/Gyms.jsx"
import {Routes, Route} from "react-router-dom"
import CreateGym from './screens/GymCreate.jsx'
import GymDetail from './screens/GymDetail.jsx'
import GymEdit from './screens/GymEdit.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/gyms" element={<Gyms/>} />
        <Route path="/create-gym" element={<CreateGym/>} />
        <Route path="/gyms/:id" element={<GymDetail/>} />
        <Route path="/gyms/:id/edit" element={<GymEdit/>}/>
      </Routes>
    </div>
  );
}

export default App;
