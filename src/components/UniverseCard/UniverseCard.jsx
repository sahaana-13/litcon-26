import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './UniverseCard.css';

const UniverseCard = ({ title, description, linkTo, themeColor }) => {
    return (
        <Link to={linkTo} className="universe-link">
            <motion.div
                className={`universe-card glass-panel ${themeColor}`}
                whileHover={{ rotateY: themeColor === 'red-theme' ? 5 : -5, rotateX: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <div className="universe-content">
                    <h2 className="universe-title">
                        {title.split(' ').map((word, i) => (
                            <span key={i} style={{ display: 'block' }}>{word}</span>
                        ))}
                    </h2>
                    <p className="universe-desc">{description}</p>
                </div>
                <div className={`universe-glow-overlay ${themeColor}-overlay`}></div>
            </motion.div>
        </Link>
    );
};

export default UniverseCard;
