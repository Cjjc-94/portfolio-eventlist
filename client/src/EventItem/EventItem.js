import './EventItem.css';
import moment from 'moment';

function EventItem({ evnt }) {
  return (
    <div className="evnt">
      <div className="evnt_date_side">
        <p className="content_date_side">{moment(evnt.date).format('Do MMM')}</p>
      </div>
      <div className="evnt_content">
        <h1 className="content_title">{evnt.title}</h1>
        <h3 className="content_date">{moment(evnt.date).format('h:mm a - MMMM Do YYYY')}</h3>
        <h3 className="content_venue">{evnt.venue}</h3>
      </div>

    </div>
  )
}


export default EventItem