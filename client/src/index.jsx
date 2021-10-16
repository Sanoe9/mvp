import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { GiBabyBottle, GiArmoredPants, GiNightSleep } from 'react-icons/gi';
import { IconContext } from "react-icons";

import Food from './components/food/Food.jsx';
import Nap from './components/nap/Nap.jsx';
import Diaper from './components/diaper/Diaper.jsx';

function App() {
  const [activities, setActivities] = useState([]);

  const displayDataAlreadyInDb = () => {
    $.ajax({
      url: '/weebairns',
      type: 'GET',
      success: (data) => {
        console.log('success', data);
        data.map((elem) => elem.time = elem.time.substring(15, 21));
        setActivities(data.reverse());
      },
      error: (err) => {
        console.log('error', err);
      }
    });
  };

  useEffect (() => {
    displayDataAlreadyInDb();
  }, []);

  const onNapSubmit = (data1, data2) => {
    $.ajax({
      url: '/naps',
      type: 'POST',
      data: {
        duration: data1,
        time: data2,
        event: 'naps'
      },
      success: (data) => {
        console.log('SUCCESS POST nap', data);
        $.ajax({
          url: '/weebairns',
          type: 'GET',
          success: (data) => {
            console.log('SUCCESS GET nap', data);
            data.map((elem) => elem.time = elem.time.substring(15, 21));
            setActivities(data.reverse());
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

  const onDiaperSubmit = (data1, data2) => {
    $.ajax({
      url: '/diapers',
      type: 'POST',
      data: {
        number: data1,
        time: data2,
        event: 'diapers'
      },
      success: () => {
        console.log('success in diapers post');
        $.ajax({
          url: '/weebairns',
          type: 'GET',
          success: (data) => {
            console.log('SUCCESS GET diapers submit', data);
            data.map((elem) => elem.time = elem.time.substring(15, 21));
            setActivities(data.reverse());
          },
          error: (err) => {
            console.log('err in GET diapers submit', err);
          }
        });
      },
      error: () => {
        console.log('error in diapers post', err);
      }
    });
  };

  const onFeedingSubmit = (data1, data2) => {
    $.ajax({
      url: '/feedings',
      type: 'POST',
      data: {
        ounces: data1,
        time: data2,
        event: 'feedings'
      },
      success: () => {
        console.log('success in feedings post');
        $.ajax({
          url: '/weebairns',
          type: 'GET',
          success: (data) => {
            console.log('SUCCESS GET feedings submit', data);
            data.map((elem) => elem.time = elem.time.substring(15, 21));
            setActivities(data.reverse());
          },
          error: (err) => {
            console.log('err in GET feedings submit', err);
          }
        });
      },
      error: () => {
        console.log('error in feedings post', err);
      }
    });
  };

  const onDelete = (data1, data2) => {
    $.ajax({
      url: '/deletepls',
      type: 'POST',
      data: {note: data1, time: data2},
      success: (data) => {
        const filtered = activities.filter(activity => {
          return (activity.note !== data1 || activity.time !== data2);
        });
        console.log('🍄', filtered)
        setActivities(filtered);
        console.log('☘️', activities)
      },
      error: (err) => {
        console.log('error in sending post to server');
      }
    })
  };

  return (

    <div>
      <div id="pick_activity">
        <IconContext.Provider
        value={{ color: 'blue', size: '30px' }}>
          <GiBabyBottle className="icon" onClick={() => { const element = document.getElementById('food'); element.scrollIntoView(); }} />
        </IconContext.Provider>

        <IconContext.Provider
        value={{ color: 'blue', size: '30px' }}>
          <GiArmoredPants className="icon" onClick={() => { const element = document.getElementById('diaper'); element.scrollIntoView(); }} />
        </IconContext.Provider>

        <IconContext.Provider
        value={{ color: 'blue', size: '30px' }}>
          <GiNightSleep className="icon" onClick={() => { const element = document.getElementById('nap'); element.scrollIntoView(); }} />
        </IconContext.Provider>
      </div>

      <Nap naps={activities.filter(activity => activity.type_id === 2)} onDelete={onDelete} onNapSubmit={onNapSubmit} />
      <Food feedings={activities.filter(activity => activity.type_id === 1)} onDelete={onDelete} onFeedingSubmit={onFeedingSubmit} />
      <Diaper diapers={activities.filter(activity => activity.type_id === 3)} onDelete={onDelete} onDiaperSubmit={onDiaperSubmit} />

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));