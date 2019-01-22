import React from 'react';
import {ReactComponent as Logo} from '../assets/logo.svg';
import Navlist from './Navlist';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuOpen: false,
        }
    }

    toggleMenu = (e) => {
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen,
        }));
    }

    render(){
        let { menuOpen } = this.state;
        return (
            <div className="navbar-wrapper" ref={ele => this.navwrap = ele}>
                <Logo onMouseEnter={this.toggleMenu} onMouseLeave={this.toggleMenu}/>
                {menuOpen ? 
                <nav ref={ele => this.nav = ele} onMouseEnter={this.toggleMenu} onMouseLeave={this.toggleMenu} className="navbar" >
                    <Navlist />
                </nav>:null}
            </div>
        );
    }
}

export default Navbar;