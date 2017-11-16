import React, {Component} from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { loadItems,editItem,deleteItem } from '../../actions/items';
import { loadMessages,loadMsgByItem,addMessage } from '../../actions/messages';
import { loadUsers } from '../../actions/users';
import { loadConditions } from '../../actions/conditions';
import { loadCategories } from '../../actions/categories';
import { loadItemStatuses } from '../../actions/itemStatuses';
import filterAllItems from '../../lib/filterAllItems';
import filterRoles from '../../lib/filterRoles';


class Messages extends Component {
  constructor(props){
    super(props);

        this.state = {
          item: '',
          category: '',
          auth: localStorage.auth,
          edit: false,
          admin: false,
          messages: [],
          newMsg: ''
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      newMsg: {username: localStorage.username, message: event.target.value}
    })
  }

  componentDidMount(){
    this.props.loadMessages();
    this.setState({
      messages:this.props.messages
    })
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
      content: "okay send your monies",
      buyerId: 1, //later this will be localStore.userId
      sellerId: 2, //later this will be item-id - userId
      itemId: 5, //later this will be item-id
      senderId: 1 //later this will be localStorage.userId
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
    const msgStyle = {
      width: "600px",
      height: "400px",
      border: "4px solid black",
      backgroundColor: 'lightgrey',
      display:"flex wrap",
      marginTop: "50px"
    }
    const user = {
      backgroundColor:"cornflowerblue",
      marginLeft: "3px",
      marginRight: "3px",
      borderRadius: "20px",
      maxWidth: "300px",
      paddingLeft: "20px"
    }
    const notUser = {
      backgroundColor:"lightgreen",
      marginLeft: "299px",
      marginRight: "3px",
      borderRadius: "20px",
      maxWidth: "300px",
      textAlign: "right",
      paddingRight: "20px"
    }
    const messageArr = this.props.messages;

    const input = {
      width: "400px",
      height: "60px",
      marginTop: "30px",
      fontSize: "40px",
      marginLeft: "90px",
      borderRight: "transparent"
    }
    const send = {
      height: "67px",
      marginTop: "30px",
      fontSize: "40px",
      backgroundColor: "lightblue",
      border: "transparent"
    }


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
              console.log(msg);
              return(
            <div>
              <p 
              style={(1===msg.senderId) ? user : notUser}>
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
  {loadItems, editItem,loadCategories,loadConditions, loadItemStatuses, deleteItem,loadUsers,loadMessages,loadMsgByItem,addMessage}
)(Messages)

export default ConnectedMessages;