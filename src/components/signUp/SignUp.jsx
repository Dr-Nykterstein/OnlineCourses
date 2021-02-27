import React, { Component } from "react";
import './SignUp.css';

export default class SignUpForm extends Component {
    render() {
        return (
            <div className='signup-main'>
                <div className='signup-inner'>
                    <form className="signup-outer">
                        <h3>Sign Up</h3>

                        <div className="signup-form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Enter name" />
                        </div>

                        <div className="signup-form-group">
                            <label>Surname</label>
                            <input type="text" className="form-control" placeholder="Enter surname" />
                        </div>

                        <div className="signup-form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="something@example.com" />
                        </div>

                        <div className="signup-form-group">
                            <label>Login</label>
                            <input type="text" className="form-control" placeholder="Enter login" />
                        </div>

                        <div className="signup-form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="signup-form-group">
                            <label>Confirm password</label>
                            <input type="password" className="form-control" placeholder="Confirm password" />
                        </div>

                        <button type="submit" className="signup-submit">Submit</button>
                        <p className="have-account text-right">
                            Already have an account? <a href="sign-in">Sign in</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}