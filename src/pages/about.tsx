import Wrapper from '@/components/common/Wrapper';
import React, { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <Wrapper>
  <div className="home">
    <div className="centered-container">
      <img src="https://media.licdn.com/dms/image/D5603AQGwjVWpTk_u-Q/profile-displayphoto-shrink_800_800/0/1676829458370?e=1689811200&v=beta&t=HuxVWWR2-rjsjX3XmEZx5Rou1hACRKUzPQ2xpyNWTgA" alt="Profile" className="profile-image" />
    </div>
    <h1>I'm a ........bla bla.Want to know more about me? <a className='go' href='http://52.66.247.18:8080/portfolio'>click</a></h1>
  </div>
</Wrapper>
  );
}

export default AboutPage;
