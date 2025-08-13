import { useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import './Home.scss';
import Experience from './Experience';
import Projects from './Project';  // Make sure Experience accepts an onClose prop!
import Headshot from './HeadshotV2.png';
import LocationIcon from './Logos/location.png';
import EmailIcon from './Logos/email.png';
import PhoneIcon from './Logos/phone.png';
import GithubIcon from './Logos/github.png';
import LinkedInIcon from './Logos/linkedin.png';
import { Download } from 'lucide-react';

type VantaEffectType = {
  destroy: () => void;
};

const Home = () => {
  const [showExperience, setShowExperience] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const vantaRef = useRef(null);
  const vantaEffectRef = useRef<VantaEffectType | null>(null);

  useEffect(() => {
    if (!vantaEffectRef.current && vantaRef.current) {
      vantaEffectRef.current = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 300.0,
        minWidth: 300.0,
        scale: 1.5,
        scaleMobile: 1.0,
        color: 0x00ffff,
        backgroundColor: 0x0f172a,
      });
    }

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <div ref={vantaRef} className="home-wrapper">
        <main className="content">
          <div className="content-overlay">
            <div className="profile-wrapper">
              <div className="headshot">
                <img src={Headshot} alt="Headshot"  loading="lazy" />
              </div>
              <div className="info">
                <h1>
                  Mark Nixon
                  <span className="wavehand" role="img" aria-label="waving hand">👋</span>
                </h1>
                <div className="underline"></div>
                <h2>Software Tester / Junior Web Developer</h2>
                <p>
                  Detail-driven Software Tester passionate about quality, always learning new tech,
                  with hands-on NHS experience and a love for building smarter systems.
                </p>

                <div className="contact-info">
                  <div className="contact-item">
                    <img src={LocationIcon} alt="Location" />
                    <span>  :  Stockport, UK</span>
                  </div>
                  <div className="contact-item">
                    <img src={EmailIcon} alt="Email" />
                    <span>  :  Mark.Nixon2604@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <img src={PhoneIcon} alt="Phone" />
                    <span>  :  +44 7305 394465</span>
                  </div>
                  <div className="contact-itemv2">
                    <a href="https://github.com/Markuff1" target="_blank" rel="noopener noreferrer">
                      <img src={GithubIcon} alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/mark-nixon-325b84239/" target="_blank" rel="noopener noreferrer">
                      <img src={LinkedInIcon} alt="LinkedIn" />
                    </a>
                    <a href="/MarksCV.pdf" download className="CVButton">
                      <Download size={18} style={{ marginRight: '0.5rem' }} />
                      Download CV
                    </a>
                  </div>
                </div>

                <div className="buttons">
                  <button className="btn" onClick={() => setShowExperience(true)}>EXPERIENCE</button>
                  <button className="btn" onClick={() => setShowProjects(true)}>PROJECTS</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {showExperience && <Experience onClose={() => setShowExperience(false)} />}
      {showProjects && <Projects onClose={() => setShowProjects(false)} />}
    </>
  );
};

export default Home;
