import styled from "styled-components";

export const CardStyles = {
  width: "100%",
};

export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  .ant-progress-bg {
    background-color: #e69222;
  }
`;

export const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h1`
  font: normal normal 500 18px "Lexend", sans-serif;
`;
export const Count = styled.h1`
  font: normal normal 600 26px "Lexend", sans-serif;
`;
export const BottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SubTitle = styled.p`
  color: grey;
  font: normal normal 500 14px "Lexend", sans-serif;
`;
