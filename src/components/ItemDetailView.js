import React from 'react';

const ItemDetailView = ({id, name, description, image, price, conditionId, model,loadSingleItem,idx}) => {
  return (
    <div className='eachItem'>
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
            {
              price ?
                ( [<span className="price">Price: $</span>, <span> {price} </span>]  )
              :
              null
            } <br/>
            <b>Condition:</b>{conditionId}<br/>
        </div>
    </div>
  )
}




export default ItemDetailView;