import React from 'react';

const ItemDetailView = ({id, name, description, image, price, conditionId, model,loadSingleItem,idx}) => {
  return (
    <div className='eachCard'>
        <div className="all-view-title">
            <span onClick={(e)=>loadSingleItem(id,e)}>
            <p className='cardTitle'>{name}</p>
                <div className="cardImg">
                    <img alt='Preview' className="thumbnail" src={image}/><br />
                </div>
            </span>
        </div>

        <div className="all-view-details">
          <div className="detail-view-desc">
            {description}
          </div>
          <div className="condition">
              <span className="detail-view-desc">Condition: {conditionId}
              </span>
            </div>
            {
              (price) ?
                <div className="price">
                  <span className="price">Price: </span>{price}
                </div>
              :
              null
            }
        </div>
    </div>
  )
}




export default ItemDetailView;