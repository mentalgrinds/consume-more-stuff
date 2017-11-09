import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link, Redirect} from 'react-router-dom';
import { addItem } from '../../actions/items.js';
import { loadItemStatuses } from '../../actions/itemStatuses.js';
import { loadConditions } from '../../actions/conditions.js';
import { loadCategories } from '../../actions/categories.js';
import Select from '../../components/Select';
import Login from '../Login';

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
      notes: '',
      category: '',
      condition: '',
      file: '',
      imageUrl: ''
    }

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this);
    this.handleChangeModel = this.handleChangeModel.bind(this);
    this.handleChangeDimensions = this.handleChangeDimensions.bind(this);
    this.handleChangeNotes = this.handleChangeNotes.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeCondition = this.handleChangeCondition.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount(){

    this.props.loadConditions();
    this.props.loadCategories();
    this.props.loadItemStatuses();
  }

  handleChangeName(event){
    this.setState({
      name: event.target.value
    })
  }

  handleChangeImage(event){
    event.preventDefault();
    let reader = new FileReader();

    let file = event.target.files[0];
    console.log(file);

    reader.onloadend = () => {
      this.setState({
        file: file,
        imageUrl: reader.result
      })
    }

    reader.readAsDataURL(file);
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

  handleChangeCategory(event){
    this.setState({
      category: event.target.value
    })
  }

  handleChangeCondition(event){
    this.setState({
      condition: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();

    let formData = new FormData();

    formData.append('file', this.state.file);
    formData.append('name', this.state.name);
    formData.append('description', this.state.description);
    formData.append('price', this.state.price);
    formData.append('manufacturer', this.state.manufacturer);
    formData.append('model', this.state.model);
    formData.append('dimensions', this.state.dimensions);
    formData.append('notes', this.state.notes);
    formData.append('category', this.state.category || 1);
    formData.append('condition', this.state.condition || 1);


    this.props.addItem(formData);

    this.setState({
      name: '',
      description: '',
      price: '',
      manufacturer: '',
      model: '',
      dimensions: '',
      notes: '',
      category: '',
      condition: '',
      file: '',
      imageUrl: ''
    });
  }



  render(){
    return (
      <div id="new-item-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} placeholder="Name" onChange={this.handleChangeName}/>
          <input type="file" id="image-upload" value={this.state.image} placeholder="Image" onChange={this.handleChangeImage}/>
          <input type="text" value={this.state.description} placeholder="Item description" onChange={this.handleChangeDescription}/>
          <input type="text" value={this.state.price} placeholder="Price" onChange={this.handleChangePrice}/>

          <Select name="category" handler={this.handleChangeCategory} list={this.props.categories} show="title" />

          <Select name="condition" handler={this.handleChangeCondition} list={this.props.conditions} show="title" />

          <input type="text" value={this.state.manufacturer} placeholder="Manufacturer/Make" onChange={this.handleChangeManufacturer}/>
          <input type="text" value={this.state.model} placeholder="Model" onChange={this.handleChangeModel}/>
          <input type="text" value={this.state.dimensions} placeholder="Dimensions" onChange={this.handleChangeDimensions}/>
          <input type="text" value={this.state.notes} placeholder="Notes" onChange={this.handleChangeNotes}/>
          <input type="submit" className="button" value="Add Item"/>
        </form>

        <div>
          <img src={this.state.imageUrl} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    categories: state.categories,
    conditions: state.conditions,
    itemStatuses: state.itemStatuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch(addItem(item))
    },
    loadConditions: () => {
      dispatch(loadConditions())
    },
    loadCategories: () => {
      dispatch(loadCategories())
    },
    loadItemStatuses: () => {
      dispatch(loadItemStatuses())
    }
  }
}

const ConnectedNewItemForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewItemForm);

export default ConnectedNewItemForm;