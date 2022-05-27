import React, {Component} from "react";

export default class Register extends Component {
    render() {
        return (
            <form className="loginForm">
                <div className="loginblur">
                    <h2 align="center">Placement Registration</h2>

                    <div className="form-group">
                        <label>Company name</label>
                        <input type="text" className="form-control" placeholder="Company name"/>
                    </div>

                    <div className="form-group">
                        <label>Company Size</label>
                        <input type="number" className="form-control" placeholder="enter size in number"/>
                    </div>

                    <div className="form-group">
                        <label>Company Type</label>
                        <input type="text" className="form-control" placeholder="MNC/StartUp"/>
                    </div>
                    <div className="form-group">
                        <label>Basic Criteria</label>
                        <input type="text" className="form-control" placeholder="MNC/StartUp"/>
                    </div>
                    <div className="form-group">
                        <label>Last Announced Package</label>
                        <input type="text" className="form-control" placeholder="last package offered"/>
                    </div>
                    <div className="form-group">
                        <label>Number of Positions</label>
                        <input type="number" className="form-control" placeholder="total positions available"/>
                    </div>
                    <div className="form-group">
                        <label>Last Declared Bond Details</label>
                        <input type="text" className="form-control" placeholder="previous bond details"/>
                    </div>
                    <div className="form-group">
                        <label>Previous Placed Students</label>
                        <input type="number" className="form-control" placeholder="number of student placed last year"/>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
                </div>
            </form>
        );
    }
}