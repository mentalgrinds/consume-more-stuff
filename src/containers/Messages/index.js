import React, {Component} from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { loadItems,editItem,deleteItem } from '../../actions/items';
import { loadUsers } from '../../actions/users';
import { loadConditions } from '../../actions/conditions';
import { loadCategories } from '../../actions/categories';
import { loadItemStatuses } from '../../actions/itemStatuses';
import filterAllItems from '../../lib/filterAllItems';
import filterRoles from '../../lib/filterRoles';


class Messages extends Component {
  constructor(){
    super();

        this.state = {
          item: '',
          category: '',
          auth: localStorage.auth,
          edit: false,
          admin: false,
          messages: [{username:'baseem', message: "hey is it still for sale"},{username:'batman',message:'yeah, well i prefer to trade'}]
        }
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  handleChangeCategory(event){
    this.setState({
      category: event.target.value
    })
  }

   componentDidMount(){
    this.props.loadUsers();
    let id = localStorage.userId;
    let admin = filterRoles(this.props.users,id);
    if(admin){ 
      this.setState({ 
        admin: true, 
        edit: true, 
        auth: true })
    }
  }

  toggleEdit(event){
    if(this.state.edit===false){
      this.setState({edit: true})
    }
  }

  closeEdit(event){
    this.setState({
      item: null,
      edit: false
    });
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
    this.setState({edit: false});
  }


  render(){
    const msgStyle = {
      width: "600px",
      height: "400px",
      border: "1px solid black",
      display:"flex wrap",
      marginTop: "50px"
    }
    const user = {
      backgroundColor:"cornflowerblue",
      marginLeft: "3px",
      marginRight: "3px",
      borderRadius: "20px",
      maxWidth: "300px"
    }
    const notUser = {
      backgroundColor:"lightgreen",
      marginLeft: "299px",
      marginRight: "3px",
      borderRadius: "20px",
      maxWidth: "300px"
    }

    const messageArr = this.state.messages;



    return(
      <div>
        <div style={msgStyle}>
          {
            messageArr.map((msg,idx)=>{
              return(
            <div>
              <p 
              style={(localStorage.username===msg.username) ? user : notUser}>
              {msg.username}-{msg.message}</p>
            </div>
                  )
            })
          }






        </div>
      </div>

    )

  }
}



const mapStateToProps = (state) => {
  return{
    items: state.items,
    users: state.users
  }
}

const ConnectedMessages = connect(
  mapStateToProps,
  {loadItems, editItem,loadCategories,loadConditions, loadItemStatuses, deleteItem,loadUsers}
)(Messages)

export default ConnectedMessages;