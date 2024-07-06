"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500, 3750], // Assuming these are static data points
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"], // Color array
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"], // Labels for each dataset entry
  };

  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  ); // Passing the correct data object
};

export default DoughnutChart;
