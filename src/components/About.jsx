import React from 'react';
import { motion } from 'framer-motion';

function About({ profilePic, about, skills, interests }) {
  const skillList = skills?.split(',').map((s) => s.trim());
  const interestList = interests?.split(',').map((i) => i.trim());

  return (
    <motion.section
      id="about"
      className="bg-light py-5"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <h2 className="text-center mb-4">👨‍💼 About Me</h2>
        <div className="row align-items-center">
          {/* Profile Picture */}
          <motion.div
            className="col-md-4 text-center mb-4 mb-md-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <img
              src={profilePic || 'https://via.placeholder.com/200'}
              alt="Profile"
              className="img-fluid rounded-circle shadow"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </motion.div>

          {/* Info */}
          <motion.div
            className="col-md-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="mb-3">
              {about ||
                'A passionate developer with a love for learning and building cool things.'}
            </p>

            {skillList?.length > 0 && (
              <div className="mb-3">
                <h5 className="fw-bold">Skills:</h5>
                <ul className="list-inline">
                  {skillList.map((skill, index) => (
                    <motion.li
                      key={index}
                      className="list-inline-item badge bg-primary m-1 p-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {interestList?.length > 0 && (
              <div>
                <h5 className="fw-bold">Interests:</h5>
                <ul className="list-inline">
                  {interestList.map((interest, index) => (
                    <motion.li
                      key={index}
                      className="list-inline-item badge bg-secondary m-1 p-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {interest}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
