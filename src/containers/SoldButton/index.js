import React, {Component} from 'react';
import { connect } from 'react-redux';
import ItemStatusList from '../../components/ItemStatusList';
import filterAllItems from '../../lib/filterAllItems';
import filterItem from '../../lib/filterItem';
import { editItemStatuses } from '../../actions/itemStatuses';
import { editHelper } from '../../lib/editItem';
import { editItem } from  '../../actions/items'

class SoldButton extends Component {
  constructor(props){
    super(props);



      this.handleSoldButton = this.handleSoldButton.bind(this);
  }

  componentWillMount() {
    var context = this;

  }

  handleSoldButton(event){
   /* event.preventDefault();*/
    let newData = {
      id: parseInt(this.props.id),
      itemstatusId: 1
    }
    editItem(newData)
  }

  render(){
    return(
      <div>
        <button className='button' active={this.props.itemStatuses === 'sold'} onClick={(event)=>{this.handleSoldButton()}}>Mark As Sold</button>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return{
    itemStatuses: state.itemStatuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editItem: (data) => {
      dispatch(editItem(data));
    }
  }
}

const ConnectedSoldButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(SoldButton)

export default ConnectedSoldButton;