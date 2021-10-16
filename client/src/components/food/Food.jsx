import React from 'react';
import FeedingsForm from './FeedingsForm.jsx';
import FeedingsList from './FeedingsList.jsx';
import FeedingChart from './FeedingChart.jsx';

function Food(props) {
  return (
    <div id="food">
      <div className="formlist">
        <FeedingsForm onFeedingSubmit={props.onFeedingSubmit} />
        <FeedingsList feedings={props.feedings} onDelete={props.onDelete} />
      </div>
      <div className="chart">
        <FeedingChart feedings={props.feedings} />
      </div>
    </div>
  );
}

export default Food;