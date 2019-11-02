import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';

const Sidebar = ({ title, isShown, maxWidth, children }) => {
  return (
    <Root maxWidht={maxWidth} isShown={isShown}>
      <ExpandButton />
      {!!title && (
        <>
          <Header>
            <Title>{title}</Title>
          </Header>
          <HeaderLine />
        </>
      )}
      {children}
    </Root>
  );
};

Sidebar.propTypes = {
  title: PropTypes.string,
  isShown: PropTypes.bool,
  expandIcon: PropTypes.string,
  maxWidth: PropTypes.string,
};

Sidebar.defaultProps = {
  maxWidth: '250px',
  isShown: true,
  title: '',
  expandIcon: '=',
};

export default Sidebar;

const Root = styled.div`
  position: relative;
  background-color: #455160;
  width: 100%;
  max-width: ${props => props.maxWidht};
  transition: 0.3s;
  right: ${props => !props.isShown && props.maxWidht};
  box-shadow: 4px 3px 6px 0px #c1c1c1;
`;

const ExpandButton = styled(FiMenu)`
  position: absolute;
  font-size: 20px;
  margin: 0;
  padding: 0;
  top: 0;
  right: -30px;
  background-color: transparent;
  color: #455160;
  border: none;
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  padding: 15px 10px;
  box-sizing: border-box;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 20px;
  color: #b4bcc5;
  margin: 0;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #4e5c6d;
`;

const HeaderLine = styled(Line)`
  margin-bottom: 10px;
`;
