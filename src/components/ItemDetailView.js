import React from 'react';

const ItemDetailView = ({id, name, userId, itemstatusId, description, image, price, conditionId, categoryId, manufacturer, model, dimensions, notes, createdAt, updatedAt,loadSingleItem,edit}) => {
  return (
    <div className='eachItem'>
      <ol>

        <div className="all-view-title">
            <span onClick={(e)=>loadSingleItem(id,e)}><h1>Item #{id}</h1></span>
            <h2>{name}</h2>
            <div className="img-container-small">
                <img alt='Preview' className="thumbnail" src={image.slice(6)}/><br />
            </div>
        </div>

        <div className="all-view-details">
            {description}<br/><br/>
            Price: $ {price}<br/>
            <b>User:</b> {userId}<br/>
            <b>Item Status:</b> {itemstatusId}<br/>
            <b>Condition:</b>{conditionId}<br/>
            <b>Category:</b>{categoryId}<br/>

            <b>Posted At: </b>{createdAt}<br/>
            <b>Updated At: </b>{updatedAt}<br/>
        </div>


      </ol>
    </div>
  )
}




export default ItemDetailView;