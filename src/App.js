import React, { Component } from 'react';
import logo from './logo.svg';
import {ReactComponent as Logo} from './assets/led.svg';
import {ReactComponent as Sun} from './assets/sun.svg';
import './App.css';
import Typewriter from './headline/typewriter';

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
          <h1>
            <p href="" className="typewrite" data-period="2000" data-type={`[ "Hi, I'm Sajeel."]`}>
              <span className="wrap"></span>
            </p>
            <p href="" className="typewrite" data-period="1000" data-type='["I am Creative.", "I Love Design.", "I Love to Develop." ]' loop>
              <span className="wrap"></span>
            </p>
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
