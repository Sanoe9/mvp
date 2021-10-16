import React from 'react';
import { Bar } from 'react-chartjs-2';

const FeedingChart = (props) => {
  const arrayOfXData = props.feedings.map(feeding => feeding.note);
  const arrayOfYData = props.feedings.map(feeding => (feeding.time));
  return (<div style={{height: "300px", width: "300px"}}>
    <Bar
      data={{
        labels: arrayOfYData,
        datasets:[{
          label: 'Feedings',
          data: arrayOfXData.reverse(),
          backgroundColor: 'rgb(131, 175, 174)',
          barThickness: 20
        }]
      }}
      options={{
        title: {
          display: true,
          test: 'Feedings of the day',
          fontSize: 20
        },
        responsive: true,
        maintainAspectRatio: false,
        showlines: false,
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
    />
  </div>
  );
};

export default FeedingChart;