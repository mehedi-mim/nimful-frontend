import CenterWrapper from '@/components/common/CenterWrapper/center_wrapper';
import Wrapper from '@/components/common/Wrapper';
import React, { FC, useEffect, useState } from 'react';
const Home: FC = () => {
  return (
    <>
      <CenterWrapper>
        <div className="home">
          <div className="centered-container">
            <img src="/images/home/nimful.jpg" alt="Profile" className="profile-image"></img>
          </div>
          <h1>Welcome to nimful...! 🖤 </h1>
          <h2 >Want to see an exciting feature ? <a className='go' href='/webcloud'>click</a></h2>
        </div>
      </CenterWrapper>
    </>

  );
}

export default Home;
