import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
     task: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const taskId = window.taskId
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

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 justify-content-center">
          <Button href={'/'} style={{'float': 'right', 'marginBottom': '10px'}}>Back</Button><h3>Edit Task</h3>
              <form onSubmit={this.handleSubmit} style={{ marginBottom: "50px" }}>
              <div className="form-group">
                <input
                  className="form-control"
                  id="task"
                  value={this.state.task}
                  onChange={this.handleChange}
                />
              </div>
              <input type="submit" value="Post" className="form-control" style={{'width': '30%', 'float': 'right'}} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditTask;
