import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

/*
==================================================
  GOOGLE FORMS + GOOGLE SHEETS + EMAIL AUTOMATION
==================================================
  How to set up automated confirmation emails:
  
  1. Create a Google Form with fields: Name, Email, Event Name.
  2. In Google Forms, go to "Responses" -> "Link to Sheets".
  3. Open the linked Google Sheet.
  4. Click on "Extensions" -> "Apps Script".
  5. Delete any existing code and paste the following script:

  ```javascript
  function sendConfirmationEmail(e) {
    if (!e || !e.namedValues) return;
    
    // Ensure column headers in Google Sheets exactly match these keys
    var name = e.namedValues['Name'][0];
    var email = e.namedValues['Email'][0];
    var eventName = e.namedValues['Event Name'][0];
    
    var subject = "Registration Successful – LITCON'26";
    
    var body = "Hello " + name + ",\n\n" +
               "Thank you for registering for " + eventName + " at LITCON'26.\n\n" +
               "Your registration has been received successfully.\n\n" +
               "We look forward to seeing you at the event!\n\n" +
               "Regards,\n" +
               "ENLIT Club\n" +
               "LITCON'26 Team";
               
    // Send email using MailApp service
    MailApp.sendEmail(email, subject, body);
  }
  ```
  6. Click the "Save" (floppy disk) icon.
  7. Click the "Triggers" (alarm clock) icon on the left sidebar.
  8. Click "Add Trigger" (bottom right).
  9. Choose function: `sendConfirmationEmail`
 10. Choose event source: "From spreadsheet"
 11. Choose event type: "On form submit"
 12. Save and authorize permissions.

  Now, every time the user clicks the "Register Now" button below and submits the form, they will automatically receive a confirmation email!
==================================================
*/
import { motion } from 'framer-motion';
import { FiCalendar, FiArrowLeft } from 'react-icons/fi';
import PageTransition from '../../components/PageTransition/PageTransition';
import { technicalEvents, nonTechnicalEvents } from '../../data/events';
import './EventDetails.css';

const EventDetails = () => {
    const { universe, id } = useParams();

    // Determine the source list
    const sourceList = universe === 'technical' ? technicalEvents :
        universe === 'nontechnical' ? nonTechnicalEvents : null;

    if (!sourceList) {
        return <Navigate to="/404" replace />;
    }

    const event = sourceList.find(e => e.id === id);

    if (!event) {
        return <Navigate to="/404" replace />;
    }

    return (
        <PageTransition className="event-details-page">
            <div className="event-poster-header" style={{ backgroundImage: `url(${event.poster})` }}>
                <div className="header-overlay"></div>
                <div className="header-content">
                    <Link to={`/events/${universe}`} className="back-link">
                        <FiArrowLeft /> Back to {universe} universe
                    </Link>
                    <motion.h1
                        className="details-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {event.title}
                    </motion.h1>
                    <motion.div
                        className="details-meta"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <span><FiCalendar /> {event.date}</span>
                    </motion.div>
                </div>
            </div>

            <div className="event-content-body">
                <div className="main-info glass-panel">
                    <h3>About the Event</h3>
                    <p>{event.fullDescription}</p>

                    <h3 className="rules-heading">Rules & Guidelines</h3>
                    <ul className="rules-list">
                        {event.rules.map((rule, idx) => (
                            <li key={idx}>- {rule}</li>
                        ))}
                    </ul>
                </div>

                <div className="register-sidebar">
                    <div className="register-card glass-panel">
                        <h2>Secure Your Origin.</h2>
                        <p>Limited slots available. Register now to secure your spot in this universe.</p>
                        <a href={event.registrationLink} target="_blank" rel="noreferrer" className="btn-register-large">
                            Register Now
                        </a>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default EventDetails;
