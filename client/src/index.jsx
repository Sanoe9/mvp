import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import FeedingsList from './components/FeedingsList.jsx';
import NapsList from './components/NapsList.jsx';
import DiapersList from './components/DiapersList.jsx';
import ActivityForm from './components/ActivityForm.jsx';
import FeedingChart from './components/FeedingChart.jsx';
import NapChart from './components/NapChart.jsx';
import DiaperChart from './components/DiaperChart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: []
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  displayDataAlreadyInDb() {
    $.ajax({
      url: '/weebairns',
      type: 'GET',
      success: (data) => {
        console.log('success', data);
        this.setState({activities: data.reverse()});
        console.log('🥶', this.state.activities);
      },
      error: (err) => {
        console.log('error', err);
      }
    });
  }

  componentDidMount() {
    this.displayDataAlreadyInDb();
  }

  onSubmit(data1, data2, data3) {
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
            this.setState({activities: data.reverse()});
            console.log('🥸', this.state.activities);
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
  }

  onDelete(data1, data2) {
    $.ajax({
      url: '/deletepls',
      type: 'POST',
      data: {note: data1, time: data2},
      success: (data) => {
        console.log('🤗', this.state.activities);
        const filtered = this.state.activities.filter(activities => {
          return (activities.note !== data1 && activities.time !== data2);
        });
        console.log('filtered', filtered);
        this.setState({activities: filtered});
      },
      error: (err) => {
        console.log('error in sending post to server');
      }
    })
  }

  render() {
    const feedingsArr = this.state.activities.filter(activity => activity.type_id === 1);
    const napsArr = this.state.activities.filter(activity => activity.type_id === 2);
    const diapersArr = this.state.activities.filter(activity => activity.type_id === 3);
    console.log('🤬', feedingsArr);
    return (
      <div>
        <h2>Newborn Log</h2>
        <ActivityForm onSubmit={this.onSubmit} />
        <FeedingsList feedings={feedingsArr} onDelete={this.onDelete.bind(this)} />
        <NapsList naps={napsArr} onDelete={this.onDelete.bind(this)} />
        <DiapersList diapers={diapersArr} onDelete={this.onDelete.bind(this)} />
        <FeedingChart feedings={feedingsArr} />
        <NapChart naps={napsArr} />
        <DiaperChart diapers={diapersArr} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));