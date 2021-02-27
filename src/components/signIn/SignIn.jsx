import React, { Component } from "react";
import './SignIn.css';

export default class SignInForm extends Component {
    render() {
        return (
            <div className='signin-main'>
                <div className='signin-inner'>
                    <form className="signin-outer">
                        <h3>Sign In</h3>

                        <div className="signin-form-group">
                            <label>Login</label>
                            <input type="text" className="form-control" placeholder="Enter login" />
                        </div>

                        <div className="signin-form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1"> Remember me</label>
                        </div>

                        <button type="submit" className="signin-submit">Submit</button>
                        <p className="not-account text-right">
                            Don't have an account? <a href="sign-up">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}