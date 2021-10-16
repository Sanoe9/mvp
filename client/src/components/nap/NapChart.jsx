import React from 'react';
import { Bar } from 'react-chartjs-2';


const NapChart = (props) => {
  const arrayOfXData = props.naps.map(nap => (Number(nap.note.substring(0, 1))));
  const arrayOfYData = props.naps.map(nap => (nap.time));
  return (<div style={{height: "300px", width: "300px"}}>
    <h5>Naps' Chart</h5>
    <Bar
      data={{
        labels: arrayOfYData,
        datasets:[{
          label: 'Naps',
          // data: [2, 4, 6, 8, 10],
          data: arrayOfXData.reverse(),
          backgroundColor: 'blue',
          barThickness: 20
        }]
      }}
      options={{
        title: {
          display: true,
          test: 'Naps of the day',
          fontSize: 20
        },
        responsive: true,
        maintainAspectRatio: false,
        // showlines: false,
        scales:{
          xAxes: [
            {
              gridLines: {
                color: 'cyan'
              },
              scaleLabel: {
                labelString: 'Hours',
                display: true,
                fontColor: 'yellow',
                fontSize: 15
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                color: 'cyan'
              },
              scaleLabel: {
                labelString: 'Hours',
                display: true,
                fontColor: 'yellow',
                fontSize: 15
              },
              ticks:{
                beginAtZero: true
              }
            }
          ]
        }
      }}
      height={5}
      width={2}
    />
  </div>
  );
};

export default NapChart;