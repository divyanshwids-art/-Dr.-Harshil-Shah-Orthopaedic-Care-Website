import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    id: 0,
    eyebrow: 'EXPERT ORTHOPAEDIC CARE',
    title: (
      <>
        Better Movement.<br />
        <span className="medical-hero-title-accent">A Healthier Tomorrow.</span>
      </>
    ),
    desc: 'Thoughtful care for sports injuries, arthroscopy, joint preservation and replacement — explained in simple terms, with your well-being at the centre.',
    primaryBtn: { text: 'Book Appointment', link: '/appointment' },
    secondaryBtn: { text: 'Explore Treatments', link: '/treatments' },
    highlights: [
      {
        icon: (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2D67A8" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        ),
        title: 'Personalised',
        subtitle: 'Treatment Plans'
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2D67A8" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <polyline points="9 12 11 14 15 10" />
          </svg>
        ),
        title: 'Evidence-Based',
        subtitle: 'Approach'
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2D67A8" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="5" r="2.5" />
            <path d="M9.5 8.5L7 22h2.2l1.8-7.5 2 2v5.5h2v-7l-2-2 .5-3c1.5 1.5 3.5 2 5.5 2v-2c-1.8 0-3.2-.8-4-2.2l-.9-1.5c-.4-.6-1-1-1.7-1-.3 0-.6.1-.9.2L6 9.5V13h2V10l1.5-.5z" />
          </svg>
        ),
        title: 'Focus on Long-Term',
        subtitle: 'Mobility'
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2D67A8" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        ),
        title: 'Compassionate Patient',
        subtitle: 'Care'
      }
    ],
    image: '/doctor-sir-hero.webp',
    alt: 'Dr. Harshil Shah - Orthopaedic Surgery & Joint Care',
    imgWidth: 1024,
    imgHeight: 989,
    imgClass: 'medical-doctor-img'
  },
  {
    id: 1,
    eyebrow: 'LESS PAIN • MORE POSSIBILITY',
    title: (
      <>
        Get Back to<br />
        <span className="medical-hero-title-accent">What You Love.</span>
      </>
    ),
    desc: 'Specialised care for joint pain, sports injuries and mobility issues — so you can move with confidence in everyday life.',
    primaryBtn: { text: 'Book Appointment', link: '/appointment' },
    secondaryBtn: { text: 'Explore Treatments', link: '/treatments' },
    highlights: [
      {
        icon: (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2D67A8" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="5" r="2.5" />
            <path d="M9.5 8.5L7 22h2.2l1.8-7.5 2 2v5.5h2v-7l-2-2 .5-3c1.5 1.5 3.5 2 5.5 2v-2c-1.8 0-3.2-.8-4-2.2l-.9-1.5c-.4-.6-1-1-1.7-1-.3 0-.6.1-.9.2L6 9.5V13h2V10l1.5-.5z" />
          </svg>
        ),
        title: 'Sports Injury',
        subtitle: 'Management'
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2D67A8" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v20M7 8h10M7 16h10" />
          </svg>
        ),
        title: 'Arthroscopy & Joint',
        subtitle: 'Preservation'
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2D67A8" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
        title: 'Joint Replacement',
        subtitle: 'Solutions'
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2D67A8" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          </svg>
        ),
        title: 'Rehabilitation &',
        subtitle: 'Recovery Support'
      }
    ],
    image: '/rehab-knee-hero.jpg',
    alt: 'Knee Joint Rehabilitation Runner',
    imgWidth: 2560,
    imgHeight: 998,
    imgClass: 'medical-rehab-img'
  }
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6500);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handlePrev = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    startTimer();
  }, [startTimer]);

  const handleNext = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    startTimer();
  }, [startTimer]);

  return (
    <section className="medical-hero-section" id="hero">
      {/* Subtle Integrated Movement Curve */}
      <div className="medical-movement-track" aria-hidden="true">
        <svg viewBox="0 0 1400 360" fill="none" preserveAspectRatio="none" className="medical-movement-svg">
          <path
            d="M 120,240 C 340,240 480,280 620,190 C 720,120 820,110 980,160 C 1100,200 1240,150 1380,120"
            stroke="#2D67A8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="5 5"
            opacity="0.22"
          />
        </svg>
      </div>

      {/* Full-bleed edge-to-edge hero wrapper with 2 slides */}
      <div className="medical-hero-shell">
        <div className="medical-slides-wrapper">
          {SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`medical-hero-slide ${activeSlide === idx ? 'is-active' : ''}`}
            >
              <div className="medical-hero-layout">

                {/* Left Content Column */}
                <div className="medical-hero-content">
                  <div className="medical-hero-eyebrow">
                    <span className="medical-eyebrow-text">{slide.eyebrow}</span>
                    <span className="medical-eyebrow-rule" />
                  </div>

                  <h1 className="medical-hero-title">
                    {slide.title}
                  </h1>

                  <p className="medical-hero-desc">
                    {slide.desc}
                  </p>

                  <div className="medical-hero-actions">
                    <Link to={slide.primaryBtn.link} className="medical-btn-primary">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>{slide.primaryBtn.text}</span>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" className="medical-btn-arrow">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>

                    <Link to={slide.secondaryBtn.link} className="medical-btn-secondary">
                      <span>{slide.secondaryBtn.text}</span>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" className="medical-btn-arrow">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  <div className="medical-hero-highlights">
                    {slide.highlights.map((item, hIdx) => (
                      <React.Fragment key={hIdx}>
                        <div className="medical-highlight-item">
                          <div className="medical-highlight-icon">
                            {item.icon}
                          </div>
                          <div className="medical-highlight-text">
                            <span className="medical-highlight-line1">{item.title}</span>
                            <span className="medical-highlight-line2">{item.subtitle}</span>
                          </div>
                        </div>
                        {hIdx < slide.highlights.length - 1 && (
                          <div className="medical-highlight-divider" aria-hidden="true" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Right Visual Area */}
                <div className="medical-hero-visual">
                  <div className="medical-integrated-stage">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className={`medical-integrated-img ${slide.imgClass || ''}`}
                      loading="eager"
                      width={slide.imgWidth}
                      height={slide.imgHeight}
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Centered Slider Navigation Controls: < ( • • ) > */}
      <div className="medical-hero-controls-bar">
        <button type="button" className="medical-ctrl-btn" onClick={handlePrev} aria-label="Previous slide">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="medical-ctrl-dots">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`medical-dot-item ${activeSlide === idx ? 'is-active' : ''}`}
              onClick={() => { setActiveSlide(idx); startTimer(); }}
              aria-label={`Show slide ${idx + 1}`}
            >
              <span className="medical-dot-bar" />
            </button>
          ))}
        </div>

        <button type="button" className="medical-ctrl-btn" onClick={handleNext} aria-label="Next slide">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Floating Bottom Stats Card in centered container */}
      <div className="shell medical-stats-shell">
        <div className="v2-floating-stats-wrapper medical-stats-wrapper">
          <div className="v2-stats-card">
            {/* Stat 1 */}
            <div className="v2-stat-box">
              <div className="v2-stat-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2D67A8" strokeWidth="1.8">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5" />
                </svg>
              </div>
              <div className="v2-stat-info">
                <strong>15+</strong>
                <span className="v2-stat-title">Years of Experience</span>
                <span className="v2-stat-sub">In advanced orthopaedic care</span>
              </div>
            </div>

            <div className="v2-stat-divider" />

            {/* Stat 2 */}
            <div className="v2-stat-box">
              <div className="v2-stat-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2D67A8" strokeWidth="1.8">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="v2-stat-info">
                <strong>5000+</strong>
                <span className="v2-stat-title">Happy Patients</span>
                <span className="v2-stat-sub">Trust us for better movement</span>
              </div>
            </div>

            <div className="v2-stat-divider" />

            {/* Stat 3 */}
            <div className="v2-stat-box">
              <div className="v2-stat-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2D67A8" strokeWidth="1.8">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="v2-stat-info">
                <strong>2000+</strong>
                <span className="v2-stat-title">Successful Procedures</span>
                <span className="v2-stat-sub">Across joint & sports conditions</span>
              </div>
            </div>

            <div className="v2-stat-divider" />

            {/* Stat 4 */}
            <div className="v2-stat-box">
              <div className="v2-stat-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2D67A8" strokeWidth="1.8">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#2D67A8" fillOpacity="0.15" />
                </svg>
              </div>
              <div className="v2-stat-info">
                <strong>98%</strong>
                <span className="v2-stat-title">Patient Satisfaction</span>
                <span className="v2-stat-sub">Because your recovery matters</span>
              </div>
            </div>
          </div>

          <div className="v2-stats-bottom-line">
            <span className="v2-line-dash" />
            <p>Trusted orthopaedic care in Ahmedabad. Precision, evidence, and patient-first.</p>
            <span className="v2-line-dash" />
          </div>
        </div>
      </div>
    </section>
  );
}
