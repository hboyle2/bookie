import React, { Component } from 'react';
import axios from 'axios';
class Login extends Component {
constructor(props){
  super()
  this.state = {
    username: '',
    password: ''
  }
}

handleUsername(username){
  this.setState({username: username})
}

handlePassword(password){
  this.setState({password:password})
}

register(username, password){
  axios.post('/register', {username, password}).then((bob)=>{
    console.log(bob, "bob")
  })
}
  render() {
    return (
      <div>
      <input value= {this.state.username} onChange={ (e)=>this.handleUsername(e.target.value)} />
      <input value= {this.state.password} onChange={ (e)=>this.handlePassword(e.target.value)} />
        <button onClick = {() => this.register(this.state.username, this.state.password)}>Button</button>
      </div>
    );
  }
}

export default Login;