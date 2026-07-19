import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BackgroundEffects from './components/BackgroundEffects/BackgroundEffects';

import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Technical from './pages/Technical/Technical';
import NonTechnical from './pages/NonTechnical/NonTechnical';
import EventDetails from './pages/EventDetails/EventDetails';
import NotFound from './pages/NotFound/NotFound';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />

                <Route path="/events/technical" element={<Technical />} />
                <Route path="/technical-events" element={<Navigate to="/events/technical" replace />} />
                <Route path="/events/technical-events" element={<Navigate to="/events/technical" replace />} />

                <Route path="/events/nontechnical" element={<NonTechnical />} />
                <Route path="/non-technical-events" element={<Navigate to="/events/nontechnical" replace />} />
                <Route path="/events/non-technical-events" element={<Navigate to="/events/nontechnical" replace />} />

                <Route path="/events/:universe/:id" element={<EventDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    return (
        <>
            <BackgroundEffects />
            <Navbar />
            <div className="main-content">
                <AnimatedRoutes />
            </div>
            <Footer />
        </>
    );
}

export default App;