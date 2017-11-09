import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions/users';
import UserList from '../../components/UserList.js';
import filterUserStatus from '../../lib/filterUserStatus';
import filterUser from '../../lib/filterUser';
import SingleUser from '../../components/SingleUser.js';


class User extends Component {
  constructor(){
    super();

    this.state = {
      user: ''
    }


  }

  componentWillMount(){
    this.props.loadUsers();
  }

  loadUser(id,e){
    console.log(id);
    let users = this.props.users;
    let user = filterUser(users,id)
    console.log(user);
    this.setState({user: user});
  }

  backToUsers(e){
    e.preventDefault();
    this.setState({user: null});
  }

  render(){
    const user = this.state.user;
    return(
      <div>
      {user ? 
        <SingleUser 
        backToUsers={this.backToUsers.bind(this)}
        user={this.state.user} />
        :
        <UserList 
          loadUser={this.loadUser.bind(this)}
          users={this.props.users}
          activeUsers={this.props.activeUsers}
          inactiveUsers={this.props.inactiveUsers}/>
        }

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