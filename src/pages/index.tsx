import CenterWrapper from '@/components/common/CenterWrapper/center_wrapper';
import Wrapper from '@/components/common/Wrapper';
import React, { FC, useEffect, useState } from 'react';
const Home: FC = () => {
  return (
    <>
      <CenterWrapper>
        <div className="home">
          <div className="centered-container-index">
            <img src="/images/home/nimful.jpg" alt="Profile" className="profile-image"></img>
          </div>
          <div className="centered-container">
            <h2>Welcome to nimful...! 🖤 Want to see an exciting feature ? <a className='go' href='/webcloud'>click</a> </h2>
          </div>
        </div>
      </CenterWrapper>
    </>

  );
}

export default Home;
