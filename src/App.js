import React, { Component } from 'react';
import logo from './logo.svg';
import {ReactComponent as Logo} from './assets/led.svg';
import {ReactComponent as Sun} from './assets/sun.svg';
import './App.css';
import Typewriter from './headline/typewriter';
import Particles from 'react-particles-js';
import particlesConfig from './assets/particlesjs-config.json';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          var loop = elements[i].getAttribute('loop');
          loop !== null ? loop = true : loop = false;
          if (toRotate) {
            new Typewriter(elements[i], JSON.parse(toRotate), period, loop);
          }
      }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Particles 
            width="100vw"
            height="100vh"
            params={particlesConfig}
            className="particles"
          />
          <h1>
            <div className="typewrite highlight" data-period="2000" data-type={`[ "Hi, I'm Sajeel,"]`}>
              <span className="wrap"></span>
            </div>
            <div className="typewrite intro" data-period="1000" data-type='["I Love to Develop,", "I Love Design,"]' loop>
              <span className="wrap"></span>
            </div>
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
