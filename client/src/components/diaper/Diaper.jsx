import React from 'react';
import DiapersForm from './DiapersForm.jsx';
import DiapersList from './DiapersList.jsx';
import DiaperChart from './DiaperChart.jsx';

function Diaper(props) {
  return (
    <div>
      <DiapersForm onDiaperSubmit={props.onDiaperSubmit} />
      <DiapersList diapers={props.diapers} onDelete={props.onDelete} />
      <DiaperChart diapers={props.diapers} />
    </div>
  );
}

export default Diaper;