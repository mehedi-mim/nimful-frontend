import CenterWrapper from '@/components/common/CenterWrapper/center_wrapper';
import Wrapper from '@/components/common/Wrapper';
import React, { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <CenterWrapper>
      <div className="home">
        <div className="centered-container">
          <img src="/images/about/about.png" alt="Profile" className="profile-image" />
        </div>
        <div className="centered-container">
          <h2>Nimful is a self-productivity website designed to enhance users' efficiency and focus.
            The main functionality of Nimful revolves around interacting with browser extensions.
            One of its key features is the ability to capture user activity whenever they switch tabs.
            Nimful will provide a comprehensive tutorial section, offering insights into the website's backend and frontend workings.
          </h2>
          <h2>
          Users can learn about the technical aspects of Nimful, gaining knowledge in various areas.The tutorial section serves as a valuable resource for those interested in understanding the inner workings of the website.
            Nimful focuses on improving productivity by helping users stay organized and manage their time effectively.
            Through its extension integration, Nimful offers seamless synchronization and data tracking across different tabs.
            The website encourages users to adopt efficient work habits by providing tools and insights to optimize their workflow.
            Nimful's user-friendly interface and informative tutorials make it a valuable resource for individuals striving to boost their productivity.
          </h2>
        </div>

      </div>
    </CenterWrapper>
  );
}

export default AboutPage;
