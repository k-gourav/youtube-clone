import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Shorts from "./components/Shorts/Shorts";

const App = () => {
    return (
        <Routes>
           <Route path="/" element={ <Home /> } />
           <Route path="/shorts" element={ <Shorts /> } />
        </Routes>
    )
}

export default App;