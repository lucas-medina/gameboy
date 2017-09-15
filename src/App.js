import React, { Component } from 'react';

// Components
import MainTitle from './components/MainTitle/MainTitle';
import Gameboy from './components/Gameboy/Gameboy';
import Controls from './components/Controls/Controls';

// CSS
import './App.css';

class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			introEnded: false,
			currentGameboys: 3,
			shuffle: false
		}
		this.colors = {
			green: "#52c963",
			red: "#ff5259",
			blue: "#527aff",
			lightblue: "#80DEEA",
			yellow: "#fff04f",
			white: "#fff",
			grey: "#595959",
			pink: "#F06292"
		}

		this.introWillEnd = this.introWillEnd.bind(this);
		this.shuffleColors = this.shuffleColors.bind(this);
	}

	introWillEnd(){
		setTimeout(() => {
            this.setState({ introEnded: true });
        }, 3000);
	}

	getGameboys(){
		let gameboys = [];
		let gameboyNum = this.state.currentGameboys;
		let colorArray = Object.keys(this.colors);

		for (let i = 0; i < gameboyNum; i++){
			let index = Math.floor(Math.random() * colorArray.length);
			let color = this.colors[colorArray[index]];
						
			gameboys.push(<Gameboy key={i} delay={(i * 0.3) + "s"} shuffle={this.state.shuffle} color={color} />);

			colorArray.splice(index, 1);
		}
		return gameboys;

	}

	shuffleColors(){
		this.setState(this.state);
	}

    render() {
		let introEnded = this.state.introEnded;
		
		return (
            <div className="page-wrapper">
				{ introEnded ? 
					(
						<div>
							<div className="page-gameboy-wrapper">
								{this.getGameboys()}
							</div>
							<Controls shuffleColors={this.shuffleColors} />							
						</div>
					) : (
						<MainTitle endIntro={this.introWillEnd} />
					)
				}
            </div>
        );
    }
}

export default App;