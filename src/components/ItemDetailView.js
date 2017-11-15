import React from 'react';

const ItemDetailView = ({id, name, description, image, price, conditionId, model,loadSingleItem,idx}) => {
  return (
    <div className='eachItem'>
        <div className="all-view-title">
            <span onClick={(e)=>loadSingleItem(id,e)}>
            <h2>{name}</h2>
                <div className="img-container-small">
                    <img alt='Preview' className="thumbnail" src={image}/><br />
                </div>
            </span>
        </div>

        <div className="all-view-details">
          <div className="detail-view-desc">
            {description}
          </div>
            {
              (price) ?
                <div className="price">
                  <span className="detail-field">Price: </span>{price}
                </div>
              :
              null
            }
            <div className="condition">
              <span className="detail-field">Condition: </span>{conditionId}
            </div>
        </div>
    </div>
  )
}




export default ItemDetailView;