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
            I adapt quickly to new technologies and excel in communication and teamwork.Want to know more about me? <a className='go' href='http://52.66.247.18:8080/portfolio'>click</a>
            As a software engineer at Vivasoft Limited, my passion lies in learning new technologies.
            I possess experience in completing projects from scratch to live deployment, collaborating with teams,
            and working across multiple domains. Thanks to my self-assurance,
            I adapt quickly to new technologies and excel in communication and teamwork.Want to know more about me? <a className='go' href='http://52.66.247.18:8080/portfolio'>click</a></h1>

        </section>

        <section className='portfolio-skills'>
          <div className='grid-container'>
            <div className='grid-item'>Item 1</div>
            <div className='grid-item'>Item 2</div>
            <div className='grid-item'>Item 3</div>
            <div className='grid-item'>Item 4</div>
            <div className='grid-item'>Item 5</div>
            <div className='grid-item'>Item 6</div>
            <div className='grid-item'>Item 1</div>
            <div className='grid-item'>Item 2</div>
            <div className='grid-item'>Item 3</div>
            <div className='grid-item'>Item 4</div>
            <div className='grid-item'>Item 5</div>
            <div className='grid-item'>Item 6</div>
            <div className='grid-item'>Item 1</div>
            <div className='grid-item'>Item 2</div>
            <div className='grid-item'>Item 3</div>
            <div className='grid-item'>Item 4</div>
            <div className='grid-item'>Item 5</div>
            <div className='grid-item'>Item 6</div>
            {/* Add more grid items as needed */}
          </div>
        </section>

        <section className='portfolio-experiences'>
          <div className='experience-grid-container'>
            <div className='experience-grid-item'>Experience 1</div>
            <div className='experience-grid-item'>Experience 2</div>
          </div>

        </section>

        <section className='portfolio-projects'>
          <div className='projects-grid-container'>
            <div className='projects-grid-item'>Projects 1</div>
            <div className='projects-grid-item'>Projects 2</div>
            <div className='projects-grid-item'>Projects 3</div>
            <div className='projects-grid-item'>Projects 4</div>
            <div className='projects-grid-item'>Projects 5</div>
          </div>

        </section>
        
        <section className='portfolio-awards'>
          <div className='awards-grid-container'>
            <div className='awards-grid-item'>Experience 1</div>
            <div className='awards-grid-item'>Experience 2</div>
            <div className='awards-grid-item'>Experience 3</div>
            <div className='awards-grid-item'>Experience 4</div>
            <div className='awards-grid-item'>Experience 5</div>
            <div className='awards-grid-item'>Experience 6</div>
          </div>

        </section>

      </div>
    </CenterWrapper>
  );
}

export default AboutPage;
