import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateGym, getGym } from '../services/gyms.js';
import { SignButton } from '../../styles.js';
export default function GymEdit() {
  let navigate = useNavigate()
  const { id } = useParams()

  const [gym, setGym] = useState({
    name: "",
    location:
    {
      fullAddress: "",
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
  useEffect(() => {
    const fetchGym = async () => {
      let oneGym = await getGym(id)
      setGym(oneGym)
    }

    fetchGym()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setGym({
      ...gym,
      [name]: value,
    });
  };
  const handleChange2 = (event) => {
    const { name, value } = event.target
    setGym({
      ...gym, location: {
        [name]: value,
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    await updateGym(id, gym)
    navigate('/SignIn', { replace: true })
  }

  return (
    <form className="Edit-Container" onSubmit={handleSubmit}>
      Full Address:
      <input
        placeholder="full address"
        name="location.fullAddress"
        value={gym.location.fullAddress}
        onChange={handleChange2}
      />
      Street Address:
      <input
        placeholder="street address"
        name="location.address"
        value={gym.location.address}
        onChange={handleChange2}
      />
      City:
      <input
        placeholder="city"
        name="location.city"
        value={gym.location.city}
        onChange={handleChange2}
      />
      State:
      <input
        placeholder="state"
        name="location.state"
        value={gym.location.state}
        onChange={handleChange2}
      />
      Zipcode:
      <input
        placeholder="zipcode"
        name="location.zipcode"
        value={gym.location.zipcode}
        onChange={handleChange2}
      />
      Gym Name:
      <input
        placeholder="name"
        name="name"
        value={gym.name}
        onChange={handleChange}
      />
      Phone Number:
      <input
        placeholder="contact number"
        name="phoneNumber"
        value={gym.phoneNumber}
        onChange={handleChange}
      />
      Image:
      <input
        placeholder="image-link"
        name="image"
        value={gym.image}
        onChange={handleChange}
      />
      Day-Pass Price:
      <input
        placeholder="Price of 1-day pass"
        name="oneDayPass"
        value={gym.oneDayPass}
        onChange={handleChange}
      />
      Membership Price:
      <input
        placeholder="Monthly Membership"
        name="membership"
        value={gym.membership}
        onChange={handleChange}
      />
      Rental Price:
      <input
        placeholder="Rental Price"
        name="rentalGear"
        value={gym.rentalGear}
        onChange={handleChange}
      />
      Auto-Belay - true/false?
      <input
        placeholder="Auto Belay?"
        name="autoBelay"
        value={gym.autoBelay}
        onChange={handleChange}
      />
      Bouldering - true/false?
      <input
        placeholder="Bouldering?"
        name="bouldering"
        value={gym.bouldering}
        onChange={handleChange}
      />
      Top Roping - true/false?
      <input
        placeholder="Top Roping?"
        name="topRoping"
        value={gym.topRoping}
        onChange={handleChange}
      />
      Website:
      <input
        placeholder="Website Link"
        name="url"
        value={gym.url}
        onChange={handleChange}
      />
      <SignButton type="submit">Submit</SignButton>
    </form>
  )
}
