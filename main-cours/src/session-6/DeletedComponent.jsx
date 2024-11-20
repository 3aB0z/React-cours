import { Component } from "react";

class DeletedComponent extends Component {
  componentDidMount = () => {
    console.log("Mounted");
  };

  componentWillUnmount = () => {
    console.log("Unmounted");
  };

  render() {
    return (
      <>
        <h1>Hello World!</h1>
      </>
    );
  }
}

export default DeletedComponent;
