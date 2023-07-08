import CenterWrapper from '@/components/common/CenterWrapper/center_wrapper';
import React, { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <CenterWrapper>

      <div className="portfolio-center">
        <section className='portfolio-top'>
          <div className='portfolio-top-left'>
            <ul>
              <li>Python Developer</li>
              <li>Problem Solver</li>
              <li>Self Learner</li>
              <li>Linguistic</li>
            </ul>
          </div>
          <div className='portfolio-top-middle'>
            <img src="/images/portfolio/myself.jpg" alt="Profile" />
          </div>
          <div className='portfolio-top-right'>
            <ul>
              <li>2.5+ years experience</li>
              <li>Pythonista</li>
              <li>Codeforces Specialist</li>
              <li>Leetcode 1668</li>
            </ul>
          </div>
        </section>

        <section className="portfolio-objective">
          <h1>
            <p>
              Hi..! I am Mehedi Hasan Mim, a Software Engineer at Vivasoft Limited. For the past 2.5 years, I have been developing websites.
              Previously, I worked on mobile applications, and now I specialize in backend software engineering using Python.
              As I primarily work on client projects, I am responsible for tasks such as requirement analysis, system design, new release features, and deployment.              I have experience working in various domains, which has allowed me to develop a diverse skill set.
              I am adept at identifying potential issues and finding optimal solutions to ensure smooth project delivery.
            </p>
          </h1>
        </section>


        <section className="portfolio-skills">
          <div className="grid-container">

            <div className="grid-item">
              <img src="/images/portfolio/aws.png" alt="Logo 1" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/C_C_featuredimage.png" alt="Logo 2" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/dart.svg" alt="Logo 3" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/fargate.png" alt="Logo 4" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/fastapi.png" alt="Logo 5" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/flutter.svg" alt="Logo 6" />
            </div>

            <div className="grid-item">
              <img src="/images/portfolio/java.png" alt="Logo 1" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/js.png" alt="Logo 2" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/kong.png" alt="Logo 3" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/minikube.png" alt="Logo 4" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/mysql.png" alt="Logo 5" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/postgres.png" alt="Logo 6" />
            </div>

            <div className="grid-item">
              <img src="/images/portfolio/python-log.png" alt="Logo 1" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/rabbitmq.png" alt="Logo 2" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/react.jpeg" alt="Logo 3" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/redis.png" alt="Logo 4" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/strawberry.jpeg" alt="Logo 5" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/typescript.png" alt="Logo 6" />
            </div>
          </div>
        </section>


        <section className='portfolio-experiences'>
          <div className='experience-grid-container'>
            <div className="experience-grid-item">
              <div className='exp-company'>
                <div>Icon</div>
                <div>Vivasoft Limited</div>
              </div>
              <div className='exp-position'>
                <div>Software Engineer L-II</div>
                <div>From Augest-2021 to Present</div>
              </div>
              <div className="exp-describe">
                <ul>
                  <li>List item 1 List item 1 List item 1 List item 1</li>
                  <li>List item 1 List item 1 List item 1 List item 1</li>
                  <li>List item 1 List item 1 List item 1 List item 1</li>
                  <li>List item 1 List item 1 List item 1 List item 1</li>
                  <li>List item 1 List item 1 List item 1 List item 1</li>
                  <li>List item 1 List item 1 List item 1 List item 1</li>
                  <li>List item 1 List item 1 List item 1 List item 1</li>
                  <li>List item 1 List item 1 List item 1 List item 1</li>
                  <li>List item 1 List item 1 List item 1 List item 1</li>
                  <li>List item 1 List item 1 List item 1 List item 1</li>
                  <li>List item 1 List item 1 List item 1 List item 1</li>
                </ul>
              </div>
              <div className='exp-skills'>
                <p>C++</p>
                <p>A,D,C,C++,DDD</p>
                <p>Python</p>
              </div>
            </div>
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
