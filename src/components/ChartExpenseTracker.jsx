import React from "react";
import Chart from "react-apexcharts";

const options = {
  labels: ["Income", "Expense"],
  colors: ["#213ebf", "#FD5E53"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#213ebf", "#FD5E53"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};

const ChartExpenseTracker = ({ expense, income }) => {
  return (
    <Chart
      options={options}
      width={"100%"}
      height={"100%"}
      type="pie"
      series={[income, expense]}
    />
  );
};

export default ChartExpenseTracker;
