import React from 'react';
import { Chart as ChartJs, LineElement, PointElement, CategoryScale, LinearScale, Filler, Tooltip, ChartData } from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJs.register(LineElement, PointElement, CategoryScale, LinearScale, Filler, Tooltip);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// type IChartProps = {
//   data: any[]
// };

export default function Chart() {
  const data: ChartData<'line', number[], string> = {
    labels,
    datasets: [
      {
        fill: true,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
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
