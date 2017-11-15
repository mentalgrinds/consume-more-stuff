import React from 'react';

const notFoundA = ({crackThrottle,divStyle}) => {
    var arr = Array(300).fill(1);
  return(

        <div className="body">
          {
            arr.map((box,idx) =>{
              return (<div
                        key={idx} 
                        className='crackThrottle'
                        style={divStyle}>
                      </div>)
            })
          }
            

        </div>








        );
};

export default notFoundA;