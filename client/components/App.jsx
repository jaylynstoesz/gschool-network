App = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user(),
    }
  },

  render() {
    // console.log("current user:", this.data.currentUser)
    return (
      <div>
        <AccountsUIWrapper />
        <Dashboard currentUser={this.data.currentUser}/>
        {this.props.content}
      </div>
    )
  }
})
