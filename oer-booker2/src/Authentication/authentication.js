import React from "react";
import axios from "axios";

const authentication = _ => Component1 => Component2 =>
  class extends React.Components {
    state = {
      isLoggedIn: false
    };

    componentDidMount() {
      if (localStorage.getItem("jwt", token)) {
        this.setState({
          isLoggedIn: true
        });
      } else {
        this.setState({
          isLoggedIn: false
        });
      }
    }

    render() {
      if (this.state.isLoggedIn) return <Component1 />;
      return <Component2 />;
    }
  };

export default authentication;
