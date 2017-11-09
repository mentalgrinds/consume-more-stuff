import React from 'react';


const SingleItem = ({item,backToItems}) => {
    return (
    <div className='eachItem'>
      <ol>
        <button onClick={(e)=>backToItems(e)}>Back</button>
        <b>Item-Id:</b> {item[0].id}<br/>
        <b>Name:</b>{item[0].name}<br/>
        <b>User:</b> {item[0].userId}<br/>
        <b>Item Status:</b> {item[0].itemstatusId}<br/>
        <b>Description:</b>{item[0].description}<br/>
        <b>Image:</b>{item[0].image}<br/>
        <b>Price:</b>{item[0].price}<br/>
        <b>Condition:</b>{item[0].conditionId}<br/>
        <b>Category:</b>{item[0].categoryId}<br/>
        <b>Manufacturer:</b>{item[0].manufacturer}<br/>
        <b>Model:</b>{item[0].model}<br/>
        <b>Dimensions:</b>{item[0].dimensions}<br/>
        <b>Notes:</b>{item[0].notes}<br/>
        <b>Posted At: </b>{item[0].createdAt}<br/>
        <b>Updated At: </b>{item[0].updatedAt}<br/>
      </ol>
    </div>
  )
}




export default SingleItem;