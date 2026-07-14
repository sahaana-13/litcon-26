import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../../components/PageTransition/PageTransition';
import UniverseCard from '../../components/UniverseCard/UniverseCard';
import './Events.css';

const Events = () => {
    return (
        <PageTransition className="events-selection-page">
            <div className="selection-container">
                <motion.div
                    className="selection-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="cinematic-title">CHOOSE YOUR UNIVERSE</h1>
                    <p className="cinematic-subtitle">Step into a realm of innovation or dive into a world of creativity.</p>
                </motion.div>

                <div className="portals-grid">
                    <UniverseCard
                        title="⚡ TECHNICAL UNIVERSE"
                        description="Where logic, design, and problem-solving collide."
                        linkTo="/events/technical"
                        themeColor="blue-theme"
                    />
                    <UniverseCard
                        title="🎭 NON TECHNICAL UNIVERSE"
                        description="Where creativity and imagination take center stage."
                        linkTo="/events/nontechnical"
                        themeColor="red-theme"
                    />
                </div>
            </div>
        </PageTransition>
    );
};

export default Events;
