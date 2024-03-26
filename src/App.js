import './App.css';
import * as React from 'react';
import Acquaintance from "./components/Acquaintance/Acquaintance";
import TopPane from "./components/TopPane/TopPane";

function App() {
    return <div className={'Root'}>
        <TopPane />
        <div className={'MainContainer'}>
            <Acquaintance />
        </div>
    </div>
}

export default App;
