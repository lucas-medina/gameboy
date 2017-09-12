import React, { Component } from 'react';

import './Gameboy.css';

class Gameboy extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="gameboy" style={{backgroundColor: this.props.color}}>

            </div>
        );
    }
}

export default Gameboy;