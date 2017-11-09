import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions/users';
import UserList from '../../components/UserList.js';
import filterUserStatus from '../../lib/filterUserStatus';


class User extends Component {
  constructor(){
    super();


  }

  componentWillMount(){
    this.props.loadUsers();
  }

  loadUser(id,e){
    console.log(id);
    console.log("get user");
  }

  render(){
    return(
      <div>
        <UserList 
          loadUser={this.loadUser.bind(this)}
          users={this.props.users}
          activeUsers={this.props.activeUsers}
          inactiveUsers={this.props.inactiveUsers}/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return{
    users: state.users,
    activeUsers: filterUserStatus(state.users,'active'),
    inactiveUsers: filterUserStatus(state.users,'inactive')
  }
}

const ConnectedUser = connect(
  mapStateToProps,
  {loadUsers}
)(User)

export default ConnectedUser;