import React from 'react';
import { BarChart as MuiBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChartProps } from 'recharts';

const BarChart = ({ Graphdata }) => {
  return (
    <MuiBarChart width={250} height={200} data={Graphdata} layout="vertical" margin={{ top: 30, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid horizontal={false} />
      <XAxis type="number" />
      <YAxis dataKey="label" type="category" style={{ fontSize: '0.8rem' }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="quantity" fill="#3982fd" style={{ fontSize: '0.8rem' }} />
    </MuiBarChart>
  );
};

export default BarChart;
