import React from 'react';


const UserDetailView = ({id,username,password,email,userstatus,loadUser}) => {
  return (
    <div className='user-details'>
        <b>User-Id:</b> {id}<br/>
        <span onClick={(e)=>loadUser(id,e)}><b>Username:</b>{username}</span><br/>
        <b>email:</b> {email}<br/>
        <b>User-Status</b> {userstatus}<br/>
    </div>
  )
}




export default UserDetailView;