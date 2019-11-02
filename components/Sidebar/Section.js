import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Line } from './Sidebar';

const Section = ({ name, children }) => {
  return (
    <SectionRoot>
      {name && (
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

export default Section;

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
