import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadItems,editItem,deleteItem } from '../../actions/items';
import { loadUsers } from '../../actions/users';
import { loadConditions } from '../../actions/conditions';
import { loadCategories } from '../../actions/categories';
import { loadItemStatuses } from '../../actions/itemStatuses';
import ItemList from '../../components/ItemList';
import SingleItem from '../../components/SingleItem.js';
import filterAllItems from '../../lib/filterAllItems';
import filterRoles from '../../lib/filterRoles';
import { editHelper } from '../../lib/editItem';
import { clearLocal } from '../../lib/editItem';
import Select from '../../components/Select';

class SingleItemView extends Component {
  constructor(){
    super();

        this.state = {
          item: '',
          category: '',
          auth: localStorage.auth,
          edit: false,
          admin: false
        }
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
  }

  handleChangeCategory(event){
    this.setState({
      category: event.target.value
    })
  }
  componentDidMount(){
    this.props.loadUsers();
    let id = localStorage.userId;
    let admin = filterRoles(this.props.users,id);
    if(admin){ 
      this.setState({ 
        admin: true, 
        edit: true, 
        auth: true })
    }
  }

  toggleEdit(event){
    if(this.state.edit===false){
      this.setState({edit: true})
    }
  }

  closeEdit(event){
    this.setState({
      item: null,
      edit: false
    });
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
    let userId = localStorage.userId;
    let admin = filterRoles(this.props.users,userId);
    if(admin){ 
      this.setState({ 
        admin: true, 
        edit: true, 
        auth: true })
    }
  }

  backToItems(e){
    e.preventDefault();
    this.setState({item: null});
    this.setState({edit: false});
  }



  render(){
    const item = this.state.item;

    let filteredItems = this.props.items.filter(
      (filteredItem) => {
        return (filteredItem.itemcategory.id).toString().indexOf(this.state.category) !== -1;
      }
    );

    let notSoldItems = filteredItems.filter(
      (filteredItem) => {
        return filteredItem.itemstatusId === 2;
      }
    );

    return(
      <div className="single-item">
       {
        item ?
        <SingleItem

          edit={this.state.edit}
          closeEdit={this.closeEdit}
          auth={this.state.auth}
          item={this.state.item}
          // editNow={this.editNow.bind(this)}
          backToItems={this.backToItems.bind(this)}
          categories={this.props.categories}
          conditions={this.props.conditions}
          itemStatuses={this.props.itemStatuses}
          toggleEdit={this.toggleEdit.bind(this)}
        />
        :
          <div>
            FILTER by Category: <Select name="category" handler={this.handleChangeCategory} list={this.props.categories} show="title" />

            <ItemList
              loadSingleItem={this.loadSingleItem.bind(this)}
              items={notSoldItems}/>
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
    itemStatuses: state.itemStatuses,
    users: state.users
  }
}
const ConnectedSingleItemView = connect(
  mapStateToProps,
  {loadItems, editItem,loadCategories,loadConditions, loadItemStatuses, deleteItem,loadUsers}
)(SingleItemView)

export default ConnectedSingleItemView;