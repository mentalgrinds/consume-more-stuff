import React from 'react';
import Select from './Select';
import Moment from 'react-moment';
import moment from 'moment/min/moment-with-locales';
import 'moment-timezone';



const SingleItem = ({item,backToItems,edit,auth,editNow,handleChange, categories, conditions,destroyItem}) => {
    return (
    <div className='eachItem'>
        <div className="back-to-list">
            <button onClick={(e)=>backToItems(e)}>Back</button>
        </div>
    {!edit ?
        <ol>
            <div className="detail-view-title">
                <h2>{item ? item[0].name : null}</h2>
                <div className="img-container-large">
                    {item ? <img alt='Preview' className="fullsize" src={(item[0].image).slice(((item[0].image).indexOf('/uploads/')))} /> : null}<br/>
                </div>
            </div>
            <div className="detail-view-details">
                {item ? item[0].description : null}<br/><br/>
                <b>Price:</b>  $ {item ? item[0].price : null}<br/>

                <b>Status:</b> {item ? item[0].itemstatus.title : null}<br/>

                <b>Condition:</b>{item ? item[0].itemcondition.title : null}<br/>
                <b>Category:</b>{item ? item[0].itemcategory.title : null}<br/>
                <b>Manufacturer:</b>{item ? item[0].manufacturer : null}<br/>
                <b>Model:</b>{item ? item[0].model : null}<br/>
                <b>Dimensions:</b>{item ? item[0].dimensions : null}<br/>
                <b>Notes:</b>{item ? item[0].notes : null}<br/><br/>
                <b>Posted At: </b>{item ? <Moment date={item[0].createdAt}/> : null}<br/>
                <b>Updated At: </b>{item ? <Moment date={item[0].updatedAt}/> : null}<br/>
            </div>
        </ol>
            :  <div id="edit-item-form">
                <form>
                    <br />
                    <div className="img-container-large">
                        <img alt='Preview' className="fullsize" src={(item[0].image).slice(6)} />
                    </div>
                    <input type="file" accept="image/*" id="image-upload" placeholder="Upload New Image"/>
                    <br />

                    Name:
                    <br />
                    <input type="text" placeholder={item[0].name} name="name" onChange={handleChange} />
                    <br />
                    <br />
                    User (??):
                    <br />
                    <input type="text" name="user" placeholder="Item User" onChange={handleChange} />
                    <br />
                    <br />
                    Description:
                    <br />
                    <textarea cols="50" rows="10" name="description" onChange={handleChange} defaultValue={item[0].description} />
                    <br />
                    <br />
                    Price:
                    <br />
                    <input type="text" name="price" placeholder={item[0].price} onChange={handleChange} />
                    <br />
                    <br />
                    Category:
                    <br />
                    <Select name="category" handler={handleChange} list={categories} show="title"/>
                    <br />
                    <br />
                    Condition:
                    <br />
                    <Select name="condition" handler={handleChange} list={conditions} show="title"/>
                    <br />
                    <br />
                    Manufacturer/Make:
                    <br />
                    <input type="text" name="manfucturer" placeholder={item[0].manufacturer} onChange={handleChange} />
                    <br />
                    <br />
                    Model
                    <br />
                    <input type="text" name="model" placeholder={item[0].model} onChange={handleChange} />
                    <br />
                    <br />
                    Dimensions:
                    <br />
                    <input type="text" name="dimensions" placeholder={item[0].dimensions} onChange={handleChange} />
                    <br />
                    <br />
                    Notes:
                    <br />
                    <textarea cols="50" rows="10" name="notes" onChange={handleChange} defaultValue={item[0].notes} />
                </form>
             </div> }
            {auth ? <button onClick={(e)=>destroyItem(item,e)}>
            Delete Item</button> : null}
            {auth ? <button onClick={(e)=>editNow(item,e)}>
                {edit ? 'Submit changes' : 'Edit item'}</button> : null}

    </div>
  )
}




export default SingleItem;