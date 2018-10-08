import React, { Component } from "react";
import Input from "./components/Input";
import Output from "./components/Output";

class App extends Component {
  onInputChange(text) {}

  render() {
    return (
      <div>
        <Input onChange={this.onInputChange} />
        <Output />
      </div>
    );
  }
}

export default App;
