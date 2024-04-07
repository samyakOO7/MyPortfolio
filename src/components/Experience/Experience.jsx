import React from 'react';
import './Experience.scss';
import PublicisSapientLogo from '../../images/publicis-sapient.png'; // Import Publicis Sapient logo
import HighRadiusLogo from '../../images/high-radius.png'
import WithFadeInTransition from '../FadeInText/WithFadeInTransition';
function Experience() {
  return (
    <div className="experience-container">
       <section className="section">
        <div className="experience-item">
          <div className="experience-details">
            <div className="flex-container">
              <div className="flex-item">
                <h3 className="company-name">
                  ASDE-2 Publicis Sapient
                </h3>
                <p className="position">Full Stack Developer</p>
            <p className="timeline">07/2022 – present | Bengaluru, Karnataka</p>
              </div>
              <div className="flex-item">
                <img src={PublicisSapientLogo} alt="Publicis Sapient Logo" className="company-logo" />
              </div>
            </div>
           
            <ul>
              <li>Proficient in .NET, C#, Entity Framework, Angular, and TypeScript, showcasing expertise in modern web development technologies.</li>
              <li>Demonstrating strong skills in MS SQL Server, including designing tables, implementing table-valued functions, and optimizing stored procedures for efficient data processing.</li>
              <li>Successfully implemented end-to-end data flow solutions using data factory pipelines, ensuring seamless and streamlined data processing.</li>
              <li>Hands-on experience with a wide range of Azure services, such as ECS, Kubernetes, and Azure SQL Server, enabling efficient deployment and scaling of cloud resources.</li>
              <li>Proficient in cloud architecture, encompassing App Configurations, Key Vault, Redis Cache, WAF, and Log Analytics, as well as Azure Monitoring and App Insights for robust cloud-based solutions.</li>
              <li>Implemented advanced state management techniques using NgRx store in Angular applications, ensuring optimal performance and scalability.</li>
              <li>Designed intuitive and responsive user interfaces utilizing Material UI, Prime NG, and Ng-bootstrap, providing users with a seamless and enjoyable experience across devices.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="experience-item">
          <div className="experience-details">
            <div className="flex-container">
              <div className="flex-item">
                <h3 className="company-name">
                  Intern Software Developer - High Radius
                </h3>
                <p className="position">07/2021 – 03/2022 | Bhubaneswar, India</p>
              </div>
              <div className="flex-item">
                <img src={HighRadiusLogo} alt="High Radius Logo" className="company-logo" />
              </div>
            </div>
          
            <ul>
              <li>Proficient in Java development with expertise in Spring Boot, Spring framework, and JPA Repository, leveraging these technologies to build robust and scalable backend applications.</li>
              <li>Skilled in building secure applications using Spring Security, implementing authentication and authorization mechanisms to ensure data integrity and user privacy.</li>
              <li>Experienced in front-end development using ExtJS, Node.js, HTML, CSS, and Bootstrap, creating visually appealing and responsive user interfaces for enhanced user experience.</li>
              <li>Cloud and DevOps proficiency includes AWS services such as Elastic Kubernetes Service (EKS) for efficient deployment and management of containerized applications, Amazon RDS for hosting databases with high availability and scalability, and Docker for optimizing container image distribution and deployment in Amazon Elastic Container Registry (ECR).</li>
              <li>Implemented one-way data binding in UI for seamless integration with data resources.</li>
            <li>Well-versed in AWS IAM (Identity and Access Management) for managing user roles and permissions, ensuring secure access to AWS resources.</li>
            <li>Implemented one-way data binding in UI for seamless integration with data resources, enhancing data consistency and reducing latency in data retrieval and manipulation.</li>
           <li>Experienced with Spring Cloud Gateway and Spring Eureka for building microservices architecture, providing dynamic routing and service discovery capabilities to ensure scalability and resilience in distributed systems.</li>
           <li>Proficient in implementing various authentication mechanisms in Spring applications, including OAuth 2.0, JWT (JSON Web Tokens), and LDAP (Lightweight Directory Access Protocol), ensuring secure access control and user authentication in enterprise-grade applications.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WithFadeInTransition(Experience);
