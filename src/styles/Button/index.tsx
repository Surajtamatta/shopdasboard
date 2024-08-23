import { IStyledButton } from "@/interfaces/components/Button";
import styled from "styled-components";

const getButtonStyles = ({ variant }: IStyledButton) => {
  switch (variant) {  
    case "contained":
      return `
      background:white;
      color: #1D1D1D;
      border: 2px solid #ebb329;
      `;
    case "cancel":
      return `
      background: black;
      color: #ffff;
      border: none;
      
      `;
    case "outline":
      return `
      background: none;
      color: #1D1D1D; 
      border: 1px solid #1d1d1d;
      `;
    case "text":
      return `
      background: #F1F1F1;
      color: none;
      border: none;
      `;
    case "transparent":
      return `
      background: #1D2E88;
      color: rgba(255, 255, 255, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.5);
      `;
    case "block":
      return `
      background: none;
      color: #1D1D1D;
      border: 2px solid #ebb329;
      max-width:none
      `;
    default:
      return `
      background: #F9C51C;
      color: #1D1D1D;
      border: none;
      
      
     
  `;
  }
};

export const StyledButton = styled.button<IStyledButton>`
  width: 100%;
  max-width:130px;
  cursor: pointer;
  padding:5px ;
  ${({ variant }) => getButtonStyles({ variant })};
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: background-color 0.5s;
  &:hover {
    box-shadow: none;
    color: #000;
    background-color: #ebb329;
  }
  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
