import React, { Component } from 'react';
import './GameboyHudEmojis.css';

class GameboyHudEmojis extends Component {
    
    constructor(props){
        super(props);
    }

    whichEmotion(){
        let emotion = this.props.emotion;

        switch(emotion){
            case 'happy':
                return (
                    <div className="emoji__wrapper">
                        <div className="emoji__row emoji__row--upper">
                            <span className="emoji__eye"></span>
                            <span className="emoji__eye"></span>
                        </div>
                        <div className="emoji__row emoji__row--lower">
                            <span className="emoji__mouth"></span>   
                        </div>
                    </div>
                );
                break;
            case 'bored':
                return (
                    <div className="emoji__wrapper">
                        <div className="emoji__row emoji__row--upper">
                            <span className="emoji__eye"></span>
                            <span className="emoji__eye"></span>
                        </div>
                        <div className="emoji__row emoji__row--lower">
                            <span className="emoji__mouth"></span>   
                        </div>
                    </div>
                );
                break;
            case 'amazed':
                return (
                    <div className="emoji__wrapper">
                        <div className="emoji__row emoji__row--upper">
                            <span className="emoji__eye"></span>
                            <span className="emoji__eye"></span>
                        </div>
                        <div className="emoji__row emoji__row--lower">
                            <span className="emoji__mouth"></span>   
                        </div>
                    </div>
                );
                break;
            case 'meh':
                return (
                    <div className="emoji__wrapper">
                        <div className="emoji__row emoji__row--upper">
                            <span className="emoji__eye"></span>
                            <span className="emoji__eye"></span>
                        </div>
                        <div className="emoji__row emoji__row--lower">
                            <span className="emoji__mouth"></span>   
                        </div>
                    </div>
                );
                break;
        }

    }

    render(){
        return (
            <div className="emoji">

            </div>
        );
    }
}

export default GameboyHudEmojis;