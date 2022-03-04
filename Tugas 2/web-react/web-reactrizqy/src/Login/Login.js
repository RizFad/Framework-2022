import React, { Component } from "react";
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="login">
                    <h1>Form Login</h1>
                    <form method="#" action>
                        <h3>Tugas Pertemuan Ketiga</h3>
                        <p><input type="text" name="login" placeholder="Username " /></p>
                        <p><input type="password" name="password" placeholder="Password" /></p>
                        <p className="remember_me">
                            <label>
                                <input type="checkbox" name="remember_me" id="remember_me" />
                                Remember me 
                            </label>
                        </p>
                        <p className="submit"><input type="submit" name="commit" defaultValue="Login" /></p>
                    </form>
                </div>
                <div className="login-help">
                    <button className="button">cancel</button>
                </div>
            </div>
        );
    }
}export default Login;