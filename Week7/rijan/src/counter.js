import React from "react"
import "./App.css"
import { useState } from 'react';
 
function Hook_ControlledButtonState()
{ 
 const ClickHandle=() =>
 {
 setCount(count + 1)
 }
 const [count, setCount] = useState(0);
 return (
 <div className="App-header">
 <form>
UEL: CN5006 React Functional Component using Hook Prepared by: Dr N.Qazi 
 <h1>Click Counts are {count}</h1>
 <button type= "button" onClick={ClickHandle}>Click me{count} </button>
 </form>
 </div>
 );
}
export default Hook_ControlledButtonState