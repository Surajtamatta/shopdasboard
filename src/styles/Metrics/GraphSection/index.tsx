import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns:1fr 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  @media (max-width:800px){
    grid-template-columns:1fr;
  }
  @media (max-width:600px){
    grid-template-columns:1fr;
    gap: 10px;
  }

`;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;

