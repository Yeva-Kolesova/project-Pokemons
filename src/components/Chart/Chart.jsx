import { Chart as ChartJS, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// import { useSelector } from 'react-redux';
// import { selectBalance } from 'reduxConfig/auth/selectors';

ChartJS.register(...registerables);

export function Chart() {
  // const balance = useSelector(selectBalance);

  const data = {
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

  const options = {
    cutout: '70%',
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    width: 288,
    height: 288,
  };

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx } = chart;
      ctx.save();
      ctx.font = 'bold 18px Poppins';
      ctx.fillStyle = '#fbfbfb';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        '₴ 24 000.00',
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  return (
    <div
      style={{
        width: '288px',
        height: '288px',
      }}
    >
      <Doughnut data={data} options={options} plugins={[textCenter]} />
    </div>
  );
}
