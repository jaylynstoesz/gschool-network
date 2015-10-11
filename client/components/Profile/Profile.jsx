Profile = React.createClass({

  render() {
    return (
      <div id="profile-comp">
        <h1>This is the Profile</h1>
        <BasicInfo profile={this.props.currentProfile.profile} editable={this.props.editable}/>
      </div>
    )
  }
})
