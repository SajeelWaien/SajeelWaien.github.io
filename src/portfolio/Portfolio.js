import React from 'react';
import data from '../assets/data.json';
import WayPoint from 'react-waypoint'
import { TweenMax, CSSPlugin, TimelineLite } from 'gsap/all';
import bv from '../assets/music-player.gif';
const image = require('../assets/music-player.gif');
const C = CSSPlugin;

class Portfolio extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            play: false,
            pause: false,
        }

        this.divs = [];
        this.Tween = new TimelineLite({ paused: true });
    }

    componentDidMount() {
        this.Tween
            .staggerFrom(this.divs, 1, {y:100, opacity:0});
    }

    returnDivs = () => {
        return this.divs;
    }

    componentDidUpdate(prevState) {
        const {
            play: prePlay
        } = prevState;

        const { play } = this.state;

        if(play && play !== prePlay){
            this.Tween.play();
            // console.log(this.divs);
            // let divs = document.getElementsByClassName("portfolio-1");
            // let Tween = TweenMax.staggerFrom.bind(this);
            // Tween(divs, 1, {y:-10, opacity:0});
            // console.log("through");
            // this.setState({
			// 	pause: false,
			// });
        }
    }

    playAnimation = () => {
        this.setState(prevState=>({
            play: !prevState.play,
        }));
    }

    render() {
        let items = data.portfolio;
        return (
            <WayPoint bottomOffset="50%" onEnter={this.playAnimation}>
                <div className="portfolio-container">
                    <h1>Portfolio</h1>
                    <div className="portfolio">
                        {items.map((item, index) => 
                            <div className="portfolio-1" ref={ele=>this.divs.push(ele)}>
                                <div className="portfolio-box">
                                    <img src={require('../assets/'+item.image)} alt="Project Image" />
                                    <h3>{item.name}</h3>
                                    <div className="descr-wrapper">
                                        <p>{item.description}</p>
                                    </div>
                                    <span className="portfolio-links-bar">
                                        <a href={item.github} target="_blank">
                                            <i className="fab fa-github"/>
                                        </a>
                                    </span>
                                </div>
                            </div>)}
                            {/* <div className="placeholder"></div> */}
                    </div>
                </div>
            </WayPoint>
        );
    }
}

export default Portfolio;