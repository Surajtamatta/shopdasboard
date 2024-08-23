
import styled from "styled-components";
interface IconProps {
  children?: any;
  onClick?: (event: React.FormEvent<HTMLFormElement>) => void; // Define onSubmit prop
  xmlns: string;
  fill: string;
  viewBox: string;
  stroke: string;
}


interface IncomeProps {
  children?:React.ReactNode
  $bgColor:string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 8px;
  overflow: hidden;
  min-height: 150px;
`;




export const IncomeCard = styled(Card)<IncomeProps>`
  width: 100%;
  background: ${(props) => props.$bgColor};
`;

export const UsersCard = styled(Card)`
  background-image: linear-gradient(to right, #60a5fa, #3b82f6);
`;

export const Amount = styled.div`
  position: relative;
  margin-bottom: 10px;
  color: #000;
  font-size: 40px;
  font-weight: 600;
  line-height: 1;
`;

export const Label = styled.div`
  position: relative;
  color: rgba(0, 0, 0, 0.8);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
`;

export const Icon = styled.svg<IconProps>`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100px;
  height: 100px;
  margin-right: -20px;
  margin-bottom: -20px;
  color: rgba(0, 0, 0, 0.5);
`;
