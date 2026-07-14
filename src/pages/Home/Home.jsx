import React from 'react';
import PageTransition from '../../components/PageTransition/PageTransition';
import Hero from '../../components/Hero/Hero';

const Home = () => {
    return (
        <PageTransition className="home-page">
            <Hero />
        </PageTransition>
    );
};

export default Home;
