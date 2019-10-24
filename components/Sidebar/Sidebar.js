import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

export const Sidebar = ({ sidebarTitle, isShown, expandIcon, maxWidth, children }) => {
  return (
    <Root maxWidht={maxWidth} isShown={isShown}>
      <ExpandButton>{expandIcon}</ExpandButton>
      <Header>
        <SidebarTitle>{sidebarTitle}</SidebarTitle>
      </Header>
      <HeaderLine />
      {children}
    </Root>
  );
};

Sidebar.propTypes = {
  sidebarTitle: PropTypes.string,
  isShown: PropTypes.bool,
  expandIcon: PropTypes.string,
  maxWidth: PropTypes.string,
};

Sidebar.defaultProps = {
  maxWidth: '250px',
  isShown: true,
  sidebarTitle: 'Sidebar',
  expandIcon: '=',
};

const Root = styled.div`
  position: relative;
  background-color: #455160;
  width: 100%;
  max-width: ${props => props.maxWidht};
  transition: 0.3s;
  right: ${props => !props.isShown && props.maxWidht};
  box-shadow: 4px 3px 6px 0px #c1c1c1;
`;

const ExpandButton = styled.button`
  position: absolute;
  font-size: 25px;
  margin: 0;
  padding: 0;
  top: 0;
  right: -30px;
  background-color: transparent;
  color: #455160;
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
  color: #b4bcc5;
  margin: 0;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #4e5c6d;
`;

const HeaderLine = styled(Line)`
  margin-bottom: 10px;
`;

export const Section = ({ name, children }) => {
  return (
    <SectionRoot>
      {name !== '' && (
        <SectionTop>
          <SectionName>{name}</SectionName>
          <Line />
        </SectionTop>
      )}
      {children}
    </SectionRoot>
  );
};

Section.propTypes = {
  name: PropTypes.string,
};

Section.defaultProps = {
  name: '',
};

const SectionRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTop = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0 5px 0;
`;

const SectionName = styled.h3`
  display: flex;
  margin: 0 10px;
  font-size: 14px;
  color: #647080;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const Item = ({ children, icon }) => {
  return (
    <ItemRoot>
      {icon !== '' && <ItemIcon>{icon}</ItemIcon>}
      <ItemName href="#">{children}</ItemName>
    </ItemRoot>
  );
};

Item.propTypes = {
  icon: PropTypes.string,
};

Item.defaultProps = {
  icon: '',
};

const ItemRoot = styled.a`
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  text-decoration: none;
  color: #b4bcc5;
  overflow: hidden;
  transition: 0.3s;
  :hover {
    background-color: #9f8cc1;
    color: #efefef;
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
