import { BsDisplay } from "react-icons/bs";
import styled from "styled-components";

export const GraphSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const ChartWrap = styled.div`
  width: 100%;
  height: 300px;
`;

export const GraphCardStyles = {
  flex: 2.5,
  width: "100%",
  height: "100%",
};

export const NotificationCardStyles = {
  width: "100%",
  height: "100%",
};

export const NotificationWrap = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: max-content;
  min-height: 30px;
  border-radius: 6px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: white;
`;
export const NotificationIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #e69222;
  color: white;
  border-radius: 7px;
  display: grid;
  place-items: center;

  .anticon {
    font-size: 20px;
  }
`;

export const CloseStyles = {
  color: "grey",
  cursor: "pointer",
};
