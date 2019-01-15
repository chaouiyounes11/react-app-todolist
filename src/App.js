import React, { Component } from 'react';
import logo from './logo.svg'; // eslint-disable-next-line
import './App.css';

class List extends Component {
  render () {
    return (

      <div className="liste">ici c'est la liste</div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello World, sans VIM</h1>
          <List />
        </header>
      </div>
    );
  }
}

export default App;
