import { React, useState } from "react";
import axios from "axios";
import useAppData from "../hooks/useAppData";

export default function NewDeliverable() {
  const { state } = useAppData();
  
  const deliverables = state.deliverables;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(false);
  const [status, setStatus] = useState('not started');


  const saveDeliverable = () => {
    const deliverable = {
      name: name,
      description: description,
      priority: priority,
      status: status,
      project_id: state.projects.id
    }
  }

  return (
    <main className="new_deliverable_container">
      <section className="new_deliverable">
        <form onSubmit={event => event.preventDefault()}>
          {/* Name */}
          <label>Deliverable Title:</label>
          <input name="name" type="text" placeholder="Enter Deliverable Title" value={name} onChange={event => setName(event.target.value)}>
          </input>
          {/* Description */}
          <label>Description:</label>
          <input name="description" type="text" placeholder="Enter Deliverable Description" value={description} onChange={event => setDescription(event.target.value)}>
          </input>
          {/* Priority -- checkbox: https://stackoverflow.com/questions/40359800/how-to-toggle-boolean-state-of-a-react-component */}
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
        <button onClick={saveDeliverable}>Save</button>
      </section>
    </main>
  )
}