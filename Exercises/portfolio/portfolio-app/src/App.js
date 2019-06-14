import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Title from './components/Title';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Menu from './components/Menu';
import './App.css'

class App extends Component {
  render() {
    return(
      <div>
<Menu/>
        <switch>
        <Route path="/" exact component={Title} />
        <Route path="/blog/" component={Blog}/>
        <Route path="/contact/" component={Contact} />
        </switch>
      </div>
    )
  }
}

export default App;
