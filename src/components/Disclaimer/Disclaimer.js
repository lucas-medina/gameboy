import React, { Component } from 'react';
import './Disclaimer.css';

class Disclaimer extends Component {
    render(){
        return (
            <div className="disclaimer">
                <p className="disclaimer__text">Original concept art by <a target="_blank" href="https://pxlhns.tumblr.com">Pixel Hans</a>    
                </p>
            </div>
        );
    }
}

export default Disclaimer;