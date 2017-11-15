import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions/users';
import filterRoles from '../../lib/filterRoles';
import {withRouter} from 'react-router-dom';
import { loadItems } from '../../actions/items';
import TopItemsView from '../TopItemsView';
class App extends Component {

  constructor(){
    super();

    if(localStorage.getItem('userId')){
      this.state = { auth: true, redirect: true };
    }else{
      this.state = { auth: false, redirect: false };
    }

  }



  componentWillMount(){

  }

  componentDidMount(){

    this.props.loadItems();
    this.props.loadUsers();
    let id = localStorage.userId;
    let admin = filterRoles(this.props.users,id);
    if(admin){ 
      this.setState({ 
        admin: true, 
        edit: true, 
        auth: true })
    }
  }



  render() {
    const {redirect} = this.state;

    if(redirect) {
      return <TopItemsView />;
    }
    return <TopItemsView />;
  }
}

const mapStatetoProps = (state) => {
  return {
    data : state.items,
    users: state.users

  }
}


const ConnectedApp = connect(
  mapStatetoProps,
  {loadUsers,loadItems}
)(App)

export default withRouter(ConnectedApp);