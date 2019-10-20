import React from 'react';

import {Avatar} from './Avatar';

export default {
  title: 'Avatar',
};

const avatarMock =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSndKEbYLElSEMRAwQf9GooOrgmO2yYOQ8IKOsVYZ0uSzMmc5W8Gg';

export const Default = () => <Avatar userImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPKErVzTADoIB1yces2kd_ZHr9SQ5jsbdLkAE8SCQY7UEOtRI' />;

export const MessageIndicator = () => <Avatar userImg={avatarMock} hasMessage/>;

export const NoAvatar = () => <Avatar />;
