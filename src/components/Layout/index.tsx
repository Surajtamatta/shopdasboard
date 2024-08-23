import React, { Fragment } from "react";
import Sidebar from "../Sidebar";
import { LayoutContainer, LayoutWrapper,LayoutContent } from '../../styles/Layout/index';
import Header from "../Header";


interface LayoutTypes{
  children:React.ReactNode
}
const Layout:React.FC<LayoutTypes> = ({children}) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <LayoutContent>
        <Header/>
        <LayoutWrapper>{children}</LayoutWrapper>
      </LayoutContent>
      
    </LayoutContainer>
  );
};

export default Layout;
