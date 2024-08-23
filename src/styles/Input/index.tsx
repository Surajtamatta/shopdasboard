import { InputStyledPropType } from "@/interfaces/components/Input";
import styled from "styled-components";

const getStyledInput = ({ variant }: InputStyledPropType) => {
  switch (variant) {
    case "normal":
      return `
             border: 1px solid #8c8c8c;
             utline: none;
             width: 100%;
            min-height: 48px;
            font-size: 16px;
             `;
    case "styled":
      return `
            width:100%;
             height: 45px;
            font-size: 16px;
            outline: none;
            border: none;
            border-bottom: 1px solid #c2c2c2;
            padding: 0px;
            @media (max-width: 768px) {
                font-size: 16px;
            }
             `;
    case "borderless":
    return `
          width:100%;
          height: 45px;
          font-size: 16px;
          outline: none;
          border: none;
          padding: 0px;
          background:transparent;
          @media (max-width: 768px) {
              font-size: 16px;
          }
            `;
  }
};

export const Input = styled.input<InputStyledPropType>`
  ${({ variant }) => getStyledInput({ variant })}
    font-size: 16px;
    color: #8c8c8c;
    line-height: 40px;
    text-indent: 10px;
`;
