import { React, useState } from "react";
import axios from "axios";
import useAppData from "../hooks/useAppData";

export default function NewTask(props) {
  const { state } = useAppData();
  const tasks = state.tasks;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(false);
  const [status, setStatus] = useState('not started');


  const saveTask = () => {
    const deliverable = {
      name: name,
      description: description,
      priority: priority,
      status: status,
      deliverable_id: props.deliverable
    }
    axios.put('/tasks/new', deliverable)
      .then(res => console.log('res: ', res.data));
  }

  return (
    <main className="new_task_container">
      <section className="new_task">
        <form onSubmit={event => event.preventDefault()}>
          {/* Name */}
          <label>Task Title:</label>
          <input name="name" type="text" placeholder="Enter Task Title" value={name} onChange={event => setName(event.target.value)}>
          </input>
          {/* Description */}
          <label>Description:</label>
          <input name="description" type="text" placeholder="Enter Task Description" value={description} onChange={event => setDescription(event.target.value)}>
          </input>
          {/* Priority */}
          <label>High Priority?:</label>
          <input name="priority" type="checkbox" value={priority} onChange={event => setPriority(prevCheck => !prevCheck)}>
          </input>
          {/* Status */}
          <div className="status_radio">
            <label>Status:</label>
            <label>Not started</label>
            <input name="status" type="radio" value={status} onChange={event => setStatus("not started")}>
            </input>
            <label>In Progress</label>
            <input name="status" type="radio" value={status} onChange={event => setStatus("in progress")}>
            </input>
            <label>Completed!</label>
            <input name="status" type="radio" value={status} onChange={event => setStatus("completed")}>
            </input>
          </div>
        </form>
        <button onClick={saveTask}>Save</button>
      </section>
    </main>
  )
}