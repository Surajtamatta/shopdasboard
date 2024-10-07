import React, { useState } from 'react';
import { Typography, Select } from 'antd';
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarController,
  BarElement,
  FontSpec,
} from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import {
  LineChartContainer,
  Title,
  TypographyContent,
  LineChart,
} from '@/styles/Charts';
import MonthSelect from '../Select';

ChartJS.register(
  LineElement,
  LineController,
  PointElement,
  LinearScale,
  CategoryScale,
  BarController,
  BarElement
);

const BarCharts = ({bardata}:any) => {
  const maxCount = Math.max(...(bardata?.map((item: any) => item.count) || [0]));

  const data = {
    labels: bardata?.map((range:any) => (range.range)),
    datasets: [
      {
        data:bardata?.map((count:any) => (count.count)),
        fill: false,
        backgroundColor: [
          'rgb(255, 99, 133)',
          'rgb(255, 160, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderColor: [
          'rgb(156, 50, 80)',
          'rgb(150, 93, 36)',
          'rgb(142, 113, 47)',
          'rgb(44, 107, 107)',
          'rgb(23, 74, 111)',
          'rgb(78, 52, 131)',
          'rgb(59, 67, 85)',
        ],
        borderWidth: 4,
        tension: 0.1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: maxCount + 1,
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
        title: {
          display: true,
          text: 'number of items',
          font: {
            size: 12,
            weight: 'bold' as FontSpec['weight'],
          },
        },
        grid: {
          display:true,
        }
      },
      x: {
        ticks: {
          stepSize: 10,
        },
        title: {
          display: true,
          text: 'price range',
          font: {
            size: 12,
            weight: 'bold' as FontSpec['weight'],
          },
        },
        grid: {
          display: false,
        }
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
   
  return (
    <LineChartContainer>
      <Title>
        <TypographyContent>
          <Typography.Paragraph style={{ margin: 0 }}>
            Product
          </Typography.Paragraph>
          <Typography.Title level={4} style={{ margin: 0, fontWeight: 700 }}>
          { bardata?.reduce((sum: number, item: any) => sum + item.count, 0) || 0}
          </Typography.Title>
        </TypographyContent>
       <MonthSelect/>
      </Title>
      <LineChart>
        <Bar data={data} options={options} />
      </LineChart>
    </LineChartContainer>
  );
};

export default BarCharts;
