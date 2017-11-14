import React from 'react';


const PasswordRequirements = ({validLength,validNum, validCapital}) => {
    return (
    <div className='eachItem'>
      <ul>
        <li>Password must contains at least 4 characters</li> {validLength ? <img alt='true' width="20" height="20" src="http://bit.ly/2zAafF6"/> : null }
        <li>Password must include at least one number</li> {validNum ? <img alt='true' width="20" height="20" src="http://bit.ly/2zAafF6"/> : null }
        <li>Password must include at least one capital letter</li> {validCapital ? <img alt='true' width="20" height="20" src="http://bit.ly/2zAafF6"/> : null }
      </ul>
      
    </div>
  )
}




export default PasswordRequirements;