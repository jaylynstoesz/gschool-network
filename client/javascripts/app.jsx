Todos = new Mongo.Collection("todos")

if (Meteor.isClient) {
  // Meteor.subscribe("todos")

  Accounts.ui.config({
    passwordSignupFields: "EMAIL_ONLY"
  });
}
