import React, { useEffect, useState } from "react";
import { Container, GridContainer } from "@/styles/User-list";
import Card from "@/components/Card";
import { StatsCards } from "@/components/StatsCards";
import AnalyticsCard from "@/components/AnalyticsCard";
import { Table, Pagination } from "antd";
import LineCharts from "@/components/LineChart";
import { useMonthContext } from "@/contexts/Month";

interface StatisticsData {
  totalSales: number;
  totalItemsSold: number;
  totalItemsNotSold: number;
  averagePrice: number;
}
type Transaction = {
  _id: string;
  id: number;
  title: string;
  description: string;
};

interface TableTransaction {
  transactions: Transaction[];
  totalPages: number;
}
const UserList = () => {
  const { month } = useMonthContext();
  const [linedata, setLineData] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  // const [month, setMonth] = useState<String>("");
  const [staticdata, setStaticData] = useState<StatisticsData>({
    totalSales: 0,
    totalItemsSold: 0,
    totalItemsNotSold: 0,
    averagePrice: 0,
  });

  const [tabledata, setTableData] = useState();
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(10);
  const [searchText, setSearchText] = useState<string>("");

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
      setStaticData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchLineChart = async () => {
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
      setLineData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchTableData = async () => {
    try {
      const response = await fetch("/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          search: searchText,
          page,
          perPage,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setTableData(result);
      setTotal(result.totalPages * perPage); // total should be the total count of records
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text: any) => `$${text}`,
    },
  ];

  // const transactions = tabledata?.transactions || []; // Access the transactions array, fallback to empty array if undefined

  const tabledatarow: TableTransaction = tabledata || {
    transactions: [],
    totalPages: 0,
  };

  // Extract transactions and map them to include a key
  const tableData = tabledatarow.transactions.map((item, index) => ({
    key: index,
    ...item,
  }));

  useEffect(() => {
    fetchTableData();
    fetchLineChart();
    fetchStatistics();
  }, [month, page, searchText, perPage]);

  return (
    <Container>
      <Card title="Metrics">
        <GridContainer>
          <Container>
            <StatsCards
              label="Transaction"
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              }
              bgColor="linear-gradient(to right, #60a5fa, #3b82f6)"
            />
            <GridContainer>
              <AnalyticsCard
                title="Total Sales Amount"
                value={staticdata?.totalSales}
                loading={loading}
                subtitle="All product sales"
              />
              <AnalyticsCard
                title="Total Sold Items"
                value={staticdata?.totalItemsSold || 0}
                loading={loading}
                subtitle="Not Sold Product"
              />
            </GridContainer>
          </Container>
          <LineCharts linedata={linedata} />
        </GridContainer>
      </Card>

      <Table
        columns={columns}
        dataSource={tableData}
        rowKey="id"
        pagination={false} // Disable default pagination in Table
      />
      <Pagination
        current={page}
        total={tabledatarow?.totalPages}
        pageSize={perPage}
        onChange={handlePageChange}
        style={{ marginTop: 16 }}
        align="end"
      />
    </Container>
  );
};

export default UserList;
