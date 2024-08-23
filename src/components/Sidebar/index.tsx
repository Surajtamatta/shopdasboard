
import React,{ useState } from "react";
import {
  Container,
  LogoWrapper,
  Nav,
  List,
  Title,
  Text,
  StyleIcon,
  LogOutWrapper,
} from "@/styles/Sidebar";
import {
  RiHome4Line,
  RiSettings5Line,
  RiDashboardHorizontalFill ,
} from "react-icons/ri";
import {
  HiArrowNarrowRight,
  HiArrowNarrowLeft,
} from "react-icons/hi";
import { MdOutlineReport,MdCalendarMonth,MdFormatListBulleted} from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { SiVictoriametrics } from "react-icons/si";
import Link from "next/link";




const Sidebar= () => {
  
 const [boxWidth,setBoxWidth] = useState(false);
 const toggleHandleWidth = () => {
   setBoxWidth(!boxWidth);
  };

  return (
    
      <Container   iswidth={boxWidth }>
          <Link href={'/'} style={{width:'100%'}}>
            <LogoWrapper>
              <RiDashboardHorizontalFill style={{fontSize:40}}/>
              <Text iswidth={boxWidth}>Dashboard</Text>
            </LogoWrapper>
          </Link>

          <Nav>
            <Link href={'/'}>
              <List>
                  <StyleIcon><RiHome4Line/></StyleIcon>
                  <Text iswidth={boxWidth}>Dashboard</Text>
              </List>
            </Link>

            <Link href={'/metrics'}>
              <List>
                  <StyleIcon><SiVictoriametrics/></StyleIcon>
                  <Text iswidth={boxWidth}>Metrics</Text>
              </List>
            </Link>

            <Link href={'/user-list'}>
              <List>
                  <StyleIcon><MdFormatListBulleted/></StyleIcon>
                  <Text iswidth={boxWidth}>User list</Text>
              </List>
            </Link>
           
            <Link href={'/calender'}>
              <List>
                  <StyleIcon><MdCalendarMonth/></StyleIcon>
                  <Text iswidth={boxWidth}>Calender</Text>
              </List>
            </Link>


            <Title >Others</Title>

            
            <Link href={'/'}>
              <List>
                <StyleIcon><IoPersonCircleOutline/></StyleIcon>
                <Text iswidth={boxWidth}>Profile</Text>
              </List>
            </Link>

           

            <Link href={'/'}>
              <List>
                  <StyleIcon><RiSettings5Line/></StyleIcon>
                  <Text iswidth={boxWidth}>Settings</Text>
              </List>
            </Link>
           
            <Link href={'/'}>
              <List>
                    <StyleIcon><MdOutlineReport/></StyleIcon>
                    <Text iswidth={boxWidth}>Report</Text>
              </List>
            </Link>

          </Nav>
          <LogOutWrapper onClick={toggleHandleWidth}>
          <StyleIcon>{boxWidth ? <HiArrowNarrowLeft/> : <HiArrowNarrowRight/>}</StyleIcon>   
          </LogOutWrapper>
       
      </Container>
   
  );
}

export default Sidebar
