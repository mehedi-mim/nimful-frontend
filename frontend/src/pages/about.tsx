import CenterWrapper from '@/components/common/CenterWrapper/center_wrapper';
import React, { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <CenterWrapper>
      <div className="about-home">
        <div className="about-centered-container">
          <h1 className='nimful-about-header'>What's Nimful?</h1>
          <h2>
            Nimful is an impressive portfolio endeavor that incorporates a captivating webcloud feature.
            Moreover, it boasts a Chrome extension that seamlessly interacts with the backend, meticulously
            tracking users' visits to diverse websites. The extension diligently logs the duration of each visit and frequency,
            providing insightful data.

            Looking ahead, Nimful envisions an upcoming tutorial section that delves deep into the project's inner workings.
            This comprehensive guide will shed light on the intricate collaboration among the frontend, backend, and extension components,
            unveiling the secret to a flawless user experience. Aspiring junior and mid-level engineers will find this resource invaluable,
            gaining profound insights and practical
            guidance on constructing analogous projects while gaining a deeper understanding of the underlying technologies involved.
          </h2>
          <h1 className='nimful-about-header'>Technologies...</h1>
          <div className='tutorial-content-header'>
            <h2>Backend</h2>
          </div>
          <div className='tutorial-content-list'>
            <li>FastAPI: Utilized the FastAPI Python framework to construct the backend of the project. FastAPI offers fast development, automatic validation, and interactive documentation.</li>
            <li>Authentication and Authorization: Implemented Paseto tokens for robust authentication and authorization processes. Paseto tokens provide secure token generation and verification.</li>
            <li>PostgreSQL: Employed PostgreSQL as the relational database to efficiently store and manage structured data.</li>
          </div>
          <div className='tutorial-content-header'>
            <h2>Frontend</h2>
          </div>
          <div className='tutorial-content-list'>
            <li>React and Next.js: Utilized the React library along with Next.js framework for frontend development. Next.js offers server-side rendering, routing, and enhanced developer experience.</li>
            <li>HTML and CSS: Employed HTML and CSS to structure and style the user interface.</li>
          </div>
          <div className='tutorial-content-header'>
            <h2>Extension</h2>
          </div>
          <div className='tutorial-content-list'>
            <li>JavaScript: Integrated JavaScript for frontend interactivity and dynamic content manipulation.</li>
            <li>Interactions with Backend: Employed JavaScript to establish seamless communication between the frontend and backend, facilitating data exchange and real-time updates.</li>
          </div>
          <div className='tutorial-content-header'>
            <h2>Operations</h2>
          </div>
          <div className='tutorial-content-list'>
            <li>Nginx: Utilized Nginx as a web server and reverse proxy to efficiently manage incoming requests, handle SSL termination, and distribute traffic.</li>
            <li>Rate Limiting: Implemented rate limiting using Nginx to control the number of requests from various sources, preventing abuse and ensuring resource availability.</li>
            <li>Amazon EC2: Deployed the application on Amazon EC2 instances, offering scalable computing capacity in the cloud.</li>
            <li>DNS Registration: Registered the domain and set up DNS records to associate the domain name with the application's IP address, making it accessible online.</li>
            <li>Dockerization: Dockerized both the backend and frontend components, encapsulating them in containers for easier deployment, scalability, and consistent environments.</li>
            <li>Certbot and SSL: Utilized Certbot, a free and open-source software tool, to secure the application with SSL certificates. Certbot enabled automatic provisioning and renewal of SSL certificates, ensuring encrypted and secure communication between users and the application.</li>
          </div>
        </div>

      </div>
    </CenterWrapper>
  );
}

export default AboutPage;
