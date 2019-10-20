import React from 'react';

import {Avatar} from './Avatar';

export default {
  title: 'Avatar',
};

const avatarMock =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSndKEbYLElSEMRAwQf9GooOrgmO2yYOQ8IKOsVYZ0uSzMmc5W8Gg';

export const Default = () => <Avatar userImg={avatarMock} />;

export const MessageIndicator = () => <Avatar userImg={avatarMock} isMessageRecieved/>;

export const NoAvatar = () => <Avatar userImg='' />;
