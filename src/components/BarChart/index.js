import React from 'react';
import { Bar } from 'react-chartjs-2';
import Typography from '@material-ui/core/Typography';

const getChartConfig = ( config ) => {
  const chartConfig = {
    labels: config.labels,
    datasets: [
      {
        label: config.label,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: config.data,
      }
    ]
  }
  return chartConfig;
};

const BarChart = (props) => {

  const chartConfig = getChartConfig(props);

  return (
    <div>
      <Typography>
        {props.title}
      </Typography>
      <Bar
        data={chartConfig}
        width={100}
        height={50}
        options={{
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
          }]
          },
          maintainAspectRatio: true
        }}
      />
    </div>
  );
}


export default BarChart;