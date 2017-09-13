import React, { Component } from 'react';

import './GameboyHud.css';

class GameboyHud extends Component {
    constructor(props){
        super(props);

        this.state = {
            mood: 'happy'
        };
        this.availableMoods = ['happy', 'bored', 'amazed'];

        this.getEmote = this.getEmote.bind(this);
    }

    getEmote(){
        let index = Math.floor(Math.random() * this.availableMoods.length);
        this.setState({mood : this.availableMoods[index]});
        console.log(this.state.mood);
    }

    componentWillMount(){
        this.getEmote();
    }
    
    render(){
        return (
            <div className="hud">
                <div className="hud__screenlayer">
                    <div className="hud__screen">
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default GameboyHud;