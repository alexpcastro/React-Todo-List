import { Component } from "react";
import { TaskList } from "./TaskList";
import "./styles.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      complete: 0
    };
  }
  handleSubmitTask(e) {
    var taskFormData = new FormData(e.target);
    let taskFormObject = Object.fromEntries(taskFormData.entries());
    let taskInputValue = taskFormObject["taskInput"];

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, taskInputValue]
    }));

    e.preventDefault();
  }
  render() {
    return (
      <>
        <div className="App">
          <h1>Taskr</h1>
          <h2>A basic todo list React app</h2>
          <form onSubmit={this.handleSubmitTask.bind(this)}>
            <input name="taskInput" placeholder="Add a task" />
            <button type="submit">Add</button>
          </form>
          <p>
            {this.state.complete} tasks done of {this.state.tasks.length}
          </p>
          <TaskList tasks={this.state.tasks} />
        </div>
      </>
    );
  }
}
