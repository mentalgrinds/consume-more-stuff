import React from 'react';

const ItemDetailView = ({id, name, description, image, price, conditionId, model,loadSingleItem,}) => {
  return (
    <div className='eachItem'>
      <ol>
        <div className="all-view-title">
            <span onClick={(e)=>loadSingleItem(id,e)}>
            <h2>{name}</h2>
                <div className="img-container-small">
                    <img alt='Preview' className="thumbnail" src={image.slice(((image).indexOf('/uploads/')))}/><br />
                </div>
            </span>
        </div>

        <div className="all-view-details">
            {description}<br/><br/>
            <b>Price:</b> {({price} ? `Price: $ ${price}` : null )}<br/>
            <b>Condition:</b>{conditionId}<br/>
        </div>
      </ol>
    </div>
  )
}




export default ItemDetailView;