import CenterWrapper from '@/components/common/CenterWrapper/center_wrapper';
import React, { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <CenterWrapper>
      <div className="about-home">
        
        <div className="centered-container">
          <h1 className='nimful-about-header'>What's Nimful?</h1>
          <h2>Nimful is an impressive portfolio endeavor that incorporates a captivating webcloud feature. 
            Moreover, it boasts a Chrome extension that seamlessly interacts with the backend, meticulously
             tracking users' visits to diverse websites. The extension diligently logs the duration of each visit and frequency,
              providing insightful data. 
          </h2>
          <h2>
          Looking ahead, Nimful envisions an upcoming tutorial section that delves deep into the project's inner workings.
           This comprehensive guide will shed light on the intricate collaboration among the frontend, backend, and extension components, 
           unveiling the secret to a flawless user experience. Aspiring junior and mid-level engineers will find this resource invaluable, 
           gaining profound insights and practical
           guidance on constructing analogous projects while gaining a deeper understanding of the underlying technologies involved.
          </h2>
        </div>

      </div>
    </CenterWrapper>
  );
}

export default AboutPage;