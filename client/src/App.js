import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {users: []}

  componentDidMount(){
    fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({ users }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Users</h1>
        {this.state.users.map(user =>
        <div key={user.id}>{user.usermane}</div>
        )}
      </div>
    );
  }
}

export default App;
