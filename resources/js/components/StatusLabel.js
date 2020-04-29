import React, { Component } from "react";

class StatusLabel extends Component {
  StatusLabel() {
    const status = this.props.status;
    let label = '';

    if (status === "Incomplete") {
      label = <span className="badge badge-primary">{status}</span>;
    } else if (status === "Complete") {
      label = <span className="badge badge-success">{status}</span>;
    }
    return label;
  }

  render() {
    return this.StatusLabel();
  }
}

export default StatusLabel;
