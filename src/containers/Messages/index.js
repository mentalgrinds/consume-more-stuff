import React, {Component} from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { loginUser} from '../../actions/login';
import { loadItems,editItem,deleteItem } from '../../actions/items';
import { loadMessages,loadMsgByItem,addMessage } from '../../actions/messages';
import { loadUsers } from '../../actions/users';
import { loadConditions } from '../../actions/conditions';
import { loadCategories } from '../../actions/categories';
import { loadItemStatuses } from '../../actions/itemStatuses';
import filterAllItems from '../../lib/filterAllItems';
import filterItem from '../../lib/filterItem';
import filterRoles from '../../lib/filterRoles';
import { msgStyle, user, notUser, input, send } from '../../lib/MessageStyle';


class Messages extends Component {
  constructor(props){
    super(props);

        this.state = {
          item: '',
          category: '',
          auth: localStorage.auth,
          edit: false,
          admin: false,
          content: '',
          sellerId: '',
          itemId: '',
          senderId: parseInt(localStorage.userId)
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleChange(event){
    this.setState({
      content: event.target.value
    })
    let sellerId = filterItem(this.props.items,3);
    let itemId = filterAllItems(this.props.items,4);//remember this will have to be parseInt(localStore.itemId)
    this.setState({
      itemId: itemId[0].id, sellerId: sellerId[0].userId
    })
  }

  componentDidMount(){
    this.props.loadMessages();
    this.props.loadItems();
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

  handleSubmit(e){
    e.preventDefault();
 
    let newMsg = {
      content: this.state.content,
      sellerId: this.state.sellerId,
      itemId: this.state.itemId,
      senderId: localStorage.userId
    }
    this.props.addMessage(newMsg);
  }

  // handleSubmit(e){
  //   e.preventDefault();
  //   let newMsg = {
  //     content: "cool ill take it",
  //     buyerId: 2, //later this will be localStore.userId
  //     sellerId: 1, //later this will be item-id - userId
  //     itemId: 5, //later this will be item-id
  //     senderId: 2 //later this will be localStorage.userId
  //   }
  //   this.props.addMessage(newMsg);
  // }


  //  handleSubmit(e){
  //   e.preventDefault();
  //   let messages = this.state.messages;
  //   let newMsg = this.state.newMsg;
  //   console.log(messages);
  //   console.log(newMsg);
  //   let arr = [...messages,newMsg] 
  //   console.log(arr);
  //   this.setState({
  //     messages: arr
  //   })
  // }







  render(){
    const messageArr = this.props.messages;



    return(
      <div>
        <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} style={input} type='text' placeholder="type message"/>
          <input type="submit" style={send}/>
        </form>
        </div>
        <div style={msgStyle}>
          {
            messageArr.map((msg,idx)=>{
              console.log()
              return(
            <div>
              <p //parseInt( the ls user id)
              style={(localStorage.userId===msg.senderId) ? user : notUser}>
              {msg.senderId}-{msg.content}</p>
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
    users: state.users,
    messages: state.messages
  }
}

const ConnectedMessages = connect(
  mapStateToProps,
  {loadItems, editItem,loadCategories,loadConditions, loadItemStatuses, deleteItem,loadUsers,loadMessages,loadMsgByItem,addMessage,loginUser}
)(Messages)

export default ConnectedMessages;