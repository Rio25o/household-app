/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Transaction } from "../types";
import { calculateDailyBalances } from "../utils/financeCalculations";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  monthlyTransactions: Transaction[];
}

const BarChart = ({ monthlyTransactions }: BarChartProps) => {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      // legend: {
      //   position: "top" as const,
      // },
      title: {
        display: true,
        text: "日別収支",
      },
    },
  };

  const dailyBalances = calculateDailyBalances(monthlyTransactions);
  console.log(dailyBalances);
  console.log(monthlyTransactions);

  const dateLabels = Object.keys(dailyBalances);
  console.log(dateLabels);
  const expenseDate = dateLabels.map((day) => dailyBalances[day].expense);
  const incomeDate = dateLabels.map((day) => dailyBalances[day].income);
  console.log(expenseDate);
  console.log(incomeDate);

  const labels = [
    "2024-01-10",
    "2024-01-15",
    "2024-01-17",
    "2024-01-18",
    "2024-01-20",
    "2024-01-25",
    "2024-01-29",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "支出",
        data: [100, 200, 300, 400, 500, 600, 600, 700],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "収入",
        data: [900, 800, 700, 600, 500, 400, 300, 200],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;
