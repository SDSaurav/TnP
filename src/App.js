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

function App() {
  return (
      <div className="App white-bg">
        <Router>
            <Navigation />
          <Routes>
              <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
          {/*<Footer />*/}
        </Router>
      </div>
  );
}

export default App;
