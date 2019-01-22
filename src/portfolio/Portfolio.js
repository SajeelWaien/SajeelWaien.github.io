import React from 'react';
import data from '../assets/data.json';
import musicPlayer from '../assets/music-player.gif';
import bv from '../assets/music-player.gif';
const image = require('../assets/music-player.gif');

class Portfolio extends React.Component {
    render() {
        console.log(musicPlayer);
        let items = data.portfolio;
        return (
            <div className="portfolio-container">
                <h1>Portfolio</h1>
                <div className="portfolio">
                    {items.map((item) => 
                        <div className="portfolio-1">
                            <div className="portfolio-box">
                                <img src={require('../assets/'+item.image)} alt="Project Image" />
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <span className="portfolio-links-bar"><a href={item.github} target="_blank"><i className="fab fa-github"/></a></span>
                            </div>
                        </div>)}
                        {/* <div className="placeholder"></div> */}
                </div>
            </div>
        );
    }
}

export default Portfolio;