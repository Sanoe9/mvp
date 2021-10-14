import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function ActivityForm(props) {

  const [event, setEvent] = useState('feedings');
  const [time, setTime] = useState('');
  const [note, setNote] = useState('');

  const handleEventChange = e => {
    setEvent(e.target.value);
  }

  const handleTimeChange = e => {
    setTime(e.target.value);
  }

  const handleNoteChange = e => {
    setNote(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();
    props.onSubmit(event, time, note);
  }


  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Type of activity:
          <select value={event} onChange={handleEventChange}>
            <option value="feedings">Feeding</option>
            <option value="naps" >Nap</option>
            <option value="diapers">Diaper</option>
          </select>
        </label>
        <br />
        <label>
          Time of activity:
          <input type="text" value={time} onChange={handleTimeChange}>
          </input>
        </label>
        <br />
        <label>
          Note:
          <input type="text" value={note} onChange={handleNoteChange}></input>
        </label>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );

}

export default ActivityForm;