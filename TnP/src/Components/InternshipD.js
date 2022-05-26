import React, {Component} from "react";

export default class InternshipD extends Component {
    render() {
        return (
            <form className="loginForm">
                <div className="loginblur">
                    <h2 align="center">INTERNSHIP</h2>

                    <div className="form-group">
                        <label>Roll Number</label>
                        <input type="number" className="form-control" placeholder="Roll number"/>
                    </div>

                    <div className="form-group">
                        <label>Company Details</label>
                        <input type="textarea" aria-rowcount="4" aria-colcount="50" className="form-control" placeholder="Details of Company"/>
                    </div>

                    <div className="form-group">
                        <label>Location</label>
                        <input type="text" className="form-control" placeholder="Location of your placement"/>
                    </div>
                    <div className="form-group">
                        <label>Start-Date</label>
                        <input type="date" className="form-control" placeholder="Start date of internship"/>
                    </div>
                    <div className="form-group">
                        <label>End-Date</label>
                        <input type="date" className="form-control" placeholder="End date of internship"/>
                    </div>
                    <div className="form-group">
                        <label>Duration</label>
                        <input type="number" className="form-control" placeholder="total weeks "/>
                    </div>
                    <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
                </div>
            </form>
        );
    }
}