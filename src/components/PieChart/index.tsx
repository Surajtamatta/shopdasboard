
import React,{useState} from 'react'
import { Typography, } from 'antd'
import {Chart as ChartJS, DoughnutController, LineElement, PointElement, LinearScale,CategoryScale, BarController,
  BarElement} from 'chart.js/auto'

import {Doughnut} from 'react-chartjs-2'
import {
  LineChartContainer,
  Title,
  TypographyContent,
  LineChart
} from "@/styles/Charts";
import { useMonthContext } from '@/contexts/Month';
import MonthSelect from '../Select';

ChartJS.register(
  LineElement,
  DoughnutController,
  PointElement,
  LinearScale,
  CategoryScale,
  BarController,
  BarElement
)

const PieCharts = ({piedata}:any) => {
 
  const data = {
    labels: piedata?.map((category:any) => (category.category)),
    datasets: [{
      data:  piedata?.map((count:any) => (count.count)),
      //fill: false,
      backgroundColor: [
        'rgb(255, 99, 133)',
        'rgb(255, 160, 64)',
        'rgb(255, 204, 86)',
        'rgb(75, 192, 192)',
        'rgba(54, 162, 235)',
        'rgba(153, 102, 255)',
        'rgba(201, 203, 207)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      hoverOffset:30,
      borderWidth: 1,
      tension: 0.1
    }]
  };
const options={
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: true,
    },
    
  },
  
  }




   
  return (
    <LineChartContainer>
       <Title>
        <TypographyContent>
          <Typography.Paragraph style={{ margin: 0 }}>
            Product
          </Typography.Paragraph>
          <Typography.Title level={4} style={{ margin: 0, fontWeight: 700 }}>
          { piedata?.reduce((sum: number, item: any) => sum + item.count, 0) || 0}
          </Typography.Title>
        </TypographyContent>
        <MonthSelect/>
      </Title> 
       <LineChart>
           <Doughnut  data={data}  options={options} />      
      </LineChart> 
    </LineChartContainer>
  );
}

export default PieCharts

