import React from 'react';
import _ from 'lodash';
import { Chart as ChartJs, LineElement, PointElement, CategoryScale, LinearScale, Filler, Tooltip, ChartData } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJs.register(LineElement, PointElement, CategoryScale, LinearScale, Filler, Tooltip);

type IChartProps = {
  dataset: any[];
};

export default function Chart({ dataset }: IChartProps) {
  const data: ChartData<'line', number[], string> = {
    labels: _.map(dataset, (item) => item.label),
    datasets: [
      {
        fill: true,
        data: _.map(dataset, (item) => item.price),
        borderColor: '#ffeb82',
        borderWidth: 1,
        pointBorderWidth: 0,
        pointBackgroundColor: undefined,
        pointStyle: 'line',
        showLine: true,
        backgroundColor: 'rgba(255, 235, 130, 0.2)'
      }
    ]
  };
  return (
    <div className="w-full h-full my-[12px] flex-auto">
      <Line
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { grid: { display: false, borderColor: 'transparent' }, ticks: { color: '#ffffff' } },
            y: { grid: { display: false, borderColor: 'transparent' }, ticks: { display: false } }
          }
        }}
        data={data}
      />
    </div>
  );
}
