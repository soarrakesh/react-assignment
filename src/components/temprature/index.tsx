import { Line } from 'react-chartjs-2';
import { ChartItem, ChartTitle } from '../chart';
import { getLineChartData, TempProps } from './line-chart';

type TempratureProps = {
  data: TempProps;
};

const Temprature = (props: TempratureProps) => {
  return (
    <ChartItem>
      <ChartTitle>Temperature min and max</ChartTitle>
      <Line
        id='assignment-line-chart'
        data={getLineChartData(props.data)}
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

export default Temprature;
