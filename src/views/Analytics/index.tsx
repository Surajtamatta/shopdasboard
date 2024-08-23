import React, { useEffect, useState } from "react";
import AnalyticsCard from "@/components/AnalyticsCard";
import { CardSection,Wrapper ,Title,Content} from "@/styles/views/Analytics";
import { Select } from "antd";

interface StatisticsData {
  totalSales:number;
  totalItemsSold: number;
  totalItemsNotSold: number;
  averagePrice:number;
}

const Analytics = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [month,setMonth ] = useState<String>("")
  const [data, setData] = useState<StatisticsData>({
    totalSales: 0,
    totalItemsSold: 0,
    totalItemsNotSold: 0,
    averagePrice:0,
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch("/api/statistics", {
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
    fetchStatistics();
  }, [month]);

  
const handleChange = (value: string) => {
 setMonth(value) 
};
  return (
    <CardSection>
        <Content>
          <Title>Transctions Statistics</Title>
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
        </Content>
      <Wrapper>
      <AnalyticsCard 
        title="Total Sales Amount" 
        value={data?.totalSales} 
        loading={loading}
        subtitle="All product sales"
      />
        <AnalyticsCard
        title="Avrage Sales Amount" 
        value={data?.averagePrice} // Replace with actual data if available
        loading={loading}
        subtitle="Avrage Sales"
      />
      <AnalyticsCard 
        title="Total Sold Items" 
        value={data?.totalItemsSold || 0}
        loading={loading} 
          subtitle="Not Sold Product"
      />
      <AnalyticsCard
        title="Total Not Sold Items"
        value={data?.totalItemsNotSold || 0}
        loading={loading}
          subtitle="Sold Product"
      />
    
      </Wrapper>
    </CardSection>
  );
};

export default Analytics;
