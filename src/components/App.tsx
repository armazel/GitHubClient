import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "../routers/router";

import "../styles/App.less";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                {useRoutes(false)}
            </div>
        </BrowserRouter>
    )
}

export default App;