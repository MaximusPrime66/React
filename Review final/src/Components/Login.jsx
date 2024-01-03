import React from "react";
import './Login.css';

const Login = () => {
    return (
        <div className="log">
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true"></input>

                <div className="signup">
                    <form />
                    <label for="chk" aria-hidden="true">Sign up</label>
                    <input type="text" name="txt" placeholder="Enter your Name" required="" />
                    <input type="email" name="email" placeholder="Email" required="" />
                    <input type="password" name="pswd" placeholder="Password" required="" />
                    <button type="submit" id="signup" onclick="f1()">Sign up</button>
                </div>

                <div className="login">
                    <form />
                    <label for="chk" aria-hidden="true">Login</label>
                    <input type="email" name="email" placeholder="Email" required="" />
                    <input type="password" name="pswd" placeholder="Password" required="" />
                    <a href="/"><button type="submit">Login</button></a>
                </div>
            </div>
            </div>
    );
}

export default Login;