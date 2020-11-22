/* eslint-disable react/prop-types */
import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';

import './input-common.css';
import ButtonCommon from '../Button/ButtonCommon';

const useStyles = makeStyles({
  root: {
    '& .MuiInputBase-input': {
      background: ' #091136',
      border: '4px solid #1C2159',
      borderRadius: '25px',
      paddingLeft: '18px',
      height: '40px',
      width: '350px',
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  },
});
const InputCommon = ({ needOrnament, value }) => {
  const classes = useStyles();
  return (
    <InputBase
      className={[classes.root, 'search']}
      placeholder="ALL ORGANIZATIONS"
      value={value}
      variant="outlined"
      endAdornment={needOrnament ? <ButtonCommon /> : null}
    />
  );
};

export default InputCommon;
