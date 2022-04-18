import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {createGym} from '../services/gyms.js'

export default function GymCreate() {
  let navigate = useNavigate()
  const [gym, setGym] = useState({
    name: "",
    location: 
    { fullAddress: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    },
    phoneNumber: "",
    image: "",
    oneDayPass: "",
    membership: "",
    rentalGear: "",
    autoBelay: "",
    bouldering: "",
    topRoping: "",
    url: ""
  });

  const handleChange = (event) => {
    const {name,value} = event.target
    setGym({
      ...gym,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    await createGym(gym)
    navigate('/gyms', {replace:true})
  }

  return (
    <form className="Create-Container" onSubmit={handleSubmit}>
      <h1>New Gym</h1>
      <input
        placeholder="name"
        name="name"
        value={gym.name}
        onChange={handleChange}
      />
      <input
        placeholder="contact number"
        name="phoneNumber"
        value={gym.phoneNumber}
        onChange={handleChange}
      />
      <input
        placeholder="image-link"
        name="image"
        value={gym.image}
        onChange={handleChange}
      />
      <input
        placeholder="Price of 1-day pass"
        name="oneDayPass"
        value={gym.oneDayPass}
        onChange={handleChange}
      />
      <input
        placeholder="Monthly Membership"
        name="membership"
        value={gym.membership}
        onChange={handleChange}
      />
      <input
        placeholder="Rental Price"
        name="rentalGear"
        value={gym.rentalGear}
        onChange={handleChange}
      />
      <input
        placeholder="Auto Belay?"
        name="autoBelay"
        value={gym.autoBelay}
        onChange={handleChange}
      />
      <input
        placeholder="Bouldering?"
        name="bouldering"
        value={gym.bouldering}
        onChange={handleChange}
      />
      <input
        placeholder="Top Roping?"
        name="topRoping"
        value={gym.topRoping}
        onChange={handleChange}
      />
      <input
        placeholder="Website Link"
        name="url"
        value={gym.url}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
