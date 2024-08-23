import React from "react";
import { Card } from "antd";
import { CardProps } from "@/interfaces/components/Card";
const CardComponent = ({
  children,
  title,
  width,
  extra,
  ...rest
}: CardProps) => {
  return (
    <Card
      title={title}
      extra={extra}
      cover={rest.cover}
      tabList={rest.tabList}
      activeTabKey={rest.activeTabKey}
      onTabChange={rest.onTabChange}
      style={{ width: width }}

    >
      {children}
    </Card>
  );
};

export default CardComponent;
