import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ globalData }) => {
  const { confirmed, deaths, recovered } = globalData;

  return (
    <Bar
      data={{
        labels: ["Confirmed", "Deaths", "Recovered"],
        datasets: [
          {
            label: "Number of cases",
            data: [confirmed, deaths, recovered],
            backgroundColor: [
              "rgba(49, 183, 249, 0.6)",
              "rgba(249, 49, 49, 0.6)",
              "rgba(49, 249, 109, 0.6)",
            ],
            borderColor: [
              "rgba(49, 183, 249, 1)",
              "rgba(249, 49, 49, 1)",
              "rgba(49, 249, 109, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }}
      width={600}
      height={400}
      options={{ maintainAspectRatio: false, showLines: false }}
    />
  );
};

export default BarChart;
