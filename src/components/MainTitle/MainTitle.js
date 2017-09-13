import React, { Component } from 'react';
import './MainTitle.css';

class MainTitle extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.endIntro();
    }

    render(){

        const text = "Remember?";
        const emoji = ":)";

        return(
            <section className="maintitle">
                <h1 className="maintitle__title">Gameboy</h1>
                <h2 className="maintitle__subtitle">
                    {text} <span className="maintitle__emoji">{emoji}</span>
                </h2>
            </section>
        );
    }
}

export default MainTitle;