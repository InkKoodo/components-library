import React from 'react';
import styled from 'styled-components';

export const Avatar = ({ userImg, hasMessage }) => (
  <Root>
    <AvatarFrame>
      <img width="100%" src={userImg} alt="User" />
    </AvatarFrame>

    {hasMessage && <MessageIndicator />}
  </Root>
);

Avatar.defaultProps = {
  hasMessage: false,
  userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqAt_2iUDCoSAkIIbXlF9oEDIToRb9DUmneKAen_5C5XoBNnsx',
};

const Root = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
`;

const AvatarFrame = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageIndicator = styled.div`
  position: absolute;
  bottom: 0px;
  right: 6px;
  width: 8px;
  height: 8px;
  background-color: #f06f6c;
  border-radius: 50%;
`;
