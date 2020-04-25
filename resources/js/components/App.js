import React, { Component } from "react";
import axios from 'axios';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
// import {Table} from "react-bootstrap/Table";

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        task: '',
        tasksList: []
      };
      //bind
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
    axios.get('/posts').then(response => {
      this.setState({
         tasksList: response.data
      })
    })
  }

  handleSubmit(e) {
      e.preventDefault();
      // this.postData();
      axios.post('/posts', {
        task: this.state.task
      }).then(response => {
        this.setState({
          tasksList: [response.data]
        })
      });
  }

  postData() {
    axios.post('/posts', {
      task: this.state.task
    });
  }

  handleChange(e) {
    this.setState({
      task: e.target.value
    });
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
                <input onChange={this.handleChange} className="form-control" id="task" placeholder="Enter a task to be completed" />
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
                  </tr>
                </thead>
                <tbody>                              
                    {(this.state.tasksList.length > 0) ? this.state.tasksList.map(task => (
                      <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.task}</td>
                        <td>{task.status}</td>
                        <td>{task.user_id}</td> 
                        <td>{task.created_at}</td>
                      </tr>
                      )) : <tr><td colSpan="5">There are no tasks to show</td></tr>}                                   
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
