import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header/Header.js'



import "./styles.scss";

function App() {
  return (
    <div className="App">
        <Header/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
