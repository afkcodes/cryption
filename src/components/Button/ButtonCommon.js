import React from 'react';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import './button-common.css';

const MyButton = styled(Button)({
  border: '2px solid #946BF4',
  background: '#091136',
  borderRadius: 18,
  color: 'white',
  height: 40,
  width: 120,
});
const ButtonCommon = () => (
  <MyButton disableRipple className="button">
    CREATE
  </MyButton>
);

export default ButtonCommon;
