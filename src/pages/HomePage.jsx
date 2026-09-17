import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import Recovery3DViewer from '../components/Recovery3DViewer';
import ReviewsSlider from '../components/ReviewsSlider';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Dynamic Hero Carousel */}
      <HeroSlider />



      {/* Areas of Care - Redesigned Section */}
      <section className="care-section-redesign" id="care">
        <div className="shell">
          {/* Top Header Row */}
          <div className="care-top-header">
            <div className="care-top-left">
              <h2 className="care-main-heading">
                Focused expertise <span className="text-highlight-blue">for better movement.</span>
              </h2>
              <p className="care-main-desc">
                From accurate diagnosis to advanced treatment, we create personalised care plans to help you move better, heal faster and return to the life you love.
              </p>
            </div>

            {/* Top Right 4 Pillars */}
            <div className="care-top-pillars">
              <div className="care-pillar-item">
                <div className="care-pillar-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="care-pillar-text">
                  <h4>Patient First</h4>
                  <p>Care that puts you and your goals first.</p>
                </div>
              </div>

              <div className="care-pillar-divider" />

              <div className="care-pillar-item">
                <div className="care-pillar-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <div className="care-pillar-text">
                  <h4>Advanced Care</h4>
                  <p>Evidence-based treatment with latest techniques.</p>
                </div>
              </div>

              <div className="care-pillar-divider" />

              <div className="care-pillar-item">
                <div className="care-pillar-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="care-pillar-text">
                  <h4>Expert Team</h4>
                  <p>Skilled, experienced and committed to your recovery.</p>
                </div>
              </div>

              <div className="care-pillar-divider" />

              <div className="care-pillar-item">
                <div className="care-pillar-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div className="care-pillar-text">
                  <h4>Better Outcomes</h4>
                  <p>Personalised plans for faster recovery and lasting results.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Specialty Cards Grid */}
          <div className="care-cards-grid">
            {/* Card 01: Knee Care */}
            <div className="care-card-item">
              <div className="care-card-img-wrapper">
                <img src="/knee-care-card.jpg" alt="Knee Care" className="care-card-img care-card-img-default" />
                <img src="/knee-motion-v2.webp" alt="3D Knee Joint Model" className="care-card-img care-card-img-hover3d" />
                <span className="care-card-num-badge">01</span>
              </div>
              <div className="care-card-body">
                <h3>Knee Care</h3>
                <p>Specialised treatment for knee pain, injuries, arthritis and ligament problems.</p>
                <Link to="/treatments#knee" className="care-card-link">
                  <span>Explore Knee Care</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 02: Hip Care */}
            <div className="care-card-item">
              <div className="care-card-img-wrapper">
                <img src="/hip-care-card.jpg" alt="Hip Care" className="care-card-img care-card-img-default" />
                <img src="/hip-precision-v2.webp" alt="3D Hip Joint Model" className="care-card-img care-card-img-hover3d" />
                <span className="care-card-num-badge">02</span>
              </div>
              <div className="care-card-body">
                <h3>Hip Care</h3>
                <p>Advanced solutions for hip pain, arthritis and mobility issues.</p>
                <Link to="/treatments#hip" className="care-card-link">
                  <span>Explore Hip Care</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 03: Shoulder Care */}
            <div className="care-card-item">
              <div className="care-card-img-wrapper">
                <img src="/shoulder-care-card.jpg" alt="Shoulder Care" className="care-card-img care-card-img-default" />
                <img src="/shoulder-mobility-v2.webp" alt="3D Shoulder Joint Model" className="care-card-img care-card-img-hover3d" />
                <span className="care-card-num-badge">03</span>
              </div>
              <div className="care-card-body">
                <h3>Shoulder Care</h3>
                <p>Expert care for shoulder pain, injuries, stiffness and rotator cuff problems.</p>
                <Link to="/treatments#shoulder" className="care-card-link">
                  <span>Explore Shoulder Care</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 04: Sports Injuries */}
            <div className="care-card-item">
              <div className="care-card-img-wrapper">
                <img src="/sports-injuries-card.jpg" alt="Sports Injuries" className="care-card-img care-card-img-default" />
                <img src="/eras-journey-3d.webp" alt="3D Sports Joint Model" className="care-card-img care-card-img-hover3d" />
                <span className="care-card-num-badge">04</span>
              </div>
              <div className="care-card-body">
                <h3>Sports Injuries</h3>
                <p>Comprehensive care for sports injuries and active lifestyle problems.</p>
                <Link to="/treatments#sports" className="care-card-link">
                  <span>Explore Sports Injuries</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Help Banner */}
          <div className="care-help-banner">
            <div className="care-help-left">
              <div className="care-help-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#1e3a8a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7z" />
                </svg>
              </div>
              <div className="care-help-text">
                <h3>Need help choosing the right treatment?</h3>
                <p>Our experts are here to guide you.</p>
              </div>
            </div>
            <div className="care-help-divider" />
            <Link to="/treatments" className="care-help-btn">
              <span>View All Treatments</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Block 1: Experience Personalized Rehabilitation (Redesigned) */}
      <section className="rehab-section-v2" aria-label="Personalized Rehabilitation">
        <div className="shell">
          <div className="rehab-v2-grid">
            {/* Left Content Column */}
            <div className="rehab-v2-left">
              <h2 className="rehab-title">
                Focused expertise <span className="text-highlight-blue">for better movement.</span>
              </h2>

              <p className="rehab-sub-text">
                From accurate diagnosis to advanced treatment, we create personalized care plans to help you move better, heal faster and live stronger.
              </p>

              {/* 4 Feature Items */}
              <div className="rehab-v2-features">
                <div className="rehab-feature-item">
                  <div className="rehab-feature-icon icon-blue">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="rehab-feature-text">
                    <h4>Patient First</h4>
                    <p>Your comfort, goals and well-being come first.</p>
                  </div>
                </div>

                <div className="rehab-feature-item">
                  <div className="rehab-feature-icon icon-teal">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9 12 11 14 15 10" />
                    </svg>
                  </div>
                  <div className="rehab-feature-text">
                    <h4>Advanced Care</h4>
                    <p>Evidence-based treatment with modern technology.</p>
                  </div>
                </div>

                <div className="rehab-feature-item">
                  <div className="rehab-feature-icon icon-purple">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="rehab-feature-text">
                    <h4>Expert Team</h4>
                    <p>Experienced specialists dedicated to your recovery.</p>
                  </div>
                </div>

                <div className="rehab-feature-item">
                  <div className="rehab-feature-icon icon-amber">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <div className="rehab-feature-text">
                    <h4>Better Outcomes</h4>
                    <p>Focused on long-term results and improved quality of life.</p>
                  </div>
                </div>
              </div>

              {/* Consultation Callout Bar */}
              <div className="rehab-cta-banner">
                <div className="rehab-cta-left">
                  <div className="rehab-cta-icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div className="rehab-cta-text">
                    <strong>Ready to take the first step?</strong>
                    <span>Book a consultation with our experts.</span>
                  </div>
                </div>
                <Link to="/appointment" className="rehab-cta-btn">
                  <span>Get Expert Care</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* 4 Stats Bar */}
              <div className="rehab-stats-bar">
                <div className="rehab-stat-item">
                  <div className="rehab-stat-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                  </div>
                  <div className="rehab-stat-num">5000+</div>
                  <div className="rehab-stat-label">Happy Patients</div>
                </div>
                <div className="rehab-stat-divider" />
                <div className="rehab-stat-item">
                  <div className="rehab-stat-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  </div>
                  <div className="rehab-stat-num">15+</div>
                  <div className="rehab-stat-label">Years of Experience</div>
                </div>
                <div className="rehab-stat-divider" />
                <div className="rehab-stat-item">
                  <div className="rehab-stat-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  </div>
                  <div className="rehab-stat-num">2000+</div>
                  <div className="rehab-stat-label">Successful Surgeries</div>
                </div>
                <div className="rehab-stat-divider" />
                <div className="rehab-stat-item">
                  <div className="rehab-stat-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                  </div>
                  <div className="rehab-stat-num">98%</div>
                  <div className="rehab-stat-label">Patient Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="rehab-v2-right">
              <div className="rehab-visual-stage">
                {/* Large Blue Arch */}
                <div className="rehab-blue-circle-arch" />

                {/* Modest Knee Photo with Anatomical Joint Glow */}
                <img src="/knee-care-card.jpg" alt="Personalized Rehabilitation" className="rehab-knee-model-img" />

                {/* Doctor Quote Card */}
                <div className="rehab-quote-card">
                  <span className="rehab-quote-mark">“</span>
                  <p className="rehab-quote-text">Expert care today for a pain-free tomorrow.</p>
                  <div className="rehab-quote-line" />
                  <strong className="rehab-doctor-signature">Dr. Harshil Shah</strong>
                  <span className="rehab-doctor-role">Orthopaedic Surgeon</span>
                </div>
              </div>

              {/* Bottom Specialization Icons Bar */}
              <div className="rehab-spec-bar">
                <div className="rehab-spec-items">
                  <div className="rehab-spec-item">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" strokeWidth="1.8"><circle cx="12" cy="12" r="3" /><path d="M12 2v20M7 8h10M7 16h10" /></svg>
                    <span>Knee Care</span>
                  </div>
                  <div className="rehab-spec-item">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" strokeWidth="1.8"><path d="M5 4c3.5-1.5 8-1.5 11.5 0 2.5 1.5 3.5 4.5 2.5 7.5" /><circle cx="12.5" cy="11.5" r="3" fill="#2563eb" fillOpacity="0.15" /></svg>
                    <span>Hip Care</span>
                  </div>
                  <div className="rehab-spec-item">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" strokeWidth="1.8"><path d="M4 8c4-2.5 9-2.5 13 0 2 1.2 3 3.5 3 5.8" /><circle cx="14" cy="12" r="3" fill="#2563eb" fillOpacity="0.15" /></svg>
                    <span>Shoulder Care</span>
                  </div>
                  <div className="rehab-spec-item">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" strokeWidth="1.8"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7z" /></svg>
                    <span>Sports Injuries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Section: Care that starts with listening (Redesigned) */}
      <section className="doctor-section-v2" aria-label="About the surgeon">
        {/* Right Background Knee Line Sketch (User Uploaded PNG) */}
        <div className="doctor-knee-sketch-wrap">
          <img src="/knee-sketch-bg.png" alt="Knee Joint Line Art" className="doctor-knee-sketch-img" />
        </div>

        <div className="shell">
          {/* Main 3-Column Grid */}
          <div className="doctor-v2-main">
            {/* Left Content Column */}
            <div className="doctor-v2-left">

              <h2 className="doctor-box-title">
                Care that starts<br />
                with <span>listening.</span>
              </h2>

              <p className="doctor-box-quote">
                “My goal is to help you move without fear—with honest advice, precise treatment and a recovery plan that makes sense for your life.”
              </p>

              <p className="doctor-box-desc">
                Dr. Harshil Shah focuses on knee, hip and shoulder conditions, arthroscopy, joint replacement and sports injuries. His approach combines evidence-based care with newer, muscle-preserving and day-care pathways where clinically appropriate.
              </p>

              {/* 4 Feature Items */}
              <div className="doctor-v2-features">
                <div className="doctor-feature-item">
                  <div className="doctor-feature-icon icon-blue">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="1.8"><circle cx="12" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /></svg>
                  </div>
                  <div className="doctor-feature-text">
                    <strong>Patient–first decisions</strong>
                    <span>Surgery only when it is truly needed.</span>
                  </div>
                </div>

                <div className="doctor-feature-item">
                  <div className="doctor-feature-icon icon-teal">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#0d9488" strokeWidth="1.8"><path d="M12 2v20M7 8h10M7 16h10" /></svg>
                  </div>
                  <div className="doctor-feature-text">
                    <strong>Muscle–preserving approach</strong>
                    <span>Thoughtful techniques for early mobility.</span>
                  </div>
                </div>

                <div className="doctor-feature-item">
                  <div className="doctor-feature-icon icon-purple">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#7c3aed" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  </div>
                  <div className="doctor-feature-text">
                    <strong>Recovery with clarity</strong>
                    <span>Know what to expect at every stage.</span>
                  </div>
                </div>

                <div className="doctor-feature-item">
                  <div className="doctor-feature-icon icon-amber">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#d97706" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                  </div>
                  <div className="doctor-feature-text">
                    <strong>Better Outcomes</strong>
                    <span>Focused on long-term recovery and mobility.</span>
                  </div>
                </div>
              </div>

              <Link to="/about" className="doctor-box-btn">
                <span>Read my story</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Center Doctor Profile Image */}
            <div className="doctor-v2-center">
              <div className="doctor-v2-img-wrap">
                <img src="/doctor-profile2.jpg" alt="Dr. Harshil Shah" className="doctor-v2-img" />
              </div>
            </div>

            {/* Right Stacked Trust Stats Cards */}
            <div className="doctor-v2-right">
              <div className="doctor-stat-card">
                <div className="doctor-stat-card-icon icon-blue">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                </div>
                <div className="doctor-stat-card-info">
                  <strong>15+</strong>
                  <span>Years of Experience</span>
                </div>
              </div>

              <div className="doctor-stat-card">
                <div className="doctor-stat-card-icon icon-teal">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0d9488" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
                </div>
                <div className="doctor-stat-card-info">
                  <strong>2000+</strong>
                  <span>Successful Surgeries</span>
                </div>
              </div>

              <div className="doctor-stat-card">
                <div className="doctor-stat-card-icon icon-purple">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7c3aed" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                </div>
                <div className="doctor-stat-card-info">
                  <strong>5000+</strong>
                  <span>Happy Patients</span>
                </div>
              </div>

              <div className="doctor-stat-card">
                <div className="doctor-stat-card-icon icon-rose">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#e11d48" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                </div>
                <div className="doctor-stat-card-info">
                  <strong>98%</strong>
                  <span>Patient Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Specialties Pill Bar */}
          <div className="doctor-v2-spec-bar">
            <div className="doctor-v2-spec-list">
              <Link to="/treatments#knee" className="doctor-v2-spec-item">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="1.8"><circle cx="12" cy="12" r="3" /><path d="M12 2v20M7 8h10M7 16h10" /></svg>
                <span>Knee Care</span>
              </Link>
              <Link to="/treatments#hip" className="doctor-v2-spec-item">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="1.8"><path d="M5 4c3.5-1.5 8-1.5 11.5 0 2.5 1.5 3.5 4.5 2.5 7.5" /><circle cx="12.5" cy="11.5" r="3" fill="#2563eb" fillOpacity="0.15" /></svg>
                <span>Hip Care</span>
              </Link>
              <Link to="/treatments#shoulder" className="doctor-v2-spec-item">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="1.8"><path d="M4 8c4-2.5 9-2.5 13 0 2 1.2 3 3.5 3 5.8" /><circle cx="14" cy="12" r="3" fill="#2563eb" fillOpacity="0.15" /></svg>
                <span>Shoulder Care</span>
              </Link>
              <Link to="/treatments#sports" className="doctor-v2-spec-item">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="1.8"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7z" /></svg>
                <span>Sports Injuries</span>
              </Link>
              <Link to="/treatments#arthroscopy" className="doctor-v2-spec-item">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="1.8"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <span>Arthroscopy</span>
              </Link>
              <Link to="/treatments#joint-replacement" className="doctor-v2-spec-item">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="1.8"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                <span>Joint Replacement</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Advanced Orthopedic & Aesthetic Care (Dark Modern Redesign) — Commented out as requested
      <section className="advanced-ortho-dark-section" aria-label="Advanced Orthopedic Care">
        <div className="shell shell-wide">
          <div className="ortho-dark-grid">
            <div className="ortho-dark-left">
              <h2 className="ortho-dark-title">
                Advanced Orthopedic<br />
                <span className="ortho-teal-text">&amp; Aesthetic Care</span>
              </h2>

              <p className="ortho-dark-desc">
                Diagnosis and treatment for joint pain, sports injuries, arthritis, spine conditions, and musculoskeletal disorders—focused on long-term mobility and recovery.
              </p>

              <Link to="/treatments" className="ortho-dark-btn">
                <span>VIEW TREATMENTS</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <div className="ortho-dark-stats-pill">
                <div className="ortho-dark-stat-item">
                  <strong>15+</strong>
                  <span>Years of Experience</span>
                </div>
                <div className="ortho-dark-stat-divider" />
                <div className="ortho-dark-stat-item">
                  <strong>2000+</strong>
                  <span>Successful Surgeries</span>
                </div>
                <div className="ortho-dark-stat-divider" />
                <div className="ortho-dark-stat-item">
                  <strong>10,000+</strong>
                  <span>Happy Patients</span>
                </div>
                <div className="ortho-dark-stat-divider" />
                <div className="ortho-dark-stat-item">
                  <strong>98%</strong>
                  <span>Patient Satisfaction</span>
                </div>
              </div>
            </div>

            <div className="ortho-dark-center">
              <div className="ortho-knee-stage">
                <div className="ortho-target-ring ring-1" />
                <div className="ortho-target-ring ring-2" />
                <div className="ortho-target-ring ring-3" />

                <img src="/rehab-knee-hero.jpg" alt="Anatomical Knee Joint Glow" className="ortho-knee-runner-img" />

                <div className="ortho-pointer pointer-top">
                  <div className="pointer-info">
                    <strong>Stronger Joints</strong>
                    <span>Restoring stability and strength.</span>
                  </div>
                  <div className="pointer-dot" />
                  <div className="pointer-line line-right" />
                </div>

                <div className="ortho-pointer pointer-mid">
                  <div className="pointer-line line-left" />
                  <div className="pointer-dot" />
                  <div className="pointer-info">
                    <strong>Less Pain</strong>
                    <span>Advanced treatments for long-lasting relief.</span>
                  </div>
                </div>

                <div className="ortho-pointer pointer-bot">
                  <div className="pointer-dot" />
                  <div className="pointer-line line-right" />
                  <div className="pointer-info">
                    <strong>Better Mobility</strong>
                    <span>Helping you move freely and confidently.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ortho-dark-right">
              <div className="ortho-cards-6grid">
                <Link to="/treatments#knee" className="ortho-spec-card">
                  <div className="ortho-spec-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2dd4bf" strokeWidth="1.8"><circle cx="12" cy="12" r="3" /><path d="M12 2v20M7 8h10M7 16h10" /></svg>
                  </div>
                  <h3>Knee Care</h3>
                  <p>Effective solutions for knee pain, arthritis and injuries.</p>
                </Link>

                <Link to="/treatments#hip" className="ortho-spec-card">
                  <div className="ortho-spec-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2dd4bf" strokeWidth="1.8"><path d="M5 4c3.5-1.5 8-1.5 11.5 0 2.5 1.5 3.5 4.5 2.5 7.5" /><circle cx="12.5" cy="11.5" r="3" fill="#2dd4bf" fillOpacity="0.15" /></svg>
                  </div>
                  <h3>Hip Care</h3>
                  <p>Advanced care for hip pain and mobility problems.</p>
                </Link>

                <Link to="/treatments#shoulder" className="ortho-spec-card">
                  <div className="ortho-spec-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2dd4bf" strokeWidth="1.8"><path d="M4 8c4-2.5 9-2.5 13 0 2 1.2 3 3.5 3 5.8" /><circle cx="14" cy="12" r="3" fill="#2dd4bf" fillOpacity="0.15" /></svg>
                  </div>
                  <h3>Shoulder Care</h3>
                  <p>Expert treatment for shoulder pain and rotator cuff issues.</p>
                </Link>

                <Link to="/treatments#sports" className="ortho-spec-card">
                  <div className="ortho-spec-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2dd4bf" strokeWidth="1.8"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7z" /></svg>
                  </div>
                  <h3>Sports Injuries</h3>
                  <p>Specialised care for athletes and active individuals.</p>
                </Link>

                <Link to="/treatments#arthroscopy" className="ortho-spec-card">
                  <div className="ortho-spec-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2dd4bf" strokeWidth="1.8"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </div>
                  <h3>Arthroscopy</h3>
                  <p>Minimally invasive procedures for faster recovery.</p>
                </Link>

                <Link to="/treatments#joint-replacement" className="ortho-spec-card">
                  <div className="ortho-spec-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2dd4bf" strokeWidth="1.8"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                  </div>
                  <h3>Joint Replacement</h3>
                  <p>Advanced joint replacement for a better quality of life.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Full-width Image Banner (image1.png) - Placed in between blue section & Simple steps section */}
      <section className="image1-banner-section" aria-label="Precision Orthopaedic Care Banner">
        <div className="shell shell-wide">
          <div className="image1-banner-wrap">
            <img
              src="/image1.png"
              alt="Precision Orthopaedic Care Banner"
              className="image1-banner-img"
            />
          </div>
        </div>
      </section>

      {/* Process Section - Redesigned matching reference image */}
      <section className="section process-section-v2" aria-label="Your Care Journey">
        <div className="shell process-v2-container">

          {/* Top Header Row with Joint Sketch Graphic */}
          <div className="process-v2-header">
            <div className="process-v2-header-left">
              <h2 className="process-v2-title">
                Simple steps. <span className="text-highlight-blue">Clear direction.</span>
              </h2>
              <p className="process-v2-desc">
                No jargon, no rushed decisions—<br />
                just a care plan you can understand.
              </p>
            </div>

            {/* Top Right Joint Sketch Art & Dot Pattern */}
            <div className="process-v2-sketch-wrap">
              <div className="process-dot-matrix" />
              <img src="/knee-sketch-bg.png" alt="Joint Line Art Illustration" className="process-sketch-img" />
            </div>
          </div>

          {/* 3 Horizontal Steps Track */}
          <div className="process-v2-steps-track">

            {/* Step 01 */}
            <div className="process-v2-step-col">
              <div className="process-v2-step-top">
                <span className="process-v2-num">01</span>
                <div className="process-v2-icon-badge">
                  {/* Ear + Speech Bubble Icon */}
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 9a5 5 0 0 1 10 0c0 4.5-4.5 6-4.5 9" />
                    <path d="M12 13a2.5 2.5 0 0 1-2-2.5C10 9.2 10.8 8 12 8" />
                    <path d="M14 3.5h5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-1l-1.5 1.5v-1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5z" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.4" />
                    <path d="M16 6h2M16 7.8h1.2" stroke="#2563eb" strokeWidth="1.2" />
                  </svg>
                </div>

                {/* Connecting Line 1 -> 2 */}
                <div className="process-v2-connector">
                  <div className="process-connector-line" />
                  <div className="process-arrow-circle">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="process-connector-line" />
                </div>
              </div>

              <div className="process-v2-step-content">
                <h3 className="process-v2-step-title">
                  Listen &amp; diagnose
                  <span className="process-title-line" />
                </h3>
                <p className="process-v2-step-desc">
                  A focused consultation, careful examination and review of your reports.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="process-v2-step-col">
              <div className="process-v2-step-top">
                <span className="process-v2-num">02</span>
                <div className="process-v2-icon-badge">
                  {/* Clipboard with Shield & Checkmark Icon */}
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" fill="#2563eb" fillOpacity="0.18" />
                    <path d="M12 9.5c2 0 3-1 3-1v3.5c0 2.2-1.8 4-3 4.5-1.2-.5-3-2.3-3-4.5V8.5s1 1 3 1z" fill="#2563eb" fillOpacity="0.12" stroke="#2563eb" strokeWidth="1.5" />
                    <path d="M10.5 12l1 1 2-2" stroke="#2563eb" strokeWidth="1.8" />
                  </svg>
                </div>

                {/* Connecting Line 2 -> 3 */}
                <div className="process-v2-connector">
                  <div className="process-connector-line" />
                  <div className="process-arrow-circle">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="process-connector-line" />
                </div>
              </div>

              <div className="process-v2-step-content">
                <h3 className="process-v2-step-title">
                  Choose the right path
                  <span className="process-title-line" />
                </h3>
                <p className="process-v2-step-desc">
                  Medical care first where possible; surgery only when it is truly needed.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="process-v2-step-col">
              <div className="process-v2-step-top">
                <span className="process-v2-num">03</span>
                <div className="process-v2-icon-badge">
                  {/* Clean Walking Person Figure Icon */}
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="13.5" cy="4" r="2.2" fill="#2563eb" fillOpacity="0.25" />
                    <path d="M13.5 6.2v6.3" />
                    <path d="M9.5 9.8l4-2 3.5 2.2" />
                    <path d="M13.5 12.5l-3.5 7.5" />
                    <path d="M13.5 12.5l4.2 7.2" />
                  </svg>
                </div>
              </div>

              <div className="process-v2-step-content">
                <h3 className="process-v2-step-title">
                  Recover with clarity
                  <span className="process-title-line" />
                </h3>
                <p className="process-v2-step-desc">
                  A practical recovery plan, clear milestones and the right rehabilitation guidance.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom CTA Banner Box */}
          <div className="process-v2-cta-banner">
            <div className="process-cta-left">
              <div className="process-cta-icon-box">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="3" ry="3" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <path d="M8 14h2v2H8zM14 14h2v2h-2z" fill="#ffffff" />
                </svg>
              </div>
              <div className="process-cta-text">
                <h4>Ready to take the first step?</h4>
                <p>Book a consultation and let’s create the right plan for you.</p>
              </div>
            </div>

            <div className="process-cta-right">
              <div className="process-cta-divider" />
              <Link to="/appointment" className="process-cta-btn">
                <span>Book an Appointment</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Patient Recovery Guides Feature — Redesigned V2 matching reference image */}
      <section className="section home-guides-section-v2" aria-label="Patient Recovery Guides">
        <div className="shell home-guides-v2-container">

          {/* Top Main Grid: Left Copy & 3 Pills + Right 3D Showcase */}
          <div className="home-guides-v2-grid">

            {/* Left Content & Pills */}
            <div className="home-guides-v2-copy">
              {/* Main Heading */}
              <h2 className="guides-v2-title">
                Good recovery starts<br />
                with <span className="text-highlight-blue">clear information.</span>
              </h2>

              {/* Sub-heading Description */}
              <p className="guides-v2-desc">
                Practical, text-based guidance helps patients and families prepare, ask better questions and understand the early recovery journey.
              </p>

              {/* 3 Guide Pill Rows */}
              <div className="guides-pills-list">

                {/* Pill 1: Before */}
                <Link to="/patient-guides#before" className="guide-pill-item">
                  <div className="guide-pill-left">
                    <div className="guide-pill-icon icon-home">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    <div className="guide-pill-text">
                      <strong>Before</strong>
                      <span>Prepare your body and home</span>
                    </div>
                  </div>
                  <div className="guide-pill-arrow">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

                {/* Pill 2: Hospital */}
                <Link to="/patient-guides#hospital" className="guide-pill-item">
                  <div className="guide-pill-left">
                    <div className="guide-pill-icon icon-hospital">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16" />
                        <path d="M12 7v6M9 10h6" strokeWidth="2" />
                      </svg>
                    </div>
                    <div className="guide-pill-text">
                      <strong>Hospital</strong>
                      <span>Move with clinical support</span>
                    </div>
                  </div>
                  <div className="guide-pill-arrow">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

                {/* Pill 3: Home */}
                <Link to="/patient-guides#home" className="guide-pill-item">
                  <div className="guide-pill-left">
                    <div className="guide-pill-icon icon-shield-home">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3L2 12h3v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8h3L12 3z" />
                        <path d="M12 9a3 3 0 0 0-3 3c0 2 3 4.5 3 4.5s3-2.5 3-4.5a3 3 0 0 0-3-3z" fill="#2563eb" fillOpacity="0.15" />
                      </svg>
                    </div>
                    <div className="guide-pill-text">
                      <strong>Home</strong>
                      <span>Protect the early recovery phase</span>
                    </div>
                  </div>
                  <div className="guide-pill-arrow">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

              </div>

              {/* Primary Action Button */}
              <Link className="guides-v2-main-btn" to="/patient-guides">
                <span>Read recovery guidance</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right Side 3D Stage Viewer */}
            <div className="home-guides-v2-stage">
              <Recovery3DViewer />
            </div>

          </div>

          {/* Bottom Connected 4 Cards Grid (Protocol Highlights) */}
          <div className="protocol-v2-rail-track" aria-label="Quiet Knee Protocol highlights">

            {/* Card 01 */}
            <Link to="/patient-guides#quiet-knee" className="protocol-v2-card">
              <div className="protocol-card-num-wrap">
                <span className="protocol-v2-num">01</span>
                <span className="protocol-num-line" />
              </div>
              <div className="protocol-v2-img-wrap">
                <img src="/knee-motion-v2.webp" alt="Control swelling" className="protocol-v2-img" />
              </div>
              <h4 className="protocol-v2-title">Control swelling</h4>
              <span className="protocol-title-line" />
              <p className="protocol-v2-desc">Use protected ice and elevation as instructed.</p>
            </Link>

            {/* Card 02 */}
            <Link to="/patient-guides#quiet-knee" className="protocol-v2-card">
              <div className="protocol-card-num-wrap">
                <span className="protocol-v2-num">02</span>
                <span className="protocol-num-line" />
              </div>
              <div className="protocol-v2-img-wrap">
                <img src="/hip-precision-v2.webp" alt="Protect extension" className="protocol-v2-img" />
              </div>
              <h4 className="protocol-v2-title">Protect extension</h4>
              <span className="protocol-title-line" />
              <p className="protocol-v2-desc">Work on safe straightening before chasing bend.</p>
            </Link>

            {/* Card 03 */}
            <Link to="/patient-guides#quiet-knee" className="protocol-v2-card">
              <div className="protocol-card-num-wrap">
                <span className="protocol-v2-num">03</span>
                <span className="protocol-num-line" />
              </div>
              <div className="protocol-v2-img-wrap">
                <img src="/shoulder-mobility-v2.webp" alt="Keep walking short" className="protocol-v2-img" />
              </div>
              <h4 className="protocol-v2-title">Keep walking short</h4>
              <span className="protocol-title-line" />
              <p className="protocol-v2-desc">Use your aid and follow your personal activity limit.</p>
            </Link>

            {/* Card 04 */}
            <Link to="/patient-guides#quiet-knee" className="protocol-v2-card">
              <div className="protocol-card-num-wrap">
                <span className="protocol-v2-num">04</span>
                <span className="protocol-num-line" />
              </div>
              <div className="protocol-v2-img-wrap">
                <img src="/knee-3d.webp" alt="Rest before pain rises" className="protocol-v2-img" />
              </div>
              <h4 className="protocol-v2-title">Rest before pain rises</h4>
              <span className="protocol-title-line" />
              <p className="protocol-v2-desc">Short activity periods support a calmer early knee.</p>
            </Link>

          </div>

        </div>
      </section>

      {/* Verified Patient Reviews Carousel */}
      <ReviewsSlider />

      {/* CTA Section */}
      <section className="cta-section" aria-label="Book appointment callout">
        <div className="shell cta-grid">
          <div className="cta-left">
            <h2 className="cta-main-title">
              Ready to move<br />
              without fear?
            </h2>
          </div>
          <div className="cta-right">
            <p className="cta-desc">
              Bring your reports and current medicines. We’ll review the full picture and guide you towards the right next step.
            </p>
            <div className="cta-actions">
              <Link className="cta-btn-white" to="/appointment">
                <span>Book appointment</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="tel:+919316753985" className="cta-phone-block">
                <strong>+91 93167 53985</strong>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
