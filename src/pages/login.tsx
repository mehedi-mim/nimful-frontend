// Login.tsx
import Wrapper from '@/components/common/Wrapper';
import Login from '@/components/Login/login-comp';
import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';

const LoginPage: FC = () => {
  return (
    <Wrapper>
        <div className='login-home'>
        <div className="login-page">
          <div className="login-container">
          <ToastContainer />
            <Login />
            <h1>New Here.. <a className='click' href='/signup'>Signup</a></h1>
          </div>
        </div>
        </div>

    </Wrapper>
  );
}

export default LoginPage;
