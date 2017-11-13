import React, {Component} from 'react';
import { connect } from 'react-redux';
import ItemStatusList from '../../components/ItemStatusList';
import filterAllItems from '../../lib/filterAllItems';
import filterItem from '../../lib/filterItem';
import { editItem } from '../../actions/items';

class UnSoldButton extends Component {
  constructor(){
    super();

    this.markAsPublished = this.markAsPublished.bind(this);
  }

  markAsPublished(event){
    event.preventDefault();

    let newInfo = {
      id: this.props.id,
      itemstatusId: 2
    };

    this.props.editItem(newInfo);
  }

  render(){

    return(
        <form onSubmit={ this.markAsPublished }>
          <input type="submit" className="button" value="Mark as PUBLISHED"/>
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

const ConnectedUnSoldButton = connect(
  null,
  mapDispatchToProps
)(UnSoldButton);

export default ConnectedUnSoldButton;