import React, {Component} from "react";

export default class HRDetails extends Component {
    render() {
        return (
            <form className="loginForm">
                <div className="loginblur">
                    <h2 align="center">HR Details</h2>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="HR name"/>
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="number" className="form-control" placeholder="enter phone number"/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Email Address"/>
                    </div>
                    <div className="form-group">
                        <lanpmbel>Designation</lanpmbel>
                        <input type="text" className="form-control" placeholder="Your Designation"/>
                    </div>


                    <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                </div>
            </form>
        );
    }
}