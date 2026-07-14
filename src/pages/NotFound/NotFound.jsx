import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition/PageTransition';

const NotFound = () => {
    return (
        <PageTransition className="page-not-found" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
            <h1 style={{ fontSize: '6rem', color: 'var(--primary-red)' }}>404</h1>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Universe Not Found</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>The page you are looking for has been destroyed in a multiverse collision.</p>
            <Link to="/" style={{ padding: '0.8rem 1.5rem', background: 'var(--accent-blue)', borderRadius: '4px', fontWeight: 'bold' }}>
                Return to Origin
            </Link>
        </PageTransition>
    );
};

export default NotFound;
