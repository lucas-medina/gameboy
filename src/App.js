import React, { Component } from 'react';

// Components
import MainTitle from './components/MainTitle/MainTitle';
import Gameboy from './components/Gameboy/Gameboy';

// CSS
import './App.css';

class App extends Component {

	constructor(props){
		super(props);

		this.state = { introEnded: false }
		this.colors = {
			green: "#52c963",
			red: "#ff5259",
			blue: "#527aff"
		}

		this.introWillEnd = this.introWillEnd.bind(this);
	}

	introWillEnd(){
		setTimeout(() => {
            this.setState({ introEnded: true });
        }, 3500);
	}

    render() {
		let introEnded = this.state.introEnded;
		
		return (
            <div className="page-wrapper">
				{ introEnded ? 
					(
						<Gameboy color={this.colors.red} />
					) : (
						<MainTitle endIntro={this.introWillEnd} />
					)
				}
            </div>
        );
    }
}

export default App;