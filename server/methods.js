
if (Meteor.isServer) {
  // Meteor.publish("todos", function () {
  //   return Todos.find();
  // });

  Meteor.publish("userData", function () {
    return Meteor.users.find({})
  });

  Meteor.methods({

    updateUserBasic: function (userObject) {
      var setModifier = { $set: {} }
      setModifier.$set.profile = userObject
      Meteor.users.update(Meteor.user()._id, setModifier)
    },

    testMe: function () {
      console.log("******************** TEST ********************");
    }

  })
}
