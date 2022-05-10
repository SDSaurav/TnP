import React from "react";
import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "../css/templatemo-style.css";
import "../fonts/FontAwesome.otf";
import "../fonts/fontawesome-webfont.eot";
import "../fonts/fontawesome-webfont.svg";
import "../fonts/fontawesome-webfont.ttf";
import "../fonts/fontawesome-webfont.woff";
import "../fonts/fontawesome-webfont.woff2";
import "../Images/profile-photo.jpg";
import "../Images/bg.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Dashboard(props){
    return(
        <div className="dashboard">
            {/*// Left column*/}
            <div className="templatemo-flex-row">
                <div className="templatemo-sidebar">
                    <header className="templatemo-site-header">
                        <div className="square">
                            <h3>Welcome</h3>
                        </div>
                    </header>
                    <div className="profile-photo-container">
                        <img className="img-responsive" />
                        <img src={require("../Images/profile-photo.jpg")} />
                        <div className="profile-photo-overlay"></div>
                    </div>
                    <div className="mobile-menu-icon">
                        <i className="fa fa-bars"></i>
                    </div>
                    <nav className="templatemo-left-nav">
                        <ul>
                            <li>
                                <a href="#" className="active"><i className="fa fa-home fa-fw"></i>Dashboard</a>
                            </li>
                            <li>
                                <a href="/Register"><i className="fa fa-bar-chart fa-fw">Create Vacancy</i></a>
                            </li>
                            <li>
                                <a href="/HRDetails"><i className="fa fa-bar-chart fa-fw">HR Details</i></a>
                            </li>

                            <li>
                                <a href="/login"><i className="fa fa-eject fa-fw"></i>Sign Out</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>

    );
}

export default Dashboard;