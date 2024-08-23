import { styled } from 'styled-components'

export const Container = styled.div<{iswidth:boolean}>`
  background: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  max-width: ${props=>(props.iswidth ? '180px' : '65px')};
  min-width: ${props=>(props.iswidth ? '180px' : '65px')};
  user-select: none;
  transition: all 1s ease;
  gap: 20px;
 &::-webkit-resizer{
  height: 100%;
  width: 5px;
 }
 @media (max-width:600px){
  max-width: ${props=>(props.iswidth ? '140px' : '55px')};
  min-width: ${props=>(props.iswidth ? '140px' : '55px')};
  gap: 10px;
 }
`;



export const LogoWrapper = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  max-height: 50px;
  min-height: 50px;
  display:flex;
  color: #316e5a;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #edfcf8;
  transition: all 1s ease;
  @media (max-width:600px){
    max-height: 40px;
    padding: 0 10px;
 }
`;

export const Nav = styled.ul`
  align-items: flex-start;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  background-color: #edfcf8;
  justify-content:flex-start;
  position: relative;
  width: 100%;
  /* padding: 10px 0; */
  height: 100%;
  overflow-y: auto;
  transition: all 1s ease;
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 50%;
    right: 3px;
  }
  @media (max-width:600px){
  gap: 0;
 }
`;

export const List = styled.li`
  align-items: center;
  align-self: stretch;
  display: flex;
  gap: 16px;
  color: #607eaa;
  position: relative;
  width: 100%;
  padding: 10px;
  transition: all 1s ease;
  &:hover {
    color: #3f5a82;
    svg {
      background-color: #3f5a82;
      color: white;
      box-shadow: 0px 9px 15px #1c3e6024;
    }
  }
  @media (max-width:600px){
  gap: 0;
 }
  
`;
export const Text = styled.h1<{ iswidth: boolean }>`
  font-family: "Plus Jakarta Sans", Helvetica;
  font-size: 16px;
  font-weight: 600;
  display: ${(props) => (props.iswidth ? "flex" : "none")};
  transition: all 0.5s ease-in-out;
  justify-content: center;
  align-items: center;
  letter-spacing: 0;
  line-height: normal;
  padding: 8px;
  position: relative;
  width: fit-content;
  transition: all 1s ease;
  @media (max-width:600px){
    padding: 5px;
    font-size: 14px;
 }
`;

export const Title = styled.h1`
  font-family: "Plus Jakarta Sans", Helvetica;
  font-size: 14px;
  width: 100%;
  font-weight: 400;
  display:flex;
  color: #3f5a82c7;
  justify-content: flex-start;
  align-items: center;
  letter-spacing: 0;
  padding: 0 8px;
  text-align: center;
  transition: all 1s ease;
  line-height: normal;
  position: relative;
  @media (max-width:600px){
    padding: 0;
    font-size: 12px;
 }
 
`;

export const LogOutWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  align-items: center;
  display: flex;
  gap: 16px;
  color: #030303;
  border-radius: 8px;
  background-color: #edfcf8;
  transition: all 1s ease;
  color: #316e5a;
`;

export const StyleIcon = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
  svg {
    padding: 5px;
    width: 100%;
    height: 100%;
    min-height: 30px;
    font-size: 35px;
    border-radius: 8px;

  }
  @media (max-width:600px){
    /* max-height: 35px;
    max-width: 35px; */
    /* min-height: 35px;
    min-width: 35px; */
  svg {
  font-size: 35px;

  }
 }
  
`;

