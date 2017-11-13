import React from 'react';


const ChangeEmail = ({handleChangeEmail,handleEmailSubmit}) => {
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
      </ol>
    </div>
  )
}




export default ChangeEmail;