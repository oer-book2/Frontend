import React, { Component } from 'react';
import authentication from './Authentication/authentication';
import Login from './Login/Login';
import RouteArea from './Components/RouteArea';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <RouteArea />
            </div>
        );
    }
}

export default authentication(App)(Login);
