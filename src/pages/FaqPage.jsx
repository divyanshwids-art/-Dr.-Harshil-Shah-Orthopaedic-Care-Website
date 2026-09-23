import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { faqData, FAQ_CATEGORIES } from '../data/faqData';

// ─── CATEGORIES ───────────────────────────────────────────────────────────────
const CATEGORY_TABS = [
  'Appointments',
  'First Consultation',
  'Conditions & Treatments',
  'Surgery',
  'Recovery',
  'Second Opinion',
  'Reports & Scans',
  'Follow-up Care',
  'General',
  'All Questions',
];

// ─── FAQ ITEM (Accordion with open state) ────────────────────────────────────
function FaqItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const sentences = item.answer.split(/(?<=[.!?])\s+/).filter(Boolean);
  const answerPoints = sentences.length <= 4
    ? sentences
    : [sentences[0], sentences[1], sentences.slice(2, -1).join(' '), sentences.at(-1)];

  return (
    <article className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} id={`faq-${item.id}`}>
      <button
        type="button"
        className="faq-item-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <h3 className="faq-item-question">{item.question}</h3>
        <span className="faq-item-icon" aria-hidden="true">
          <span className="faq-icon-line faq-icon-h" />
          <span className="faq-icon-line faq-icon-v" />
        </span>
      </button>
      {isOpen && (
        <div className="faq-item-answer">
          <ul className="faq-answer-points">
            {answerPoints.map((point, index) => <li key={index}>{point}</li>)}
          </ul>
        </div>
      )}
    </article>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState('Appointments');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const topicsBarRef = useRef(null);
  const buttonRefs = useRef({});

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { 'All Questions': faqData.length };
    faqData.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // ── Filter FAQs ───────────────────────────────────────────────────────────
  const currentFaqs = useMemo(() => {
    if (selectedCategory === 'All Questions') {
      return faqData;
    }
    return faqData.filter((f) => f.category === selectedCategory);
  }, [selectedCategory]);

  // ── Scroll detection for horizontal category selection bar ──────────────
  const updateScrollButtons = useCallback(() => {
    const el = topicsBarRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 6);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 6);
  }, []);

  useEffect(() => {
    const el = topicsBarRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    window.addEventListener('resize', updateScrollButtons);
    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [updateScrollButtons]);

  const scrollTopics = (direction) => {
    const el = topicsBarRef.current;
    if (!el) return;
    const amount = direction === 'left' ? -280 : 280;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    const btn = buttonRefs.current[cat];
    if (btn) {
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  // ── JSON-LD Structured Data ───────────────────────────────────────────────
  const jsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.slice(0, 20).map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }), []);

  return (
    <>
      {/* JSON-LD FAQ Schema */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="faq-page">
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="faq-hero" aria-labelledby="faq-h1">
          <div className="shell faq-hero-grid">
            {/* Left */}
            <div className="faq-hero-left">
              <div className="breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span> Patient Help Centre
              </div>
              <h1 id="faq-h1" className="faq-hero-heading">
                Have Questions Before Your Visit?
              </h1>
              <p className="faq-hero-desc">
                Feeling a little unsure about your treatment, first appointment, reports, surgery, or recovery? You’re not alone. Many patients have the same questions and concerns before meeting their doctor.
              </p>
              <p className="faq-hero-subdesc">
                Take a look through the questions other patients have asked. You may find the answer you’re looking for
              </p>

            </div>

            {/* Right — visual */}
            <div className="faq-hero-right" aria-hidden="true">
              <div className="faq-hero-visual">
                <div className="faq-hero-orbit faq-hero-orbit-1" />
                <div className="faq-hero-orbit faq-hero-orbit-2" />
                <div className="faq-hero-art-wrap">
                  <img src="/knee-3d.webp" alt="" className="faq-hero-joint faq-hero-joint-primary" />
                  <img src="/shoulder-3d.webp" alt="" className="faq-hero-joint faq-hero-joint-secondary" />
                  <img src="/hip-3d.webp" alt="" className="faq-hero-joint faq-hero-joint-tertiary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MAIN EXPLORER ────────────────────────────────────────────────── */}
        <section className="faq-explorer" aria-labelledby="faq-explorer-heading">
          <div className="shell faq-explorer-main">

            {/* Header */}
            <div className="faq-explorer-header">
              <h2 id="faq-explorer-heading">Frequently Asked Questions</h2>
            </div>

            {/* Single Line Selection Box */}
            <div className="faq-topics-box-container">
              <div className="faq-topics-selection-wrapper">
                <button
                  type="button"
                  className="faq-topics-nav-btn"
                  onClick={() => scrollTopics('left')}
                  disabled={!canScrollLeft}
                  aria-label="Scroll categories left"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                <div className="faq-topics-scroll-row" ref={topicsBarRef} role="tablist" aria-label="Browse FAQs">
                  {CATEGORY_TABS.map((cat) => {
                    const isActive = selectedCategory === cat;
                    const count = categoryCounts[cat] || 0;
                    return (
                      <button
                        key={cat}
                        ref={(el) => { if (el) buttonRefs.current[cat] = el; }}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`faq-topic-tab ${isActive ? 'faq-topic-tab--active' : ''}`}
                        onClick={() => handleCategorySelect(cat)}
                      >
                        <span className="faq-topic-tab-name">{cat}</span>
                        <span className="faq-topic-tab-count">{count}</span>
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  className="faq-topics-nav-btn"
                  onClick={() => scrollTopics('right')}
                  disabled={!canScrollRight}
                  aria-label="Scroll categories right"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content directly below the selection box */}
            <div className="faq-content-card">
              <div className="faq-topic-card-header">
                <div className="faq-topic-card-title-wrap">
                  <h3 className="faq-topic-card-title">
                    {selectedCategory}
                  </h3>
                </div>
                <div className="faq-topic-card-right">
                  <span className="faq-topic-card-count">
                    {currentFaqs.length} {currentFaqs.length === 1 ? 'Question' : 'Questions'}
                  </span>
                </div>
              </div>

              <div className="faq-group-list" key={selectedCategory}>
                {currentFaqs.map((item) => (
                  <FaqItem
                    key={`${selectedCategory}-${item.id}`}
                    item={item}
                  />
                ))}
              </div>
            </div>

          </div>
        </section>





        {/* ── STILL NEED A CLEARER ANSWER ─────────────────────────────────── */}
        <section className="mock-online-consult-section" id="still-need-answer" aria-label="Still need a clearer answer?" style={{ marginBottom: '32px' }}>
          <div className="mock-shell">
            <div className="mock-consult-card-unified">
              <div className="mock-consult-content-full">
                <h2 className="mock-title">Still need a clearer answer?</h2>
                <p className="mock-consult-lead">
                  Some questions are best discussed personally. My clinic desk can help you
                  arrange an orthopaedic consultation with me.
                </p>

                {/* Action Buttons (2 buttons instead of 3) */}
                <div className="mock-consult-footer-actions">
                  <Link to="/appointment" className="mock-btn-primary">
                    <span>Book an Appointment</span>
                    <span className="mock-btn-primary-arrow">&rarr;</span>
                  </Link>
                  <a
                    href="https://wa.me/919316753985?text=Hello%2C%20I%20would%20like%20help%20regarding%20an%20orthopaedic%20consultation."
                    target="_blank"
                    rel="noreferrer"
                    className="mock-btn-whatsapp"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.02c-.24.68-1.39 1.3-1.92 1.38-.5.08-1.14.11-3.66-.93-3.23-1.33-5.32-4.6-5.48-4.82-.16-.22-1.32-1.75-1.32-3.34 0-1.59.83-2.37 1.12-2.7.29-.33.64-.41.85-.41.21 0 .43 0 .61.01.2.01.47-.08.73.55.27.64.91 2.22.99 2.38.08.16.14.36.03.58-.11.22-.16.36-.33.55-.16.2-.35.44-.5.59-.16.16-.33.33-.14.66.19.33.84 1.38 1.8 2.24 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.72-.09.2-.23.83-.97 1.05-1.3.22-.33.44-.28.74-.16.3.11 1.93.91 2.26 1.07.33.16.55.25.63.38.08.14.08.8-.16 1.48z" />
                    </svg>
                    <span>WhatsApp the Clinic</span>
                  </a>
                </div>

                <div className="mock-consult-trust-list">

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
