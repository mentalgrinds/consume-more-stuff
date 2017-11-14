import React, {Component} from 'react';
import { connect } from 'react-redux';
import Top3ItemList from '../../components/Top3ItemList';
import filterAllItems from '../../lib/filterAllItems';
import SingleItem from '../../components/SingleItem.js';
import { loadConditions } from '../../actions/conditions';
import { loadCategories } from '../../actions/categories';
import { loadItemStatuses } from '../../actions/itemStatuses';
import { loadItems,editItem,deleteItem } from '../../actions/items';
import { editHelper } from '../../lib/editItem';
import { clearLocal } from '../../lib/editItem';


class TopItemsView extends Component {
  constructor(){
    super();

      this.state = {
        item: '',
        auth: localStorage.auth,
        edit: false
      }

  }

  handleChange(e){ editHelper(e); }

  editNow(item,e){
    let editedItem = editHelper(e);
    this.setState({item: item});
    this.setState({edit: true});
    if(this.state.edit){
      console.log(item);
      editedItem.id = item[0].id;
      this.props.editItem(editedItem);
      this.setState({item: null});
      this.setState({edit: false});
    }
    clearLocal();
  }

  componentWillMount(){
    this.props.loadItems();
    this.props.loadCategories();
    this.props.loadConditions();
    this.props.loadItemStatuses();
  }

  loadSingleItem(id,e){
    this.setState({
      item: filterAllItems(this.props.items,id)
    });
  }

  backToItems(e){
    e.preventDefault();
    this.setState({item: null});
  }

   destroyItem(item,e){
    e.preventDefault();
    this.props.deleteItem(item);
    this.setState({item: null});
    this.setState({edit: false});
  }

  render(){
    const item = this.state.item;
    return(
      <div className = "top-items">
        {
          item ?
        <SingleItem

          edit={this.state.edit}
          auth={this.state.auth}
          item={this.state.item}
          editNow={this.editNow.bind(this)}
          destroyItem={this.destroyItem.bind(this)}
          handleChange={this.handleChange.bind(this)}
          backToItems={this.backToItems.bind(this)}
          categories={this.props.categories}
          conditions={this.props.conditions}
          itemStatuses={this.props.itemStatuses}
        />
        :
          <div className= "each-top-item">
            <h1>TOP 3 for COMPUTERS </h1>
            <Top3ItemList items={this.props.items} categoryNumber={1} loadSingleItem={this.loadSingleItem.bind(this)}/>
            <h1>TOP 3 for FURNITURE </h1>
            <Top3ItemList items={this.props.items} categoryNumber={2} loadSingleItem={this.loadSingleItem.bind(this)}/>
            <h1>TOP 3 for APPLIANCES </h1>
            <Top3ItemList items={this.props.items} categoryNumber={3} loadSingleItem={this.loadSingleItem.bind(this)}/>
            <h1>TOP 3 for VEHICLES </h1>
            <Top3ItemList items={this.props.items} categoryNumber={4} loadSingleItem={this.loadSingleItem.bind(this)}/>
          </div>
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return{
    items: state.items,
    categories: state.categories,
    conditions: state.conditions,
    itemStatuses: state.itemStatuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    loadItems: () => {
      dispatch(loadItems())
    },
    editItem: () => {
      dispatch(editItem())
    },
    loadItemStatuses: () => {
      dispatch(loadItemStatuses())
    },
    deleteItem: () => {
      dispatch(deleteItem())
    },
    loadCategories: () => {
      dispatch(loadCategories())
    },
    loadConditions: () => {
      dispatch(loadConditions())
    }
  }
}

const ConnectedTopItemsView = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopItemsView)

export default ConnectedTopItemsView;