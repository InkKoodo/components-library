import React from 'react';
import { Sidebar, Section, Item } from './Sidebar';

export default {
  title: 'Sidebar',
};





export const Default = () => (
  <Sidebar sidebarTitle='Side'>
    <Section name='Section'>
      <Item icon="©">Hi</Item>
      <Item icon="©">Try some new</Item>
    </Section>
  </Sidebar>
);
