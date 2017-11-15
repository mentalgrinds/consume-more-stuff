import React from 'react';

const NotFoundC = ({handleChange}) => {
  return(<div className="notfound-container">
        <div className="notfound-center-Container">
          <div className="notfound-input-Container">
           <input 
            className ='notfound-input' 
            placeholder="page not found - type to play"
            onChange={handleChange}>
            </input>





          </div>
        </div>








  </div>);
};

export default NotFoundC;