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
    return Meteor.users.findOne({ _id: this.props.page });
  },

  render() {
    return (
      <div>
        <AccountsUIWrapper />
        <Dashboard currentUser={this.data.currentUser}/>
        <Profile editable={this.state.editable} currentProfile={this.state.currentProfile}/>
      </div>
    )
  }
})
