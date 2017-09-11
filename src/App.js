import React, { Component } from 'react';
import MainTitle from './components/MainTitle/MainTitle';

// CSS
import './App.css';

// Assets
import logo from './logo.svg';

class App extends Component {
    render() {
        return (
            <div className="page-wrapper">
				<MainTitle />
            </div>
        );
    }
}

export default App;