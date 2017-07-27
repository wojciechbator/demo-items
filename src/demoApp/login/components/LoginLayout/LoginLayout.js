import React from 'react';
import './LoginLayout.css';

const LoginLayout = (props) => (
    <div className="login-container">
        <form>
            {props.showError && <div className="error-message">Please put correct credentials</div>}
            <div className="custom-input">
                <h3>Login</h3>
                <input type="text" onChange={props.handleUsername} onFocus={props.onInputFocus}/>
            </div>
            <div className="custom-input">
                <h3>Password</h3>
                <input type="password" onChange={props.handlePassword} onFocus={props.onInputFocus}/>
            </div>
            <input className="login-button" type="submit" value="login" onClick={props.handleLogin} />
        </form>
    </div>
)

export default LoginLayout;