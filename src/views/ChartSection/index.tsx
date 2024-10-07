
import {
  GraphSection,
} from "@/styles/views/ChartSection";
import BarCharts from "@/components/BarChart";
import { useEffect, useState } from "react";
import { useMonthContext } from "@/contexts/Month";
import PieCharts from "@/components/PieChart";



const ChartSection = () => {

const { month ,setMonth} = useMonthContext();

const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState();
 

  const [piedata, setPieData] = useState();

  const fetchPie = async () => {

    try {
      const response = await fetch("/api/pie-chart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ month: `${month}` }), 
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
        body: JSON.stringify({ month: `${month}` }), 
      });

      if (!response.ok) {
        throw new Error("Failed to fetch statistics");
      }
      const data = await response.json();
      setData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPie();
    fetchStatistics();
  }, [month]);

  return (
    <GraphSection>

            <BarCharts bardata={data}/>
            <PieCharts piedata={piedata}/>
  
    </GraphSection>
  );
};

export default ChartSection;
