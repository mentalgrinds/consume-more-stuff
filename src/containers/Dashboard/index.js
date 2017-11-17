import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadItems,editItem } from '../../actions/items';
import ItemStatusList from '../../components/ItemStatusList';
import { loadUsers } from '../../actions/users';
import SingleItem from '../../components/SingleItem.js';
import filterItem from '../../lib/filterItem';
import filterRoles from '../../lib/filterRoles';
import filterAllItems from '../../lib/filterAllItems';
import { editHelper } from '../../lib/editItem';
import { loadConditions } from '../../actions/conditions';
import { loadCategories } from '../../actions/categories';

class Dashboard extends Component {
  constructor(){
    super();

    this.state = {
      item: '',
      auth: localStorage.auth,
      edit: false,
      admin: false
    }

    this.closeEdit = this.closeEdit.bind(this);
  }



  componentWillMount(){
    this.props.loadItems();
    this.props.loadCategories();
    this.props.loadConditions();
  }


  componentDidMount(){
    this.props.loadUsers();
    let id = localStorage.userId;
    let admin = filterRoles(this.props.users,id);
    if(admin.length !==0){
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

  loadSingleItem(id,e){
    this.setState({
      item: filterAllItems(this.props.items,id)
    });
    let userId = localStorage.userId;
    let admin = filterRoles(this.props.users,userId);
    if(admin.length !==0){
      this.setState({
        admin: true,
        edit: true,
        auth: true })
    }
  }

  backToItems(e){
    e.preventDefault();
    this.setState({
      item: null,
      edit: false
    });
  }

  render(){
    const admin = this.state.admin;
    const item = this.state.item;
    const id = localStorage.getItem('userId');
    return(
      <div className="dashboard-view">

       {item ?
        <SingleItem
          edit={this.state.edit}
          auth={this.state.auth}
          item={this.state.item}
          // editNow={this.editNow.bind(this)}
          backToItems={this.backToItems.bind(this)}
          categories={this.props.categories}
          conditions={this.props.conditions}
          itemStatuses={this.props.itemStatuses}
          closeEdit={this.closeEdit}
          toggleEdit={this.toggleEdit.bind(this)}
          />
        :
        <div className="dash-board-content">
          <h1> PUBLISHED</h1>
          <ItemStatusList loadSingleItem={this.loadSingleItem.bind(this)} items={this.props.items} statusId={2} currentUserId = {id}/>
          <h1> SOLD ITEMS</h1>
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
    conditions: state.conditions,
    itemStatuses: state.itemStatuses,
    users: state.users
  }
}

const ConnectedDashboard = connect(
  mapStateToProps,
  {loadItems,editItem,loadCategories,loadConditions,loadUsers}
)(Dashboard)

export default ConnectedDashboard;