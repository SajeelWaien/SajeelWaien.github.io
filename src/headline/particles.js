import particlesJS from 'particle.js';
import particlesConfig from '../assets/particlesConfig.json';

function init_particles(){
        particlesJS.load('particles-js', particlesConfig, function() {
        console.log('callback - particles.js config loaded');
    });
}

export default init_particles;