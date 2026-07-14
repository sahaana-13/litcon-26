import React from 'react';
import { motion } from 'framer-motion';
import './BackgroundEffects.css';

const BackgroundEffects = () => {
    return (
        <div className="bg-container">
            {/* Base noise overlay */}
            <div className="bg-noise"></div>

            {/* Cinematic Gradient Glows */}
            <motion.div
                className="bg-glow red-glow"
                animate={{
                    x: [0, 50, -30, 0],
                    y: [0, -30, 40, 0],
                    scale: [1, 1.2, 0.9, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="bg-glow blue-glow"
                animate={{
                    x: [0, -60, 40, 0],
                    y: [0, 50, -20, 0],
                    scale: [1, 1.1, 1.3, 1]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />

            {/* Floating Particles */}
            <div className="bg-particles"></div>

            {/* Abstract SVG Web Textures (Top Left, Top Right, Bottom Corners) */}
            <motion.div
                className="abstract-web top-left"
                animate={{ rotate: 3, scale: 1.05 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }}
            >
                <svg viewBox="0 0 200 200" fill="none" opacity="0.06">
                    <circle cx="0" cy="0" r="100" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="0" cy="0" r="150" stroke="white" strokeWidth="1" strokeDasharray="10 10" />
                    <path d="M0,0 L180,50 M0,0 L80,180 M0,0 L140,140" stroke="white" strokeWidth="1" />
                </svg>
            </motion.div>

            <motion.div
                className="abstract-web bottom-right"
                animate={{ rotate: -3, scale: 1.08 }}
                transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }}
            >
                <svg viewBox="0 0 200 200" fill="none" opacity="0.06">
                    <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="1" strokeDasharray="5 5" />
                    <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="1" strokeDasharray="15 15" />
                    <path d="M200,200 L20,150 M200,200 L120,20 M200,200 L60,60" stroke="white" strokeWidth="1" />
                </svg>
            </motion.div>
        </div>
    );
};

export default BackgroundEffects;
