import React from 'react';
import ReactDOM from 'react-dom';
import NapsListItem from './NapsListItem.jsx';

const NapsList = (props) => (
  <div>
    <h5>Here is your naps' log list:</h5>
    <ul>
      {props.naps.map((nap, key) => ( <NapsListItem key={key} note={nap.note} time={nap.time} onDelete={props.onDelete} /> ))}
    </ul>
  </div>
);

export default NapsList;