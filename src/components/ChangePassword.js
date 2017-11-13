import React from 'react';


const ChangePassword = ({handleCurrentPassword,handleNewPassword,handleMatchedPassword,handlePasswordSubmit,matched}) => {
    return (
    <div className='eachItem'>
      <ol>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="text"
              name='current'
              placeholder='current password'
              onChange={handleCurrentPassword}
              />
              <br></br>
            <input
              type="text"
              name='new'
              placeholder='new password'
              onChange={handleNewPassword}
              />
              <br></br>
            <input
              type="text"
              name='match'
              placeholder='re-type new password'
              onChange={handleMatchedPassword}
                />
              {matched ? <img alt='true' width="20" height="20" src="http://bit.ly/2zAafF6"/> : <img alt='false' src=""/> }

                <br></br>
            <input type="submit" className="button" value="Save Changes"/>
          </form>
      </ol>
    </div>
  )
}




export default ChangePassword;