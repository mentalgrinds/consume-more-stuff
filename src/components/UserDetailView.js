import React from 'react';


const UserDetailView = ({id,username,password,email,userstatus,loadUser,handleSubmit,handleChangeUsername,handleChangePassword,handleChangeEmail}) => {
  return (
    <div className='eachItem'>
      <ol>
        <b>User-Id:</b> {id}<br/>
        <span onClick={(e)=>loadUser(id,e)}>Username:{username}</span><br/>
        <b>Password:</b> {password}<br/>
        <b>email:</b> {email}<br/>
        <b>User-Status</b> {userstatus}<br/>
        <button onClick={(e)=>handleSubmit(id,e)}>EDIT</button>
      </ol>
    </div>
  )
}




export default UserDetailView;