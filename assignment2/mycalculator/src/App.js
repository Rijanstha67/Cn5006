import React from 'react';
import KeyPadComponent from './KeyPadComponent';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Advanced Calculator</h1>
                <KeyPadComponent />
                <div className="instructions">
                    <h3>Features:</h3>
                    <ul>
                        <li>Basic arithmetic operations (+, -, *, /)</li>
                        <li>Parentheses support</li>
                        <li>Clear (C) and Clear Entry (CE)</li>
                        <li>"Show Me" button: Displays profile picture</li>
                        <li>"x²" button: Calculates square of current number</li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default App;