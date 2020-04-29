import React, { Component } from "react";
import StatusLabel from "./StatusLabel";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
// import {Table} from "react-bootstrap/Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      tasksList: []
    };
    //bind
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get("/posts").then(response => {
      this.setState({
        tasksList: response.data
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/posts", {
        task: this.state.task
      })
      .then(response => {
        this.setState({
          task: "",
          tasksList: [...this.state.tasksList, response.data]
        });
      });
    this.setState({
      task: ""
    });
  }

  handleChange(e) {
    this.setState({
      task: e.target.value
    });
  }

  delete_task(taskId) {
    axios
      .post("/posts/delete", {
        task_id: taskId
      })
      .then(response => {
        this.setState({
          tasksList: this.state.tasksList.filter(
            task => task.id !== response.data
          )
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <form onSubmit={this.handleSubmit} style={{ marginBottom: "50px" }}>
              <div className="form-group">
                <input
                  onChange={this.handleChange}
                  value={this.state.task}
                  className="form-control"
                  id="task"
                  placeholder="Enter a task to be completed"
                />
              </div>
              <input type="submit" value="Post" className="form-control" />
            </form>
            <div className="task_index">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Added By</th>
                    <th>Created</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tasksList.length > 0 ? (
                    this.state.tasksList.map(task => (
                      <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.task}</td>
                        <td>
                          <StatusLabel status={task.status} />
                        </td>
                        <td>{task.user.name}</td>
                        <td>{task.created_at}</td>
                        <td>
                          {" "}
                          <Button
                            variant="primary"
                            style={{ marginRight: "10px" }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="success"
                            style={{ marginRight: "10px" }}
                          >
                            &#x2713;
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => this.delete_task(task.id)}
                          >
                            X
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">There are no tasks to show</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
