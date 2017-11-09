import React from 'react';
import UserDetailView from './UserDetailView';


const UserList = ({users,loadUser,handleSubmit,handleChangeUsername,handleChangePassword,handleChangeEmail}) => {
  return (
    <div className='allItemList'>
     {
        users.map((user,idx) => {
          return (
            <UserDetailView
              handleChangeUsername={this.handleChangeUsername}
              handleChangePassword={this.handleChangePassword}
              handleChangeEmail={this.handleChangeEmail}
              loadUser={loadUser}
              handleSubmit={handleSubmit}
              key={idx}
              id={user.id}
              username={user.username}
              password={user.password}
              email={user.email}
              userstatus={user.userstatus}
            />
          )
        })
      }
    </div>

  )
}


export default UserList;


