import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplTeamList: [], isLoading: true}

  componentDidMount() {
    this.onFetchIplTeamsList()
  }

  onFetchIplTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImgUrl: eachTeam.team_image_url,
    }))

    this.setState({iplTeamList: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, iplTeamList} = this.state
    return (
      <div className="bg-home-container">
        <div className="ipl-head-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo-style"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="ul-list-container">
            {iplTeamList.map(eachItem => (
              <TeamCard key={eachItem.id} teamDetail={eachItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
