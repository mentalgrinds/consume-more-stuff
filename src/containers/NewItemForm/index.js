import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../actions/items.js';

class NewItemForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: '',
      description: '',
      price: '',
      manufacturer: '',
      model: '',
      dimensions: '',
      notes: ''
    }

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this);
    this.handleChangeModel = this.handleChangeModel.bind(this);
    this.handleChangeDimensions = this.handleChangeDimensions.bind(this);
    this.handleChangeNotes = this.handleChangeNotes.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleChangeName(event){
    this.setState({
      name: event.target.value
    })
  }

  handleChangeImage(event){
    this.setState({
      image: event.target.value
    })
  }

  handleChangeDescription(event){
    this.setState({
      description: event.target.value
    })
  }

  handleChangePrice(event){
    this.setState({
      price: event.target.value
    })
  }

  handleChangeManufacturer(event){
    this.setState({
      manufacturer: event.target.value
    })
  }

  handleChangeModel(event){
    this.setState({
      model: event.target.value
    })
  }

  handleChangeDimensions(event){
    this.setState({
      dimensions: event.target.value
    })
  }

  handleChangeNotes(event){
    this.setState({
      notes: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();

    let fileInput = document.getElementById('image-upload');
    let formData = new FormData();
    formData.append('image', fileInput.value);
    formData.append('name', this.state.name);
    formData.append('description', this.state.description);
    formData.append('price', this.state.price);
    formData.append('manufacturer', this.state.manufacturer);
    formData.append('model', this.state.model);
    formData.append('dimensions', this.state.dimensions);
    formData.append('notes', this.state.notes);


    this.props.addItem(formData);
  }

  render(){
    return (
      <div id="new-item-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} placeholder="Name" onChange={this.handleChangeName}/>
          <input type="file" id="image-upload" value={this.state.image} placeholder="Image" onChange={this.handleChangeImage}/>
          <input type="text" value={this.state.description} placeholder="Item description" onChange={this.handleChangeDescription}/>
          <input type="text" value={this.state.price} placeholder="Price" onChange={this.handleChangePrice}/>
          CATEGORY SELECT
          CONDITION SELECT
          ITEM STATUS SELECT
          <input type="text" value={this.state.manufacturer} placeholder="Manufacturer/Make" onChange={this.handleChangeManufacturer}/>
          <input type="text" value={this.state.model} placeholder="Model" onChange={this.handleChangeModel}/>
          <input type="text" value={this.state.dimensions} placeholder="Dimensions" onChange={this.handleChangeDimensions}/>
          <input type="text" value={this.state.notes} placeholder="Notes" onChange={this.handleChangeNotes}/>
          <input type="submit" className="button" value="Add Item"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch(addItem(item))
    }
  }
}

const ConnectedNewItemForm = connect(
  null,
  mapDispatchToProps
)(NewItemForm);

export default ConnectedNewItemForm;