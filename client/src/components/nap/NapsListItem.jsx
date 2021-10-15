import React from 'react';
import ReactDOM from 'react-dom';

function NapsListItem(props) {

  const handleClick = () => {
    props.onDelete(props.note, props.time);
  }

  return (
    <li>
      At {props.time}, baby took a {props.note} nap.
      <button onClick={handleClick}>Delete</button>
    </li>
  );
}

export default NapsListItem;