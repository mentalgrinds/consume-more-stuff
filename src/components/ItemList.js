import React, {Component} from 'react';
import ItemDetailView from './ItemDetailView';


const ItemList = ({items}) => {
  return (
    <div className='allItemList'>
      {
        items.map((item, seller) => {
          console.log('ITEM', item)
          return (
            <ItemDetailView
              id={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
              manufacturer={item.manufacturer}
              model={item.model}
              dimensions={item.dimensions}
              notes={item.notes}
              createdAt={item.createdAt}
              updatedAt={item.updatedAt}
              itemstatusId={item.itemstatus.title}
              userId={item.seller.username}
              conditionId={item.itemcondition.title}
              categoryId={item.itemcategory.title}
            />
          )
        })
      }
    </div>

  )
}


export default ItemList;


