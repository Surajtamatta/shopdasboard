import styled from "styled-components";

export const LayoutContainer=styled.div`
 display: flex;
 justify-content: flex-start;
 align-items: flex-start;
    flex-direction: row;
    padding: 25px;
    margin: 0;
    width: 100%;
    height: 100vh;
    gap: 20px;
    @media (max-width:600px) {
        gap: 10px;
        padding: 10px;
  }
    
`
   
    
export const LayoutWrapper=styled.div`
    overflow-y:scroll ;
    width: 100%;
    border-radius: 10px;

    
`
   
export const LayoutContent=styled.div`
    display: flex ;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px; 
    width: 100%;
    height: 100%;
    border-radius: 10px;
    @media (max-width:600px) {
        gap: 10px;
  }
    
`