import React from "react";
let count = 0;
class Cell extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.value === this.props.value) {
      return false;
    }
    return true;
  }
  render() {
    // 237 vs 3000+
    console.log(count++);
    return <div style={{ padding: 10 }}> {this.props.value} </div>;
  }
}

export default Cell;
