import React, { Component } from 'react';
import './Gameboy.css';

import GameboyHud from '../GameboyHud/GameboyHud';
import GameboyPad from '../GameboyPad/GameboyPad';

class Gameboy extends Component {

    render(){
        return (
            <div className="gameboy" style={{backgroundColor: this.props.color}}>
                <div className="gameboy__layer gameboy__layer--cartdrige">
                    <span className="gameboy__cartdrige"></span>
                    <div className="gameboy__layer gameboy__layer--power">
                        <span style={{backgroundColor: this.props.color}} className="gameboy__power"></span>
                        <div style={{backgroundColor: this.props.color}} className="gameboy__ui">
                            <GameboyHud />
                            <GameboyPad />
                            <div className="gameboy__sound">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gameboy;