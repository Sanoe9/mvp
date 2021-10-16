import React from 'react';
import ReactDOM from 'react-dom';
import { GiNightSleep } from 'react-icons/gi';

function NapsListItem(props) {

  const handleClick = () => {
    props.onDelete(props.note, props.time);
  }

  return (
    <li style={{listStyleType: "none"}}>
      <GiNightSleep />
      At {props.time}, baby took a {props.note} hour nap.
      <button onClick={handleClick}>Delete</button>
    </li>
  );
}

export default NapsListItem;