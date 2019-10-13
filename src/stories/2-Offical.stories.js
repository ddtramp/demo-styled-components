import React from 'react';
import { action } from '@storybook/addon-actions';
import BaseButton from '../components/styled/Base'

export default {
  title: 'Offical',
};

export const BaseUse = () => <BaseButton onClick={action('clicked')}>Hello Button</BaseButton>;

