import { useState, useEffect } from 'react'
import { deleteGym, getGym } from '../services/gyms.js';
import { Link, useParams, useNavigate } from "react-router-dom";

export default function GymDetail() {
  const [gym, setGym] = useState({})
  let { id } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    const fetchGym = async () => {
      let oneGym = await getGym(id)
      setGym(oneGym)
    }

    fetchGym()
  }, [id])

  return (
    <div>
      <h2>{gym.name}</h2>
      <p>contact: {gym.phoneNumber}</p>
      <p>day-pass: $ {gym.oneDayPass}</p>
      <p>membership: $ {gym.membership} /month</p>
      <p>rental: $ {gym.rentalGear}</p>
      <p>{gym.autoBelay}</p>
      <p>{gym.bouldering}</p>
      <p>{gym.topRoping}</p>
      <p>{gym.url}</p>
      <p>{gym.location}</p>
      <img src={gym.image}/>
      <div>
        <button>
          <Link to={`/gyms/${gym._id}/edit`}>Edit Gym</Link>
        </button>
        <button onClick={() => {
          deleteGym(gym._id)
          navigate("/gyms", { replace: true })
        }}>Delete Gym</button>
      </div>
    </div>
  )
}
