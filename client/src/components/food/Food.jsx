import React from 'react';
import FeedingsForm from './FeedingsForm.jsx';
import FeedingsList from './FeedingsList.jsx';
import FeedingChart from './FeedingChart.jsx';

function Food(props) {
  return (
    <div id="food">
      <FeedingsForm onFeedingSubmit={props.onFeedingSubmit} />
      <FeedingsList feedings={props.feedings} onDelete={props.onDelete} />
      <FeedingChart feedings={props.feedings} />
    </div>
  );
}

export default Food;