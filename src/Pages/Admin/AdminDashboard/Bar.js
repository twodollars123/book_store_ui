import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      //   text: "View of daily",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Doanh thu theo tháng",
      backgroundColor: [
        "#b5ddd1",
        "#d7e7a9",
        "#d3c0f9",
        "#f99a9c",
        "#fdbccf",
        "#c45850",
        "#87CEFA",
      ],
      data: [200000, 100000, 1000000, 8000000, 8888888],
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
