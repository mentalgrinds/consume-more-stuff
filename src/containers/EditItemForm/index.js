import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadConditions } from '../../actions/conditions';
import { loadCategories } from '../../actions/categories';
import { loadItemStatuses } from '../../actions/itemStatuses';
import { editItemImage } from '../../actions/items';
import { editHelper } from '../../lib/editItem';
import Select from '../../components/Select';

class EditItemForm extends Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    editHelper(e);
  }



  render(){
    return (
      <div id="edit-item-form">
        <form>
          <br />
          <div className="img-container-large">
              <img alt='Preview' className="fullsize" src={this.props.image} />
          </div>
          <input type="file" accept="image/*" id="image-upload" placeholder="Upload New Image"/>
          <br />
          <br />

          Name:
          <br />
          <input type="text" placeholder={this.props.name} name="name" onChange={this.handleChange} />
          <br />
          <br />
          Status:
          <br />
          <Select name="status" handler={this.handleChange} list={this.props.itemStatuses} show="title"/>
          <br />
          <br />
          Description:
          <br />
          <textarea cols="50" rows="10" name="description" onChange={this.handleChange} defaultValue={this.props.description} />
          <br />
          <br />
          Price:
          <br />
          <input type="number" name="price" placeholder={this.props.price} onChange={this.handleChange} />
          <br />
          <br />
          Category:
          <br />
          <Select name="category" handler={this.handleChange} list={this.props.categories} show="title"/>
          <br />
          <br />
          Condition:
          <br />
          <Select name="condition" handler={this.handleChange} list={this.props.conditions} show="title"/>
          <br />
          <br />
          Manufacturer/Make:
          <br />
          <input type="text" name="manfucturer" placeholder={this.props.manufacturer} onChange={this.handleChange} />
          <br />
          <br />
          Model
          <br />
          <input type="text" name="model" placeholder={this.props.model} onChange={this.handleChange} />
          <br />
          <br />
          Dimensions:
          <br />
          <input type="text" name="dimensions" placeholder={this.props.dimensions} onChange={this.handleChange} />
          <br />
          <br />
          Notes:
          <br />
          <textarea cols="50" rows="10" name="notes" onChange={this.handleChange} defaultValue={this.props.notes} />
        </form>
      </div>

  )}
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    categories: state.categories,
    conditions: state.conditions,
    itemStatuses: state.itemStatuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editItemImage: (image) => {
      dispatch(editItemImage(image))
    }
  }
}

const ConnectedEditItemForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditItemForm)

export default ConnectedEditItemForm;