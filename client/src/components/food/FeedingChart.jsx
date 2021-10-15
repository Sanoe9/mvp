import React from 'react';
import { Bar } from 'react-chartjs-2';


const FeedingChart = (props) => {
  const arrayOfXData = props.feedings.map(feeding => (Number(feeding.note.substring(0, feeding.note.length - 2))));
  const arrayOfYData = props.feedings.map(feeding => (feeding.time));
  return (<div>
    <h5>Feedings' Chart</h5>
    <Bar
      data={{
        labels: arrayOfYData,
        datasets:[{
          label: 'Feedings',
          // data: [2, 4, 6, 8, 10],
          data: arrayOfXData.reverse(),
          backgroundColor: 'green',
          barThickness: 20
        }]
      }}
      options={{
        title: {
          display: true,
          test: 'Feedings of the day',
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
                labelString: 'Ounces',
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

export default FeedingChart;