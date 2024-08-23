import { useEffect, useState } from "react";
import { Card, Progress, Skeleton } from "antd";

import {
  BottomInfo,
  CardStyles,
  CardWrap,
  Count,
  SubTitle,
  Title,
  TitleSection,
  TopInfo,
} from "@/styles/views/AnalyticsCard";

const AnalyticsCard = ({value,loading,title,subtitle}:any) => {
 
  return (
    <Card style={CardStyles}>
      <Skeleton loading={loading} active>
        <CardWrap>
          <TopInfo>
            <TitleSection>
              {" "}
              <Title>{title}</Title>
              <SubTitle>{subtitle}</SubTitle>
            </TitleSection>
            <Count>{value}</Count>
          </TopInfo>
          <Progress percent={value} status="active" />
          <BottomInfo>
            <SubTitle>Change</SubTitle>
            <SubTitle>50%</SubTitle>
          </BottomInfo>
        </CardWrap>
      </Skeleton>
    </Card>
  );
};

export default AnalyticsCard;
