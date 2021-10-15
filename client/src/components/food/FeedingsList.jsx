import React from 'react';
import FeedingsListItem from './FeedingsListItem.jsx';

const FeedingsList = (props) => (
  <div>
    <h5>Here is your feedings' log list:</h5>
    <ul>
      {props.feedings.map((feeding, key) => ( <FeedingsListItem key={key} onDelete={props.onDelete} note={feeding.note} time={feeding.time} /> ))}
    </ul>
  </div>
);

export default FeedingsList;