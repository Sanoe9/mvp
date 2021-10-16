import React from 'react';
import DiapersForm from './DiapersForm.jsx';
import DiapersList from './DiapersList.jsx';
import DiaperChart from './DiaperChart.jsx';

function Diaper(props) {
  return (
    <div id="diaper">
      <div className="formlist">
        <DiapersForm onDiaperSubmit={props.onDiaperSubmit} />
        <DiapersList diapers={props.diapers} onDelete={props.onDelete} />
      </div>
      <div className="chart">
        <DiaperChart diapers={props.diapers} />
      </div>
    </div>
  );
}

export default Diaper;