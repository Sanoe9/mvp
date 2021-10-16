import React from 'react';
import ReactDOM from 'react-dom';
import { GiArmoredPants } from 'react-icons/gi';

function DiapersListItem(props) {

  const handleClick = () => {
    props.onDelete(props.note, props.time);
  }

  return (
    <li style={{listStyleType: "none"}}>
      <GiArmoredPants style={{color: "rgb(131, 175, 174)"}} />
      At {props.time}, baby had {props.note} diapers changed.
      <button className="delete" onClick={handleClick}>Delete</button>
    </li>
  );
}

export default DiapersListItem;