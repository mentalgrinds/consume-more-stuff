import React, { Component } from 'react';
import { connect } from 'react-redux';


class Dashboard extends Component {

  constructor(){
    super();

    this.state = {
      authorized: false
    }
  }

  componentWillMount(){

  }

  componentDidMount(){

    // this.props.loadItems();


    //load items, users, etc.
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    data : state.items

  }
}

const ConnectedDashboard = connect(
  mapStatetoProps,
  {loadItems}
)(Dashboard)

export default ConnectedDashboard;
