import React from 'react';

const notFoundC = ({handleChange}) => {
  return(<div className="container">
        <div className="center-Container">
          <div className="input-Container">
           <input 
            className ='input' 
            placeholder="page not found - type to play"
            onChange={handleChange}>
            </input>





          </div>
        </div>








  </div>);
};

export default notFoundC;