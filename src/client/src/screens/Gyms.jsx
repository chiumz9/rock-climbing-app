import { useState, useEffect } from 'react';
import { getGyms } from '../services/gyms.js';
import Gym from '../components/Gym.jsx';


export default function Gyms() {
  const [gyms, setGyms] = useState([])

  useEffect(() => {
    const fetchGyms = async () => {
      const allGyms = await getGyms()
      setGyms(allGyms)
    }

    fetchGyms()
  }, [])
  return (
    <div>
      <h1>Rock Climbing Gyms</h1>
      {gyms.map((gymData) => (
        <Gym key={gymData._id} gym={gymData}/>
      ))}
    </div>
  )
}
