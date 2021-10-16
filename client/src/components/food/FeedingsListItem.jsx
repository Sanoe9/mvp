import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { GiBabyBottle } from 'react-icons/gi';

function FeedingsListItem(props) {

  const handleClick = () => {
    props.onDelete(props.note, props.time);
  }

  return (
    <li style={{listStyleType: "none"}}>
      <GiBabyBottle style={{color: "rgb(131, 175, 174)"}}/>
      At {props.time}, baby had {props.note} ounces of milk.
      <button className="delete" onClick={handleClick}>Delete</button>
    </li>
  );

}

export default FeedingsListItem;