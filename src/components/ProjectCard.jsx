import React from 'react';
import { FaGithub } from 'react-icons/fa';

function ProjectCard({ title, description, image, github }) {
  return (
    <div className="card shadow-sm">
      <img
        src={image || 'https://cdn.prod.website-files.com/5ded36b5e942e74b13468d23/623412971d82117b5df49b0a_00-Hero%402x.png'}
        className="card-img-top"
        alt={title}
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{description}</p>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark">
            <FaGithub className="me-1" /> GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
