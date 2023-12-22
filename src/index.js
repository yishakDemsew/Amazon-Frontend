import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import reducer, { initialState } from "./Reducer/reducer";
import { StateProvider } from "./StateProvider/StateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}>
            <Router>
                <App />
            </Router>
        </StateProvider>
    </React.StrictMode>
);
