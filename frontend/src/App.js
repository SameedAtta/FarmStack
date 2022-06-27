import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
//   import {Switch } from "react-router";

import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/SignUp/SignUp';
import Login from "./components/Login/Login";
import Home from './components/Home/Home';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/Home' element={<Home />} />
            </Routes>
        </Router>
    )
};



export default App;