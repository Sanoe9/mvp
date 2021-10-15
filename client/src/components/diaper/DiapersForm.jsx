import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

function DiapersForm(props) {

  const [number, setNumber] = useState('1');
  const [time, setTime] = useState(new Date());

  const handleNumberChange = e => {
    setNumber(e.target.value);
  }

  const handleTimeChange = e => {
    setTime(e.target.value);
  }

  const onDiaperSubmit = e => {
    e.preventDefault();
    props.onDiaperSubmit(number, time);
  }

  return (
    <div>
      <form onSubmit={onDiaperSubmit}>
        <label>
          Select the number of diapers
          <select value={number} onChange={handleNumberChange}>
            {[...Array(10).keys()].map((num, key) => <option value={num} key={key}>{num}</option>)}
          </select>
        </label>

        <br />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <TimePicker autoOk label="Time of diaper change" value={time} onChange={handleTimeChange} />
        </MuiPickersUtilsProvider>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );

}

export default DiapersForm;