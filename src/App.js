import './App.css';
import * as React from 'react';
import Acquaintance from "./components/Acquaintance/Acquaintance";
import TopPane from "./components/TopPane/TopPane";
import Configuration from "./components/Configuration/Configuration";

function App() {
    return <div className={'Root'}>
        <TopPane />
        <div className={'MainContainer'}>
            {/*<Acquaintance />*/}
            {/*<Configuration />*/}
        </div>
    </div>
}

export default App;
