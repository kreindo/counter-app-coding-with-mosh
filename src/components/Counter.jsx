import React, { Component } from "react";

class Counter extends Component {


  // constructor() {
  //   super()
  //   console.log(this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // renderTags() {
  //   if (this.state.tags.length === 0) return "No data";

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }


  render() {
    return (
      <div className="m-2">
        <span className={this.getTextClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          Add
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">Delete</button>
        {/* {this.state.tags.length === 0 && "Please input data"}
        {this.renderTags()} */}
      </div>
    );
  }

  getTextClasses() {
    let classes = "text-light badge bg-";
    classes += this.props.counter.value === 0 ? "secondary" : "primary";
    return classes;
  }

  formatCount() {
    let { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }

  methodBlaBla() {}
}

export default Counter;
