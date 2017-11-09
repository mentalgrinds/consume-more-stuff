import React from 'react';
import UserDetailView from './UserDetailView';


const UserList = ({users}) => {
  return (
    <div className='allItemList'>
     {
        users.map((user,idx) => {
          return (
            <UserDetailView
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


