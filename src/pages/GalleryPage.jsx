import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeModalImg, setActiveModalImg] = useState(null);
  const [visibleCardIds, setVisibleCardIds] = useState(new Set());
  const cardRefs = useRef({});

  const categories = [
    { id: 'all', label: 'All', icon: '✦', desc: 'Complete visual timeline of surgical practice and patient care' },
    { id: 'clinical-practice', label: 'Clinical Practice', icon: '🩺', desc: 'Outpatient consultations, diagnostics, and patient care planning' },
    { id: 'surgical-theatre', label: 'Surgical Theatre', icon: '🏥', desc: 'High-precision robotic surgeries, joint replacements, and arthroscopy' },
    { id: 'academic-training', label: 'Academic & Training', icon: '🎓', desc: 'Faculty presentations, cadaveric workshops, and clinical masterclasses' },
    { id: 'professional-journey', label: 'Professional Journey', icon: '💼', desc: 'Scientific research, clinical papers, and specialist fellowships' },
    { id: 'patient-care', label: 'Patient Care', icon: '🤝', desc: 'Post-op mobility restoration, personalized counseling, and rehabilitation' },
    { id: 'events-honors', label: 'Events & Honors', icon: '🏆', desc: 'Association milestones, awards, CME conferences, and recognitions' },
  ];

  // Reset and re-trigger observer on filter category change
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCardIds(new Set());
  };

  const DOCTOR_IMG_BASE = '/galleri/docter img/';

  const galleryItems = [




    {
      id: 8,
      src: `${DOCTOR_IMG_BASE}WS_DB-9.JPG.webp`,
      tag: 'Professional Journey',
      title: 'Dr. Harshil Shah — M.S. Orthopaedics',
      subtitle: 'Specialist in joint preservation, robotic surgery & advanced arthroscopy',
      size: 'column', // 1x2 tall
      anim: 'bottom-to-top',
      category: 'professional-journey'
    },
    {
      id: 9,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.47.57 PM.webp`,
      tag: 'Professional Journey',
      title: 'Consultant Orthopaedics Appointment',
      subtitle: 'Welcoming Dr. Harshil Shah — Specialist in robotic joint care & arthroscopy',
      size: 'small', // 1x1
      anim: 'left-to-right',
      category: 'professional-journey'
    },
    {
      id: 10,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.47.58 PM.webp`,
      tag: 'Clinical Practice',
      title: 'Pre-Op Patient Consultation & Guidance',
      subtitle: 'Addressing queries with clarity and empathy',
      size: 'big', // 2x2
      anim: 'right-to-left',
      category: 'clinical-practice'
    },
    {
      id: 11,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.47.58 PM (1).webp`,
      tag: 'Professional Journey',
      title: 'Massachusetts General Hospital — Outpatient Surgery Center',
      subtitle: 'Advanced surgical fellowship & clinical experience at Mass General Brigham, USA',
      size: 'column', // 1x2 tall
      anim: 'top-to-bottom',
      category: 'professional-journey'
    },
    {
      id: 12,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.47.58 PM (2).webp`,
      tag: 'Academic & Training',
      title: 'Advanced Joint Cadaveric Lab Training',
      subtitle: 'Refining complex revision techniques',
      size: 'small', // 1x1
      anim: 'bottom-to-top',
      category: 'academic-training'
    },
    {
      id: 13,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.47.59 PM.webp`,
      tag: 'Professional Journey',
      title: 'Massachusetts General Hospital, USA',
      subtitle: 'Clinical fellowship & training at Harvard-affiliated medical centre',
      size: 'small', // 1x1
      anim: 'left-to-right',
      category: 'professional-journey'
    },
    {
      id: 14,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.00 PM.webp`,
      tag: 'Professional Journey',
      title: 'Scientific Paper Presentation',
      subtitle: 'Outcomes in rapid-recovery joint pathways',
      size: 'small', // 1x1
      anim: 'right-to-left',
      category: 'professional-journey'
    },
    {
      id: 15,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.01 PM.webp`,
      tag: 'Professional Journey',
      title: 'Practical Do\'s & Don\'ts in Robotic Surgery',
      subtitle: 'Keynote presentation at Curis Hospitals clinical forum',
      size: 'small', // 1x1
      anim: 'top-to-bottom',
      category: 'professional-journey'
    },
    {
      id: 16,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.01 PM (1).webp`,
      tag: 'Professional Journey',
      title: 'Times Healthcare Leaders Gujarat Award',
      subtitle: 'Recognition & honors presented by Optimal Media Solutions (Times of India)',
      size: 'small', // 1x1
      anim: 'bottom-to-top',
      category: 'professional-journey'
    },
    {
      id: 17,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.02 PM.webp`,
      tag: 'Academic & Training',
      title: 'International Faculty Interaction',
      subtitle: 'Exchanging clinical insights with global specialists',
      size: 'column', // 1x2 tall
      anim: 'left-to-right',
      category: 'academic-training'
    },
    {
      id: 18,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.02 PM (1).webp`,
      tag: 'Surgical Theatre',
      title: 'Shoulder Arthroscopy in Progress',
      subtitle: 'Keyhole repair of rotator cuff and labrum',
      size: 'big', // 2x2
      anim: 'right-to-left',
      category: 'surgical-theatre'
    },
    {
      id: 19,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.02 PM (2).webp`,
      tag: 'Professional Journey',
      title: 'Mentorship & Clinical Collaboration',
      subtitle: 'Exchanging clinical insights and surgical expertise with senior orthopaedic mentors',
      size: 'small', // 1x1
      anim: 'top-to-bottom',
      category: 'professional-journey'
    },
    {
      id: 20,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.03 PM.webp`,
      tag: 'Surgical Theatre',
      title: 'Minimally Invasive Joint Arthroscopy',
      subtitle: 'Live arthroscopic visualisation and keyhole ligament reconstruction',
      size: 'small', // 1x1
      anim: 'bottom-to-top',
      category: 'surgical-theatre'
    },
    {
      id: 21,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.03 PM (1).webp`,
      tag: 'Surgical Theatre',
      title: 'Team Briefing & Pre-Operative Check',
      subtitle: 'Ensuring utmost patient safety and surgical readiness',
      size: 'row', // 2x1 wide
      anim: 'left-to-right',
      category: 'surgical-theatre'
    },
    {
      id: 22,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.04 PM.webp`,
      tag: 'Professional Journey',
      title: 'P.D. Hinduja Hospital Fellowship',
      subtitle: 'Arthroplasty & joint reconstruction fellowship completion certification',
      size: 'small', // 1x1
      anim: 'right-to-left',
      category: 'professional-journey'
    },
    {
      id: 23,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.04 PM (1).webp`,
      tag: 'Professional Journey',
      title: 'Specialized Arthroplasty Certification',
      subtitle: 'Dedication to advanced clinical mastery',
      size: 'small', // 1x1
      anim: 'top-to-bottom',
      category: 'professional-journey'
    },
    {
      id: 24,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.04 PM (2).webp`,
      tag: 'Surgical Theatre',
      title: 'Knee Preservation & Realignment',
      subtitle: 'High tibial osteotomy and cartilage restoration',
      size: 'small', // 1x1
      anim: 'bottom-to-top',
      category: 'surgical-theatre'
    },
    {
      id: 25,
      src: `${DOCTOR_IMG_BASE}WhatsApp Image 2026-08-24 at 12.48.05 PM.webp`,
      tag: 'Events & Honors',
      title: 'Dr. Harshil Shah — Dedicated Orthopaedic Care',
      subtitle: 'Committed to empowering pain-free movement across Gujarat',
      size: 'big', // 2x2
      anim: 'left-to-right',
      category: 'events-honors'
    },
    {
      id: 26,
      src: `${DOCTOR_IMG_BASE}IMG_2517.jpg`,
      tag: 'Patient Care',
      title: 'Clinical Joint Assessment & Mobility Check',
      subtitle: 'Hands-on knee evaluation, ligament assessment and personalized patient recovery guidance',
      size: 'column', // 1x2 tall
      anim: 'left-to-right',
      category: 'patient-care'
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  // IntersectionObserver: Animate cards when user scrolls down to them
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.dataset.id);
          if (entry.isIntersecting) {
            setVisibleCardIds((prev) => new Set([...prev, id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    Object.values(cardRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredItems]);

  return (
    <div className="gallery-page-wrapper">
      {/* Visual Hero */}
      <section className="gallery-hero-custom">
        <div className="gallery-hero-bg-glow"></div>
        <div className="shell gallery-hero-grid">
          <div className="gallery-hero-content">
            <h1 className="gallery-hero-title">
              Moments from a
              <br />
              <span className="hero-accent-text">journey of care.</span>
            </h1>
            <p className="gallery-hero-subtitle">
              A comprehensive visual journey through Dr. Harshil Shah's clinical practice, advanced robotic joint surgeries, academic CME forums, and surgical fellowships.
            </p>

            {/* Filter Tabs in Hero */}
            <div className="gallery-filter-tabs">
              {categories.map((cat) => {
                const count = cat.id === 'all'
                  ? galleryItems.length
                  : galleryItems.filter((i) => i.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    className={`gallery-filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(cat.id)}
                  >
                    {cat.icon} {cat.label} ({count})
                  </button>
                );
              })}
              <Link
                to="/operation-theatre"
                className="gallery-filter-pill"
                style={{ background: 'linear-gradient(135deg, #146c72, #0e555a)', color: '#ffffff', borderColor: '#3bb3bc', fontWeight: 800 }}
              >
                🎬 Surgical &amp; OT Videos (19) →
              </Link>
            </div>
          </div>

          <div className="gallery-hero-visual-panel" aria-hidden="true">
            <div className="gallery-hero-showcase-card">
              <div className="hero-floating-badge badge-top">
                <span className="badge-dot"></span>
                <span>Robotic Precision &amp; 3D Care</span>
              </div>

              <div className="hero-3d-models-wrap">
                <img className="hero-3d-img hero-3d-shoulder" src="/shoulder-3d.webp" alt="3D Shoulder Joint" />
                <img className="hero-3d-img hero-3d-knee" src="/knee-3d.webp" alt="3D Knee Joint" />
              </div>

              <div className="hero-floating-badge badge-bottom">
                <span>Knee · Hip · Shoulder Joint Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Dedicated Categories Section */}
      <section className="section gallery-categories-section" id="gallery-categories">
        <div className="shell">
          <div className="gallery-categories-header">
            <div className="gallery-categories-badge">
              <span className="badge-pulse-dot"></span>
              <span>Visual Gallery &amp; Albums</span>
            </div>
            <h2 className="gallery-categories-title">
              Explore by <span>Specialized Categories</span>
            </h2>
            <p className="gallery-categories-desc">
              All | Clinical Practice | Surgical Theatre | Academic &amp; Training | Professional Journey | Patient Care | Events &amp; Honors
            </p>
          </div>

          <div className="gallery-categories-tabs-bar" role="tablist">
            {categories.map((cat) => {
              const count = cat.id === 'all'
                ? galleryItems.length
                : galleryItems.filter((i) => i.category === cat.id).length;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`gallery-cat-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  <span className="cat-btn-icon">{cat.icon}</span>
                  <span className="cat-btn-label">{cat.label}</span>
                  <span className="cat-btn-count">{count}</span>
                </button>
              );
            })}

            <Link
              to="/operation-theatre"
              className="gallery-cat-btn gallery-cat-btn-video"
              title="Watch high-definition surgical recordings"
            >
              <span className="cat-btn-icon">🎬</span>
              <span className="cat-btn-label">Surgical &amp; OT Videos</span>
              <span className="cat-btn-count video-badge">19</span>
            </Link>
          </div>

          {/* Active Filter Status Bar */}
          <div className="gallery-active-filter-bar">
            <div className="active-filter-info">
              <span className="active-filter-dot"></span>
              <span>
                Showing <strong>{filteredItems.length} {filteredItems.length === 1 ? 'photo' : 'photos'}</strong> in{' '}
                <strong>{categories.find((c) => c.id === activeCategory)?.label || 'All'}</strong>
              </span>
              <span className="active-filter-subdesc">
                — {categories.find((c) => c.id === activeCategory)?.desc}
              </span>
            </div>
            {activeCategory !== 'all' && (
              <button
                type="button"
                className="gallery-reset-filter-btn"
                onClick={() => handleCategoryChange('all')}
              >
                Reset to All ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Bento Mosaic Dynamic Animated Grid */}
      <section className="section gallery-bento-section">
        <div className="shell">
          <div className="gallery-bento-grid">
            {filteredItems.map((item, index) => {
              const isInView = visibleCardIds.has(item.id);
              return (
                <div
                  key={item.id}
                  ref={(el) => (cardRefs.current[item.id] = el)}
                  data-id={item.id}
                  className={`gallery-bento-card gallery-card-${item.size} anim-${item.anim} ${isInView ? 'is-in-view' : 'is-hidden'}`}
                  style={{ animationDelay: `${(index % 3) * 0.12}s` }}
                  onClick={() => setActiveModalImg(item)}
                  title="Click to zoom image"
                >
                  <div className="gallery-card-inner">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="gallery-card-img"
                      loading="lazy"
                    />

                    {/* Glassmorphic Overlay Gradient */}
                    <div className="gallery-card-gradient"></div>

                    {/* Top Badge */}
                    <div className="gallery-card-tag">
                      <span>{item.tag}</span>
                    </div>

                    {/* Hover Zoom Icon */}
                    <div className="gallery-zoom-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </div>

                    {/* Bottom Captions */}
                    <div className="gallery-card-info">
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeModalImg && (
        <div
          className="gallery-modal-backdrop"
          onClick={() => setActiveModalImg(null)}
        >
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gallery-modal-close"
              onClick={() => setActiveModalImg(null)}
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <div className="gallery-modal-img-wrap">
              <img src={activeModalImg.src} alt={activeModalImg.title} />
            </div>
            <div className="gallery-modal-caption">
              <span className="modal-tag">{activeModalImg.tag}</span>
              <strong>{activeModalImg.title}</strong>
              <p>{activeModalImg.subtitle}</p>
            </div>
          </div>
        </div>
      )}

      {/* Education Library 3D */}
      <section className="section gallery-education-section">
        <div className="shell">
          <div className="gallery-stacked-heading">
            <h2>
              Information designed <em>to be revisited.</em>
            </h2>
            <p>
              Original patient education helps families remember the important parts of preparation, early protection and steady recovery.
            </p>
          </div>
          <div className="education-gallery education-gallery-3d">
            <Link to="/patient-guides#eras">
              <img src="/hip-3d.webp" alt="3D hip joint visualization" />
              <span>
                <strong>Prepare before surgery</strong>
                <i>Read guidance →</i>
              </span>
            </Link>
            <Link to="/patient-guides#quiet-knee">
              <img src="/knee-3d.webp" alt="3D knee joint visualization" />
              <span>
                <strong>Protect early recovery</strong>
                <i>Read guidance →</i>
              </span>
            </Link>
            <Link to="/patient-guides#quiet-knee">
              <img src="/shoulder-3d.webp" alt="3D shoulder joint visualization" />
              <span>
                <strong>Progress with support</strong>
                <i>Read guidance →</i>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Note */}
      <section className="gallery-note">
        <div className="shell">
          <div>
            <span>✦</span>
            <p>Looking for information about a condition or treatment?</p>
          </div>
          <Link className="button button-light" to="/treatments">
            Explore treatments
          </Link>
        </div>
      </section>
    </div>
  );
}
