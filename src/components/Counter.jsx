import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  renderTags(){
    if (this.state.tags.length === 0) return 'No data';

    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
  }

  render() {
    
    return (
      <div className="m-2">
        <span className={this.getTextClasses()}>{this.formatCount()}</span>
        <button className="btn btn-primary btn-sm m-2">button</button>
        {this.state.tags.length === 0 && "Please input data"}
        {this.renderTags()}
      </div>
    );
  }

  getTextClasses() {
    let classes = "badge badge-danger text-";
    classes += this.state.count === 0 ? "danger" : "dark";
    return classes;
  }

  formatCount() {
    let { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  methodBlaBla() {}
}

export default Counter;
