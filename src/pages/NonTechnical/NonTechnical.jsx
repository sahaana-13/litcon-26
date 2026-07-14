import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../../components/PageTransition/PageTransition';
import EventCard from '../../components/EventCard/EventCard';
import { nonTechnicalEvents } from '../../data/events';
import '../Technical/UniverseLayout.css';

const NonTechnical = () => {
    return (
        <PageTransition className="universe-layout non-tech-layout">
            <div className="universe-hero glass-panel">
                <motion.h1
                    className="universe-hero-title red-accent"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    NON TECHNICAL UNIVERSE
                </motion.h1>
                <motion.p
                    className="universe-hero-desc"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Where creativity and imagination take center stage.
                </motion.p>
            </div>

            <div className="events-grid">
                {nonTechnicalEvents.map((event, index) => (
                    <EventCard
                        key={event.id}
                        event={event}
                        index={index}
                        detailBaseUrl="/events/nontechnical"
                    />
                ))}
            </div>
        </PageTransition>
    );
};

export default NonTechnical;
