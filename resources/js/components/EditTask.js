import React, { Component } from "react";

class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
     task: 'test'
    };
  
  }

   componentDidMount() {

  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 justify-content-center">
          <h3>Edit Task</h3>
              <form onSubmit={this.handleSubmit} style={{ marginBottom: "50px" }}>
              <div className="form-group">
                <input
                  className="form-control"
                  id="task"
                  placeholder="Enter a task to be completed"
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
