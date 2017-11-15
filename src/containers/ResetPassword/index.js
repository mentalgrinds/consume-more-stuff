import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { loadUsers } from '../../actions/users.js';
import { addQues } from '../../actions/login';
import PasswordRequirements from '../../components/PasswordRequirements';
import filterRegistration from '../../lib/filterRegistration';
const validator = require("email-validator");


class ResetPassword extends Component {
  constructor(props){
    super(props);

    this.state = {
      questionOne:'',
      questionTwo:'',
      redirect: false,
      reqNotMet: false
    }
    this.handleQuestionOne = this.handleQuestionOne.bind(this);
    this.handleQuestionTwo = this.handleQuestionTwo.bind(this);
    this.handleQuestionsSubmit=this.handleQuestionsSubmit.bind(this);
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
    if(!this.state.questionOne && !this.state.questionTwo){
        this.setState({reqNotMet:true})
    }

    let questions = {
      id: localStorage.userId,
      username: localStorage.username,
      qone: this.state.questionOne,
      qtwo: this.state.questionTwo
    }
    this.props.addQues(questions)
    if(questions.qone && questions.qtwo){
      this.setState({redirect:true})
    }
    
  }


  componentWillMount(){ this.props.loadUsers(); }


  render(){
    const { from } = this.props.location.state || { from: { pathname: '/dashboard' } }
    const redirect = this.state.redirect;

    if(redirect){
      return ( <Redirect to={from}/>)
    }

    return (
      <div id="registration-form">
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