import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { dummyState } from '../constants/dummyState';
import { useLocation } from 'react-router-dom';

function PortfolioPage() {
      const { state } = useLocation();
  const data = state || dummyState;

  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' }); 
  }, []);

  return (
    <>
      <Navbar
        onScrollTo={{
          homeRef,
          aboutRef,
          projectsRef,
          contactRef,
          scrollTo,
        }}
      />

      <section ref={homeRef} className="scroll-section">
        <Hero
            name={state?.name}
            bio={state?.bio}
            scrollToProjects={() => scrollTo(projectsRef)}
            />
      </section>

      <section ref={aboutRef} className="scroll-section">
        <About
          profilePic={data?.profilePic}
          about={data?.about}
          skills={data?.skills}
          interests={data?.interests}
        />
      </section>

      <section ref={projectsRef} className="scroll-section">
        <Projects initialProjects={data?.projects} githubUsername={data?.githubUsername} />
      </section>

      <section ref={contactRef} className="scroll-section">
        <Contact />
      </section>

      <Footer socials={data?.socials || []} />
    </>
  );
}

export default PortfolioPage;
