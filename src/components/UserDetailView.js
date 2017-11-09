import React from 'react';


const UserDetailView = ({id,username,password,email,userstatus}) => {
  return (
    <div className='eachItem'>
      <ol>
        <b>User-Id:</b> {id}<br/>
        <b>Username:</b> {username}<br/>
        <b>Password:</b> {password}<br/>
        <b>email:</b> {email}<br/>
        <b>User-Status</b> {userstatus}<br/>
      </ol>
    </div>
  )
}




export default UserDetailView;