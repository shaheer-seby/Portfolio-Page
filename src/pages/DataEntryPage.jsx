import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaUser,
  FaInfoCircle,
  FaLaptopCode,
  FaLinkedin,
  FaPlus,
  FaGithub,
  FaCamera,
  FaTrashAlt,
} from 'react-icons/fa';
import DarkModeToggle from '../components/DarkModeToggle';
import { RxRocket } from 'react-icons/rx';

function DataEntryPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('portfolioData');
    return saved
      ? JSON.parse(saved)
      : {
          name: '',
          bio: '',
          profilePic: '',
          githubUsername: '',
          about: '',
          skills: '',
          interests: '',
          projects: [{ title: '', description: '', image: '', github: '' }],
          socials: [{ name: '', url: '' }],
        };
  });

  useEffect(() => {
    localStorage.setItem('portfolioData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e, section, index) => {
    const { name, value } = e.target;

    if (section === 'projects' || section === 'socials') {
      const updated = [...formData[section]];
      updated[index][name] = value;
      setFormData({ ...formData, [section]: updated });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addField = (section) => {
    const newField =
      section === 'projects'
        ? { title: '', description: '', image: '', github: '' }
        : { name: '', url: '' };

    setFormData({ ...formData, [section]: [...formData[section], newField] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/portfolio', { state: formData });
  };

  const clearStorage = () => {
    localStorage.removeItem('portfolioData');
    window.location.reload();
  };

  return (
    <>
    <nav className="navbar navbar-dark bg-dark px-3 py-2 shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <span className="navbar-brand mb-0 h5 text-warning d-flex align-items-center">
          <FaUser className="me-2" />
          Portfolio Builder
        </span>
        <DarkModeToggle />
      </div>
    </nav>
    <div className="min-vh-100 d-flex justify-content-center align-items-start bg-light bg-gradient py-5 px-3">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: '850px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-primary fw-bold m-0 d-flex align-items-center">
            <FaUser className="me-2" />
            Build Your Portfolio
          </h2>
          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-sm btn-outline-danger d-flex align-items-center" onClick={clearStorage}>
              <FaTrashAlt className="me-1" />
              Clear Data
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>

          <h5 className="text-secondary">
            <FaInfoCircle className="me-2" />
            Personal Info
          </h5>

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Short Bio</label>
            <textarea
              className="form-control"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              <FaCamera className="me-2" />
              Profile Picture URL
            </label>
            <input
              type="text"
              className="form-control"
              name="profilePic"
              value={formData.profilePic}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              <FaGithub className="me-2" />
              GitHub Username
            </label>
            <input
              type="text"
              className="form-control"
              name="githubUsername"
              value={formData.githubUsername}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">About Me (Detailed)</label>
            <textarea
              className="form-control"
              name="about"
              value={formData.about}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Skills (comma-separated)</label>
              <input
                type="text"
                className="form-control"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Interests</label>
              <input
                type="text"
                className="form-control"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
              />
            </div>
          </div>

          <hr className="my-4" />

          <h5 className="text-secondary">
            <FaLaptopCode className="me-2" />
            Projects
          </h5>
          {formData.projects.map((project, idx) => (
            <div className="border rounded p-3 mb-3 bg-light-subtle" key={idx}>
              <input
                className="form-control mb-2"
                placeholder="Project Title"
                name="title"
                value={project.title}
                onChange={(e) => handleChange(e, 'projects', idx)}
              />
              <textarea
                className="form-control mb-2"
                placeholder="Project Description"
                name="description"
                value={project.description}
                onChange={(e) => handleChange(e, 'projects', idx)}
              />
              <input
                className="form-control mb-2"
                placeholder="Project Image URL"
                name="image"
                value={project.image}
                onChange={(e) => handleChange(e, 'projects', idx)}
              />
              <input
                className="form-control"
                placeholder="GitHub Link"
                name="github"
                value={project.github}
                onChange={(e) => handleChange(e, 'projects', idx)}
              />
            </div>
          ))}
          <button
            type="button"
            className="btn btn-outline-primary mb-4"
            onClick={() => addField('projects')}
          >
            <FaPlus className="me-1" />
            Add Another Project
          </button>

          <hr className="my-4" />

          <h5 className="text-secondary">
            <FaLinkedin className="me-2" />
            Social Media
          </h5>
          {formData.socials.map((social, idx) => (
            <div className="row g-2 mb-2" key={idx}>
              <div className="col">
                <input
                  className="form-control"
                  placeholder="Platform Name"
                  name="name"
                  value={social.name}
                  onChange={(e) => handleChange(e, 'socials', idx)}
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  placeholder="URL"
                  name="url"
                  value={social.url}
                  onChange={(e) => handleChange(e, 'socials', idx)}
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-outline-secondary mb-4"
            onClick={() => addField('socials')}
          >
            <FaPlus className="me-1" />
            Add Another Social
          </button>

          <div className="text-center">
            <button type="submit" className="btn btn-success px-5 py-2">
              <RxRocket/> Generate Portfolio
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default DataEntryPage;
