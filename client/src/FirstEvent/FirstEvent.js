import './FirstEvent.css';
import moment from 'moment';


function FirstEvent({ evnt }) {
  return (
    <div className="first_evnt">
      <div className="first_evnt_banner">
        <p>NEXT EVENT</p>
      </div>
      <div className="first_evnt_content">
        <h1 className="first_content_date_side">{moment(evnt.date).format('Do MMM')}</h1>
        <h2 className="first_content_title">{evnt.title}</h2>
        <h3 className="first_content_date">{moment(evnt.date).format('h:mm a, MMMM Do YYYY')}</h3>
        <h3 className="first_content_venue">{evnt.venue}</h3>
      </div>

    </div>
  )
}

export default FirstEvent


// function EventItem({evnt}) {
//   return (

//   )
// }


// export default EventItem