import React from 'react';
import NapsForm from './NapsForm.jsx';
import NapsList from './NapsList.jsx';
import NapChart from './NapChart.jsx';

function Nap(props) {
  return (
    <div id="nap">
      <div className="formlist">
        <NapsForm onNapSubmit={props.onNapSubmit} />
        <NapsList naps={props.naps} onDelete={props.onDelete} />
      </div>
      <div className="chart">
        <NapChart naps={props.naps} />
      </div>
    </div>
  );
}

export default Nap;