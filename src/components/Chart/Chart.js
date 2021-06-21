import React from 'react';
import Chartbar from './Chartbar';
import './Chart.css';

const Chart = (props) => {
  return (
    <div className='chart'>
      {props.dataPoint.map((dataPoint) => (
        <Chartbar
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
