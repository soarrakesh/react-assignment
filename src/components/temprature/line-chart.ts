import { format } from 'date-fns';

export type TempProps = {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
};

export const getLineChartData = (dailyData: TempProps) => {
  const datasets = {
    labels: dailyData.time.map((label: string) =>
      format(new Date(label), 'dd-MMM-yy')
    ),
    datasets: [
      {
        label: 'Max',
        data: dailyData.temperature_2m_max,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      },
      {
        label: 'Min',
        data: dailyData.temperature_2m_min,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  };

  return datasets;
};
