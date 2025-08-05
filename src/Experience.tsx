import React from 'react';
import './Experience.scss';
import { X } from 'lucide-react';

import HtmlLogo from "./Logos/html5.png";
import CssLogo from "./Logos/css.png";
import JsLogo from "./Logos/javascript.png";
import PythonLogo from "./Logos/python.png";
import ReactLogo from "./Logos/react.png";
import TsLogo from "./Logos/tsnode.png";
import SqlLogo from "./Logos/mysql.png";
import PhpLogo from "./Logos/php.png";
import firebaseLogo from "./Logos/firebase.png";

type ExperienceProps = {
  onClose: () => void;
};

const logos = [
  { src: HtmlLogo, alt: "HTML" },
  { src: CssLogo, alt: "CSS" },
  { src: JsLogo, alt: "JavaScript" },
  { src: PythonLogo, alt: "Python" },
  { src: ReactLogo, alt: "React" },
  { src: TsLogo, alt: "TypeScript" },
  { src: SqlLogo, alt: "SQL" },
  { src: PhpLogo, alt: "PHP" },
  { src: firebaseLogo, alt: "Firebase" },
];

const qualifications = [
  {
    qualification: 'BCS L4 Software Tester Qualification',
    dates:'Dec 2023 - Jan 2024',
    grade:'Merit',
  },
];

const experiences = [
  {
    role: 'Software Tester & Junior Web Developer at Stalis',
    dates: 'Jan 2024 – Present',
    description: [
      'Led manual and automated testing initiatives for NHS healthcare software, ensuring data integrity across backend and UI layers.',
      'Collaborated with external security consultants to validate vulnerability fixes and strengthen application security posture.',
      'Contributed React components and UI fixes to internal healthcare portal, enhancing user experience and front-end maintainability.',
      'Utilized Microsoft SQL Server for backend validation and database-driven test case creation.',
      'Explored training in TypeScript and advanced development workflows to expand contributions beyond QA.',
    ],
    skills: [
      'Manual Testing', 'Automation Testing', 'React', 'SQL',
      'Microsoft SQL Server', 'Data Integrity', 'Functional Testing',
      'Security Testing', 'Front-End Debugging',
    ],
  },
  {
    role: 'Apprentice Software Tester at Stalis',
    dates: 'Sept 2022 – Jan 2024',
    description: [
      'Executed full test lifecycle for data archiving solutions, including functional, accessibility, and performance testing.',
      'Designed SQL queries to verify NHS data integrity and troubleshoot ETL pipeline anomalies.',
      'Authored test plans and maintained traceability within Agile workflows, improving coverage and cross-team communication.',
      'Participated in backlog grooming and sprint demos to ensure test feedback influenced delivery.',
    ],
    skills: [
      'Test Planning', 'Agile', 'SQL', 'Accessibility Testing',
      'Functional Testing', 'Data Validation', 'Test Lifecycle',
    ],
  },
];

const Experience: React.FC<ExperienceProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <h2 className="modal-title">Experience</h2>

        <div className="qualifications">
        <h3 className="subtitle">Qualifications</h3>
        {qualifications.map((qualif, i) => (
          <div className="qualification-item" key={i}>
            <h3 className='qualification-name'>{qualif.qualification}</h3>
            <span className="qualification-date">{qualif.dates}</span>
            <h3 className='qualification-grade'>Grade: {qualif.grade}</h3>
          </div>
        ))}
        </div>

        <div className="tech-stack">
          <h3 className="subtitle">Languages & Tools I'm skilled in</h3>
          <div className="logo-grid">
            {logos.map((logo, index) => (
              <div key={index} className="logo-item">
                <img src={logo.src} alt={logo.alt} />
                <span>{logo.alt}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-list">
          <h3 className="subtitle">Career History</h3>
          {experiences.map((exp, i) => (
            <div className="experience-item" key={i}>
              <h3>{exp.role}</h3>
              <span className="date">{exp.dates}</span>
              <ul>
                {exp.description.map((line, j) => (
                  <li key={j}>{line}</li>
                ))}
              </ul>
              <div className="experience-skills">
                {exp.skills.map((skill, k) => (
                  <span key={k} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Experience;
