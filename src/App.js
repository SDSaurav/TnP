import logo from './logo.svg';
import './App.css';
import login, {Login} from "./Components/login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Routes
} from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import CompanySignUp from "./Components/CompanySignUp";

function App() {
    return (
        <div className="App white-bg">
            <Router>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/CompanySignUp" element={<CompanySignUp/>}/>
                </Routes>
                {/*<Footer />*/}
            </Router>
        </div>
    );
}

export default App;
