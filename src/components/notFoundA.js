import React from 'react';

const NotFoundA = ({crackThrottle,divStyle}) => {
    var arr = Array(300).fill(1);
  return(

        <div className="notfound-body">
          {
            arr.map((box,idx) =>{
              return (<div
                        key={idx} 
                        className='notfound-crackThrottle'
                        style={divStyle}>
                      </div>)
            })
          }
            

        </div>








        );
};

export default NotFoundA;