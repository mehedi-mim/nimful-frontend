import CenterWrapper from '@/components/common/CenterWrapper/center_wrapper';
import React, { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <CenterWrapper>
  
  <div className="portfolio-center">
    <section className='portfolio-top'>
      <div className='portfolio-top-left'>
            <h1>Hi.....</h1>
      </div>
      <div className='portfolio-top-middle'>
            <h1>Hi.....</h1>
      </div>
      <div className='portfolio-top-right'>
            <h1>Hi.....</h1>
      </div>
    </section>

    <section className='portfolio-objective'>
    <h1>As a software engineer at Vivasoft Limited, my passion lies in learning new technologies. 
    I possess experience in completing projects from scratch to live deployment, collaborating with teams, 
    and working across multiple domains. Thanks to my self-assurance, 
    I adapt quickly to new technologies and excel in communication and teamwork.Want to know more about me? <a className='go' href='http://52.66.247.18:8080/portfolio'>click</a></h1>
    </section>

    <section className='portfolio-skills'>
       
    </section>

    <section>
    <h1>As a software engineer at Vivasoft Limited, my passion lies in learning new technologies. 
    I possess experience in completing projects from scratch to live deployment, collaborating with teams, 
    and working across multiple domains. Thanks to my self-assurance, 
    I adapt quickly to new technologies and excel in communication and teamwork.Want to know more about me? <a className='go' href='http://52.66.247.18:8080/portfolio'>click</a></h1>
    </section>


  </div>
</CenterWrapper>
  );
}

export default AboutPage;