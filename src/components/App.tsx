import * as React from "react";
import * as styles from "../styles/App.less";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "../routers/router";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className={styles.wrapper}>
                {useRoutes(false)}
            </div>
        </BrowserRouter>
    )
}

export default App;