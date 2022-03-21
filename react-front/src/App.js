import React from "react";
import styles from "./styles/app.module.css";
import Home from "./views/home";

const App = () => {

    return (
            <div id="app" className={styles.app}>
                <Home />
            </div>
    );
};

export default App;