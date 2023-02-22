import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useState } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top" as const,
//     },
//     title: {
//       display: true,
//       text: "New Users And Gold Mined",
//     },
//   },
// };

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Users",
//       data: [256, 400, 150, 300, 600],
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//       //   fill: true,
//       tension: 0.3,
//     },
//     // {
//     //   label: 'Gold Mined',
//     //   data: labels.map(() => Math.random()),
//     //   borderColor: 'rgb(53, 162, 235)',
//     //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     // //   fill: true,
//     //   tension: 0.3,
//     // },
//   ],
// };

type Props = {
  data?: number[];
  labels?: string[];
  label: string;
  title?: string;
  backgroundColor?: string;
  borderColor?: string;
};

export default function LineChart({
  data,
  labels,
  label,
  title,
  backgroundColor,
  borderColor,
}: Props) {
  return (
    <Line
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
      data={{
        labels,
        datasets: [
          {
            label: label,
            data: data,
            borderColor: borderColor,
            backgroundColor: backgroundColor,
            tension: 0.3,
            fill: true,
            pointBackgroundColor: borderColor,
          },
        ],
      }}
    />
  );
}
