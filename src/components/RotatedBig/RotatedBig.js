/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import ButtonCommon from '../Button/ButtonCommon';
import './rotated-big.css';

const styles = (theme) => ({
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'yellow !important',
  },
});

const RotatedContainer = () => (
  <div className="container-main">
    <div className="box-main back-main" />
    <div className="box-main front-main">
      <div className="content-box">
        <div className="title-container">
          <span className="title">ORGANIZATION</span>
          <span className="subtitle">Oxcdw..565e</span>
          <span className="subtitle">Project Title</span>
        </div>
        <div className="filler-parent">
          <div className="filler" />
        </div>
        <div className="token-container">
          <div className="token">
            <span>TOKEN LEFT</span>
            <span>12</span>
          </div>
          <div className="token">
            <span>DAYS LEFT</span>
            <span>57</span>
          </div>
        </div>
        <TextField
          fullWidth
          variant="outlined"
          label="Amount"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <span style={{ color: '#426CD9' }}>XYZ</span>
              </InputAdornment>
            ),
            style: { color: 'red' },
          }}
        />
        <ButtonCommon />
      </div>
    </div>
    <div className="icon" />
  </div>
);

export default RotatedContainer;
