import React from 'react';
import { Link } from 'react-router-dom';

const ResetPasswordForm = ({handleCurrentPassword,handleNewPassword,handleMatchedPassword,handlePasswordSubmit,matched,backToSettings,reset}) => {
    return (
    <div className='eachItem'>
      <ol>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              name='new'
              placeholder='new password'
              onChange={handleNewPassword}
              />
              <br></br>
            <input
              type="password"
              name='match'
              placeholder='re-type new password'
              onChange={handleMatchedPassword}
                />
              {matched ? <img alt='true' width="20" height="20" src="http://bit.ly/2zAafF6"/> : null }

                <br></br>
            <input type="submit" className="button" value="Save Changes"/>
              <br></br>
          </form>
            {localStorage.resetSuccess ? 'Password updated sucessfully' : null}
            {localStorage.resetError ? `Password update was not successfull, please try again`: null}
            {true ? <Link to="/login">   
              <button onClick={reset} >Login</button></Link> : null}
          
      </ol>
    </div>
  )
}




export default ResetPasswordForm;