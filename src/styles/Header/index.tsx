import {
  styled
} from "styled-components";
import {FiSearch} from 'react-icons/fi'
import { HiCurrencyDollar} from 'react-icons/hi'
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 50px;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  justify-content: flex-start;
  align-items: center;
 // gap: 10px;
  
`;
export const SearchContainer=styled.div`
  width: 100%;
  height:100% ;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  gap: 15px;
`
export const SearchWrapper = styled.div`
background-color: #edfcf8;

  border-radius: 12px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 500px;
  padding: 10px;
  height: 100%;
  display: flex;
  gap: 10px;

`;
export const SearchIcon = styled(FiSearch)`
  width: 100%;
  max-width: 25px;
  height: 100%;
  max-height: 25px;
  color: #a7a7a7;
`;
export const Input = styled.input.attrs({ placeholder: `Search` })`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-family: Plus Jakarta Sans, Helvetica;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #a7a7a7;
  background-color: #edfcf8;
`;



export const WalletWrapper = styled.div`
  background-color: #edfcf8;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px 15px;
  max-width: fit-content;
gap: 8px;
  height: 100%;
  @media (max-width: 950px) {
    display: none;
  }
`;
export const Currency = styled(HiCurrencyDollar)`
  width: 100%;
  height: 100%;
  max-width: 24px;
  max-height: 24px;
 // padding:0 5px;
  path {
    fill: rgb(51, 88, 174);
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 15px;
  @media (max-width: 950px) {
    gap: 10px;
    min-width:100px;
    max-width: none;
    justify-content: flex-end;
  }
`;
export const Cart = styled.div`
 background-color: #edfcf8;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  max-width: 50px;
 // max-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CartIcon = styled(RiShoppingCart2Line)`
  width: 100%;
  height: 100%;
  max-width: 24px;
  max-height: 24px;

  path {
    fill: black;
  }
`;
export const Count = styled.h1`
  background-color: #d1512d;
  border-radius: 50%;
  padding: 1px;
  position: absolute;
  top: 10px;
  right: 14px;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 100%;
  max-height: 12px;
  max-width: 12px;
  font-family: Satoshi-Medium, Helvetica;
  font-size: 10px;
  font-weight: 500;
`;
export const NotifyIcon = styled(IoIosNotifications)`
  width: 100%;
  height: 100%;
  max-width: 24px;
  max-height: 24px;
  path {
    fill: black;
  }
`;

export const DarkMode= styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;
export const ToggleContainer = styled.button`
  font-size: 1rem;
  width: 5.5em;
  height: 3em;
  border: 0.125em solid ${({ theme: { text } }) => text};
  border-radius: 1.5em;
  margin: 0 auto;
  padding: 0.125em;
  overflow: hidden;
  background: ${({ theme: { body } }) => body};
  cursor: pointer;
  transition: all 0.3s linear;
`;



export const Notification = styled.div`
 background-color: #edfcf8;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  max-width: 50px;
 // max-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const UserImage = styled.div`
background-color: #4d86f7;
  border-radius: 50%;
  height: 100%;
  aspect-ratio: 1/1;
  position: relative;
`;
export const Text = styled.div`
  font-family: "Plus Jakarta Sans", Helvetica;
  font-size: 16px;
  font-weight: 500;
  color: #607eaa;
  transition: all 0.5s ease-in-out;
  justify-content: center;
  align-items: center;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
  transition: all 1s ease;
`;
export const Option = styled(FaAngleDown)`
  width: 100%;
  height: 100%;
  max-width: 24px;
  max-height: 24px;
  path {
    fill: black;
  }
`;