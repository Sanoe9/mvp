import React from 'react';
import { Bar } from 'react-chartjs-2';


const NapChart = (props) => {
  console.log('🥺', props.naps);
  const arrayOfXData = props.naps.map(nap => (Number(nap.note.substring(0, 1))));
  const arrayOfYData = props.naps.map(nap => (nap.time));
  console.log('😎', arrayOfXData);
  console.log('🥵', arrayOfYData.reverse());
  return (<div>
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
      // height={10}
      // width={20}
    />
  </div>
  );
};

export default NapChart;