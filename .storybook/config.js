import { configure } from '@storybook/react';

configure(require.context('../components', true, /\.story\.js$/), module);

