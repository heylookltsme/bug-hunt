import React from "react";

class Input extends React.Component {
  onKeyUp() {
    console.log("on key up!");
  }

  render() {
    return <input type="text" placeholder="type here" onChange={this.onKeyUp} />;
  }
}

export default Input;
