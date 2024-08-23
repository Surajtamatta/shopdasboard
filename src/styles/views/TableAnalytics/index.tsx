

import styled from "styled-components";
interface Props {
  key?: string | number;
  children?: any;
}
export interface StatusProps {
  isRefund: boolean;
  children?: any
}
export const TableWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const UserStyles = {
  flex: 1,
};

export const OrderStyles = {
  flex: 1,
};

export const CardWrap = styled.div`
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

export const DetailSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
gap: 10px;

`;

export const Follow = styled.h1`
  padding: 5px 10px;
  background: transparent;
  text-decoration: none;
  color: #e69222;
  font-size: 14px;
  font-style: italic;
`;



export const Status = styled(Follow)<StatusProps>`
width: 100%;
text-align: center;
max-width: 90px;
  border: 1px solid #e69222;
  border-radius: 7px;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => (props.isRefund ? "red" : "skyblue")};
  color: white;

  &:hover {
    background-color: ${(props) => (props.isRefund ? "red" : "skyblue")};
    color: white;
  }
`;

export const Profile = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Demographic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Name = styled.p`
  font: normal normal 600 15px "Lexend", sans-serif;
`;
export const Designation = styled.p`
  font: normal normal 400 13px "Lexend", sans-serif;
  color: gray;
`;
