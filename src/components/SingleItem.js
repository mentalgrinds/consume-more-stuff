import React from 'react';


const SingleItem = ({item,backToItems}) => {
    return (
    <div className='eachItem'>
      <ol>
        <button onClick={(e)=>backToItems(e)}>Back</button>
        <b>Item-Id:</b> {item ? item[0].id : null}<br/>
        <b>Name:</b>{item ? item[0].name : null}<br/>
        <b>User:</b> {item ? item[0].userId : null}<br/>
        <b>Item Status:</b> {item ? item[0].itemstatusId : null}<br/>
        <b>Description:</b>{item ? item[0].description : null}<br/>
        <b>Image:</b>{item ? item[0].image : null}<br/>
        <b>Price:</b>{item ? item[0].price : null}<br/>
        <b>Condition:</b>{item ? item[0].conditionId : null}<br/>
        <b>Category:</b>{item ? item[0].categoryId : null}<br/>
        <b>Manufacturer:</b>{item ? item[0].manufacturer : null}<br/>
        <b>Model:</b>{item ? item[0].model : null}<br/>
        <b>Dimensions:</b>{item ? item[0].dimensions : null}<br/>
        <b>Notes:</b>{item ? item[0].notes : null}<br/>
        <b>Posted At: </b>{item ? item[0].createdAt : null}<br/>
        <b>Updated At: </b>{item ? item[0].updatedAt : null}<br/>
      </ol>
    </div>
  )
}




export default SingleItem;