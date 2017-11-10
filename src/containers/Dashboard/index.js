import React, {Component} from 'react';
import { connect } from 'react-redux';
import { } from 'react-router';
import { loadItems,editItem,deleteItem } from '../../actions/items';
import ItemStatusList from '../../components/ItemStatusList';
import SingleItem from '../../components/SingleItem.js';
import filterItem from '../../lib/filterItem';
import filterAllItems from '../../lib/filterAllItems';
import editHelper from '../../lib/editItem';
import TopItemsView from '../ItemStatusListView';
import { loadConditions } from '../../actions/conditions';
import { loadCategories } from '../../actions/categories';


class Dashboard extends Component {
  constructor(){
    super();

        this.state = {
          item: '',
          auth: true,
          edit: false
        }
  }

  handleChange(e){ editHelper(e); }

  editNow(item,e){
    let editedItem = editHelper(e);
    this.setState({item: item, edit: true});
    console.log(item)
    if(this.state.edit){
      console.log(this.state.item)
      editedItem.id = item[0].id; 
      this.props.editItem(editedItem);
      this.setState({item: null, edit: false});
    }
  }

  componentWillMount(){ 
    this.props.loadItems(); 
    this.props.loadCategories();
    this.props.loadConditions();
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
    this.setState({item: false, edit: false});
  }

  render(){
    const item = this.state.item;
    const id = localStorage.getItem('userId');
    return(
      <div>

       {item ?
        <SingleItem
          edit={this.state.edit}
          auth={this.state.auth}
          item={this.state.item}
          destroyItem={this.destroyItem.bind(this)}
          editNow={this.editNow.bind(this)}
          handleChange={this.handleChange.bind(this)}
          backToItems={this.backToItems.bind(this)}
          categories={this.props.categories}
          conditions={this.props.conditions}/>
        :
        <div>
        <h1> PUBLISHED </h1>
        <ItemStatusList loadSingleItem={this.loadSingleItem.bind(this)} items={this.props.items} statusId={2} currentUserId = {id}/>
        <h1> SOLD ITEMS  </h1>
        <ItemStatusList loadSingleItem={this.loadSingleItem.bind(this)} items={this.props.items} statusId={1} currentUserId = {id}/>
        </div>
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return{
    items: filterItem(state.items,localStorage.getItem('userId')),
    categories: state.categories,
    conditions: state.conditions
  }
}

const ConnectedDashboard = connect(
  mapStateToProps,
  {loadItems,editItem,deleteItem,loadCategories,loadConditions}
)(Dashboard)

export default ConnectedDashboard;