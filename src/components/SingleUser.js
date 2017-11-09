import React from 'react';


const SingleUser = ({user,backToUsers}) => {
    return (
    <div className='eachItem'>
      <ol>
        <button onClick={(e)=>backToUsers(e)}>Back</button>
        <b>User-Id:</b> {user ? user[0].id : null}<br/>
        <b>Username:{user ? user[0].username : null}</b><br/>
        <b>Password:</b> {user ? user[0].password : null}<br/>
        <b>email:</b> {user ? user[0].email : null}<br/>
        <b>User-Status</b> {user ? user[0].userstatus : null}<br/>
      </ol>
    </div>
  )
}




export default SingleUser;