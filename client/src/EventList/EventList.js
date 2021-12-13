import './EventList.css';
import EventItem from '../EventItem/EventItem';
import FirstEvent from '../FirstEvent/FirstEvent';

function EventList({ events }) {

  events.sort((a, b) => {
    return new Date(a.date) - new Date(b.date)
  })

  return (
    events.length ?
      events.map(evnt => evnt === events[0] ? <FirstEvent evnt={evnt} key={evnt._id}></FirstEvent> :
        <EventItem evnt={evnt} key={evnt._id}></EventItem>)
      : <p>No events planned!</p>
  )
}

export default EventList