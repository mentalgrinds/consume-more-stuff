import React from 'react';

const NotFoundB = ({crackThrottle,background}) => {
    var arr = Array(300).fill('a');
  return(

        <div className="notfound-body">
          {
            arr.map((box,idx) =>{
              return (<div
                        key={idx} 
                        className='notfound-crackThrottle'
                        style={background}>
                      </div>)
            })
          }
            

        </div>








        );
};

export default NotFoundB;