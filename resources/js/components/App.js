import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
// import {Table} from "react-bootstrap/Table";

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {};
      //bind
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
      e.preventDefault();
      console.log('posted');
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <Button
              variant="primary"
              style={{ float: "right", marginBottom: "15px" }}
            >
              Add Task
            </Button>
            <form onSubmit={this.handleSubmit} style={{'marginBottom' : '50px'}}>
              <div className="form-group">
                <input className="form-control" id="task" placeholder="Enter a task to be completed" />
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
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Wash Car</td>
                    <td>Incomplete</td>
                    <td>Luke</td>
                    <td>12/4/20</td>
                    <td>Edit</td>
                  </tr>
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
