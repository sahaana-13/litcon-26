import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3 className="footer-logo">ENLIT Club</h3>
                    <p>Where Literature Meets Innovation.</p>
                </div>

                <div className="footer-contact">
                    <p>
                        Contact:
                        <br />
                        Sai Madhan - +91 74187 31723
                        <br />
                        Ravina JR - +91 72002 80985
                    </p>

                    <div className="social-links">
                        <a
                            href="https://www.instagram.com/enlit.eec?igsh=MWFtbnp1dTgycndwZw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram: @enlit.eec
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 LITCON. All Rights Reserved.</p>
                <p>Crafted with ❤️ by ENLIT Club.</p>
            </div>
        </footer>
    );
};

export default Footer;