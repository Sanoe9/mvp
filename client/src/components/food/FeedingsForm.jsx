import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

function FeedingsForm(props) {

  const [ounces, setOunces] = useState('1');
  const [time, setTime] = useState(new Date());

  const handleOuncesChange = e => {
    setOunces(e.target.value);
  }

  const handleTimeChange = e => {
    setTime(e.target.value);
  }

  const onFeedingSubmit = e => {
    e.preventDefault();
    props.onFeedingSubmit(ounces, time);
  }

  return (
    <div>
      <form onSubmit={onFeedingSubmit}>
        <label>
          Select how many ounces
          <select value={ounces} onChange={handleOuncesChange}>
            {[...Array(30).keys()].map((num, key) => <option value={num} key={key}>{num}</option>)}
          </select>
        </label>

        <br />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <TimePicker autoOk label="Time of feeding" value={time} onChange={handleTimeChange} />
        </MuiPickersUtilsProvider>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );

}

export default FeedingsForm;