import React from 'react';
import './Education.scss';
import WithFadeInTransition from '../FadeInText/WithFadeInTransition';
function Education() {
  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="education-item">
        <div className="education-header">
          <h3>Bachelor of Technology</h3>
          <p>Siksha O Anusandhan University</p>
          <p>2022 | Bhubaneswar, India</p>
          <p>CGPA- 9.3</p>
        </div>
        <div className="additional-info">
            <h4>Course Highlights:</h4>
            <ul>
                <li>Studied Computer Science specialization</li>
                <li>Engaged in an in-depth exploration of Data Structures and Algorithms.</li>
                <li>Applied best coding practices in Java, Python, and C languages.</li>
                <li>Hands-on experience in Shell Scripting and Bash scripting</li>
                <li>Developed Android & Flutter Applications using Android Studio</li>
                <li>Use of AI Automation Tools as well as Machine Learning & Deep Learning Tools</li>
            </ul>
        </div>
      </div>
      <div className="education-item">
        <div className="education-header">
          <h3>Secondary Education</h3>
          <p>De Paul School</p>
          <p>Specilization in Computer Science</p>
          <p>2018 | Berhampur, India</p>
        </div>
      </div>
      <div className="education-item">
        <div className="education-header">
          <h3>Primary Education</h3>
          <p>De Paul School</p>
          <p>Specialization in Science Subjects</p>
          <p>2016 | Berhampur, India</p>
        </div>
      </div>
    </div>
  );
}

export default WithFadeInTransition(Education);
