import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';
import './EventCard.css';

const EventCard = ({ event, index, detailBaseUrl }) => {
    return (
        <motion.div
            className="cinema-event-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
        >
            <div className="card-poster-wrapper" style={{ position: "relative" }}>
                <img src={event.poster} alt={event.title} className="event-poster" />
                <div className="poster-overlay"></div>
            </div>

            <div className="card-info">
                <h3 className="card-title">{event.title}</h3>
                <p className="card-desc">{event.shortDescription}</p>

                <div className="card-meta">
                    <span className="meta-item"><FiCalendar /> {event.date.split('-')[0].trim()}</span>
                </div>

                <div className="card-actions">
                    <Link to={`${detailBaseUrl}/${event.id}`} className="btn-details">
                        View Details <FiArrowRight />
                    </Link>
                    <a href={event.registrationLink} target="_blank" rel="noreferrer" className="btn-register">
                        Register
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default EventCard;
