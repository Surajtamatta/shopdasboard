import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  .ant-layout-content {
    padding: 0 !important;
  }
`;

export const DashboardWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-x: auto;
  border-radius: 10px;
  @media (max-width:600px) {
        gap: 10px;
  }
`;

