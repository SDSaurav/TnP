import React, {Component} from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form className="loginForm">
                <div className="loginblur">
                    <h2 align="center">Register</h2>

                    <div className="form-group">
                        <label>Company name</label>
                        <input type="text" className="form-control" placeholder="Company name"/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email"/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password"/>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/login">log in?</a>
                    </p>
                </div>
            </form>
        );
    }
}