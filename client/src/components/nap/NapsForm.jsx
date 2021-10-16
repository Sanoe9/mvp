import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function NapsForm(props) {

  const [duration, setDuration] = useState('1');
  const [time, setTime] = useState(new Date());

  const handleDurationChange = e => {
    setDuration(e.target.value);
  }

  const handleTimeChange = e => {
    setTime(e.target.value);
  }

  const onNapSubmit = e => {
    e.preventDefault();
    props.onNapSubmit(duration, time);
  }

  return (
    <div>
      <form onSubmit={onNapSubmit}>
        <label>
          Select the nap's duration in hours
          <select value={duration} onChange={handleDurationChange}>
            {[...Array(20).keys()].map((num, key) => <option value={num} key={key}>{num}</option>)}
          </select>
        </label>

        <br />

        <label htmlFor="time">Select time of nap</label>

        <input type="time" id="time" name="time" onChange={handleTimeChange} required></input>

        <input type="submit" value="Submit" className="submit"></input>
      </form>
    </div>
  );

}

export default NapsForm;