Browse = React.createClass({

  renderUsers() {
    var allUsers = Meteor.users.find({}).fetch()
    return allUsers.map((user) => {
      return <li key={user._id} user={user}> {user._id} </li>;
    });
  },

  render() {
    return (
      <div>
        {this.renderUsers()}
      </div>
    )
  }
})
