import React, { Component } from "react";
import styles from "../styles/App.less";
import { Header } from "./Header/index";

class App extends Component {
    render() {
        debugger;
        return (
            <div>
                <Header className={styles.header} title={"Text example"}/>
            </div>
        )
    }
}

export default App;