import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Post from './components/Post.jsx';
import ContactDetails from './components/ContactDetails.jsx';
// import Page404 from './components/Page404.jsx';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <h1 className="center blue-text darken-3">Smile's website</h1>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/contacts/:contact_id" component={ContactDetails} />
            <Route path="/:post_id" component={Post} />
            {/* <Route path='/404' component={Page404} />
            <Redirect from='*' to='/404' /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;