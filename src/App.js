import React, { Component } from 'react';
import './assets/style.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
// 30:54
  handleChange(e){
    let target = e.target;
    let value = target.type === 
  }

  render(){
    return (
      <div className="App">
        <form>
          <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input value={this.state.email} onChange={this.handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input value={this.state.password} onChange={this.handleChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
