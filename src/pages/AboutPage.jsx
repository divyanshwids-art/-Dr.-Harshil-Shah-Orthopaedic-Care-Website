import React from 'react';
import { Link } from 'react-router-dom';

const experienceItems = [
  { title: 'Medical Education', text: '[details dalna baki he]' },
  { title: 'Post Graduation / Training', text: '[details dalna baki he]' },
  { title: 'Previous Roles / Clinical Experience', text: '[details dalna baki he]' },
  { title: 'Current Position', text: '[details dalna baki he]' }
];

const testimonialItems = [
  { quote: '[details dalna baki he]', label: 'Knee Care Patient', detail: '[details dalna baki he]' },
  { quote: '[details dalna baki he]', label: 'Hip Care Patient', detail: '[details dalna baki he]' },
  { quote: '[details dalna baki he]', label: 'Shoulder Care Patient', detail: '[details dalna baki he]' },
  { quote: '[details dalna baki he]', label: 'Sports Injury Patient', detail: '[details dalna baki he]' }
];

const treatmentItems = [
  'Knee Care',
  'Hip Care',
  'Shoulder Care',
  'Arthroscopy',
  'Sports Injuries',
  'Joint Reconstruction'
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-banner-section">
        <img
          className="about-banner-image"
          src="/ChatGPT Image Sep 21, 2026, 06_03_06 PM.png"
          alt="Dr. Harshil Shah Orthopaedic Care"
        />
      </section>

      <section className="about-content-section">
        <div className="shell about-split-layout">
          <div className="about-copy-block">
            <h2>About</h2>
            <p>
              I am a Consultant Orthopaedic Surgeon specializing in knee, hip, and shoulder joint care, arthroscopy, and sports injury recovery in Ahmedabad.
            </p>
            <p>
              I believe in clear communication, evidence-based treatment, and a patient-first approach. Every care plan is shaped around the individual needs, goals, and daily life of the patient.
            </p>
          </div>

          <div className="about-profile-card">
            <img src="/profile2.webp" alt="Dr. Harshil Shah profile" />
            <div className="about-profile-body">
              <h3>Dr. Harshil Shah</h3>
              <p className="about-role">M.S. (Ortho) · Consultant Orthopaedic Surgeon</p>
              <ul>
                <li><span>Location</span> Ahmedabad</li>
                <li><span>Additional details</span> [details dalna baki he]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-experience-section">
        <div className="shell">
          <div className="section-kicker">EXPERIENCE</div>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">A timeline of education, training, and clinical experience in orthopaedics.</p>

          <div className="about-timeline">
            {experienceItems.map((item, index) => (
              <div key={item.title} className="about-timeline-item">
                <div className="about-timeline-dot" aria-hidden="true" />
                <div className="about-timeline-card">
                  <div className="about-timeline-title-row">
                    <span>{item.title}</span>
                  </div>
                  <p>{item.text}</p>
                </div>
                {index < experienceItems.length - 1 && <div className="about-timeline-line" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-success-section">
        <div className="shell">
          <div className="section-kicker">SUCCESS STORIES</div>
          <h2 className="section-title">Patient Experiences</h2>
          <p className="section-subtitle">Real people. Real journeys. A few patient experience notes shared in a respectful, honest way.</p>

          <div className="about-testimonials-grid">
            {testimonialItems.map((item) => (
              <article key={item.label} className="about-testimonial-card">
                <div className="about-quote-icon">“</div>
                <p className="about-testimonial-text">{item.quote}</p>
                <div className="about-testimonial-footer">
                  <span className="about-testimonial-label">{item.label}</span>
                  <span className="about-testimonial-detail">{item.detail}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-camp-section">
        <div className="shell about-camp-grid">
          <div className="about-camp-image-wrap">
            <img src="/about3.webp" alt="Orthopaedic community care" />
          </div>

          <div className="about-camp-copy">
            <div className="section-kicker">CAMP WORK</div>
            <h2>Orthopaedic Camps</h2>
            <p>[details dalna baki he]</p>
          </div>
        </div>
      </section>

      <section className="about-treatment-section">
        <div className="shell">
          <div className="section-kicker">TREATMENTS</div>
          <h2 className="section-title">Types of Treatment He Offers</h2>
          <p className="section-subtitle">Comprehensive orthopaedic care for better movement, strength and quality of life.</p>

          <div className="about-treatment-grid">
            {treatmentItems.map((item) => (
              <div key={item} className="about-treatment-card">
                <div className="about-treatment-icon" aria-hidden="true">✦</div>
                <h3>{item}</h3>
                <span>[details dalna baki he]</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
