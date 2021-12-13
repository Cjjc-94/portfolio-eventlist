import './EventList.css';
import EventItem from '../EventItem/EventItem';
import FirstEvent from '../FirstEvent/FirstEvent';

function EventList({ events }) {

  const futureEvents = events.filter(event => new Date(event.date) > Date.now())

  futureEvents.sort((a, b) => {
    return new Date(a.date) - new Date(b.date)
  })

  return (
    futureEvents.length ?
      futureEvents.map(evnt => evnt === futureEvents[0] ? <FirstEvent evnt={evnt} key={evnt._id}></FirstEvent> :
        <EventItem evnt={evnt} key={evnt._id}></EventItem>)
      : <p>No events planned!</p>
  )
}

export default EventList