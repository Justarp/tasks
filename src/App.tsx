import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div style={{ border: "10px solid red", padding: "1px" }}>
            <header className="App-header" style={{ backgroundColor: "red" }}>
                <h1>Justin Arpaia UD CISC275</h1>
            </header>

            <div>
                Hello World THIS IS MY TASKS WEBSITE
                <br />
                Grocery List:
            </div>
            <ul>
                <li>Apples</li>
                <li>Bananas</li>
                <li>Oranges</li>
                <li>Grapes</li>
            </ul>

            <img
                src="https://tse1.mm.bing.net/th/id/OIP.UuGWiMCp18vRsh54-7LHBgHaHZ?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Picture of Smiley Face"
            />

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
