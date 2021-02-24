import React from 'react';
import { actions } from '@storybook/addon-actions';
import InputContainer from ".";

export default { title: 'atoms/Input' };

const props = {
  placeholder: '入力してください',
  ...actions('onChange'),
};

export const input = () => <InputContainer {...props} />;

export const defaultValue = () => <InputContainer {...props} defaultValue="ねこ" />;
defaultValue.story = {
  name: 'デフォルト値',
};
