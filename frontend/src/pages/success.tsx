import Wrapper from '@/components/common/Wrapper';
import React from 'react';

const SuccessPage = () => {
    return (
        <Wrapper hasLeftSidebar={true} hasRightWrapper={false}>
            <div>
                <div className="success-page">
                    <h1>Success!</h1>
                    <p>Your verification was successful.</p>
                </div>

            </div>
        </Wrapper>
    );
};

export default SuccessPage;
