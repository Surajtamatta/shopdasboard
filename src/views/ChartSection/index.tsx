
import {
  GraphSection,
} from "@/styles/views/ChartSection";
import BarCharts from "@/components/BarChart";
import { useEffect, useState } from "react";
import { useChartContext } from "@/contexts/Month";
import PieCharts from "@/components/PieChart";



const ChartSection = () => {

const { period } = useChartContext();

const [loading, setLoading] = useState<boolean>(false);
  const [month,setMonth ] = useState<String>("")
  const [data, setData] = useState();
 

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
    setMonth("march")
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
  }, [period]);

  return (
    <GraphSection>

            <BarCharts bardata={data}/>
            <PieCharts piedata={piedata}/>
  
    </GraphSection>
  );
};

export default ChartSection;
