import React from "react";

const authentication = _ => Component1 => Component2 => {
  return class newComponent extends React.Components {
    state = {
      isLoggedIn: false
    };

    componentDidMount() {
      axios.get("http://host/api/data").then(res =>
        this.setState({
          isLoggedIn: res.data.isLoggedIn
        })
      );
    }

    render() {
      if (this.state.isLoggedIn) return <Component1 />;
      return <Component2 />;
    }
  };
};
