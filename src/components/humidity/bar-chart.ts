import { format } from 'date-fns';
import { stringToColor } from '../../utils/common';

export type HumidityDataProps = {
  time: string[];
  relativehumidity_2m: number[];
};

export const getBarChartData = (
  humidityData: HumidityDataProps,
  limit: number
) => {
  const chartData = {
    labels: humidityData.time
      .slice(0, limit)
      .map((label: string) => format(new Date(label), 'dd-MMM-yy HH:mm')),
    datasets: [
      {
        label: 'Column chart for relative humidity',
        data: humidityData.relativehumidity_2m.slice(0, limit),
        backgroundColor: humidityData.time
          .slice(0, limit)
          .map((lable: string) => stringToColor(lable)),
        borderColor: humidityData.time
          .slice(0, limit)
          .map((lable: string) => stringToColor(lable)),
        borderWidth: 1
      }
    ]
  };

  return chartData;
};
