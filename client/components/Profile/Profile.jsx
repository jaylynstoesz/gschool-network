Profile = React.createClass({

  getInitialState() {
    return {
      editing: false,
      profile: this.getProfile()
    }
  },

  getProfile() {
    if (Meteor.users.findOne({ _id: this.props.page }) !== undefined) {
      return Meteor.users.findOne({ _id: this.props.page });
    } else {
      return false
    }
  },

  submitForm(userObject) {
    Meteor.call("updateUserProfile", userObject)
    this.toggleBasicForm()
  },

  toggleBasicForm() {
    this.setState({editing: !this.state.editing});
  },

  render() {
    var currentProfile = this.getProfile()
    return (
      <div id="profile-comp">
        <h1>This is the Profile</h1>
        { this.props.editable ? <button onClick={this.toggleBasicForm}>{this.state.editing ? "Cancel" : "Edit Profile"}</button> : null }
        { this.state.editing ? <BasicInfoForm profile={currentProfile.profile} submitForm={this.submitForm}/> :
          <BasicInfo profile={currentProfile.profile} editable={this.props.editable}/> }
      </div>
    )
  }
})
