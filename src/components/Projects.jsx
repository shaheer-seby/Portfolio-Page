import React, { useEffect, useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import Draggable from 'react-draggable';
import { BiBriefcase, BiGlobe, BiUser } from 'react-icons/bi';

function Projects({ initialProjects = [], githubUsername = 'shaheer-seby' }) {
  const [githubProjects, setGithubProjects] = useState([]);


  const refs = useRef([]);

  useEffect(() => {
    const fetchFromGitHub = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
        const data = await res.json();

        const formatted = data.slice(0, 3).map((repo) => ({
          title: repo.name,
          description: repo.description || 'No description provided.',
          image: 'https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg',
          github: repo.html_url,
        }));

        setGithubProjects(formatted);
      } catch (err) {
        console.error('GitHub fetch failed:', err);
      }
    };

    fetchFromGitHub();
  }, [githubUsername]);

  return (
    <section id="projects" className="py-5 bg-body-secondary">
      <div className="container">
        <h2 className="text-center mb-5 d-flex justify-content-center align-items-center gap-2"><BiBriefcase className='mt-1'/> Projects</h2>

        {initialProjects.filter(p => p.title || p.description || p.image || p.github).length > 0 && (
          <div className="mb-5">

            <div className="row gy-4 justify-content-center">
              {initialProjects.map((project, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        )}

        {githubProjects.length > 0 && (
          <div className="mb-5">
            <h3 className="text-center text-primary mb-4 d-flex justify-content-center align-items-center gap-2"><BiGlobe className='mt-1'/> GitHub Projects</h3>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              {githubProjects.map((project, index) => {
                if (!refs.current[index]) {
                  refs.current[index] = React.createRef();
                }

                return (
                  <Draggable key={index} nodeRef={refs.current[index]}>
                    <div
                      ref={refs.current[index]}
                      style={{
                        cursor: 'move',
                        width: '100%',
                        maxWidth: '360px',
                      }}
                    >
                      <ProjectCard {...project} />
                    </div>
                  </Draggable>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
