import React, {Component} from 'react';
import { connect } from 'react-redux';
import ItemStatusList from '../../components/ItemStatusList';
import filterAllItems from '../../lib/filterAllItems';
import filterItem from '../../lib/filterItem';
import { editItemStatuses } from '../../actions/itemStatuses';
import { editHelper } from '../../lib/editItem';


class SoldButton extends Component {
  constructor(props){
    super(props);

 /*     this.state = {
        status: ''
      }*/

      this.handleChangeStatus = this.handleChangeStatus.bind(this);

    }


  handleChangeStatus(event){
    event.preventDefault()
    console.log('handleChange!')
/*    editHelper(event)*/
  }

/*  handleChange(e){
    editHelper(e);
  }*/


  render(){
    console.log('PROPS--->' ,this.props.status)
    return(
      <div>
        <button className="button" onCLick={this.handleChangeStatus}>
          Mark As Sold
        </button>
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
  {editItemStatuses}
)(SoldButton)

export default ConnectedSoldButton;