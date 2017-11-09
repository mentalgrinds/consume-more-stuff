import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemList from '../../components/ItemList';
import { loadItems,editItem } from '../../actions/items';
import filterItem from '../../lib/filterUser';

class Dashboard extends Component {

  constructor(props){
    super(props);


    const userId = localStorage.getItem('userId');

    this.state = {
      authorized: false,
      userItems: filterItem(this.props.items,userId)
    }
  }


  componentWillMount(){ this.props.loadItems();}


  render() {
    const username = localStorage.getItem('username');
    console.log(this.props.items)
    return (
      <div>
        <div className="App">
          <h1>Welcome {username} to your Dashboard View</h1>
        </div>
        <div>
          <ItemList
            items={this.state.userItems} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    items: state.items
  }
}

const ConnectedDashboard = connect(
  mapStateToProps,
  {loadItems,editItem}
)(Dashboard)

export default ConnectedDashboard;
