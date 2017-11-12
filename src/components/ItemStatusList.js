import React from 'react';
import ItemDetailView from './ItemDetailView';
import SoldButton from '../containers/SoldButton';

const ItemStatusList = ({items, statusId, currentUserId,loadSingleItem}) => {

  return (
    <div className='itemStatusList'>
      {
        items.filter( (item) => {
          return item.itemstatus.id === Number(statusId) && item.userId === Number(currentUserId);
        }).map( (categoryItem) => {
          return (
            <div>
              <SoldButton id={categoryItem.id}/>
              <ItemDetailView
                loadSingleItem={loadSingleItem}
                id={categoryItem.id}
                name={categoryItem.name}
                description={categoryItem.description}
                image={categoryItem.image}
                price={categoryItem.price}
                manufacturer={categoryItem.manufacturer}
                model={categoryItem.model}
                dimensions={categoryItem.dimensions}
                notes={categoryItem.notes}
                createdAt={categoryItem.createdAt}
                updatedAt={categoryItem.updatedAt}
                itemstatusId={categoryItem.itemstatus.title}
                userId={categoryItem.seller.username}
                conditionId={categoryItem.itemcondition.title}
                categoryId={categoryItem.itemcategory.title}
              />
            </div>
          )
        })
      }
    </div>
  )
}


export default ItemStatusList;
