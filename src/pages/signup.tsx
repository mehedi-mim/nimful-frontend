import Wrapper from '@/components/common/Wrapper';
import Signup from '@/components/Signup/signup-comp';
import React, { FC } from 'react';

const SingUpPage: FC = () => {
  return (
    <Wrapper>
      <div className="signup-page">
        <div className="signup-container">
          <Signup />
        </div>
      </div>
    </Wrapper>
  );
}
export default SingUpPage;
