import React, {Component} from 'react';
import '../App.css';
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


export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {
                username: 'Enter User Name!',
                password: 'Enter Password!'
            },
            loginStatus: '',
            submitted: false
        }
    }

    inputChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
        this.validationErrorMessage(event);
    }

    validationErrorMessage = (event) => {
        const {name, value} = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'username':
                errors.username = value.length < 1 ? 'Enter User Name' : '';
                break;
            case 'password':
                errors.password = value.length < 1 ? 'Enter Password' : '';
                break;
            default:
                break;
        }
        this.setState({errors});
    }

    validateForm = (errors) => {
        let valid = true;
        console.log(errors)
        Object.entries(errors).forEach(item => {
            console.log(item)
            item && item[1].length > 0 && (valid = false)
        })
        console.log(valid)
        return valid;
    }

    loginForm = async (event) => {
        this.setState({submitted: true});
        event.preventDefault();
        if (this.validateForm(this.state.errors)) {
            console.info('Valid Form')
            const user = "karan";
            // const user = getStore('user')
            if (user) {
                this.props.dispatch(user);
                //this.props.dispatch(ActionCreators.login(user));
                this.props.history.push('/home1')
            } else {
                this.setState({loginStatus: 'Login Failed! Invalid Username and Password'})
            }
        } else {
            console.log('Invalid Form')
        }
    }

    render() {
        const {username, password, errors, submitted, loginStatus} = this.state;
        return (
            <div className="App">
                <form className="loginForm">
                        <div className="loginblur">
                            <h1 align="center">SIGN-IN</h1>
                    <div className="row" align= "center">
                        <div className="col-sm-3"></div>
                        <label htmlFor="username" className="col-sm-2 col-form-label text-center">User Name:</label>
                        <div className="col-sm-3 mb-2">
                            <input type="text" value={username} name="username" onChange={(e) => {
                                this.inputChange(e)
                            }} className="form-control" id="username" placeholder="enter username"/>
                            {submitted && errors.username.length > 0 &&
                                <span className='error'>{errors.username}</span>}
                        </div>
                        <div className="col-sm-4">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <label htmlFor="password" className="col-sm-2 col-form-label text-center">Password:</label>
                        <div className="col-sm-3 mb-2">
                            <input type="password" value={password} autoComplete="on" name="password"
                                   onChange={(e) => {
                                       this.inputChange(e)
                                   }} className="form-control" id="password" placeholder="enter Password"/>
                            {submitted && errors.password.length > 0 &&
                                <span className='error'>{errors.password}</span>}
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 center mt-1">
                            {submitted && loginStatus.length > 0 && <span className='error'>{loginStatus}</span>}
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col text-center">
                            <div className="col-sm-12 center mt-2">
                            <button type="submit"  className="button" onClick={this.loginForm}>Login</button>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 mt-2"></div>
                        <div className="col-sm-4 right">
                            <a href="/register">Forget Password</a>
                        </div>
                        <div className="col-sm-4 mt-2"></div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.user.profile
    }
}

export default (Login);
