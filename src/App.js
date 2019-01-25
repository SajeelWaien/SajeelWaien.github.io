import React, { Component } from 'react';
import './App.scss';
import Headline from './headline/Headline';
import Navbar from './navbar/Navbar';
import Skills from './skills/Skills';
import Portfolio from './portfolio/Portfolio';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Headline />
        <Skills />
        <Portfolio />
      </div>
    );
  }
}

export default App;