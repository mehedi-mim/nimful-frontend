import Wrapper from '@/components/common/Wrapper';
import React, { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <Wrapper>
  <div className="home">
    <div className="centered-container">
      <img src="https://media.licdn.com/dms/image/D5603AQGwjVWpTk_u-Q/profile-displayphoto-shrink_800_800/0/1676829458370?e=1689811200&v=beta&t=HuxVWWR2-rjsjX3XmEZx5Rou1hACRKUzPQ2xpyNWTgA" alt="Profile" className="profile-image" />
    </div>
    <h1>As a software engineer at Vivasoft Limited, my passion lies in learning new technologies. 
    I possess experience in completing projects from scratch to live deployment, collaborating with teams, 
    and working across multiple domains. I have competed in programming contests such as NCPC and ICPC, 
    solving over 1500 problems across various online judges. Thanks to my self-assurance, 
    I adapt quickly to new technologies and excel in communication and teamwork.</h1>
  </div>
</Wrapper>
  );
}

export default AboutPage;
