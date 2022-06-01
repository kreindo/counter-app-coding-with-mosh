import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  // constructor() {
  //   super()
  //   console.log(this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  renderTags() {
    if (this.state.tags.length === 0) return "No data";

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div className="m-2">
        <span className={this.getTextClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-primary btn-sm m-2"
        >
          button
        </button>
        {/* {this.state.tags.length === 0 && "Please input data"}
        {this.renderTags()} */}
      </div>
    );
  }

  getTextClasses() {
    let classes = "badge badge-danger text-";
    classes += this.state.value === 0 ? "danger" : "dark";
    return classes;
  }

  formatCount() {
    let { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  methodBlaBla() {}
}

export default Counter;
