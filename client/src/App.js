import './App.css';
import { useState, useEffect } from 'react';

import EventList from './EventList/EventList';
import EventForm from './EventForm/EventForm';
import Header from './Header/Header';
import ApiService from './ApiService';

function App() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    ApiService.getEvents()
      .then(events => {
        setEvents(events)
      });
  }, []);

  function postEvent(title, date, venue) {
    ApiService.postEvents({ title, date, venue })
      .then(event => setEvents(eventList => [...eventList, event]))
  }


  return (
    <div className="App">
      <Header></Header>
      <EventForm postEvent={postEvent}></EventForm>
      <EventList events={events} id="list"></EventList>
    </div>
  );
}

export default App;
