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
              <li> ⚡ Backend+(Basic Frontend).</li>
              <li> 💻 Python Developer.</li>
              <li> 🏆 4 Live Projects.</li>
              <li> 🧩 REST,GraphQL.</li>
              <li> 🔮 Dockerized multiple projects.</li>
              <li> 🌐 Languages( Bangla, English, Hindi).</li>

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
              <li>🧠 Competetive Programmer. </li>
              <li>📊 Datastructure & Algorithms. </li>
              <li>🏆 2000+ problems solved.  </li>
              <li>🎓 ACM ICPC participation.  </li>
              <li>🎯 Yellow coder at toph.co  </li>
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
              <div className="modal">
                <p>Langugae:Python</p>
                <p>Skill:Fluent(FastAPI),Beginner(Django)</p>
              </div>
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/strawberry.jpeg" alt="Logo 5" />
              <div className="modal">
                <p>Convention:REST,GraphQL(Strawberry)</p>
                <p>Workspace:3 Live-Projects</p>
              </div>
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/post.png" alt="Logo 6" />
              <div className="modal">
                <p>Spec:RDBMS,NoSQL,Caching,Brokers</p>
                <p>Tools:PostgreSQL(Fluent),Firebase(Fluent),MySQL(Basic),SQLite(Basic),Hive(Basic),Redis(Competetive),RabbitMQ(Basic)</p>
              </div>
            </div>

            <div className="grid-item">
              <img src="/images/portfolio/awss.png" alt="Logo 1" />
              <div className="modal">
                <p>Spec:AWS</p>
                <p>Workspace:S3,Transcribe,Fargate,Comprehend,EC2,ECS</p>
              </div>
            </div>

            <div className="grid-item">
              <img src="/images/portfolio/c.png" alt="Logo 2" />
              <div className="modal">
                <p>Language:C/C++</p>
                <p>Skill:Fluent</p>
              </div>
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/react.png" alt="Logo 3" />
              <div className="modal">
                <p>Name:React</p>
                <p>Skill:Competetive</p>
              </div>
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/type.png" alt="Logo 6" />
              <div className="modal">
                <p>Language:TypeScript</p>
                <p>Skill:Competetive</p>
              </div>
            </div>
            <div className="grid-item">
              <img src="/images/portfolio/flutter.png" alt="Logo 3" />
              <div className="modal">
                <p>Language:Dart(Flutter)</p>
                <p>Skill:Competetive</p>
              </div>
            </div>

            <div className="grid-item">
              <img src="/images/portfolio/kube.png" alt="Logo 4" />
              <div className="modal">
                <p>Spec:Kubernetes(Minikube)</p>
                <p>Skill:Basic</p>
              </div>
            </div>

            <div className="grid-item">
              <img src="/images/portfolio/bitbucket.jpeg" alt="Logo 4" />
              <div className="modal">
                <p>Tools:Jira,Trello</p>
                <p>git:Bitbucket,gitlab,github</p>
              </div>
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
                  <li>
                    ● Developed a web‐based product with user management, scraping products from URLS, server‐side notifications,
                    and the ability to capture live data (video, comments, likes, followers) from live‐streaming platforms.
                  </li>

                  <li>
                    ●  Implemented multiple web application features such as invoices, payment system, certificate generation per donation,
                    and report generation from customer surveys via Questionnaire.
                  </li>

                  <li>
                    ● Maintain effective one-to-one and team communication channels, including email, video calls, and messaging,
                    for requirements analysis and bottleneck resolution in order to ensure clear understanding and collaborative problem-solving.
                  </li>

                  <li>
                    ●  Designed and implemented a live chatting system where customers can directly communicate with internal users.
                  </li>

                  <li>
                    ● Implemented Stripe for secure payment processing, leveraging its robust security features and compliance with industry
                    standards to ensure the protection of sensitive customer information.
                  </li>

                  <li>
                    ●  Dockerized multiple project’s backends and database services which helped to deploy rapidly and gave better portability.
                  </li>




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
                  <li>● Implemented features of a mobile application such as the ability for users to upload images
                    via camera and gallery from various types of mobile devices with editing options, and image size was reduced to ensure image quality.</li>
                  <li>● Fixed bugs in that mobile application for leave policy, different UI interfaces, scrolling view, and downloading pdf/image files.</li>
                  <li>● Reduced time and memory complexity performance of a feature mobile punch by 10% where geo‐location attendance for employees
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
              <h6>October 2022- Present</h6>
              <h2>Stickler is an advanced analytical platform designed to empower streamers and retailers with comprehensive tools to analyze
                livestream data and make data-driven decisions.It offers a seamless experience for streamers and retailers to enhance their livestreams and maximize their potential.
                The Livestream module enables streamers to effortlessly capture and broadcast their livestreams in real-time.
                Livescope module offers streamers the ability to track and analyze data from other streamers,
                enabling them to make informed decisions and optimize their own livestreaming strategies.
                They can subscribe to Stickler to gain access to its comprehensive platform and utilize its features.
                The subscription model allows streamers to unlock the full potential of Stickler and maximize their livestreaming capabilities.
              </h2>
              <h3>Python(FastAPI), GraphQL(strawberry), PostgresQL, Redis, S3, Fargate</h3>
            </div>
            <div className='projects-grid-item'>
              <img src='images/portfolio/projects/final_moon.png'></img>
              <h1>Toja connected water</h1>
              <h6>January 2022 - September-2022</h6>
              <h2>In this innovative system, an extensive network of IoT devices is deployed to track the water consumption of various organizations.
                These IoT devices are strategically installed to accurately measure and monitor water usage in real-time.
                Each device collects and transmits water usage data to a centralized platform, ensuring a comprehensive and up-to-date overview of consumption patterns.
                The system calculates the amount of water consumed by each organization, and based on predetermined compensation or donation rates,
                it automatically calculates the corresponding monetary value.Companies have
                the option to compensate for their water consumption by subscribing to a compensation plan.To facilitate seamless transactions and secure payments,
                the system integrates with Stripe, a trusted and widely used payment gateway.With approximately 96,000 data points captured per day,
                the system generates real-time statistics and updates the relevant metrics daily.
              </h2>
              <h3>FastAPI, Firebase, PostgreSQL, S3, Stripe</h3>
            </div>

            <div className='projects-grid-item'>
              <img src='images/portfolio/projects/final_tip.png'></img>
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
              <h3>Dart, Flutter, Firebase</h3>
            </div>
            <div className='projects-grid-item'>
              <img src='images/portfolio/projects/final_nimful.png'></img>
              <h1>Nimful</h1>
              <h6>March 2023 - Present</h6>
              <h2>
                Nimful is an impressive portfolio project that incorporates an exciting feature called wordcloud.
                Additionally, it includes a Chrome extension that interacts with the backend to track users' visits to various websites.
                The extension records the amount of time a user spends on each site and how many times they visit it.

                In the future, Nimful will introduce a tutorial section that delves into the inner workings of the project.
                This tutorial will provide a comprehensive overview of how the frontend, backend, and extension components collaborate
                to create a seamless user experience. This section will be particularly helpful for junior and mid-level engineers,
                as it will offer valuable insights and guidance on building similar projects and understanding the technologies involved.
              </h2>
              <h3>FastAPI, PostgreSQL, React</h3>
            </div>
            <div className='projects-grid-item'>
              <img src='images/portfolio/projects/final_its.png'></img>
              <h1>Internal Ticketing System</h1>
              <h6>July 2021 - December-2022</h6>
              <h2>A SaaS application efficiently handles multiple organizational interfaces by allowing customers to create tickets based on Department, Service Category, and Priority.
                Assigned users resolve these tickets, ensuring timely resolution.
                When a customer creates a ticket, they can specify the relevant Department to ensure that it reaches the appropriate
                team or individual responsible for handling that particular area.
                This feature helps to ensure that the right experts are assigned to address the specific issues or inquiries raised by the customers.
                Additionally, this application integrates a live chatting system.
                This feature enables customers to have real-time conversations with support agents or assigned users.
                It provides a convenient and interactive platform for customers to receive immediate assistance  and receive updates on their tickets.
              </h2>
              <h3>(FastAPI,Django) , MySQL, PostgreSQL, Websocket</h3>
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
