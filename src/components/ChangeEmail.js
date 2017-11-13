import React from 'react';


const ChangeEmail = ({handleChangeEmail,handleEmailSubmit,backToSettings,emailError}) => {
    return (
    <div className='eachItem'>
      <ol>
          <form onSubmit={handleEmailSubmit}>
            <input
              type="text"
              name='current'
              placeholder='new email'
              onChange={handleChangeEmail}
              />
                <br></br>
            <input type="submit" className="button" value="Save Changes"/>
          </form>
          {emailError ? 'The email you typed in is incorrect, please check your spelling' : null}
          <button onClick={backToSettings}>BACK</button>

      </ol>
    </div>
  )
}




export default ChangeEmail;