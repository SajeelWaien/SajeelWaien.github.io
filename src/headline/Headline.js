import React, { Component } from 'react';
import Typewriter from './typewriter';
import Particles from 'react-particles-js';
import particlesConfig from './particlesjs-config.json';
import {ReactComponent as Sun} from '../assets/sun.svg';

class Headline extends Component {
  constructor(props) {
    super(props);

    this.state = {
        height: window.innerHeight -100,
        width: window.innerWidth - 20,
    }
  }

  resizeHandler = () => {
    this.setState({
        height: window.innerHeight - 100,
        width: window.innerWidth - 20,
    });
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
      window.addEventListener('resize', this.resizeHandler);
  }

  componentWillUnmount(){
      window.removeEventListener('resize', this.resizeHandler);
  }

  componentDidUpdate(){
      console.log("updated");
  }

  render() {
    let { height } = this.state;
    let { width } = this.state;
    return (
      <div className="Headline">
        <Sun />
        <header className="Headline-header">
          <Particles 
            width={width}
            height={height}
            params={particlesConfig}
            className="particles"
          />
          <h1>
            <div className="typewrite highlight" data-period="2000" data-type={`[ "Hi, I'm Sajeel,"]`}>
              <span className="wrap"></span>
            </div>
            <div className="typewrite intro" data-period="1000" data-type='["I Love to Develop,", "I Love to Design,"]' loop>
              <span className="wrap"></span>
            </div>
          </h1>
        </header>
      </div>
    );
  }
}

export default Headline;
