import React from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
    state = {
        name: '',
        password: '',
    };
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    logIn = e => {
        e.preventDefault();
        const loginInfo = this.state;
        const endpoint = 'https://oerbookr2.herokuapp.com/oerbooker/login';

        axios
            .post(endpoint, loginInfo)
            .then(res => {
                localStorage.setItem('jwt', res.data.token);
                this.props.updateLogin();
            })
            .catch(err => alert('Username / password mismatched', err));
    };

    render() {
        return (
            //onSubmit wont work

            <form className="login-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.onChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChange}
                />
                <input type="button" value="Submit" onClick={this.logIn} />

                <div className="other-options">
                    <small>
                        <p onClick={this.props.signUp}>Dont have an account?</p>
                    </small>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    loginInfo: state.loginInfo,
    signUpInfo: state.signUpInfo,
});

export default connect(
    mapStateToProps,
    {}
)(LoginForm);
