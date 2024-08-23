import styled from "styled-components";


interface FormProps {
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void; // Define onSubmit prop
    children:React.ReactNode
  }
  
  interface ElementContainerinterface{
    children?:React.ReactNode
   }
   
export const FormWrapper = styled.form<FormProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`
export const ElementContainer = styled.div<ElementContainerinterface>`
    width: 100%;
    max-width: 700px;
    min-height: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media only screen and (max-width:460px){
        justify-content: flex-start;
        gap: 10px;
        align-items: flex-start;
        flex-direction: column;
    }
    `

export const TitleContainer = styled.div`
    width: 100%;
    max-width: 200px;
    min-width: max-content;
    font-size: 16px;
    color: #8c8c8c;
    line-height: 40px;
    text-indent: 10px;
    `
export const InputContainer = styled.div`
    width: 100%;
`


export const ButtonWrap = styled.div`
   width :100% ;
   display: flex;
   flex-direction: row;
   justify-content: flex-end;
   gap: 8px;
`

export const Text = styled.h2`
  width: 100%;
  font-size: "25px";
  font-weight: 400;
  font-family: "Lexend", sans-serif;
  color: white;
  text-align: center;
`;


export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  width: 100%;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;