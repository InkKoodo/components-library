import React from 'react';
import styled from 'styled-components';


export const Sidebar = ({sidebarTitle, isShown, expandIcon, maxWidth, children }) => {
  return (
    <Root maxWidht={maxWidth} isShown={isShown}>
      <ExpandButton>{expandIcon}</ExpandButton>
      <Header>
        <SidebarTitle>{sidebarTitle}</SidebarTitle>
      </Header>
      <Line />
      {children}
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  max-width: ${props => props.maxWidht};
  transition: .3s;
  right: ${props => !props.isShown && props.maxWidht }
`;

const ExpandButton = styled.button`
  position: absolute;
  font-size: 25px;
  margin: 0;
  padding: 0;
  top: 0;
  right: -30px;
  background-color: transparent;
  border: none;
`;

const Header = styled.div`
  display: flex;
  padding: 15px 10px;
  box-sizing: border-box;
  align-items: center;
`;

const SidebarTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin: 0;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: grey;
`;

export const Section = ({ name, children }) => {
  return (
    <SidebarSection>
      <SectionTop>
        {name !== '' && <SectionName>{name}</SectionName>}
        <Line />
      </SectionTop>
      {children}
    </SidebarSection>
  );
};

const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTop = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0 0 0
`;

const SectionName = styled.h3`
  display: flex;
  margin: 0 10px;
`;

export const Item = ({ children, icon }) => {
  return (
    <ItemRoot>
      {icon !== '' && <ItemIcon>{icon}</ItemIcon>}
      <ItemName href="#">{children}</ItemName>
    </ItemRoot>
  );
};

const ItemRoot = styled.a`
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  text-decoration: none;
  color: #333;
  overflow: hidden;
  transition: 0.3s;
  :hover {
    background-color: #333;
    color: #fff;
    cursor: pointer;
  }
`;

const ItemName = styled.p`
  font-size: 16px;
  padding: 0;
  margin: 0;
`;

const ItemIcon = styled.div`
  display: flex;
  font-size: 15px;
  padding: 0 10px 0 0;
  box-sizing: border-box;
`;

Sidebar.defaultProps = {
  maxWidth: '250px',
  isShown: true,
  sidebarTitle: 'Sidebar',
  expandIcon: '=',
};

Section.defaultProps = {
  name: '',
};

Item.defaultProps = {
  icon: '',
};