import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadItems,editItem,deleteItem } from '../../actions/items';
import { loadConditions } from '../../actions/conditions';
import { loadCategories } from '../../actions/categories';
import { loadItemStatuses } from '../../actions/itemStatuses';
import ItemList from '../../components/ItemList';
import SingleItem from '../../components/SingleItem.js';
import filterAllItems from '../../lib/filterAllItems';
import editHelper from '../../lib/editItem';
import Select from '../../components/Select';

class AllItemView extends Component {
  constructor(){
    super();

        this.state = {
          item: '',
          category: '',
          auth: localStorage.auth,
          edit: false
        }
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  handleChange(e){ editHelper(e); }

  handleChangeCategory(event){
    this.setState({
      category: event.target.value
    })
  }

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
    let filteredItems = this.props.items.filter(
      (filteredItem) => {
        return (filteredItem.itemcategory.id).toString().indexOf(this.state.category) !== -1;
      }
    );
    return(
      <div>
        FILTER: <Select name="category" handler={this.handleChangeCategory} list={this.props.categories} show="title" />

       {item ?
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
        <ItemList
          loadSingleItem={this.loadSingleItem.bind(this)}
          items={filteredItems}/>
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

const ConnectedAllItemView = connect(
  mapStateToProps,
  {loadItems, editItem,loadCategories,loadConditions, loadItemStatuses, deleteItem}
)(AllItemView)

export default ConnectedAllItemView;