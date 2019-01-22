import React from 'react';
import WayPoint from 'react-waypoint';
import { TweenLite, CSSPlugin, TimelineLite } from 'gsap/all';
import {ReactComponent as MernStack} from '../assets/mern-stack.svg';
import {ReactComponent as Frontend} from '../assets/frontend.svg';
import {ReactComponent as GraphicsDesign} from '../assets/graphics-design.svg';

class Skills extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            play: false,
            pause: false,
        }

        this.mernTl = new TimelineLite();
        this.divsTl = new TimelineLite();
        this.frontendTl = new TimelineLite();
        this.graphicsTl = new TimelineLite();
        this.mainTl = new TimelineLite({ paused: true });
        this.divs = [];
    }

    returnDivsAnimation = () => {
        this.divsTl
            .from(this.divs[0], 0.5, {x:-500, opacity:0})
            .from(this.divs[1], 0.5, {x:-500, opacity:0})
            .from(this.divs[2], 0.5, {x:-500, opacity:0});

        return this.divsTl;
    }

    returnMernAnimation = () => {
        this.mernTl
            .from("#mern-express", 1, {y:-100, opacity: 0})
            .from("#mern-mongo", 1, {y:-50, opacity: 0})
            .from("#mern-node", 1, {y:-50, opacity: 0})
            .from("#mern-react", 1, {y:-50, opacity: 0});

        return this.mernTl;
    }

    returnfrontendAnimation = () => {
        this.frontendTl
            .from("#frontend-lg", 1, {x:-100, opacity: 0})
            .from("#frontend-md", 1, {x:-50, opacity: 0})
            .from("#frontend-sm", 1, {x:-50, opacity: 0});

            return this.frontendTl;
    }

    returnGraphicsAnimation = () => {
        this.graphicsTl
            .addLabel("start")
            .to("#gd-pen-tool", 2, {x:-20, y:50}, "start")
            .to("#gd-anchors", 2, {
                scaleX:1.2,
                transformOrigin: "center"
            }, "start")
            .to("#gd-handles", 2, {
                rotation: -20,
                transformOrigin: "center",
            }, "start")
            .addLabel("reverse")
            .to("#gd-pen-tool", 2, {x:0, y:0}, "reverse")
            .to("#gd-anchors", 2, {
                scaleX:1,
                transformOrigin: "center",
            }, "reverse")
            .to("#gd-handles", 2, {
                rotation: 0,
                transformOrigin: "center",
            }, "reverse");

            return this.graphicsTl;
    }

    componentDidMount() {
        this.mainTl
            .add(this.returnDivsAnimation())
            .addLabel("svgs")
            .add(this.returnMernAnimation(), "svgs")
            .add(this.returnfrontendAnimation(), "svgs")
            .add(this.returnGraphicsAnimation(), "svgs");
            
    }

    componentDidUpdate(prevProps, prevState) {
		const {
			play: prePlay,
			pause: prePause,
		} = prevState;
		const { play, pause } = this.state;
		// the play state has changed
		if ( play && play !== prePlay ) {
            this.mainTl.play();
			// play means that the paused and reversed state should be false
			this.setState({
				pause: false,
			});
        }
    }

    playAnimation = () => {
        this.setState(prevState=>({
            play: !prevState.play,
        }),()=>console.log(this.state.play));
    }

    render() {
        return (
            <WayPoint bottomOffset="50%" onEnter={this.playAnimation}>
                <div className="skills-container">
                    <h1>What I Do</h1>
                    <div className="skills">
                        <div className="skill-1" ref={ele=>this.divs.push(ele)}>
                            <MernStack />
                            <h2>MERN Stack</h2>
                        </div>
                        <div className="skill-2" ref={ele=>this.divs.push(ele)}>
                            <Frontend />
                            <h2>Frontend</h2>
                        </div>
                        <div className="skill-3" ref={ele=>this.divs.push(ele)}>
                            <GraphicsDesign />
                            <h2>Graphics Design</h2>
                        </div>
                    </div>
                </div>
            </WayPoint>
        );
    }
}

export default Skills;