import React from "react";
import Cell from "./Cell";
import CellPureComponent from "./CellPureComponent";
let count = 0;
const compare = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return true;
    }
  }
  return false;
};
class Row extends React.Component {
  // shouldComponentUpdate(nextProps) {
  //   if (this.props.i === 2) console.log(this.props.arr, nextProps.arr);
  //   let res = compare(nextProps.arr, this.props.arr);
  //   // if (res) console.log(res);
  //   return res;
  // }
  render() {
    // console.log(this.props.i, count++);
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        {" "}
        {this.props.arr.map((item, index) => (
          <Cell value={item} key={index} />
        ))}{" "}
      </div>
    );
  }
}

export default Row;
