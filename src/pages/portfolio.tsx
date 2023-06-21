import Wrapper from '@/components/common/Wrapper';
import React, { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <Wrapper hasLeftSidebar={true} hasRightWrapper={false}>
  <div className="home">
    <div className="centered-container">
      <img src="https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-6/336923457_221091087242211_1107605500335323964_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEm1uY3TouyFVXLQKSmq24Gw2GlIo4JY5DDYaUijgljkLO0cfA2KXdamqy4Fb-3OPNVP2v_H8uXYYuqLZ5MiGrr&_nc_ohc=BRRd8wCp__YAX82PfIv&_nc_ht=scontent.fdac11-1.fna&oh=00_AfBkTpDoZV3TcEb3EKf_bMvGBUENry4D2qLB8EmvLK9i_w&oe=649460F0" alt="Profile" className="profile-image" />
    </div>
    <h1>As a software engineer at Vivasoft Limited, my passion lies in learning new technologies. 
    I possess experience in completing projects from scratch to live deployment, collaborating with teams, 
    and working across multiple domains. Thanks to my self-assurance, 
    I adapt quickly to new technologies and excel in communication and teamwork.Want to know more about me? <a className='go' href='http://52.66.247.18:8080/portfolio'>click</a></h1>
  </div>
</Wrapper>
  );
}

export default AboutPage;
