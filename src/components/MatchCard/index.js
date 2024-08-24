import './index.css'

const MatchCard = props => {
  const {recentDetail} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = recentDetail
  const statusStyle = matchStatus === 'Lost' ? 'lost-style' : 'won-style'
  return (
    <li className="recent-list-con">
      <img
        className="com-tm-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={statusStyle}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
