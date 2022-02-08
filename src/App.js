import { Component } from "react";
import { TaskList } from "./TaskList";
import "./styles.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      complete: 0,
      incomplete: 0
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Taskr</h1>
        <h2>A basic todo list React app</h2>
        <input name="taskInput" />
        <p>
          {this.state.incomplete} tasks done of {this.state.complete}
        </p>
        <TaskList />
      </div>
    );
  }
}
