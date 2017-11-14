import React from 'react';


const ChangePassword = ({handleCurrentPassword,handleNewPassword,handleMatchedPassword,handlePasswordSubmit,matched,backToSettings}) => {
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
              {matched ? <img alt='true' width="20" height="20" src="http://bit.ly/2zAafF6"/> : null }

                <br></br>
            <input type="submit" className="button" value="Save Changes"/>
              <br></br>
          </form>
            {localStorage.passwordUpdated ? 'Password updated sucessfully' : null}
            {localStorage.passwordError ? 'Password update was not successfull, please try again' : null}
          <button onClick={backToSettings}>BACK</button>
      </ol>
    </div>
  )
}




export default ChangePassword;