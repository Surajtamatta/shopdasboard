import React from "react";
import GraphSection  from "@/views/Metrics/GraphSection";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Container, DashboardWrap } from "@/styles/views/Main";
import Link from "next/link";


const GraphPage = () => {
  return (
    <Container>
      <DashboardWrap>
          <Link href="/">
            <Button icon={<ArrowLeftOutlined rev={undefined} />}>Back</Button>
          </Link>
          <GraphSection />
      </DashboardWrap>
    </Container>
  );
};

export default GraphPage;
