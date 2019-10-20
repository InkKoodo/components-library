import React from 'react';
import styled from 'styled-components';

export const Avatar = ({ userImg, isMessageRecieved }) => {
  const noAvatar =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqAt_2iUDCoSAkIIbXlF9oEDIToRb9DUmneKAen_5C5XoBNnsx';

  return (
    <Container>
      <AvatarWrapper>
        {userImg !== '' ? (
          <UserAvatar src={userImg} alt="User" />
        ) : (
          <UserAvatar src={noAvatar} alt="User" />
        )}
      </AvatarWrapper>
      {isMessageRecieved ? <MessageIndicator /> : null}
    </Container>
  );
};

Avatar.defaultProps = {
  isMessageRecieved: false,
};

const Container = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
`;

const AvatarWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  border-radius: 100px;
  back
`;

const UserAvatar = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const MessageIndicator = styled.div`
  position: absolute;
  bottom: 0px;
  right: 6px;
  width: 8px;
  height: 8px;
  background-color: #f06f6c;
  border-radius: 100px;
`;
