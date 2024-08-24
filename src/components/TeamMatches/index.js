import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {url: '', latestMatch: {}, recentMatches: [], isLoading: true}

  componentDidMount() {
    this.onFetchRecentMatches()
  }

  onFetchRecentMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedUrl = data.team_banner_url
    console.log(updatedUrl)
    const updatedLatestMatch = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }
    const updatedRecentMatches = data.recent_matches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))
    this.setState({
      url: updatedUrl,
      latestMatch: updatedLatestMatch,
      recentMatches: updatedRecentMatches,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, recentMatches, latestMatch, url} = this.state

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="main-bg-container">
            <img src={url} className="team-img" alt="team banner" />
            <h1 className="latest-style">Latest Matches</h1>
            <LatestMatch latestMatch={latestMatch} />
            <ul className="ul-recent-container">
              {recentMatches.map(each => (
                <MatchCard recentDetail={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
