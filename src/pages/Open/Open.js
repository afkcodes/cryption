import React from 'react';
import ButtonCommon from '../../components/Button/ButtonCommon';
import FluidBottom from '../../components/FluidBottom/FluidBottom';
import FluidTop from '../../components/FluidTop/FluidTop';
import InputCommon from '../../components/InputCommon/InputCommon';
import logo from '../../assets/Logo.png';
import './open.css';
import RotatedBig from '../../components/RotatedBig/RotatedBig';

const Open = () => (
  <>
    <nav>
      <img src={logo} alt="logo" />
      <ButtonCommon />
    </nav>
    <FluidBottom />
    <FluidTop />
    <div className="content">
      <div className="left">
        <InputCommon value="1 XYZ = 0.1 FYI" needOrnament={false} />
        <InputCommon value="1 XYZ = 1678.23 USD" needOrnament={false} />
        10D:20H:23M
      </div>
      <div className="right">
        <RotatedBig />
      </div>
    </div>
  </>
);

export default Open;
