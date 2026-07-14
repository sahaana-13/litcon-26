import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../../components/PageTransition/PageTransition';
import EventCard from '../../components/EventCard/EventCard';
import { technicalEvents } from '../../data/events';
import './UniverseLayout.css';

const Technical = () => {
    return (
        <PageTransition className="universe-layout tech-layout">
            <div className="universe-hero glass-panel">
                <motion.h1
                    className="universe-hero-title blue-accent"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    TECHNICAL UNIVERSE
                </motion.h1>
                <motion.p
                    className="universe-hero-desc"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Where logic, design, and problem-solving collide.
                </motion.p>
            </div>

            <div className="events-grid">
                {technicalEvents.map((event, index) => (
                    <EventCard
                        key={event.id}
                        event={event}
                        index={index}
                        detailBaseUrl="/events/technical"
                    />
                ))}
            </div>
        </PageTransition>
    );
};

export default Technical;
