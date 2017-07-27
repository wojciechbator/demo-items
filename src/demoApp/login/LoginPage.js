import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import LoginLayout from './components/LoginLayout/LoginLayout';

const LoginPage = inject('loginStore', 'routerStore', 'sessionStore')(observer(class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.loginSuccess = this.loginSuccess.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleUsernameChange(event) {
        this.props.loginStore.login = event.target.value;
    }

    handlePasswordChange(event) {
        this.props.loginStore.password = event.target.value;
    }

    onInputFocus() {
        this.props.loginStore.showError = false;
    }

    loginSuccess(data) {
        sessionStorage.setItem('access_token', data.access_token);
        this.props.sessionStore.authenticated = true;
        this.props.routerStore.push('/items');
        this.props.history.push('/items');
    }

    loginFailure() {
        this.props.sessionStore.expiration = '';
        this.props.loginStore.authenticated = false;
        this.props.loginStore.showError = true;
    }

    handleLogin(event) {
        event.preventDefault();
        let body = `username=${this.props.loginStore.login}&password=${this.props.loginStore.password}`;
        let headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        fetch('http://recruits.siennsoft.com/api/jwt',
            {
                method: 'POST', headers, body
            }).then((response) => {
                return response.json();
            }).then((data) => {
                this.loginSuccess(data);
            }).catch((err) => {
                this.loginFailure();
                return err;
            });
    }

    render() {
        return (
            <div>
                <LoginLayout
                    handleUsername={this.handleUsernameChange}
                    handlePassword={this.handlePasswordChange}
                    showError={this.props.loginStore.isShowError}
                    onInputFocus={this.onInputFocus}
                    handleLogin={this.handleLogin} />
            </div>
        );
    }
}))

export default LoginPage;