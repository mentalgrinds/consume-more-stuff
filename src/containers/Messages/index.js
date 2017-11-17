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
import filterItemMsg from '../../lib/messageFilters';
import filterAllItems from '../../lib/filterAllItems';
import filterItem from '../../lib/filterItem';
import filterRoles from '../../lib/filterRoles';
import { msgStyle, user, notUser, input, send,item,flex,img } from '../../lib/MessageStyle';


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
      itemId: itemId[0].id, 
      sellerId: sellerId[0].userId,
      username: itemId[0].seller.username
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









  render(){
    const messageArr = this.props.messages;
    const userId = parseInt(localStorage.userId);
    const username = this.state.username;
    let id = localStorage.msgItemId;
    let item = filterItemMsg(this.props.items,parseInt(id));

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} style={input} type='text' placeholder="type message"/>
          <input type="submit" style={send}/>
        </form>
        
        <div style={flex}>
        
        <div style={item}>
          <img src={item.image} style={img} alt='preview'/>

        </div>
        

          {/*map begins*/}
        <div style={msgStyle}>
          {
            messageArr.map((msg,idx)=>{
              return(
            <div>
              <p 
              style={(userId===msg.senderId) ? user : notUser}>
              {msg.buyer.username}-{msg.content}-ItemID:{msg.itemId}</p>
            </div>
                  )
            })
          }
        </div>
        {/*map ends*/}

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