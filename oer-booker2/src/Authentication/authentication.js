import React from "react";
import axios from "axios";

const authentication = Component1 => Component2 =>
  class extends React.Component {
    state = {
      isLoggedIn: true
    };

    // componentDidUpdate() {
    //   if (localStorage.getItem("jwt")) {
    //     this.setState({
    //       isLoggedIn: true
    //     });
    //   } else {
    //     this.setState({
    //       isLoggedIn: false
    //     });
    //   }
    // }

    render() {
      if (this.state.isLoggedIn) return <Component1 />;
      return <Component2 />;
    }
  };

export default authentication;
