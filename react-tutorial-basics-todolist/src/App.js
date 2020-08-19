import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos.jsx';
import AddForm from './components/AddForm.jsx';

class App extends Component {
  state = {
    todos: [
      { id: 1, title: 'play guitar'},
      { id: 2, title: 'play piano'},
    ]
  }

  addTodo = (todo) => {
    this.setState({ todos: [...this.state.todos, todo] })
  }

  deleteTodo = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) })
  }

  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text darken-3">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;