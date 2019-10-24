import React from 'react';
import { Sidebar, Section, Item } from './Sidebar';

export default {
  title: 'Sidebar',
};

export const Default = () => (
  <Sidebar sidebarTitle='My Sidebar'>
    <Section>
      <Item icon="©">Hi everyone</Item>
      <Item>Try some new</Item>
    </Section>
    <Section name='Section'>
      <Item icon="©">Item with icon</Item>
      <Item>New item without logo</Item>
    </Section>
    <Section name='One more section'>
      <Item icon="©">Hello from another section</Item>
      <Item>Try some new in the section</Item>
    </Section>
  </Sidebar>
);
