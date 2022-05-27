import React from 'react'
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import login, {Login} from "./Components/login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Routes
} from "react-router-dom";
// import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import CompanySignUp from "./Components/CompanySignUp";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import HRDetails from "./Components/HRDetails";
import Navigation from "./Components/Navigation";
import InternshipD from "./Components/InternshipD";

function App() {
    return (
        <div className="App white-bg">
            <Router>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/CompanySignUp" element={<CompanySignUp/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/Register" element={<Register/>}/>
                    <Route path="/HRDetails" element={<HRDetails/>}/>
                    <Route path="/InternshipD" element={<InternshipD/>}/>
                </Routes>
                {/*<Footer />*/}
            </Router>
        </div>
    );

}

export default App;
