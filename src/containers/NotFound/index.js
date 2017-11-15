import React, { Component } from 'react';
import NotFoundA from '../../components/NotFoundA.js';
import NotFoundB from '../../components/NotFoundB.js';
import NotFoundC from '../../components/NotFoundC.js';
import './notFound.css';



class NotFound extends Component {
    constructor() {
    super();
    
    this.state={ 
      color: '',
      height:'',
      width: '',
      radius:'',
      borderLeft: '',
      borderRight: '',
      borderBottom: ''

    }
this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      color: Math.floor((Math.random() * 1000) + 1),
      height: Math.floor((Math.random() * 100) + 1),
      width: Math.floor((Math.random() * 100) + 1),
      radius: Math.floor((Math.random() * 100) + 1) +'px /'+ Math.floor((Math.random() * 50) + 1)+'px' ,
      borderLeft: Math.floor((Math.random() * 50) + 1) + 'px solid transparent',
      borderRight: Math.floor((Math.random() * 50) + 1) + 'px solid transparent',
      borderBottom: Math.floor((Math.random() * 100) + 1) + 'px solid #'+ Math.floor((Math.random() * 1000) + 1)  
    })

  }










  render() {
      const background ={
      width: "0",
      height: "0",
      border: "4px solid black",
      borderLeft: this.state.borderLeft,
      borderRight: this.state.borderRight,
      borderBottom: this.state.borderBottom
    }
    const divStyle ={
      backgroundColor: '#'+this.state.color,
      width: this.state.width,
      height: this.state.height,
      border: "4px solid black",
      borderRadius:"100px"
    }
    return (
      <div className='notfound-whole'>
      <NotFoundB 
        background={background}/>
        <div className="notfound-body">
          <NotFoundC
            handleChange={this.handleChange.bind(this)}/>
        <div className="notfound-footer"> 
          <NotFoundA 
            divStyle={divStyle}
            crackThrottle={this.state.crackThrottle}/>
        </div>
          <div className='notfound-test'></div>
        </div>
        </div>
        
    );
  }
}

export default NotFound;
