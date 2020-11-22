/* eslint-disable react/prop-types */
import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';

import './search-input.css';
import ButtonCommon from '../Button/ButtonCommon';

const useStyles = makeStyles({
  root: {
    '& .MuiInputBase-input': {
      // border: '4px solid #1C2159',
      borderRadius: '12px',
      paddingLeft: '18px',
      height: '40px',
      color: 'white',
      width: '100%',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  },
});
const InputCommon = () => {
  const classes = useStyles();
  return (
    <div className="searchContainer">
      <InputBase
        className={[classes.root, 'search']}
        placeholder="ALL ORGANIZATIONS"
        variant="outlined"
        endAdornment={<ButtonCommon />}
      />
    </div>
  );
};

export default InputCommon;
