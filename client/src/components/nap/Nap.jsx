import React from 'react';
import NapsForm from './NapsForm.jsx';
import NapsList from './NapsList.jsx';
import NapChart from './NapChart.jsx';

function Nap(props) {
  return (
    <div>
      <NapsForm onNapSubmit={props.onNapSubmit} />
      <NapsList naps={props.naps} onDelete={props.onDelete} />
      <NapChart naps={props.naps} />
    </div>
  );
}

export default Nap;