import React from "react";
let count = 0;
class Cell extends React.PureComponent {
  render() {
    // 237 vs 2000+
    console.log(count++);
    return <div style={{ padding: 10 }}> {this.props.value} </div>;
  }
}

export default Cell;
