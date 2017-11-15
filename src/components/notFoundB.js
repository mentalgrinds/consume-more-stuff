import React from 'react';

const notFoundB = ({crackThrottle,background}) => {
    var arr = Array(300).fill('a');
  return(

        <div className="body">
          {
            arr.map((box,idx) =>{
              return (<div
                        key={idx} 
                        className='crackThrottle'
                        style={background}>
                      </div>)
            })
          }
            

        </div>








        );
};

export default notFoundB;