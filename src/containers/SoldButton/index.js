import React, {Component} from 'react';
import { connect } from 'react-redux';
import ItemStatusList from '../../components/ItemStatusList';
import filterAllItems from '../../lib/filterAllItems';
import filterItem from '../../lib/filterItem';
import { loadItems,editItem } from '../../actions/items';
import { loadItemStatuses } from '../../actions/itemStatuses.js';

class SoldButton extends Component {
  constructor(){
    super();

      this.state = {
        status: ''
        }
    }

  handleSold(event){
    this.setState({
      status: event.target.value
    });
  }

  render(){
    const id = localStorage.getItem('userId');
    return(
      <div>
        <form onSubmit={this.handleSold.bind(this)}>
              <input type="submit" className="button" value="Mark as SOLD"/>
            </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return{
    itemStatuses: state.itemStatuses
  }
}

const ConnectedSoldButton = connect(
  mapStateToProps,
  {loadItems, editItem, loadItemStatuses}
)(SoldButton)

export default ConnectedSoldButton;