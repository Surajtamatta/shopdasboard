import styled from "styled-components";

export const CardSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  /* display: grid;
  grid-template-columns: repeat(4, 1fr); */
  gap: 20px;

  /* @media (max-width: 1020px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  } */
`;

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1020px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Title = styled.h1`
  font: normal normal 500 18px "Lexend", sans-serif;
`;

export const Content = styled.div`
  width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
`;