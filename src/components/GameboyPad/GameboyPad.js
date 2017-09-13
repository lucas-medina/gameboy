import React, { Component } from 'react';
import './GameboyPad.css';

class GameboyPad extends Component {
    render(){
        return (
            <div className="pad">
                <div className="pad__row pad__row--inputs">
                    <div className="pad__directionals">
                        <div className="pad__directionalaxis"></div>
                    </div>
                    <div className="pad__buttons">
                        <span className="pad__button"></span>
                        <span className="pad__button"></span>
                    </div>
                </div>
                <div className="pad__row pad__row--startselect">
                    <div className="pad__startselect"></div>
                </div>
            </div>
        );
    }
}

export default GameboyPad;