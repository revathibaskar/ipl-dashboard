import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetail} = props
  const {name, id, teamImgUrl} = teamDetail
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-list-container">
        <img src={teamImgUrl} className="img-style" alt={name} />
        <p className="ipl-team-style">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
