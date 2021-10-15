import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function FeedingsListItem(props) {

  const handleClick = () => {
    props.onDelete(props.note, props.time);
  }

  return (
    <li>
      At {props.time}, baby had {props.note} of milk.
      <button onClick={handleClick}>Delete</button>
    </li>
  );

}

export default FeedingsListItem;