import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { loadItems,editItem } from '../../actions/items';
import ItemStatusList from '../../components/ItemStatusList';
import SingleItem from '../../components/SingleItem.js';
import filterItem from '../../lib/filterItem';
import editHelper from '../../lib/editItem';
import TopItemsView from '../ItemStatusListView';


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
    if(this.state.edit){
      editedItem.id = item[0].id; 
      this.props.editItem(editedItem);
      this.setState({item: null, edit: false});
    }
  }

  componentWillMount(){ this.props.loadItems(); }

  loadSingleItem(id,e){ this.setState({item: filterItem(this.props.items,localStorage.getItem('userId'))}); }

  backToItems(e){
    e.preventDefault();
    this.setState({item: null});
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
          editNow={this.editNow.bind(this)}
          handleChange={this.handleChange.bind(this)}
          backToItems={this.backToItems.bind(this)}/>
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
    items: filterItem(state.items,localStorage.getItem('userId'))
  }
}

const ConnectedDashboard = connect(
  mapStateToProps,
  {loadItems,editItem}
)(Dashboard)

export default ConnectedDashboard;