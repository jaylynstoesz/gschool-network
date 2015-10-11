App = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user(),
    }
  },

  getInitialState() {
    return {
      editable: Meteor.userId() === this.props.page,
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
    return (
      <div>
        <AccountsUIWrapper />
        <Dashboard currentUser={this.data.currentUser}/>
        {this.state.currentProfile ? <Profile editable={this.state.editable} currentProfile={this.state.currentProfile}/> : <Browse /> }
      </div>
    )
  }
})
