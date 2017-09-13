import React, { Component } from 'react';
import './Controls.css';

class Controls extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="controls">
                <button onClick={this.props.shuffleColors} type="button" className="controls__button">Shuffle Color</button>
            </div>
        );
    }
}

export default Controls;