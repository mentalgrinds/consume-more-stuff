import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions/users';



class User extends Component {
  constructor(){
    super();


  }

  componentWillMount(){
    this.props.loadUsers();
  }

  render(){
    console.log(this.props.users);
    return(
      <div>
Hello from user!
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return{
    users: state.users
  }
}

const ConnectedUser = connect(
  mapStateToProps,
  {loadUsers}
)(User)

export default ConnectedUser;