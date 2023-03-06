import { ChangeEvent, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { getBarChartData, HumidityDataProps } from './bar-chart';
import { ChartItem, ChartTitle } from '../chart';
import DataLimit from '../data-limit';

type HumidityProps = {
  data: HumidityDataProps;
};

const Humidity = (props: HumidityProps) => {
  const [limit, setLimit] = useState<number | string>(10);
  const [records, setRecords] = useState<number>(10);

  const optionChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const value = event.target.value;
    setLimit(value);
    const recordNums =
      value === 'all' ? props.data.time.length : parseInt(value);
    setRecords(recordNums);
  };
  return (
    <ChartItem>
      <ChartTitle>Relative humidity</ChartTitle>
      <DataLimit
        id='humidiy-option'
        name='humidity-option'
        onChange={optionChangeHandler}
        selectedOption={limit}
      />
      <Bar
        id='assignment-bar-chart'
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }}
        data={getBarChartData(props.data, records)}
      />
    </ChartItem>
  );
};

export default Humidity;
