import './Calculator.css'
import React from "react";
import Button from "./Button.js";
import {useState} from "react";

function KeyPadComponent() {
    const [text1, setText] = useState("");
    const [showImage, setShowImage] = useState(false);
    
    const ClickHandle = (e) => {
        const value = e.target.value;
        
        switch(value) {
            case "C":
                setText("");
                break;
            case "CE":
                setText(text1.slice(0, -1) || "");
                break;
            case "=":
                try {
                    const result = eval(text1);
                    setText(result.toString());
                } catch (error) {
                    setText("Error");
                }
                break;
            case "x²":
                // Square function for Task 3
                try {
                    const num = parseFloat(text1);
                    if (!isNaN(num)) {
                        const square = num * num;
                        setText(square.toString());
                    }
                } catch (error) {
                    setText("Error");
                }
                break;
            case "Show Me":
                // Task 2: Show picture
                setShowImage(!showImage);
                break;
            default:
                setText(text1 + value);
        }
    };

    return (
        <div className="Calculator">
            <div className="screen-row">
                <input type="text" readOnly value={text1} />
            </div>
            
            {showImage && (
                <div className="image-container">
                    <img 
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                        alt="Profile" 
                        className="profile-pic"
                    />
                    <p className="caption">That's me!</p>
                </div>
            )}
            
            <div className="button-row">
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle}/>
                <Button label="C" ClickHandle={ClickHandle}/> 
            </div>

            <div className="button-row">
                <Button label="1" ClickHandle={ClickHandle}/>
                <Button label="2" ClickHandle={ClickHandle}/>
                <Button label="3" ClickHandle={ClickHandle}/>
                <Button label="+" ClickHandle={ClickHandle}/>
            </div>
            
            <div className="button-row">
                <Button label="4" ClickHandle={ClickHandle}/>
                <Button label="5" ClickHandle={ClickHandle}/>
                <Button label="6" ClickHandle={ClickHandle}/>
                <Button label="-" ClickHandle={ClickHandle}/>
            </div>
            
            <div className="button-row">
                <Button label="7" ClickHandle={ClickHandle}/>
                <Button label="8" ClickHandle={ClickHandle}/>
                <Button label="9" ClickHandle={ClickHandle}/>
                <Button label="*" ClickHandle={ClickHandle}/>
            </div>
            
            <div className="button-row">
                <Button label="." ClickHandle={ClickHandle}/>
                <Button label="0" ClickHandle={ClickHandle}/>
                <Button label="=" ClickHandle={ClickHandle}/>
                <Button label="/" ClickHandle={ClickHandle}/>
            </div>
            
            {/* Task 2 & 3: Additional buttons */}
            <div className="special-buttons">
                <Button label="Show Me" ClickHandle={ClickHandle} className="show-me-btn"/>
                <Button label="x²" ClickHandle={ClickHandle} className="square-btn"/>
            </div>
        </div>
    );
}

export default KeyPadComponent;