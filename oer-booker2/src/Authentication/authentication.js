import React from "react";

const authentication = Component1 => Component2 =>
  class extends React.Component {
    state = {
      isLoggedIn: true,
    };
    componentDidUpdate() {
      console.log("hi");
      if (localStorage.getItem("jwt")) {
        this.setState({
          isLoggedIn: false,
        });
      } else {
        this.setState({
          isLoggedIn: true,
        });
      }
    }

    render() {
      if (this.props.isLoggedIn) return <Component1 />;
      return <Component2 />;
    }
  };

export default authentication;
