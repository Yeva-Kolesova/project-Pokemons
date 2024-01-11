import { Chart as ChartJS, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(...registerables);

export const data = {
  labels: [
    'Main expenses',
    'Products',
    'Car',
    'Self care',
    'Child care',
    'Household products',
    'Education',
    'Leisure',
    'Other expenses',
  ],
  datasets: [
    {
      data: [
        8700.0, 3800.74, 1500.0, 800.0, 2208.5, 300.0, 3400.0, 1230.0, 610.0,
      ],
      backgroundColor: [
        'rgba(254, 208, 87, 1)',
        'rgba(255, 216, 208, 1)',
        'rgba(253, 148, 152, 1)',
        'rgba(197, 186, 255, 1)',
        'rgba(110, 120, 232, 1)',
        'rgba(74, 86, 226, 1)',
        'rgba(129, 225, 255, 1)',
        'rgba(36, 204, 167, 1)',
        'rgba(0, 173, 132, 1)',
      ],
    },
  ],
};

export function Chart() {
  const options = {
    cutoutPercentage: 70,
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      afterDraw: chart => {
        const ctx = chart.ctx;
        const width = chart.width;
        const height = chart.height;
        const fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + 'em Arial';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#000';
        const text = '24000.00';
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;
        ctx.fillText(text, textX, textY);
      },
    },
    maintainAspectRatio: false,
    responsive: false,
    width: 288,
    height: 288,
  };

  return <Doughnut data={data} options={options} />;
}
