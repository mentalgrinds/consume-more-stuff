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
      questionOne:'',
      questionTwo:''
    }
    this.handleQuestionOne = this.handleQuestionOne.bind(this);
    this.handleQuestionTwo = this.handleQuestionTwo.bind(this);
    this.handleQuestionsSubmit=this.handleQuestionsSubmit.bind(this);
  }


  handleQuestionOne(e){
     this.setState({
      questionOne: e.target.value
    })
  }
  handleQuestionTwo(e){
     this.setState({
      questionTwo: e.target.value
    })
  }


  handleQuestionsSubmit(e){
    e.preventDefault();
    console.log(this.state.questionOne);
    console.log(this.state.questionTwo);
    let questions = {
      id: localStorage.userId,
      username: localStorage.username,
      qone: this.state.questionOne,
      qtwo: this.state.questionTwo
    }
    console.log(questions);
    this.props.addQues(questions)
  }


  componentWillMount(){ this.props.loadUsers(); }


  render(){

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