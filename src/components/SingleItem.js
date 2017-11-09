import React from 'react';


const SingleItem = ({item,backToItems}) => {
    return (
    <div className='eachItem'>
        <div className="back-to-list">
            <button onClick={(e)=>backToItems(e)}>Back</button>
        </div>
        <ol>
            <div className="detail-view-title">
                <h1>Item # {item ? item[0].id : null}</h1><br/>
                <h2>{item ? item[0].name : null}</h2>
                {item ? <img src={item[0].image} /> : null}<br/>
            </div>
            <div className="detail-view-details">
                {item ? item[0].description : null}<br/><br/>
                Price: $ {item ? item[0].price : null}<br/>

                Status: {item ? item[0].itemstatusId : null}<br/>

                <b>User:</b> {item ? item[0].userId : null}<br/>
                <b>Condition:</b>{item ? item[0].conditionId : null}<br/>
                <b>Category:</b>{item ? item[0].categoryId : null}<br/>
                <b>Manufacturer:</b>{item ? item[0].manufacturer : null}<br/>
                <b>Model:</b>{item ? item[0].model : null}<br/>
                <b>Dimensions:</b>{item ? item[0].dimensions : null}<br/>
                <b>Notes:</b>{item ? item[0].notes : null}<br/><br/>
                <b>Posted At: </b>{item ? item[0].createdAt : null}<br/>
                <b>Updated At: </b>{item ? item[0].updatedAt : null}<br/>
            </div>
        </ol>
    </div>
  )
}




export default SingleItem;