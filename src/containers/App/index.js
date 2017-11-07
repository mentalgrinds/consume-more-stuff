import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';

class App extends Component {

  constructor(){
    super();
  }

  componentWillMount(){

  }

  componentDidMount(){
    //load items, users, etc.
  }

  render() {
    return (
      <div className="App">
       Hello World! Here's where we'll render our components!
      </div>
    );
  }
}

export default App;
