import React, {Component} from 'react';
import { connect } from 'react-redux';
import { editItem } from '../../actions/items';

class SoldButton extends Component {
  constructor(){
    super();

    this.markAsSold = this.markAsSold.bind(this);
  }

  markAsSold(event){
    event.preventDefault();

    let newInfo = {
      id: this.props.id,
      itemstatusId: 1
    };

    this.props.editItem(newInfo);
  }

  render(){

    return(
        <form onSubmit={ this.markAsSold }>
          <input type="submit" className="button" value="Mark as SOLD"/>
        </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editItem: (item) => {
      dispatch(editItem(item))
    }
  }
}

const ConnectedSoldButton = connect(
  null,
  mapDispatchToProps
)(SoldButton);

export default ConnectedSoldButton;