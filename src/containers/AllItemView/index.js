import React, {Component} from 'react';
import ItemDetailView from '../../components/ItemDetailView';
import { connect } from 'react-redux';
import { loadItems } from '../../actions/items';
import ItemList from '../../components/ItemList';

class AllItemView extends Component {
  constructor(){
    super();


  }

  render(){
    return(
      <div>
        <ItemList items={this.props.items}/>
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