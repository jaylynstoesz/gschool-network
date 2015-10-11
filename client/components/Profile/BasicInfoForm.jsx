BasicInfoForm = React.createClass({
  getInitialState() {
    return {
      firstName: this.props.profile.firstName || "",
      lastName: this.props.profile.lastName || "",
      cohortType: this.props.profile.cohortType || "",
      cohortNumber: this.props.profile.cohortNumber || "",
      currentCity: this.props.profile.currentCity || "",
      currentState: this.props.profile.currentState || "",
      jobTitle: this.props.profile.jobTitle || "",
      company: this.props.profile.company || "",
    }
  },

  handleSubmit(event) {
    event.preventDefault();
    var userObject = {}
    userObject.firstName = React.findDOMNode(this.refs.firstName).value.trim();
    userObject.lastName = React.findDOMNode(this.refs.lastName).value.trim();
    userObject.cohortType = React.findDOMNode(this.refs.cohortType).value.trim();
    userObject.cohortNumber = React.findDOMNode(this.refs.cohortNumber).value.trim();
    userObject.currentCity = React.findDOMNode(this.refs.currentCity).value.trim();
    userObject.currentState = React.findDOMNode(this.refs.currentState).value.trim();
    userObject.jobTitle = React.findDOMNode(this.refs.jobTitle).value.trim();
    userObject.company = React.findDOMNode(this.refs.company).value.trim();

    this.props.submitForm(userObject)
  },

  render() {
    return (
      <div id="basic-info">
        <h3>Update your basic information</h3>
        <form onSubmit={this.handleSubmit}>
          <input ref="firstName" type="text" placeholder="First Name" onChange={this._onChange} name="firstName" value={this.state.firstName}/>
          <input ref="lastName" type="text" placeholder="Last Name" onChange={this._onChange} name="lastName" value={this.state.lastName}/>
          <label htmlFor="cohort-type">Program</label>
          <select ref="cohortType" value={this.state.cohortType} onChange={this._onChange} name="cohortType" >
            <option value="g">Full Stack</option>
            <option value="D">Data Science</option>
            <option value="gU">GalvanizeU</option>
          </select>
          <label htmlFor="cohort-number">Cohort</label>
          <select ref="cohortNumber" value={this.state.cohortNumber} onChange={this._onChange} name="cohortNumber">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <input ref="currentCity" type="text" placeholder="Current City" onChange={this._onChange} name="currentCity" value={this.state.currentCity}/>
          <input ref="currentState" type="text" placeholder="Current State" onChange={this._onChange} name="currentState" value={this.state.currentState}/>
          <input ref="jobTitle" type="text" placeholder="Job Title" onChange={this._onChange} name="jobTitle" value={this.state.jobTitle}/>
          <input ref="company" type="text" placeholder="Company" onChange={this._onChange} name="company" value={this.state.company}/>
          <input type="submit" value="Update Basic Info"/>
        </form>
      </div>
    )
  },

  _onChange: function() {
    var setModifier = {}
    setModifier[event.target.name] = event.target.value
    this.setState(setModifier);
  },

})
