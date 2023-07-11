import CenterWrapper from '@/components/common/CenterWrapper/center_wrapper';
import React, { useEffect, useState, FC } from 'react';
// Get the target element


const AboutPage: FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    });

    const section = document.querySelector('.portfolio-objective');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    });

    const section = document.querySelector('.portfolio-skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (

    <CenterWrapper>

      <div className="portfolio-center">
        <section>
          <div className='portfolio-lable-lala'>
            Intro...
          </div>
        </section>
        <section className='portfolio-top'>
          <div className='portfolio-top-left balloon-animation-left'>
            <ul>
              <li> 💼 2.5+ years work-experience.</li>
              <li> 💼 Backend+(Basic Frontend).</li>
              <li> 💼 Python Developer.</li>
              <li> 💼 4 Live Projects.</li>
              <li> 💼 REST,GraphQL.</li>
              <li> 💼 Dockerized multiple projects.</li>
              <li> 💼 Languages( Bangla, English, Hindi).</li>

            </ul>
          </div>
          <div className='portfolio-top-middle'>
            <img src="/images/portfolio/profile.png" alt="Profile" />
            <div className="portfolio-links">
              <a href="mailto:mehedi.mim.bd@gmail.com"><img src="/images/portfolio/icon/gmail.png" alt="Gmail" className="small-icon" /></a>
              <a href="https://www.linkedin.com/in/mehedi-mim/"><img src="/images/portfolio/icon/linkedin.png" alt="LinkedIn" className="small-icon" /></a>
              <a href="https://twitter.com/mHm_cse"><img src="/images/portfolio/icon/twitter.png" alt="Twitter" className="small-icon" /></a>
              <a href="https://www.facebook.com/mhm.cse"><img src="/images/portfolio/icon/facebook.jpeg" alt="Facebook" className="small-icon" /></a>
              <a href="#live:.cid.1cb85c7912fbef7a"><img src="/images/portfolio/icon/skype.png" alt="LinkedIn" className="small-icon" /></a>
              <a href="#+8801783045783/"><img src="/images/portfolio/icon/telegram.jpeg" alt="LinkedIn" className="small-icon" /></a>
              <a href="#+8801783045783"><img src="/images/portfolio/icon/whatsapp.png" alt="LinkedIn" className="small-icon" /></a>

            </div>
          </div>
          <div className='portfolio-top-right balloon-animation-right'>
            <ul>
              <li>💪 Competetive Programmer. </li>
              <li>📝 Datastructure & Algorithms. </li>
              <li>🏆 2000+ problems solved.  </li>
              <li>🎓 ACM ICPC participation.  </li>
              <li>🏆 Yellow coder at toph.co  </li>
              <li>🤝 Team player.</li>
            </ul>
          </div>

        </section>

        <section className="portfolio-objective">
          <h1>
            <p>
              I extend my warmest greetings as I introduce myself, Mehedi Hasan Mim, an accomplished Software Engineer currently affiliated with the distinguished organization, Vivasoft Limited. With an unwavering dedication to the pursuit of excellence, I have diligently honed my expertise in the art of website development over the course of the past 2.5 years. Prior to this, I had the privilege of immersing myself in the intricacies of mobile application development, and I have now directed my focus towards the dynamic realm of backend software engineering, specializing in the utilization of the esteemed Python programming language.
            </p>
            <p>
              My journey as a pivotal member of the Vivasoft team has been defined by a deep-seated responsibility for spearheading critical tasks associated with a diverse range of client projects. As a seasoned professional, I bring forth a wealth of expertise in conducting meticulous requirement analysis, crafting intricate system designs, seamlessly integrating new release features. Leveraging my experiences across various domains, I have diligently cultivated a versatile skill set, enabling me to adroitly navigate through complex challenges and intricacies that often arise during the development lifecycle. 
              My unwavering dedication allows me to deftly identify potential pitfalls and swiftly devise optimal solutions, ensuring the seamless and timely delivery of projects while maintaining an unwavering commitment to quality and client satisfaction.
            </p>
            <p>
            With an acute understanding that every project presents its unique set of complexities, I approach each endeavor with a meticulous attention to detail, ensuring that I adapt my expertise to cater to the specific requirements and intricacies of each task. My unwavering focus on staying abreast of the latest industry trends and technological advancements empowers me to leverage cutting-edge tools and methodologies, thereby facilitating the development of highly scalable, efficient, and secure software solutions.
            </p>
          </h1>
        </section>
        <section>
          <div className='portfolio-lable'>
            Skills
          </div>
        </section>

        <section className="portfolio-skills">
          <div className="grid-container">
            <div className="grid-item">
              <img src="/images/portfolio/python.jpeg" alt="Logo 1" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/fastapi.png" alt="Logo 5" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/strawberry.jpeg" alt="Logo 5" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/postgres.png" alt="Logo 6" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/redis.png" alt="Logo 4" />
            </div>

            <div className="grid-item">
              <img src="/images/portfolio/aws.png" alt="Logo 1" />
            </div>

            <div className="grid-item">
              <img src="/images/portfolio/C_C_featuredimage.png" alt="Logo 2" />

            </div>
            <div className="grid-item">
              <img src="/images/portfolio/dart.png" alt="Logo 3" />

            </div>
            <div className="grid-item">
              <img src="/images/portfolio/fargate.png" alt="Logo 4" />

            </div>

            <div className="grid-item">
              <img src="/images/portfolio/flutter.jpeg" alt="Logo 6" />
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
              <img src="/images/portfolio/java.png" alt="Logo 1" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/rabbitmq.png" alt="Logo 2" />
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/react.jpeg" alt="Logo 3" />
            </div>

            <div className="grid-item">
              <img src="/images/portfolio/typescript.png" alt="Logo 6" />
            </div>
          </div>
        </section>

        <section>
          <div className='portfolio-lable'>
            Experiences
          </div>
        </section>
        <section className='portfolio-experiences'>
          <div className='experience-grid-container'>
            <div className="experience-grid-item">
              <div className='exp-company'>
                <img src="/images/portfolio/experience/vivasoftltd.jpeg" alt="Logo 6"></img>
                <h1>Vivasoft Limited</h1>
                <h1>Software Engineer L-II</h1>
                <p>Augest-2021 to Present</p>
              </div>
              <div className="exp-describe">
                <ul>
                  <li>💪  Developed a web‐based product with user management, scraping products from URLS, server‐side notifications,
                    and the ability to capture live data (video, comments, likes, followers) from live‐streaming platforms.</li>
                  <li>💪  Implemented multiple web application features such as invoices, payment system, certificate generation per donation,
                    and report generation from customer surveys via Questionnaire.</li>
                  <li>💪  Designed and implemented a live chatting system where customers can directly communicate with internal users.</li>
                  <li>💪  Dockerized multiple project’s backends and database services which helped to deploy rapidly and gave better portability.</li>
                </ul>
              </div>
              {/* <div className='exp-skills'>
                <p>Python(FastAPI, Django)</p>
                <p>MySQL,PostgreSQL,Docker</p>
                <p>GraphQL</p>
              </div> */}
            </div>
            <div className="experience-grid-item">
              <div className='exp-company'>
                <img src="/images/portfolio/experience/inovace.jpeg" alt="Logo 6"></img>
                <h1>Inovace Technologies</h1>
                <h1>Mobile Application Developer</h1>
                <p>January-2021 to July-2021</p>
              </div>
              <div className="exp-describe">
                <ul>
                  <li>💪 Implemented features of a mobile application such as the ability for users to upload images
                    via camera and gallery from various types of mobile devices with editing options, and image size was reduced to ensure image quality.</li>
                  <li>💪 Fixed bugs in that mobile application for leave policy, different UI interfaces, scrolling view, and downloading pdf/image files.</li>
                  <li>💪 Reduced time and memory complexity performance of a feature mobile punch by 10% where geo‐location attendance for employees
                    was taken from the application in real‐time whereabouts, replacing some heavy recursive code functionality.</li>
                </ul>
              </div>
              {/* <div className='exp-skills'>
                <p>Dart(Flutter)</p>
                <p>REST API, Firebase, SQLite</p>
              </div> */}
            </div>
          </div>

        </section>
        <section>
          <div className='portfolio-lable'>
            Projects
          </div>
        </section>
        <section className='portfolio-projects'>
          <div className='projects-grid-container'>
            <div className='projects-grid-item'>
              <img src="images/portfolio/projects/stickler.jpeg" alt="Stickler"></img>
              <h1>Stickler</h1>
              <h6>October 2021- Present</h6>
              <h2>We believe that Live Commerce will be the ascendant ecommerce trend of the coming years.
                Following on from 6 huge years of growth in China, where Live Commerce went from inception in 2016 to around a third of all ecommerce transactions.
                Outside China, this will look different, more fragmented, more specialised, and even more interactive.
                It will be one of the dominant forms of communication and sales for brands and retailers.</h2>
              <h3>FastAPI,GraphQL,PostgresQL</h3>
            </div>
            <div className='projects-grid-item'>
              <img src='images/portfolio/projects/moonraker.png'></img>
              <h1>Toja connected water</h1>
              <h6>January 2022 - September-2022</h6>
              <h2>Our passion is water, because water is the planet’s most precious resource.
                Our goal is to balance your water footprint by giving fresh and clean water back to the ecosystem so that we, and generations after us, can still enjoy water.
                Toja connects you with water projects around the world to work together to raise water awareness,
                combat water scarcity and provide access to fresh and clean water in remote and poor areas.
                Your water offset makes it possible. Make your contribution to the environment and society with Toja.
              </h2>
              <h3>FastAPI,Firebase, RestAPI,React</h3>
            </div>

            <div className='projects-grid-item'>
              <img src='images/portfolio/projects/tipsoi.webp'></img>
              <h1>Tipsoi Mobile App</h1>
              <h6>January 2021 - July-2022</h6>
              <h2>Tipsoi HRM comes with a feature-rich & robust android and iOS native mobile app,
                from where the admin can have the idea of the overall organization’s attendance at-a-glance,and execute various HR functionalities i.e.
                approve decline leave, manual entry requests. Employees can easily perform their day-to-day activities.
                Mobile Punch
                Site Management
                Apply & Approve Leave/manual entry Requests
                Easy Activation through QR-code Scan
                Easy Enrollment and Allocation
              </h2>
              <h3>Dart,Flutter</h3>
            </div>

            <div className='projects-grid-item'>
              <img src='images/portfolio/projects/its.png'></img>
              <h1>Internal Ticketing System</h1>
              <h6>July 2021 - December-2022</h6>
              <h2>Tipsoi HRM comes with a feature-rich & robust android and iOS native mobile app,
                from where the admin can have the idea of the overall organization’s attendance at-a-glance,and execute various HR functionalities i.e.
                approve decline leave, manual entry requests. Employees can easily perform their day-to-day activities.
                Mobile Punch
                Site Management
                Apply & Approve Leave/manual entry Requests
                Easy Activation through QR-code Scan
                Easy Enrollment and Allocation
              </h2>
              <h3>Dart,Flutter</h3>
            </div>
            <div className='projects-grid-item'>
              <img src='images/portfolio/projects/nimful.png'></img>
              <h1>Nimful</h1>
              <h6>March 2023 - Present</h6>
              <h2>Tipsoi HRM comes with a feature-rich & robust android and iOS native mobile app,
                from where the admin can have the idea of the overall organization’s attendance at-a-glance,and execute various HR functionalities i.e.
                approve decline leave, manual entry requests. Employees can easily perform their day-to-day activities.
                Mobile Punch
                Site Management
                Apply & Approve Leave/manual entry Requests
                Easy Activation through QR-code Scan
                Easy Enrollment and Allocation
              </h2>
              <h3>Dart,Flutter</h3>
            </div>
          </div>

        </section>
        <section>
          <div className='portfolio-lable-customize'>
            to be continued...
          </div>
        </section>

      </div>
    </CenterWrapper>
  );
}

export default AboutPage;
