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
          </div>
        </div>
        </div>

    </Wrapper>
  );
}

export default LoginPage;
