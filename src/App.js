import React, { Component } from 'react';
import List from './components/list';
import TodoForm from './components/todoFrom';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TodoApp</h1>
            <TodoForm/>
          <List todos={[]}/>
        </header>
      </div>
    );
  }
}

export default App;
