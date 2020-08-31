import React from "react";
import {Route} from "./react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
export default function App(props) {
    return (
        <div className="App">
            <Route path="/" component={Home} exact></Route>
            <Route path="/about" component={About}></Route>
        </div>
    );
}
