import React, { Component } from "react";
import "../styles/App.less";
import { Header } from "./Header/index";

class App extends Component {
    render() {
        return (
            <div>
                <Header title={"Text example"}/>
            </div>
        )
    }
}

export default App;