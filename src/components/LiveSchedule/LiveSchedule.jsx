import schedule from './live-schedule.json';
import './LiveSchedule.css';

const LiveSchedule = () => {
  return (
      <div className="schedule flex-container flex-vertical">
        <h5>Live Schedule</h5>
        <ul>
          {schedule.map(({name, date, upcoming}) => (
            <li className={upcoming ? 'upcoming flex-container' : 'flex-container'}>
              <span className="name">{name}</span>
              <hr/>
              <span className="date">{date}</span>
            </li>
          ))}
        </ul>
      </div>
  );
}

export default LiveSchedule;
