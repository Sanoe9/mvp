import React from 'react';
import ReactDOM from 'react-dom';
import DiapersListItem from './DiapersListItem.jsx';

const DiapersList = (props) => (
  <div>
    <h5>Here is your diapers' log list:</h5>
    <ul>
      {props.diapers.map((diaper, key) => ( <DiapersListItem key={key} note={diaper.note} time={diaper.time} onDelete={props.onDelete} /> ))}
    </ul>
  </div>
);

export default DiapersList;