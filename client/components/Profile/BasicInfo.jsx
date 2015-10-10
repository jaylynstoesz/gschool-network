BasicInfo = React.createClass({

  getInitialState() {
    return {
      profile: {}
    }
  },

  componentDidMount() {
    if (this.props.profile) {
      this.setState({profile: this.props.profile})
    } else {
      
    }
  },

  render() {
    var profile = this.state.profile
    return (
      <div id="basic-info">
        <h1>{profile.firstName} {profile.lastName}</h1>
        <h3>{profile.cohortType}{profile.cohortNumber} - {profile.cohortLocation}</h3>
        <h3>{profile.currentCity}, {profile.currentState}</h3>
        <h3>{profile.jobTitle} at {profile.company}</h3>
      </div>
    )
  }
})