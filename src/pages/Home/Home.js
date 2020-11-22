import React from 'react';
import ButtonCommon from '../../components/Button/ButtonCommon';
import FluidBottom from '../../components/FluidBottom/FluidBottom';
import FluidTop from '../../components/FluidTop/FluidTop';
import MainContainer from '../../components/MainContainer/MainContainer';
import SearchInput from '../../components/Search/SearchInput';
import logo from '../../assets/Logo.png';
import './home.css';

const Home = () => (
  <>
    <nav>
      <img src={logo} alt="logo" />
      <ButtonCommon />
    </nav>
    <FluidBottom />
    <FluidTop />
    <div className="upper">
      <SearchInput />
    </div>
    <div className="lower">
      <div className="content-rotate">
        <MainContainer />
      </div>
    </div>
  </>
);
export default Home;
