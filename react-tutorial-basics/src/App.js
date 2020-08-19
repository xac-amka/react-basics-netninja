import React, { Component } from 'react';
import './App.css';
import Coders from './components/Coders.jsx';
import AddCoder from './components/AddCoder.jsx';

class App extends Component {
  state = {
    coders: [
      { id: 1, name: 'John Doe', level: 'pro'},
      { id: 2, name: 'Jane Jose', level: 'noob'},
      { id: 3, name: 'James Cameron', level: 'beginner'},
    ]
  }
  addCoder = (coder) => {
    this.setState({ coders: [...this.state.coders, coder] });
  }
  deleteCoder = id => {
    this.setState({ coders: this.state.coders.filter(coder => coder.id !== id) });
  }
  componentDidMount() {
    console.log("component mounted")
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }

  render(){
    return (
      <div className="App">
        <h1>Coding Competition</h1>
        <AddCoder addCoder={this.addCoder} />
        <Coders coders={this.state.coders} deleteCoder={this.deleteCoder} />
      </div>
    );
  }
}

export default App;