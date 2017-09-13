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

	getColor(){
		let colorAmount = Object.keys(this.colors).length;
		let color = Object.keys(this.colors)[Math.floor(Math.random() * colorAmount)];

		return this.colors[color];
	}

	shuffleColors(){
		if (!this.state.shuffle){
			this.setState({ shuffle: true });
			this.setState(this.state);

			setTimeout(() => {
				this.setState({ shuffle: false });
			}, 2000);
		}
	}

    render() {
		let introEnded = this.state.introEnded;
		let gameboys = [];

		for (let i = 0; i < this.state.currentGameboys; i++){
			console.log('looping');
			gameboys.push(<Gameboy key={i} delay={(i * 0.3) + "s"} shuffle={this.state.shuffle} color={this.getColor()} />);
		}
		
		return (
            <div className="page-wrapper">
				{ introEnded ? 
					(
						<div>
							<div className="page-gameboy-wrapper">
								{gameboys}
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