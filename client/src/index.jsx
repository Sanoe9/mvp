import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import FeedingsList from './components/FeedingsList.jsx';
import NapsList from './components/NapsList.jsx';
import DiapersList from './components/DiapersList.jsx';
import ActivityForm from './components/ActivityForm.jsx';
import FeedingChart from './components/FeedingChart.jsx';
import NapChart from './components/NapChart.jsx';
import DiaperChart from './components/DiaperChart.jsx';

function App() {
  const [activities, setActivities] = useState([]);

  const displayDataAlreadyInDb = () => {
    $.ajax({
      url: '/weebairns',
      type: 'GET',
      success: (data) => {
        console.log('success', data);
        setActivities(data.reverse());
        console.log('🥶', activities);
      },
      error: (err) => {
        console.log('error', err);
      }
    });
  }

  useEffect (() => {
    displayDataAlreadyInDb();
  }, []);

  const onSubmit = (data1, data2, data3) => {
    $.ajax({
      url: '/',
      type: 'POST',
      data: {event: data1, time: data2, note: data3},
      success: (data) => {
        console.log('SUCCESS POST', data);
        $.ajax({
          url: '/weebairns',
          type: 'GET',
          success: (data) => {
            console.log('SUCCESS GET', data);
            // this.setState({activities: data.reverse()});
            setActivities(data.reverse());
            console.log('🥸', activities);
          },
          error: (err) => {
            console.log('err', err);
          }
        });
      },
      error: (err) => {
        console.log('error', err);
      }
    });
  };

  const onDelete = (data1, data2) => {
    $.ajax({
      url: '/deletepls',
      type: 'POST',
      data: {note: data1, time: data2},
      success: (data) => {
        console.log('🤗', activities);
        const filtered = activities.filter(activity => {
          return (activity.note !== data1 && activity.time !== data2);
        });
        console.log('filtered', filtered);
        setActivities(filtered);
      },
      error: (err) => {
        console.log('error in sending post to server');
      }
    })
  };

  // render() {
    // const feedingsArr = activities.filter(activity => activity.type_id === 1);
    // const napsArr = activities.filter(activity => activity.type_id === 2);
    // const diapersArr = activities.filter(activity => activity.type_id === 3);
    // console.log('🤬', feedingsArr);
  return (
    <div>
      <h2>Newborn Log</h2>
      <ActivityForm onSubmit={onSubmit} />
      <FeedingsList feedings={activities.filter(activity => activity.type_id === 1)} onDelete={onDelete} />
      <NapsList naps={activities.filter(activity => activity.type_id === 2)} onDelete={onDelete} />
      <DiapersList diapers={activities.filter(activity => activity.type_id === 3)} onDelete={onDelete} />
      <FeedingChart feedings={activities.filter(activity => activity.type_id === 1)} />
      <NapChart naps={activities.filter(activity => activity.type_id === 2)} />
      <DiaperChart diapers={activities.filter(activity => activity.type_id === 3)} />
    </div>
  );
  // }
}

ReactDOM.render(<App />, document.getElementById('app'));