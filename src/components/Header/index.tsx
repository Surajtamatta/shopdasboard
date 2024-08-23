
import Image from 'next/image';
import React,{useState} from 'react'
import { Button, Drawer,Switch } from 'antd';
import {HiOutlineSun,HiOutlineMoon} from 'react-icons/hi'
import profile from "@/assets/images/profile/pic1.jpg";
import {
  HeaderContainer,
  WalletWrapper,
  Currency,
  Text,
  Content,
  Cart,
  CartIcon,
  Count,
  NotifyIcon,
  Notification,
  
  UserImage,
  Option,
  SearchContainer,
  SearchWrapper,
  SearchIcon,
  Input,
} from "@/styles/Header";
const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <HeaderContainer>
      <SearchContainer>
        <SearchWrapper>
          <SearchIcon />
          <Input />
        </SearchWrapper>
        <WalletWrapper>
          <Currency />
          <Text>USD 213.90</Text>
        </WalletWrapper>
      </SearchContainer>
      <Content>
        <Notification onClick={showDrawer}>
          <NotifyIcon />
          <Count>2</Count>
        </Notification>
        <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open} style={{color: '#152425'}}>
        <p color='black'>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        </Drawer>
        <WalletWrapper>
          <UserImage >
          <Image
            src={profile}
            alt="profile-img"
            fill
            style={{borderRadius:25}}
          />
          </UserImage>
          <Text>Stevan Rogic</Text>
          <Option />
        </WalletWrapper>
      </Content>
    </HeaderContainer>
  );
}

export default Header
