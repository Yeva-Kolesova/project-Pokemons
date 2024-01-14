import { Chart as ChartJS, registerables } from 'chart.js';
import { formatNumber } from 'components/StatisticsTable/StatisticsTable';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectSummary } from 'reduxConfig/statistics/selectors';

ChartJS.register(...registerables);

export const coloredCategoriesMap = new Map([
  ['Entertainment', '#ff85d2'],
  ['Car', 'rgb(255, 104, 109)'],
  ['Products', 'rgb(255, 157, 137)'],
  ['Main expenses', 'rgb(254, 208, 87)'],
  ['Leisure', 'rgb(91, 255, 167)'],
  ['Other expenses', 'rgb(0, 173, 95)'],
  ['Education', 'rgb(115, 222, 255)'],
  ['Self care', 'rgb(170, 154, 255)'],
  ['Child care', 'rgb(87, 101, 255)'],
  ['Household products', 'rgb(114, 61, 239)'],
]);

export function Chart() {
  const summary = useSelector(selectSummary);

  const periodSummary = summary.categoriesSummary
    ? summary.categoriesSummary
        .filter(category => category.type === 'EXPENSE')
        .map(category => ({
          ...category,
          color: coloredCategoriesMap.get(category.name),
        }))
        .sort((a, b) => a.total - b.total)
    : [];

  const data = {
    datasets: [
      {
        data: periodSummary.map(expense => expense.total),
        backgroundColor: periodSummary.map(expense => expense.color),
        boxShadow: '0px 0px 8px 0px #000 inset',
      },
    ],
  };

  const noData = {
    datasets: [
      {
        data: [0.0000000001],
        backgroundColor: ['rgba(111, 111, 111, 0.7)'],
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

  return (
    <div
      style={{
        width: '288px',
        height: '288px',
        position: 'relative',
      }}
    >
      {periodSummary.length ? (
        <Doughnut data={data} options={options} />
      ) : (
        <Doughnut data={noData} options={options} />
      )}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            fontFamily: 'Poppins',
            color: 'var(--white)',
          }}
        >
          ₴ {formatNumber(summary.expenseSummary)}
        </span>
      </div>
    </div>
  );
}
