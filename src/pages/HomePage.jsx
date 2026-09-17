import React from 'react';
import { Link } from 'react-router-dom';
import Recovery3DViewer from '../components/Recovery3DViewer';
import ReviewsSlider from '../components/ReviewsSlider';

export default function HomePage() {
  return (
    <div className="home-page">

      {/* Dr. Harshil Shah Banner Image */}
      <div className="dr-banner-top">
        <img
          src="/dr.harshil shah banner.png"
          alt="Dr. Harshil Shah - Consultant Orthopaedic Surgeon in Ahmedabad"
          className="dr-banner-top-img"
        />
      </div>

      {/* Hero Highlights Bar — Highlights LEFT | Buttons RIGHT */}
      <section className="hero-oneline-section">
        <div className="hero-oneline-bar">

          {/* Highlight 1 */}
          <div className="hero-ol-item">
            <div className="hero-ol-text">
              <span className="hero-ol-t1">Personalized</span>
              <span className="hero-ol-t2">Care Plans</span>
            </div>
          </div>

          <div className="hero-ol-sep" />

          {/* Highlight 2 */}
          <div className="hero-ol-item">
            <div className="hero-ol-text">
              <span className="hero-ol-t1">Evidence-Based</span>
              <span className="hero-ol-t2">Care</span>
            </div>
          </div>

          <div className="hero-ol-sep" />

          {/* Highlight 3 */}
          <div className="hero-ol-item">
            <div className="hero-ol-text">
              <span className="hero-ol-t1">Long-Term</span>
              <span className="hero-ol-t2">Mobility Focus</span>
            </div>
          </div>

          <div className="hero-ol-sep" />

          {/* Highlight 4 */}
          <div className="hero-ol-item">
            <div className="hero-ol-text">
              <span className="hero-ol-t1">Patient-First</span>
              <span className="hero-ol-t2">Approach</span>
            </div>
          </div>

          {/* Buttons pushed to RIGHT */}
          <div className="hero-ol-btns-right">
            <Link to="/treatments" className="hero-ol-btn-secondary">
              <span>Explore Treatments</span>
            </Link>
          </div>

        </div>
      </section>



      {/* Doctor Experience Stats Bar (Placed above Areas of Care) */}
      <section className="home-stats-overview-section" aria-label="Experience and Achievements">
        <div className="shell">
          <div className="home-stats-overview-grid">
            <div className="doctor-stat-card">
              <div className="doctor-stat-card-info">
                <strong>12+</strong>
                <span>Years of Experience</span>
              </div>
            </div>

            <div className="doctor-stat-card">
              <div className="doctor-stat-card-info">
                <strong>2000+</strong>
                <span>Joint Surgeries</span>
              </div>
            </div>

            <div className="doctor-stat-card">
              <div className="doctor-stat-card-info">
                <strong>5000+</strong>
                <span>Happy Patients</span>
              </div>
            </div>

            <div className="doctor-stat-card">
              <div className="doctor-stat-card-info">
                <strong>98%</strong>
                <span>Positive Feedback</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Care - Redesigned Section */}
      <section className="care-section-redesign" id="care">
        <div className="shell">
          {/* Top Header Row */}
          <div className="care-top-header">
            <div className="care-top-left">
              <h2 className="care-main-heading">
                Specialised care for <span className="text-highlight-blue">joint mobility.</span>
              </h2>
              <p className="care-main-desc">
                Dr. Harshil Shah provides simple, effective care for bone, joint, and ligament problems—helping you get relief from pain and return to comfortable movement.
              </p>
            </div>

            {/* Top Right 3 Pillars */}
            <div className="care-top-pillars">
              <div className="care-pillar-item">
                <div className="care-pillar-text">
                  <h4>Detailed Checkup</h4>
                  <p>Careful examination and clear scan review.</p>
                </div>
              </div>

              <div className="care-pillar-divider" />

              <div className="care-pillar-item">
                <div className="care-pillar-text">
                  <h4>Non-Surgical First</h4>
                  <p>Trying medicines and therapy before surgery.</p>
                </div>
              </div>

              <div className="care-pillar-divider" />

              <div className="care-pillar-item">
                <div className="care-pillar-text">
                  <h4>Advanced Surgery</h4>
                  <p>Modern, gentle techniques when needed.</p>
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
                <p>Treatment for knee pain, ligament injuries, cartilage wear, and arthritis.</p>
                <Link to="/treatments#knee" className="care-card-link">
                  <span>Explore Knee Care</span>
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
                <p>Relief for hip pain, arthritis, stiffness, and difficulty walking.</p>
                <Link to="/treatments#hip" className="care-card-link">
                  <span>Explore Hip Care</span>
                </Link>
              </div>
            </div>

            {/* Card 03: Shoulder Care */}
            <div className="care-card-item">
              <div className="care-card-img-wrapper">
                <img src="/shoulder-care-new.jpg" alt="Shoulder Care" className="care-card-img care-card-img-default" />
                <img src="/shoulder-mobility-v2.webp" alt="3D Shoulder Joint Model" className="care-card-img care-card-img-hover3d" />
                <span className="care-card-num-badge">03</span>
              </div>
              <div className="care-card-body">
                <h3>Shoulder Care</h3>
                <p>Care for shoulder pain, frozen shoulder, rotator cuff tears, and stiffness.</p>
                <Link to="/treatments#shoulder" className="care-card-link">
                  <span>Explore Shoulder Care</span>
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
                <p>Fast recovery for sports injuries, muscle tears, sprains, and joint issues.</p>
                <Link to="/treatments#sports" className="care-card-link">
                  <span>Explore Sports Injuries</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Help Banner */}
          <div className="care-help-banner">
            <div className="care-help-left">
              <div className="care-help-text">
                <h3>Need advice on joint pain or treatment?</h3>
                <p>We will examine your condition and guide you toward the right treatment.</p>
              </div>
            </div>
            <div className="care-help-divider" />
            <Link to="/treatments" className="care-help-btn">
              <span>View All Treatments</span>
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
                Structured recovery for <span className="text-highlight-blue">lasting mobility.</span>
              </h2>

              <p className="rehab-sub-text">
                Good recovery takes time and the right guidance. We help you with safe daily exercises and clear milestones so you can regain your strength and confidence.
              </p>

              {/* 4 Feature Items */}
              <div className="rehab-v2-features">
                <div className="rehab-feature-item">
                  <div className="rehab-feature-text">
                    <h4>Personalized Pathways</h4>
                    <p>Care plans tailored to your condition and daily routine.</p>
                  </div>
                </div>

                <div className="rehab-feature-item">
                  <div className="rehab-feature-text">
                    <h4>Protecting Your Joints</h4>
                    <p>Gentle techniques that protect healthy bone and cartilage.</p>
                  </div>
                </div>

                <div className="rehab-feature-item">
                  <div className="rehab-feature-text">
                    <h4>Guided Exercises</h4>
                    <p>Step-by-step physical therapy to rebuild strength safely.</p>
                  </div>
                </div>

                <div className="rehab-feature-item">
                  <div className="rehab-feature-text">
                    <h4>Doctor Follow-Up</h4>
                    <p>Direct follow-ups to track your recovery at every stage.</p>
                  </div>
                </div>
              </div>

              {/* Consultation Callout Bar */}
              <div className="rehab-cta-banner">
                <div className="rehab-cta-left">
                  <div className="rehab-cta-text">
                    <strong>Looking for guidance on joint rehabilitation?</strong>
                    <span>Book a consultation for a personalized assessment and a structured recovery plan.</span>
                  </div>
                </div>
                <Link to="/appointment" className="rehab-cta-btn">
                  <span>Schedule Consultation</span>
                </Link>
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
                  <p className="rehab-quote-text">Recovery is a gradual journey. With patient guidance, safe daily exercises, and close follow-ups, we help you rebuild strength and return to an active life.</p>
                  <div className="rehab-quote-line" />
                  <strong className="rehab-doctor-signature">Dr. Harshil Shah</strong>
                  <span className="rehab-doctor-role">Orthopaedic Surgeon</span>
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
                Care that starts with <span>listening.</span>
              </h2>

              <p className="doctor-box-quote">
                “Every patient's pain and lifestyle are unique. Listening carefully is always the first and most vital step in deciding the right treatment for you.”
              </p>

              <p className="doctor-box-desc">
                Dr. Harshil Shah is a dedicated orthopaedic surgeon specializing in knee, hip, and shoulder joint care. With fellowship training in arthroscopy and joint replacement, his clinical approach prioritizes patient education and conservative therapies before considering surgery.
              </p>

              {/* 4 Feature Items */}
              <div className="doctor-v2-features">
                <div className="doctor-feature-item">
                  <div className="doctor-feature-text">
                    <strong>Clear Communication</strong>
                    <span>We walk you through your MRI and X-ray scans in simple terms so you understand your condition.</span>
                  </div>
                </div>

                <div className="doctor-feature-item">
                  <div className="doctor-feature-text">
                    <strong>Conservative Care First</strong>
                    <span>Surgery is recommended only when non-surgical treatments no longer offer relief.</span>
                  </div>
                </div>

                <div className="doctor-feature-item">
                  <div className="doctor-feature-text">
                    <strong>Minimally Invasive Focus</strong>
                    <span>Modern surgical techniques aimed at minimal tissue disruption and faster rehabilitation.</span>
                  </div>
                </div>

                <div className="doctor-feature-item">
                  <div className="doctor-feature-text">
                    <strong>Honest Guidance</strong>
                    <span>Transparent discussions about treatment timelines, expected recovery, and realistic outcomes.</span>
                  </div>
                </div>
              </div>

              <Link to="/about" className="doctor-box-btn">
                <span>About Me</span>
              </Link>
            </div>

            {/* Center Doctor Profile Image */}
            <div className="doctor-v2-center">
              <div className="doctor-v2-img-wrap">
                <img src="/doctor-profile2.jpg" alt="Dr. Harshil Shah - Orthopaedic Surgeon" className="doctor-v2-img" />
              </div>
            </div>

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
                Simple steps. <span className="text-highlight-blue">Clear care.</span>
              </h2>
              <p className="process-v2-desc">
                No medical jargon and no rushed decisions—<br />
                just honest advice and a plan you understand.
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
                <div className="process-v2-connector">
                  <div className="process-connector-line" />
                </div>
              </div>

              <div className="process-v2-step-content">
                <h3 className="process-v2-step-title">
                  Listen &amp; examine
                  <span className="process-title-line" />
                </h3>
                <p className="process-v2-step-desc">
                  A detailed clinical consultation, joint mobility check, and clear review of your scans.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="process-v2-step-col">
              <div className="process-v2-step-top">
                <span className="process-v2-num">02</span>
                <div className="process-v2-connector">
                  <div className="process-connector-line" />
                </div>
              </div>

              <div className="process-v2-step-content">
                <h3 className="process-v2-step-title">
                  Discuss options
                  <span className="process-title-line" />
                </h3>
                <p className="process-v2-step-desc">
                  Exploring physical therapy, lifestyle adjustments, and targeted medication before considering surgery.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="process-v2-step-col">
              <div className="process-v2-step-top">
                <span className="process-v2-num">03</span>
              </div>

              <div className="process-v2-step-content">
                <h3 className="process-v2-step-title">
                  Recover with support
                  <span className="process-title-line" />
                </h3>
                <p className="process-v2-step-desc">
                  Structured exercise plans, post-treatment guidance, and direct doctor follow-ups.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom CTA Banner Box */}
          <div className="process-v2-cta-banner">
            <div className="process-cta-left">
              <div className="process-cta-text">
                <h4>Take the first step toward pain-free movement</h4>
                <p>Schedule a consultation to discuss your symptoms and understand your care options.</p>
              </div>
            </div>

            <div className="process-cta-right">
              <div className="process-cta-divider" />
              <Link to="/appointment" className="process-cta-btn">
                <span>Book an Appointment</span>
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
                Simple guides for <span className="text-highlight-blue">safe recovery.</span>
              </h2>

              {/* Sub-heading Description */}
              <p className="guides-v2-desc">
                Clear, practical guides to help you and your family prepare for treatment and recover safely at home.
              </p>

              {/* 3 Guide Pill Rows */}
              <div className="guides-pills-list">

                {/* Pill 1: Before */}
                <Link to="/patient-guides#before" className="guide-pill-item">
                  <div className="guide-pill-left">
                    <div className="guide-pill-text">
                      <strong>Before Treatment</strong>
                      <span>Simple steps to prepare your home and daily routine</span>
                    </div>
                  </div>
                </Link>

                {/* Pill 2: Hospital */}
                <Link to="/patient-guides#hospital" className="guide-pill-item">
                  <div className="guide-pill-left">
                    <div className="guide-pill-text">
                      <strong>In Hospital</strong>
                      <span>What happens during your hospital stay and early steps</span>
                    </div>
                  </div>
                </Link>

                {/* Pill 3: Home */}
                <Link to="/patient-guides#home" className="guide-pill-item">
                  <div className="guide-pill-left">
                    <div className="guide-pill-text">
                      <strong>At Home</strong>
                      <span>Safe exercises and joint protection tips for home recovery</span>
                    </div>
                  </div>
                </Link>

              </div>

              {/* Primary Action Button */}
              <Link className="guides-v2-main-btn" to="/patient-guides">
                <span>Explore Recovery Guides</span>
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
                <img src="/knee-motion-v2.webp" alt="Manage swelling" className="protocol-v2-img" />
              </div>
              <h4 className="protocol-v2-title">Reduce swelling</h4>
              <span className="protocol-title-line" />
              <p className="protocol-v2-desc">Use ice packs and keep your leg rested and elevated as instructed.</p>
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
              <h4 className="protocol-v2-title">Straighten your joint</h4>
              <span className="protocol-title-line" />
              <p className="protocol-v2-desc">Focus on straightening your joint comfortably before attempting deep bending.</p>
            </Link>

            {/* Card 03 */}
            <Link to="/patient-guides#quiet-knee" className="protocol-v2-card">
              <div className="protocol-card-num-wrap">
                <span className="protocol-v2-num">03</span>
                <span className="protocol-num-line" />
              </div>
              <div className="protocol-v2-img-wrap">
                <img src="/shoulder-mobility-v2.webp" alt="Pace your walking" className="protocol-v2-img" />
              </div>
              <h4 className="protocol-v2-title">Pace your walking</h4>
              <span className="protocol-title-line" />
              <p className="protocol-v2-desc">Use your walking stick or frame and do not rush your walking distance.</p>
            </Link>

            {/* Card 04 */}
            <Link to="/patient-guides#quiet-knee" className="protocol-v2-card">
              <div className="protocol-card-num-wrap">
                <span className="protocol-v2-num">04</span>
                <span className="protocol-num-line" />
              </div>
              <div className="protocol-v2-img-wrap">
                <img src="/knee-3d.webp" alt="Rest before fatigue" className="protocol-v2-img" />
              </div>
              <h4 className="protocol-v2-title">Rest when tired</h4>
              <span className="protocol-title-line" />
              <p className="protocol-v2-desc">Take short rest breaks to keep your joint calm and prevent stiffness.</p>
            </Link>

          </div>

        </div>
      </section>

      {/* Verified Patient Reviews Carousel */}
      <ReviewsSlider />

    </div>
  );
}
