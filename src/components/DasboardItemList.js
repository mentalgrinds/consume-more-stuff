import React from 'react';
import DashboardItemDetailView from './DashboardItemDetailView';

const DasboardItemList = ({items,loadSingleItem,edit}) => {
  return (
    <div className='allItemList'>
      {
        items.map((item,idx) => {
          return (

            <DashboardItemDetailView
              loadSingleItem={loadSingleItem}
              edit={edit}
              key={idx}
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


export default DasboardItemList;


