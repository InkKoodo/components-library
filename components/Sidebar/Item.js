import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = ({ children, icon }) => {
  return (
    <ItemRoot>
      {!!icon && icon}
      <ItemName href="#">{children}</ItemName>
    </ItemRoot>
  );
};

Item.propTypes = {
  icon: PropTypes.element,
};

Item.defaultProps = {
  icon: null,
};


export default Item;

const ItemRoot = styled.a`
  position: relative;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  text-decoration: none;
  color: #b4bcc5;
  overflow: hidden;
  transition: 0.3s;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-3px, 0);
    height: 100%;
    width: 3px;
    background-color: #9f8cc1;
    transition: 0.3s;
  }
  :hover {
    background-color: #4e5b6b;
    color: #efefef;
    cursor: pointer;
    ::after {
      transform: translate(0, 0);
      transition: 0.3s 0.2s;
    }
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
