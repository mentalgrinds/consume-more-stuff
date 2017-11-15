import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { loadUsers } from '../../actions/users.js';
import { addQues } from '../../actions/login';
import PasswordRequirements from '../../components/PasswordRequirements';
import filterRegistration from '../../lib/filterRegistration';
import ResetPasswordForm from '../../components/ResetPasswordForm';
const validator = require("email-validator");



class ResetPassword extends Component {
  constructor(props){
    super(props);

    this.state = {
      questionOne:'',
      questionTwo:'',
      redirect: false,
      reqNotMet: false,
      email: '',
      matchedUser: {},
      emailFound: false,
      resetApproved: false,
      showQuestions: false
    }
    this.handleQuestionOne = this.handleQuestionOne.bind(this);
    this.handleQuestionTwo = this.handleQuestionTwo.bind(this);
    this.handleQuestionsSubmit=this.handleQuestionsSubmit.bind(this);
    this.handleEmailSubmit=this.handleEmailSubmit.bind(this);
    this.handleEmail=this.handleEmail.bind(this);
    this.showQuestions=this.showQuestions.bind(this);
  }


  showQuestions(e){
     this.setState({
      showQuestions: true
    })
  }


  handleEmail(e){
     this.setState({
      email: e.target.value
    })
  }
  handleEmailSubmit(e){
    e.preventDefault();
     let matchedUser = filterRegistration(this.props.users,'email',this.state.email);
     let email = matchedUser ? matchedUser.email : null
     if(this.state.email.length !== 0){
       if(this.state.email === email){
       this.setState({matchedUser: matchedUser, emailFound: true, showQuestions: true, reqNotMet: false})
        }
      }

  }
  handleQuestionOne(e){
     this.setState({
      questionOne: e.target.value, reqNotMet: false
    })
  }
  handleQuestionTwo(e){
     this.setState({
      questionTwo: e.target.value, reqNotMet: false
    })
  }


  handleQuestionsSubmit(e){
    e.preventDefault();
    let userSavedQOne = this.state.matchedUser.qone;
    let userSavedQTwo = this.state.matchedUser.qtwo;
    let checkOne = (userSavedQOne === this.state.questionOne);
    let checkTwo = (userSavedQTwo === this.state.questionTwo);
    if(checkOne && checkTwo){
      this.setState({resetApproved: true})
    }
  }


  componentWillMount(){ this.props.loadUsers(); }


  render(){
    const resetApproved = this.state.resetApproved;
    const emailFound = this.state.emailFound;
    return (
      <div id="registration-form">
        <form onSubmit={this.handleEmailSubmit}>
        <br></br>
        <br></br>
        Type in your user email address:
        <br></br>
        <br></br>
            <input type="text" 
              value={this.state.email} 
              placeholder="email"
              onChange={this.handleEmail}/>
              <br></br>
              <br></br>
          {!emailFound ?
            <input type="submit" className="button" value="Submit Email"/> : <input onClick={this.showQuestions} className="button" value="security questions"/>}
        </form>
      { this.state.showQuestions ? 

        <form onSubmit={this.handleQuestionsSubmit}>
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
          {this.state.reqNotMet ? "Requirements have not been met, please try again" : null}
        </form>
      : null }
      { resetApproved ? <ResetPasswordForm /> : null }

      </div>

    ) 
  }


}

const mapStateToProps = (state) => {
  return{
    users: state.users
  }
}

const ConnectedResetPassword = connect(
  mapStateToProps,
  {loadUsers,addQues}
)(ResetPassword);

export default withRouter(ConnectedResetPassword);