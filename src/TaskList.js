import { Component } from "react";

export function TaskList(props) {
  const tasks = props.tasks;
  const taskListItems = tasks.map((tasks, key) => <li key={key}>{tasks}</li>);
  return <ul>{taskListItems}</ul>;
}
