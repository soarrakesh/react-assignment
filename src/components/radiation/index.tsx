import { Line } from 'react-chartjs-2';
import { ChartItem, ChartTitle } from '../chart';
import { getAreaChartData, RadiationDataType } from './area-chart';
import { ChangeEvent, useState } from 'react';
import DataLimit from '../data-limit';

type RadiationProps = {
  data: RadiationDataType;
};

const Radiation = (props: RadiationProps) => {
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
      <ChartTitle>Direct radiation</ChartTitle>
      <DataLimit
        id='humidiy-option'
        name='humidity-option'
        onChange={optionChangeHandler}
        selectedOption={limit}
      />
      <Line
        id='assignment-area-chart'
        data={getAreaChartData(props.data, records)}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false
            }
          }
        }}
      />
    </ChartItem>
  );
};

export default Radiation;
