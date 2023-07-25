import Wrapper from '@/components/common/Wrapper';
import React, { FC } from 'react';

const ErrorPage: FC = () => {
    return (
        <Wrapper hasLeftSidebar={true} hasRightWrapper={true}>
            <div className="error-page">
                <h1>Error!</h1>
                <p>Verification failed.</p>
            </div>
        </Wrapper>);
};

export default ErrorPage;
