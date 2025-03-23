import React from 'react';
import { motion } from 'framer-motion';
import { BsRocketTakeoff } from 'react-icons/bs';

function Hero({ name, bio, scrollToProjects }) {
  return (
    <motion.section
      id="home"
      className="bg-dark text-light text-center d-flex flex-column justify-content-center align-items-center py-5"
      style={{
        minHeight: '80vh',
        background: 'linear-gradient(145deg, #1c1c1c, #2b2b2b)',
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.h1
          className="display-4 fw-bold mb-3"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {name}
        </motion.h1>

        <motion.p
          className="lead mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {bio}
        </motion.p>

        <motion.button
          className="btn text-white btn-danger btn-lg px-4 py-2 fw-semibold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToProjects}
        >
          <BsRocketTakeoff/> View My Work
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
