import './EventForm.css';
import { useState } from 'react';

function EventForm({ postEvent }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');

  function handleTitleChange(e) {
    setTitle(e.target.value)
  }
  function handleDateChange(e) {
    setDate(e.target.value)
  }
  function handleVenueChange(e) {
    setVenue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!title || !date || !venue) return alert("please fill all fields");
    postEvent(title, date, venue);
    e.target.reset()
    setTitle('');
    setDate('');
    setVenue('');
  }


  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Create a new event</h2>
      <h4 className="form_title">TITLE</h4>
      <input type="text" placeholder="insert a title" value={title} onChange={handleTitleChange} className="form_input" />
      <h4 className="form_title">DATE</h4>
      <input type="datetime-local" value={date} onChange={handleDateChange} className="form_input" />
      <h4 className="form_title">VENUE</h4>
      <input type="text" placeholder="insert a venue" value={venue} onChange={handleVenueChange} className="form_input" />
      <button type="submit" className="form_submit_btn">Create</button>
    </form>
  )
}

export default EventForm