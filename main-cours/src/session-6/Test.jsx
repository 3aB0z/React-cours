import DeletedComponent from "./DeletedComponent";
import { Component } from "react";

class Test extends Component {
  constructor() {
    super();
    this.state = { number: true };
  }

  supprimer = () => {
    this.state.number
      ? this.setState({ number: false })
      : this.setState({ number: true });
  }
  
  render() {
    return (
      <>
        <button onClick={this.supprimer}>Show/Hide Component</button>
        {this.state.number && <DeletedComponent />}
      </>
    );
  }
}

export default Test;
