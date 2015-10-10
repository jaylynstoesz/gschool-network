Todos = new Mongo.Collection("todos")

if (Meteor.isClient) {
  Meteor.subscribe("todos")

  Accounts.ui.config({
    passwordSignupFields: "EMAIL_ONLY"
  });
}

if (Meteor.isServer) {
  Meteor.publish("todos", function () {
    return Todos.find();
  });
}
