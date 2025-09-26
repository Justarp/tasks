import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <div style={{ border: "10px solid red", padding: "1px" }}>
            <header className="App-header" style={{ backgroundColor: "red" }}>
                <h1>Justin Arpaia UD CISC275</h1>
                <img src="logo192.png" alt="React Logo" />
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
            <hr />
            <ul>
                <li>First list item</li>
                <li>Second list item</li>
                <li>Third list item</li>
                <li>Fourth list item</li>
            </ul>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </button>
        </div>
    );
}

export default App;
