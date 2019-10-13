import React from 'react';
import { action } from '@storybook/addon-actions';
import BaseButton from '../components/styled/Base'
import InheritButton1 from '../components/styled/Inherit'
import InheritButton2 from '../components/styled/InheritTag'

import CoverDefaultComponent from '../components/styled/CoverDefault'
import CoverElementComponent from '../components/styled/CoverElement'
import CoverElementHightLevelComponent from '../components/styled/CoverElementHighlevel'
import CoverElementHightLevelComponent2 from '../components/styled/CoverElementHighlevel2'

export default {
  title: 'Doc',
};

export const BaseUse = () => <BaseButton onClick={action('clicked')}>Hello Button</BaseButton>;

export const Inherit = () => <InheritButton1>继承1</InheritButton1>;
export const InheritTag = () => <InheritButton2>继承2</InheritButton2>;

export const CoverDefault = () => <CoverDefaultComponent />;

export const CoverElement = () => <CoverElementComponent />;

export const CoverElementHightLevel = () => <CoverElementHightLevelComponent />;

export const CoverElementHightLevel2 = () => <CoverElementHightLevelComponent2 />;

