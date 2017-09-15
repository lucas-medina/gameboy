import React, { Component } from 'react';
import './GameboyHud.css';

import GameboyHudEmojis from '../GameboyHudEmojis/GameboyHudEmojis';

class GameboyHud extends Component {
    constructor(props){
        super(props);

        this.moods = ['happy', 'bored', 'amazed', 'meh'];
    }

    getEmotion(){
		let emotion = this.moods[Math.floor(Math.random() * this.moods.length)];
		return emotion;
	}
    
    render(){
        return (
            <div className="hud">
                <div className="hud__screenlayer">
                    <div className="hud__screen">
                        <GameboyHudEmojis emotion={this.getEmotion()}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default GameboyHud;