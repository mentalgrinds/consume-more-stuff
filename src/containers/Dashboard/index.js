import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadItems,editItem } from '../../actions/items';
import ItemList from '../../components/ItemList';
import DashboardSingleItem from '../../components/DashboardSingleItem.js';
import DashboardItemDetailView from '../../components/DashboardItemDetailView.js';
import filterItem from '../../lib/filterItem';
import editHelper from '../../lib/editItem';


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
    return(
      <div>

       {item ?
        <DashboardSingleItem

          edit={this.state.edit}
          auth={this.state.auth}
          item={this.state.item}
          editNow={this.editNow.bind(this)}
          handleChange={this.handleChange.bind(this)}
          backToItems={this.backToItems.bind(this)}/>
        :
        <ItemList
          loadSingleItem={this.loadSingleItem.bind(this)} 
          items={this.props.items}/>
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