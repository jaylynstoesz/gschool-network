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
      currentProfile: false
    }
  },

  componentWillMount() {
    this.setState({currentProfile: this.getProfile()})
  },

  componentWillUnmount() {
    this.setState({currentProfile: false})
  },

  getProfile() {
    console.log("***", Meteor.users.findOne({ _id: this.props.page }));
    if (Meteor.users.findOne({ _id: this.props.page }) !== undefined) {
      return Meteor.users.findOne({ _id: this.props.page });
    } else {
      return false
    }
  },

  render() {
    console.log("current user:", this.data.currentUser);
    return (
      <div>
        <AccountsUIWrapper />
        <Dashboard currentUser={this.data.currentUser}/>
        {this.state.currentProfile ? <Profile editable={this.state.editable} currentProfile={this.state.currentProfile}/> : <Browse /> }
      </div>
    )
  }
})
