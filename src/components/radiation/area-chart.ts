import { format } from 'date-fns';

export type RadiationDataType = {
  time: string[];
  direct_radiation: number[];
};
export const getAreaChartData = (
  radiationData: RadiationDataType,
  limit: number
) => {
  const datasets = {
    labels: radiationData.time
      .slice(0, limit)
      .map((label: string) => format(new Date(label), 'dd-MMM-yy HH:mm')),
    datasets: [
      {
        label: 'Series 1',
        data: radiationData.direct_radiation.slice(0, limit),
        fill: true,
        borderColor: '#2196f3',
        backgroundColor: '#2196f3',
        borderWidth: 1
      }
    ],
    fill: true
  };

  return datasets;
};
