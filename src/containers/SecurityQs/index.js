import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { loadUsers } from '../../actions/users.js';
import { addQues } from '../../actions/login';
import PasswordRequirements from '../../components/PasswordRequirements';
import filterRegistration from '../../lib/filterRegistration';
const validator = require("email-validator");


class SecurityQs extends Component {
  constructor(props){
    super(props);

    this.state = {
      qOne:'',
      qTwo: ''
    }


    this.handleQuestionOne = this.handleQuestionOne.bind(this);
    this.handleQuestionTwo = this.handleQuestionTwo.bind(this);

  }

  keyResetEmail(e){
    if(e.keyCode === 8){ this.setState({ emailTaken: false }) }
  }


  handleQuestionOne(e){
     this.setState({
      qOne: e.target.value
    })
  }
  handleQuestionTwo(e){
     this.setState({
      qTwo: e.target.value
    })
  }


  handleSubmit(e){
    e.preventDefault();
    let questions = {
      qOne: this.state.qOne,
      qTwo: this.state.qTwo
    }
  }


  componentWillMount(){ this.props.loadUsers(); }


  render(){

    return (
      <div id="registration-form">
        <form onSubmit={this.handleSubmit}>
          What is your pets name?
          <input type="text" 
            value={this.state.qOne} 
            placeholder="pets name"
            onChange={this.handleQuestionOne}/>

          <br></br>
          <br></br>
          What is your favorite color?
          <input type="text" 
            value={this.state.qTwo} 
            placeholder="favorite color"
            onChange={this.handleQuestionTwo}/>


          <br></br>
          <br></br>

          <input type="submit" className="button" value="Complete"/>

        </form>
      </div>

    ) 
  }


}

const mapStateToProps = (state) => {
  return{
    users: state.users
  }
}

const ConnectedSecurityQs = connect(
  mapStateToProps,
  {loadUsers,addQues}
)(SecurityQs);

export default withRouter(ConnectedSecurityQs);