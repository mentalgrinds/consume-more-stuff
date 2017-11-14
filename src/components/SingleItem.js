import React from 'react';
import 'moment-timezone';
import EditItemForm from '../containers/EditItemForm';
const moment = require('moment');
moment().format();

const SingleItem = ({item,backToItems,edit,auth,editNow, categories, conditions, itemStatuses, destroyItem, closeEdit, toggleEdit}) => {
    console.log('item', item);
    return (
    <div className='eachItem'>
        <div className="back-to-list">
            <button onClick={(e)=>backToItems(e)}>Back</button>
        </div>
    {!edit ?

        <div className="detail-view">
            <div className="detail-view-title">
                <h2>{item ? item[0].name : null}</h2>
                <div className="img-container-large">
                    {item ? <img alt='Preview' className="fullsize" src={item[0].image} /> : null}<br/>
                </div>
            </div>
            <div className="detail-view-details">
                {item ? item[0].description : null}<br/><br/>
                <b>Price:</b>  $ {item ? item[0].price : null}<br/>
                <p>{item[0].id}</p>

                <b>Status:</b> {item ? item[0].itemstatus.title : null}<br/>

                <b>Condition:</b>{item ? item[0].itemcondition.title : null}<br/>
                <b>Category:</b>{item ? item[0].itemcategory.title : null}<br/>
                <b>Manufacturer:</b>{item ? item[0].manufacturer : null}<br/>
                <b>Model:</b>{item ? item[0].model : null}<br/>
                <b>Dimensions:</b>{item ? item[0].dimensions : null}<br/>
                <b>Notes:</b>{item ? item[0].notes : null}<br/><br/>
                <b>Posted At: </b>{item ? (moment(item[0].createdAt).fromNow()) : null}<br/>
                <b>Updated At: </b>{item ? (moment(item[0].updatedAt).fromNow()) : null } <br/>

                {auth ?
                    <button onClick={(e)=>toggleEdit()}>
                        Edit Item
                    </button> : null
                }

            </div>
        </div>

            :
                <div className="blank-space-div">
                    <EditItemForm
                        id={item[0].id}
                        name={item[0].name}
                        image={item[0].image}
                        description={item[0].description}
                        price={item[0].price}
                        manufacturer={item[0].manufacturer}
                        model={item[0].model}
                        dimensions={item[0].dimensions}
                        notes={item[0].notes}
                        userId={item[0].userId}
                        closeEdit={closeEdit}
                        auth={auth}
                    />
                </div>
            }

    </div>
  )
}




export default SingleItem;