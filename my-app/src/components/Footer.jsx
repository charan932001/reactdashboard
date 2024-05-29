import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Footer = () => {
const chartOptions = {
    chart: {
      id: 'basic-line',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000],
    },
  };

  const chartSeries = [
    {
      name: 'series-1',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];

  return (
    <div className="container4">
      <Chart options={chartOptions} series={chartSeries} type="line" width="700" />
    </div>
  );
};

export default Footer;
