import { Link } from 'react-router-dom';

export default function Gym({gym}) {

  return (
    <div>
      <Link to={`/gyms/${gym._id}`}>
        <h2>{gym.name}</h2>
      </Link>
    </div>
  )
}
