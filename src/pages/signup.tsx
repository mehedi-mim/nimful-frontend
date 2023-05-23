import Wrapper from '@/components/common/Wrapper';
import Signup from '@/components/Signup/signup-comp';
import { ToastContainer } from 'react-toastify';

import React, { FC } from 'react';

const SingUpPage: FC = () => {
  return (
    <Wrapper hasLeftSidebar={true} hasRightWrapper={true}>
      <div className="signup-page">
        <div className="signup-container">
        <ToastContainer />
          <Signup />
        </div>
      </div>
    </Wrapper>
  );
}
export default SingUpPage;
