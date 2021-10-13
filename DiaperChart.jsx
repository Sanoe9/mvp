import React from 'react';
import { Bar } from 'react-chartjs-2';


const DiaperChart = (props) => {
  console.log('🥺', props.diapers);
  const arrayOfXData = props.diapers.map(diaper => (Number(diaper.note)));
  const arrayOfYData = props.diapers.map(diaper => (diaper.time));
  console.log('😎', arrayOfXData);
  console.log('🥵', arrayOfYData.reverse());
  return (<div>
    <h5>Diapers' Chart</h5>
    <Bar
      data={{
        labels: arrayOfYData,
        datasets:[{
          label: 'Diapers',
          // data: [2, 4, 6, 8, 10],
          data: arrayOfXData.reverse(),
          backgroundColor: 'yellow',
          barThickness: 20
        }]
      }}
      options={{
        title: {
          display: true,
          test: 'Diapers of the day',
          fontSize: 20
        },
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
    />
  </div>
  );
};

export default DiaperChart;