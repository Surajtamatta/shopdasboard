import React, { useEffect, useState } from "react";

import { StatsCards } from "@/components/StatsCards";
import BarCharts from '@/components/BarChart'
import LineCharts from '@/components/LineChart'
import PieCharts from '@/components/PieChart'
import {
  StatsData,
} from "./Data";
import { Container, Wrapper } from "@/styles/Metrics/GraphSection";
import { useChartContext } from "@/contexts/Month";

 const GraphSection = () => {
  const { period } = useChartContext();

const [loading, setLoading] = useState<boolean>(false);
  
  const [bardata, setBarData] = useState();
  const [piedata, setPieData] = useState();

  const fetchPie = async () => {

    try {
      const response = await fetch("/api/pie-chart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ month: `${period}` }), 
      });

      if (!response.ok) {
        throw new Error("Failed to fetch statistics");
      }
      const data = await response.json();
      setPieData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchStatistics = async () => {
  
    try {
      const response = await fetch("/api/bar-chart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ month: `${period}` }), 
      });

      if (!response.ok) {
        throw new Error("Failed to fetch statistics");
      }
      const data = await response.json();
      setBarData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    fetchStatistics();
    fetchPie();
  }, [period]);


  console.log(bardata,piedata);
  
  return (
    <Container>
     <Wrapper>
     {
      StatsData && StatsData?.map((item,index)=>{
        return <StatsCards key={index} count={item.count} label={item.label} icon={item.icon} bgColor={item.bgColor} />
      })  
      }
     </Wrapper>

        <LineCharts  linedata={bardata}/>
        <BarCharts bardata={bardata}/>
        <PieCharts piedata={piedata}/>

    </Container>
  );
};

export default GraphSection;