import React from 'react';
import { Typography, Select } from 'antd';
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import {
  LineChartContainer,
  Title,
  TypographyContent,
  LineChart,
} from '@/styles/Charts';

import { useChartContext } from '@/contexts/Month';

ChartJS.register(LineElement, LineController, PointElement, LinearScale, CategoryScale);

const LineCharts = ({linedata}:any) => {
  const { setPeriod } = useChartContext();
  const maxCount = Math.max(...(linedata?.map((item: any) => item.count) || [0]));

  const data = {
    labels:linedata?.map((range:any) => (range.range)),
    datasets: [
      {
        data: linedata?.map((count:any) => (count.count)),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: maxCount+1,
        beginAtZero: true,
        ticks: {
          stepSize: 100,
        },
        title: {
          display: true,
          text: 'number of items',
          font: {
            size: 12,
            weight: 'bold' as 'bold', // Ensure the type is compatible
          },
        },
        grid: {
          display: true,
        }
      },
      x: {
        ticks: {
          stepSize: 100,
        },
        title: {
          display: true,
          text: 'price range',
          font: {
            size: 12,
            weight: 'bold' as 'bold', // Ensure the type is compatible
          },
        },
        grid: {
          display: false,
        }
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  const handleChange = (value: string) => {
    setPeriod(value) 
   };

  return (
    <LineChartContainer>
      <Title>
        <TypographyContent>
          <Typography.Paragraph style={{ margin: 0 }}>
            Product
          </Typography.Paragraph>
          <Typography.Title level={4} style={{ margin: 0, fontWeight: 700 }}>
           { linedata?.reduce((sum: number, item: any) => sum + item.count, 0) || 0}
          </Typography.Title>
        </TypographyContent>
        <Select
          defaultValue="january"
          style={{ width: 100,height:30 }}
          onChange={handleChange}
          options={[
            { value: 'january', label: 'january' },
            { value: 'february', label: 'february' },
            { value: 'march', label: 'march' },
            { value: 'april', label: 'april' },
            { value: 'may', label: 'may' },
            { value: 'june', label: 'june' },
            { value: 'july', label: 'july' },
            { value: 'august', label: 'august' },
            { value: 'september', label: 'september' },
            { value: 'october', label: 'october' },
            { value: 'november', label: 'november' },
            { value: 'december', label: 'december' },        
          ]}
          />
      </Title>
      <LineChart>
        <Line data={data} options={options} />
      </LineChart>
    </LineChartContainer>
  );
};

export default LineCharts;
