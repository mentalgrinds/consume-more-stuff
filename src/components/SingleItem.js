import React from 'react';
import 'moment-timezone';
import { Link } from 'react-router-dom';
import EditItemForm from '../containers/EditItemForm';
const moment = require('moment');
moment().format();

        

const SingleItem = ({item,backToItems,edit,auth,editNow, categories, conditions, itemStatuses, destroyItem, closeEdit, toggleEdit,goToMessages}) => {
    //console.log('item', item);

    let userId = parseInt(localStorage.userId, 10);
    return (
    <div className='eachItem'>
        <div className="back-to-list">
            <button onClick={(e)=>backToItems(e)}>Back</button>
            <br></br><br></br>
        {auth ?
                    <Link to="/messages"> <button onClick={(e)=>goToMessages()}>
                        Message
                    </button></Link> : null
                }
           
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

                { (item[0].price) ?
                    <div className="price">
                        <span className="detail-field">Price:</span> {item ? item[0].price : null}
                    </div>
                     : null
                }

                <span className="detail-field">Status: </span> {item ? item[0].itemstatus.title : null}<br/>

                <span className="detail-field">Condition: </span>{item ? item[0].itemcondition.title : null}<br/>
                <span className="detail-field">Category: </span>{item ? item[0].itemcategory.title : null}<br/>

                { (item[0].manufacturer) ?
                    <div className="manufacturer">
                        <span className="detail-field">Manufacturer:</span> {item ? item[0].manufacturer : null}
                    </div>
                     : null
                }


                { (item[0].model) ?
                    <div className="model">
                        <span className="detail-field">Model:</span> {item ? item[0].model : null}
                    </div>
                     : null
                }

                { (item[0].dimensions) ?
                    <div className="price">
                        <span className="detail-field">Dimensions:</span> {item ? item[0].dimensions : null}
                    </div>
                     : null
                }
                <span className="detail-field">Notes: </span>{item ? item[0].notes : null}<br/><br/>
                <span className="detail-field">Posted at: </span>{item ? (moment(item[0].createdAt).fromNow()) : null}<br/>
                <span className="detail-field">Updated at: </span>{item ? (moment(item[0].updatedAt).fromNow()) : null } <br/>

                {(auth) && (userId===item[0].userId) ?
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