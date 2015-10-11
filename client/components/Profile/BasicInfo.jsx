BasicInfo = React.createClass({

  getInitialState() {
    return {
      profileDisplay: false,
      profile: false
    }
  },

  componentDidMount() {
    if (this.props.profile) {
      this.setState({profileDisplay: true, profile: this.props.profile})
    } else {
      this.setState({profile: {} })
    }
  },

  toggleBasicForm() {
    this.setState({profileDisplay: !this.state.profileDisplay});
  },

  submitForm(userObject) {
    Meteor.call("updateUserBasic", userObject)
    this.setState({profile: userObject})
    this.toggleBasicForm()
  },

  renderInfo() {
    var profile = this.state.profile
    return (
      <div id="basic-info">
        <h1>{profile.firstName} {profile.lastName}</h1>
        <h3>{profile.cohortType}{profile.cohortNumber} - {profile.cohortLocation}</h3>
        <h3>{profile.currentCity}, {profile.currentState}</h3>
        <h3>{profile.jobTitle} at {profile.company}</h3>
      </div>
    )
  },

  renderForm() {
    return (
      <div>
        <BasicInfoForm profile={this.state.profile} submitForm={this.submitForm}/>
      </div>
    )
  },

  render() {
    return (
      <div>
        { this.state.profileDisplay ? this.renderInfo() : this.renderForm() }
        { this.props.editable ? <button onClick={this.toggleBasicForm}>{this.state.profileDisplay ? "Edit Info" : "Cancel"}</button> : null }
      </div>
    )
  }
})
