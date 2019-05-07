import React, { Component } from 'react';
import './assets/style.css';
import axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.state = {
      username: '',
      email: '',
      display_name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let target = e.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  }

  insertData(nonce){
    axios.get('http://wp.ruvictor.com/api/user/register/?username='+this.state.username+'&email='+this.state.email+'&nonce=' + nonce + '&display_name='+this.state.display_name+'&insecure=cool')
    .then(res => {
      ///const data = res.data;
      ///console.log(data);
    }).catch(error => {
      console.log(error.response)
  });
  }

  getWPnonce(){
    axios.get('http://wp.ruvictor.com/api/get_nonce/?controller=user&method=register')
    .then(res => {
      this.insertData(res.data.nonce);
      ///console.log(res.data.nonce);
    }).catch(error => {
      console.log(error.response)
  });
  }

  handleSubmit(e){
    e.preventDefault();
    this.getWPnonce();
  }

  render(){
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input name="username" value={this.state.username} onChange={this.handleChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
          </div>
          <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input name="email" value={this.state.email} onChange={this.handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
          <label htmlFor="exampleInputPassword1">Display Name</label>
          <input name="display_name" value={this.state.display_name} onChange={this.handleChange} type="text" className="form-control" id="exampleInputPassword1" placeholder="Display name" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
