import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";

class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const taskId = window.taskId;
    axios.get(`/getTask/${taskId}`).then(response => {
      this.setState({
        task: response.data[0].task
      });
    });
  }

  handleChange(e) {
    this.setState({
      task: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const taskId = window.taskId;
    axios
      .post("/posts/editTask", {
        task: this.state.task,
        taskId: taskId
      })
      .then(response => {
        if (response.data === "no_change") {
          toast("No changes were made.");
        } else if (response.data === "success") {
          toast("Task edited successfully.");
          setTimeout(function() {
            window.location.href = "/";
          }, 1000);
        }
      });
  }

  render() {
    return (
      <div className="container">
        <div className="card" style={{ paddingLeft: "12%" }}>
          <div className="col-md-10 card-body">
            <div className="card-title">
              <Button
                href={"/"}
                style={{ float: "right", marginBottom: "10px" }}
              >
                Back
              </Button>
              <h3>Edit Task</h3>
            </div>
            <form onSubmit={this.handleSubmit} style={{ marginBottom: "50px" }}>
              <div className="form-group">
                <input
                  className="form-control"
                  id="task"
                  value={this.state.task}
                  onChange={this.handleChange}
                />
              </div>
              <input
                type="submit"
                value="Edit"
                className="form-control"
                style={{ width: "30%", float: "right" }}
              />
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default EditTask;
