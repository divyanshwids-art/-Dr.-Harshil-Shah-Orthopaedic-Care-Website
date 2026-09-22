import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const experienceItems = [
  {
    type: 'MEDICAL EDUCATION', tone: 'education', location: 'Ahmedabad',
    title: 'Medical Education & Orthopaedic Residency',
    paragraphs: [
      'I completed my MBBS and internship in Ahmedabad, building a strong base in patient care and surgical thinking.',
      'My orthopaedic training at L.G. Hospital helped me gain practical experience in trauma and reconstructive surgery.'
    ], side: 'left'
  },
  {
    type: 'FELLOWSHIP', tone: 'training', location: 'Mumbai',
    title: 'Joint Replacement Training',
    paragraphs: [
      'I trained in joint replacement surgery at P. D. Hinduja Hospital under Dr. Sanjay Agarwala.',
      'This experience strengthened my skills in hip and knee replacement care and long-term recovery planning.'
    ], side: 'right'
  },
  {
    type: 'SPECIALIZED TRAINING', tone: 'sports', location: 'Mumbai',
    title: 'Sports Injury & Arthroscopy', 
    paragraphs: ['I gained focused training in sports injuries and arthroscopy, especially in ligament repair and joint preservation.'],
    side: 'left'
  },
  {
    type: 'SHOULDER FELLOWSHIP', tone: 'shoulder', location: 'Pune',
    title: 'Shoulder Surgery & Sports Injuries',
    paragraphs: [
      'I pursued advanced shoulder surgery training in Pune, with focus on replacement and sports-related shoulder injuries.',
      'This helped me improve care for patients looking to return to active movement and better function.'
    ], side: 'right'
  },
  {
    type: 'INTERNATIONAL FELLOWSHIP · USA', tone: 'usa', location: 'New York, USA',
    title: 'Robotic & Revision Joint Replacement · USA',
    paragraphs: [
      'I trained in robotic and revision joint replacement at Hospital for Special Surgery in New York.',
      'This advanced learning improved my approach to complex hip and knee surgery.'
    ], side: 'left'
  },
  {
    type: 'HARVARD-AFFILIATED FELLOWSHIP', tone: 'harvard', location: 'Boston, USA',
    title: 'Advanced Shoulder Training · Harvard-Affiliated MGH',
    paragraphs: [
      'I trained at Massachusetts General Hospital in Boston, learning advanced shoulder reconstruction techniques.',
      'This experience deepened my skills in complex shoulder care and functional recovery.'
    ], side: 'right'
  }
];

const testimonialItems = [
  { quote: '[details dalna baki he]', label: 'Knee Care Patient', detail: '[details dalna baki he]' },
  { quote: '[details dalna baki he]', label: 'Hip Care Patient', detail: '[details dalna baki he]' },
  { quote: '[details dalna baki he]', label: 'Shoulder Care Patient', detail: '[details dalna baki he]' },
  { quote: '[details dalna baki he]', label: 'Sports Injury Patient', detail: '[details dalna baki he]' }
];

const treatmentItems = [
  { title: 'Knee Care', icon: '/icons/knee-pain.webp', text: 'Ligament injuries, meniscus tears, arthritis, ACL reconstruction (all graft options + LET), robotic & muscle-sparing day-care replacement' },
  { title: 'Hip Care', icon: '/icons/joint-replacement.webp', text: 'AVN, sports-related hip pain, FAI (cam/pincer), muscle-sparing anterior approach, day-care & robotic replacement' },
  { title: 'Shoulder Care', icon: '/icons/shoulder-pain.webp', text: 'Arthroscopy, rotator cuff injury, frozen shoulder, recurrent dislocation/instability, reverse shoulder replacement' },
  { title: 'Sports Injuries', icon: '/icons/sports-injuries.webp', text: 'Targeted care for ligament, muscle, and joint injuries to help you return to sport safely and confidently.' }
];

const aboutFocusItems = [
  { title: 'Patient‑first decisions', text: 'Surgery only when truly needed. We consider medical therapy first where possible.' },
  { title: 'Clear, calm guidance', text: 'Simple explanations, no rushing, and support at each step of your journey.' },
  { title: 'Quicker recovery', text: 'Muscle‑preserving techniques to help you bounce back sooner.' },
  { title: 'Safe, evidence‑based care', text: 'Treatments aligned with current best practices and your goals.' }
];

const aboutStats = [
  { label: 'Trauma Surgeries', value: '3000+' },
  { label: 'Joint Replacements', value: '500+' },
  { label: 'Arthroscopy Surgeries', value: '250+' }
];

const campItems = [
  {
    id: 'camp-bijainagar',
    title: 'Free Joint Replacement & Orthopaedic Camp',
    hospital: 'Shree P. K. V. Hospital and Research Centre',

    description:
      'Free consultation camp conducted by Dr. Harshil Shah for patients suffering from knee, spine, trauma, shoulder, and hip conditions. Provided expert clinical evaluations, joint replacement guidance, and cashless surgical assistance.',
    photos: [
      {
        src: '/camps/bijainagar-camp-banner.jpg',
        title: 'Camp Banner & Consultation Venue',
        subtitle: 'Dr. Harshil Shah at Shree P. K. V. Hospital, Bijainagar',
        tag: 'Camp Banner'
      },
      {
        src: '/camps/bijainagar-camp-team.png',
        title: 'Hospital Felicitation & Reception',
        subtitle: 'Felicitation by hospital organizers and medical staff at Bijainagar',
        tag: 'Community Program'
      }
    ]
  }
];

function CampSlideshow({ photos, onPhotoClick }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (photos.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [photos.length, isPaused]);

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="camp-slideshow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <img
        src={photos[currentIdx].src}
        alt={photos[currentIdx].title}
        className="camp-slideshow-img"
        onClick={() => onPhotoClick && onPhotoClick(photos[currentIdx])}
      />
      {photos.length > 1 && (
        <>
          <button
            type="button"
            className="camp-slide-arrow prev"
            onClick={prevSlide}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            type="button"
            className="camp-slide-arrow next"
            onClick={nextSlide}
            aria-label="Next photo"
          >
            ›
          </button>
          <div className="camp-slide-dots">
            {photos.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`camp-slide-dot ${idx === currentIdx ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIdx(idx);
                }}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
          <div className="camp-slide-counter">
            {currentIdx + 1} / {photos.length}
          </div>
        </>
      )}
    </div>
  );
}

export default function AboutPage() {
  const [selectedExperience, setSelectedExperience] = useState(0);
  const [activeCampPhoto, setActiveCampPhoto] = useState(null);
  const activeExperience = experienceItems[selectedExperience];

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
              I’m an orthopedic surgeon focused on helping you move without fear. Through muscle‑preserving techniques and thoughtful recovery plans, my aim is to get you back to life quickly sometimes with immediate post‑operative walking and minimal physiotherapy when appropriate.            </p>

            <div className="about-focus-grid">
              {aboutFocusItems.map((item) => (
                <article key={item.title} className="about-focus-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

          </div>

          <div className="about-profile-card">
            <img src="/profile2.webp" alt="Dr. Harshil Shah profile" />
            <div className="about-profile-body">
              <h3>Dr. Harshil Shah</h3>
              <p className="about-role">M.S. (Ortho) · Consultant Orthopaedic Surgeon</p>
              <ul>
              </ul>
            </div>
          </div>

          <div className="about-stats-grid" aria-label="Surgical experience">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="about-stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-experience-section">
        <div className="shell">
          <h2 className="section-title">Experience &amp; Training</h2>
          <p className="section-subtitle">A journey of learning, achievements, and better outcomes for every patient we care for.</p>

          <div className="about-experience-timeline">
            <nav className="about-experience-nav" aria-label="Experience and training">
              {experienceItems.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  className={`about-experience-selector${selectedExperience === index ? ' is-active' : ''}`}
                  onMouseEnter={() => setSelectedExperience(index)}
                  onFocus={() => setSelectedExperience(index)}
                  onClick={() => setSelectedExperience(index)}
                  aria-pressed={selectedExperience === index}
                >
                  <span className="about-experience-selector-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="about-experience-selector-title">{item.title}</span>
                  <span className="about-experience-selector-location">{item.location}</span>
                </button>
              ))}
            </nav>

            <article className="about-experience-detail" key={activeExperience.title}>
              <div className="about-experience-detail-meta">
                <span>{activeExperience.type}</span>
                <span>{activeExperience.location}</span>
              </div>
              <h3>{activeExperience.title}</h3>
              <div className="about-experience-detail-rule" aria-hidden="true" />
              <div className="about-experience-copy">
                {activeExperience.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="about-success-section">
        <div className="shell">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">A collection of successful treatments and moments that truly made a difference.</p>

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

      <section className="about-camp-section" id="camps-work">
        <div className="shell">
          <h2 className="section-title">Camps Work</h2>

          <div className="about-camp-container">
            {campItems.map((camp) => (
              <article key={camp.id} className="about-camp-box">
                {/* Left Side: Auto-playing Image Slideshow */}
                <div className="about-camp-left">
                  <CampSlideshow
                    photos={camp.photos}
                    onPhotoClick={setActiveCampPhoto}
                  />
                </div>

                {/* Right Side: Heading, Hospital, and Description */}
                <div className="about-camp-right">
                  <h3 className="about-camp-title">{camp.title}</h3>

                  <p className="about-camp-hospital-text">
                    <strong>Hospital:</strong> {camp.hospital}
                  </p>

                  <p className="about-camp-desc">{camp.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-treatment-section">
        <div className="shell">
          <h2 className="section-title">Types of Treatment I Offers</h2>
          <p className="section-subtitle">Comprehensive orthopaedic care for better movement, strength and quality of life.</p>

          <div className="about-treatment-grid">
            {treatmentItems.map((item) => (
              <div key={item.title} className="about-treatment-card">
                <div className="about-treatment-heading">
                  <div className="about-treatment-icon" aria-hidden="true">
                    <img src={item.icon} alt="" />
                  </div>
                  <h3>{item.title}</h3>
                </div>
                {item.text && <span>{item.text}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Camp Photo Lightbox Modal */}
      {activeCampPhoto && (
        <div
          className="gallery-modal-backdrop"
          onClick={() => setActiveCampPhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gallery-modal-close"
              onClick={() => setActiveCampPhoto(null)}
              aria-label="Close photo preview"
            >
              ✕
            </button>
            <div className="gallery-modal-img-wrap">
              <img src={activeCampPhoto.src} alt={activeCampPhoto.title} />
            </div>
            <div className="gallery-modal-caption">
              <span className="modal-tag">{activeCampPhoto.tag}</span>
              <strong>{activeCampPhoto.title}</strong>
              <p>{activeCampPhoto.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
