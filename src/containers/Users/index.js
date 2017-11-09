import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadUsers,editUser } from '../../actions/users';
import UserList from '../../components/UserList.js';
import filterUserStatus from '../../lib/filterUserStatus';
import filterUser from '../../lib/filterUser';
import SingleUser from '../../components/SingleUser.js';


class User extends Component {
  constructor(){
    super();

    this.state = {
      user: '',
      username: '',
      password: '',
      email: '',
      auth: true,
      edit: false
    }

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChangeUsername(event){
    this.setState({
      username: event.target.value
    })
  }

  handleChangePassword(event){
    this.setState({
      password: event.target.value
    })
  }

  handleChangeEmail(event){
    this.setState({
      email: event.target.value
    })
  }

  handleSubmit(id,e){
    e.preventDefault();
    let user = {
      id: id,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      userstatus: (this.state.email ? 'active' : 'inactive')
    }
    this.props.editUser(user);
  }

  edit(user,e){
    this.setState({user: user});
  }




  componentWillMount(){
    this.props.loadUsers();
  }



  loadUser(id,e){
    let users = this.props.users;
    let user = filterUser(users,id)
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
          edit={this.edit.bind(this)}
          auth={this.state.auth}
          handleChangeUsername={this.handleChangeUsername}
          handleChangePassword={this.handleChangePassword}
          handleChangeEmail={this.handleChangeEmail}
          handleSubmit={this.handleSubmit.bind(this)}
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
  {loadUsers,editUser}
)(User)

export default ConnectedUser;