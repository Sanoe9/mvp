import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

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
    props.onNapSubmit(ounces, time);
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

        <MuiPickersUtilsProvider utils={DateFnsUtils}>

          <TimePicker autoOk label="Time of nap" value={time} onChange={handleTimeChange} />
        </MuiPickersUtilsProvider>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );

}

export default NapsForm;