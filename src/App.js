import React, { Component } from 'react';

// Components
import MainTitle from './components/MainTitle/MainTitle';
import Gameboy from './components/Gameboy/Gameboy';

// CSS
import './App.css';

// Assets
import logo from './logo.svg';

class App extends Component {

	constructor(props){
		super(props);

		this.state = { introEnded: false }

		this.introWillEnd = this.introWillEnd.bind(this);
	}

	introWillEnd(){
		this.setState({ introEnded: true });
	}

    render() {
		let introEnded = this.state.introEnded;
		
		return (
            <div className="page-wrapper">
				{ introEnded ? 
					(
						<Gameboy color="#2ecc71" />
					) : (
						<MainTitle endIntro={this.introWillEnd} />
					)
				}
            </div>
        );
    }
}

export default App;