import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';

import Header from '../../components/header';

class App extends Component {

  constructor(){
    super();

    this.state = {
      authorized: false
    }
  }

  componentWillMount(){

  }

  componentDidMount(){
    //load items, users, etc.
  }

  render() {
    return (
      <div className="App">
      <Header />
       Hello World! Here's where we'll render our components!
      </div>
    );
  }
}

export default App;
