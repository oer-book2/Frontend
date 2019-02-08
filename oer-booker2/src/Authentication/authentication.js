import React from 'react';

const authentication = Component1 => Component2 =>
    class extends React.Component {
        state = {
            isLoggedIn: false,
        };
        componentDidMount() {
            this.updateLogin();
        }

        updateLogin = () => {
            if (localStorage.getItem('jwt')) {
                this.setState({
                    isLoggedIn: true,
                });
            } else {
                this.setState({
                    isLoggedIn: false,
                });
            }
        };

        render() {
            if (this.state.isLoggedIn) return <Component1 updateLogin={this.updateLogin} />;
            return <Component2 updateLogin={this.updateLogin} />;
        }
    };

export default authentication;
