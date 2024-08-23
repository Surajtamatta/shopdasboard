import { Card, Pagination, Table } from "antd";

import { TableWrap, UserStyles } from "@/styles/views/TableAnalytics";

import Button from "@/components/Button";
import Link from "next/link";

import { useEffect, useState } from "react";

import { useChartContext } from "@/contexts/Month";

type Transaction = {
  _id: string;
  id: number;
  title: string;
  description: string;
  price: number;
};

interface TableTransaction {
  transactions: Transaction[];
  totalPages: number;
}
const TableAnalytics = () => {
  const { period } = useChartContext();

  const [month, setMonth] = useState<String>("");
  const [tabledata, setTableData] = useState();
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(10);
  const [searchText, setSearchText] = useState<string>("");

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

  const tabledatarow: TableTransaction = tabledata || {
    transactions: [],
    totalPages: 0,
  };

  const tableData = tabledatarow.transactions.map((item, index) => ({
    key: index,
    ...item,
  }));
  useEffect(() => {
    fetchTableData();
  }, [month, period, page, searchText, perPage]);

  return (
    <TableWrap>
      <Card
        title="New Users"
        style={UserStyles}
        extra={
          <Link href={"/admin/user-list"}>
            {" "}
            <Button type="button" label="View" variant="block" />
          </Link>
        }
      >
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
      </Card>
    </TableWrap>
  );
};
export default TableAnalytics;
