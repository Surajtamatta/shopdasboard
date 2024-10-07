import { useEffect, useState } from "react";
import Analytics from "@/views/Analytics";
import CalendarSection from "@/views/Calendar";
import ChartSection from "@/views/ChartSection";
import TableAnalytics from "@/views/Tables";
import { Container, DashboardWrap } from "@/styles/views/Main";
import BarCharts from "@/components/BarChart";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const [open, setOpen] = useState(false);
  open;
  useEffect(() => {
    setOpen(true);
  }, []);


  return (
    <Container>
      <DashboardWrap>
        <Analytics />
        <ChartSection />
        <TableAnalytics />
        <CalendarSection/>
      </DashboardWrap>
    </Container>
  );
};

export default Dashboard;
