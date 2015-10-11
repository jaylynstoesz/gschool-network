Profile = React.createClass({

  getInitialState() {
    return {
      currentProfile: this.getProfile()
    }
  },

  getProfile() {
    if (Meteor.users.findOne({ _id: this.props.page }) !== undefined) {
      return Meteor.users.findOne({ _id: this.props.page });
    } else {
      return false
    }
  },

  render() {
    console.log("current profile:", this.state.currentProfile);
    return (
      <div id="profile-comp">
        <h1>This is the Profile</h1>
        <BasicInfo profile={this.state.currentProfile.profile} editable={this.props.editable}/>
      </div>
    )
  }
})
