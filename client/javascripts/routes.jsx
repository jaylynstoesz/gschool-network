FlowRouter.route('/', {
  triggersEnter: function(context, redirect) {
    // redirect('/users/'+ Meteor.user()._id);
    redirect('/users/nxsS3mAMWPMusQvW3');
  }
})

FlowRouter.route('/users', {
  action: function() {
    React.render(<App page="browse"/>, document.getElementById('render-app'))
  }
})

FlowRouter.route('/users/:id', {
  action: function(params) {
    React.render(<App page={params.id}/>, document.getElementById('render-app'))
  }
})
