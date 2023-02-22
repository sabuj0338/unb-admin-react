import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  ChartDataset,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { ChartColor } from "../utils/Colors";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       type: 'line' as const,
//       label: 'Dataset 1',
//       borderColor: ChartColor.blue,
//       backgroundColor: ChartColor.blueBackround,
//       borderWidth: 2,
//       tension: 0.3,
//       fill: false,
//       data: labels.map(() => Math.random()),
//     },
//     {
//       type: 'bar' as const,
//       label: 'Dataset 2',
//       borderColor: ChartColor.orange,
//       backgroundColor: ChartColor.orangeBackround,
//       data: labels.map(() => Math.random()),
//       borderWidth: 2,
//     },
//   ],
// };

type Props = {
  datasets?: ChartDataset[];
  labels?: string[];
  title?: string;
};

export default function MultiTypeChartWidget({
  datasets,
  labels,
  title,
}: Props) {
  return (
    <Chart
      options={{
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            position: "bottom" as const,
          },
          title: {
            display: true,
            text: title,
          },
        },
      }}
      type="line"
      data={{
        labels,
        datasets: datasets ?? [],
      }}
    />
  );
}
