import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaDev,
  FaGlobe,
} from 'react-icons/fa';

function Footer({ socials = [] }) {
  const iconMap = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    twitter: <FaTwitter />,
    instagram: <FaInstagram />,
    facebook: <FaFacebook />,
    youtube: <FaYoutube />,
    dev: <FaDev />,
    hashnode: <FaGlobe />,
    website: <FaGlobe />,
  };

  const normalizeUrl = (url) => {
    if (!url) return '#';
    try {
      return new URL(url).href; 
    } catch {
      return `https://${url}`; 
    }
  };

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <div className="mb-3">
          {socials.map((social, idx) => {
            const platform = social.name.toLowerCase().trim();
            const icon = iconMap[platform] || <FaGlobe />;
            const url = normalizeUrl(social.url);

            return (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4 mx-3"
                title={platform.charAt(0).toUpperCase() + platform.slice(1)}
              >
                {icon}
              </a>
            );
          })}
        </div>
        <small>
          &copy; {new Date().getFullYear()} Portfolio Builder by Shaheer. All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
