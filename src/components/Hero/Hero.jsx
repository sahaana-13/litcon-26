import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <motion.div
                className="hero-logo-wrapper"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className="cinematic-glow"></div>
                <h1 className="main-logo-text">LITCON<span>'26</span></h1>
            </motion.div>

            <motion.div
                className="hero-text-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                <h3 className="hero-tagline">EVERY HERO HAS AN ORIGIN.<br />EVERY IDEA HAS A UNIVERSE.</h3>
                <p className="hero-subtext">Where Literature Meets Innovation.</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                <Link to="/events" className="btn-primary glass-panel">
                    Explore The Universe
                </Link>
            </motion.div>
        </div>
    );
};

export default Hero;
