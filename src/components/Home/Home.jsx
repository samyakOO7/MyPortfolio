// Home.js
import React from 'react';
import './Home.scss'; // Import CSS file for styling
import profilePic from '../../images/profile-pic.jpg';
import WithFadeInTransition from '../FadeInText/WithFadeInTransition';

function Home() {
  return (
    <div className="home">   
      <header>
      <div className="profile-pic-container">
  <img src={profilePic} alt="Profile" className="profile-pic" />
</div>
        <div className="header-content">
          <h1>Samyak Gantayat</h1>
          <p>
          Hello, I'm Samyak Gantayat, a Bachelor of Technology graduate from 2022. Currently, I'm thriving in the role of a Full Stack Developer at Publicis Sapient, where I bring my passion for technology to life every day.
          </p>
          <p>
          My journey in the tech world has been diverse and exciting. While my primary focus lies in backend development with .NET and Spring Boot, I've also ventured into the realm of frontend development, leveraging React to craft seamless user experiences.
          </p>
          <p>
          Outside of my professional endeavors, I'm deeply engrossed in the world of freelancing, particularly with Flutter. It's been my go-to language for part-time projects, allowing me to explore creativity and innovation in mobile app development.
          </p>
          <p>
          One of my defining strengths lies in cloud computing, where I've honed my skills in Azure and AWS services. With hands-on experience and a slew of certifications under my belt, I'm adept at architecting robust and scalable cloud solutions to meet diverse business needs.
          </p>

          <p>
          My journey in technology has been a constant evolution, driven by curiosity and a relentless pursuit of excellence. I thrive on challenges and am always eager to push the boundaries of what's possible.
          </p>
          <p>
          Let's connect and explore the endless possibilities in the world of technology together.
          </p>
        </div>
      </header>
    </div>
  );
}

export default WithFadeInTransition(Home);
