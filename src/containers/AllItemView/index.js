import React, {Component} from 'react';
import ItemDetailView from '../../components/ItemDetailView';
import { connect } from 'react-redux';
import { loadItems } from '../../actions/items';
import ItemList from '../../components/ItemList';

import TopItemsView from '../../containers/TopItemsView';
import SingleItem from '../../components/SingleItem.js';
import filterItem from '../../lib/filterUser';



import ItemStatusListView from '../../containers/ItemStatusListView';


class AllItemView extends Component {
  constructor(){
    super();

        this.state = {
          item: ''
    }

  }

  componentWillMount(){
    this.props.loadItems();
  }

  loadSingleItem(id,e){
    let items = this.props.items;
    let item = filterItem(items,id)
    this.setState({item: item});
  }

  backToItems(e){
    e.preventDefault();
    this.setState({item: null});
  }

  render(){
    const item = this.state.item;
    return(
      <div>

       {item ?
        <SingleItem 
          backToItems={this.backToItems.bind(this)}
          item={this.state.item}/>
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
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    loadItems: () => {
      dispatch(loadItems())
    }
  }
}

const ConnectedAllItemView = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllItemView)

export default ConnectedAllItemView;