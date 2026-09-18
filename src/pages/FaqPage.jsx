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
  const [isOpen, setIsOpen] = useState(true);

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
                Clear answers before<br />
                <span className="faq-heading-accent">your consultation.</span>
              </h1>
              <p className="faq-hero-desc">
                Find information about appointments, consultations, reports,
                surgery, recovery, second opinions and follow-up care.
              </p>
              <p className="faq-hero-subdesc">
                For advice specific to your condition, my clinic desk can help you
                arrange a consultation with me.
              </p>
              <ul className="faq-hero-highlights" aria-label="FAQ highlights">
                <li>Appointments and consultation preparation</li>
                <li>Reports, treatment options and surgery</li>
                <li>Recovery, follow-up care and second opinions</li>
              </ul>
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

        {/* ── BEFORE YOUR CONSULTATION ──────────────────────────────────────── */}
        <section className="faq-prep-section" aria-labelledby="faq-prep-heading">
          <div className="shell">
            <header className="faq-section-header">
              <div>
                <h2 id="faq-prep-heading" className="faq-section-title">A little preparation helps</h2>
                <p className="faq-section-sub">
                  Keeping your reports, medication details and questions ready can help make
                  your consultation more focused and useful.
                </p>
              </div>
            </header>
            <div className="faq-prep-grid">
              {[
                {
                  num: '01',
                  title: 'Bring previous scans and reports',
                  desc: 'If you have X-rays, MRI scans, CT scans or previous medical reports related to your condition, keep them ready. Both physical films and digital reports are helpful.',
                },
                {
                  num: '02',
                  title: 'Keep your medication list available',
                  desc: 'Bring or note the names and doses of medicines you currently take, including supplements and over-the-counter drugs.',
                },
                {
                  num: '03',
                  title: 'Write down your main concerns',
                  desc: 'Note when symptoms started, what makes them better or worse, and the specific questions you would like to discuss during your consultation.',
                },
                {
                  num: '04',
                  title: 'Arrive a little early',
                  desc: 'Allow enough time for registration and any clinic formalities so the consultation can begin on schedule.',
                },
              ].map((step) => (
                <div key={step.num} className="faq-prep-card">
                  <span className="faq-prep-num">{step.num}</span>
                  <h3 className="faq-prep-title">{step.title}</h3>
                  <p className="faq-prep-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECOND OPINION ──────────────────────────────────────── */}
        <section className="faq-support-strip">
          <div className="shell faq-support-grid faq-support-grid--single">
            <div className="faq-support-block faq-support-block--centered">
              <h3 className="faq-support-title">Looking for a second opinion?</h3>
              <p className="faq-support-desc">
                You can discuss an existing diagnosis, treatment recommendation or surgical plan
                during a consultation. Bringing previous reports and imaging can help provide
                useful clinical context.
              </p>
              <Link to="/appointment" className="faq-support-link">
                Request a consultation
              </Link>
            </div>
          </div>
        </section>

        {/* ── STILL NEED HELP CTA ───────────────────────────────────────────── */}
        <section className="faq-cta-section" aria-labelledby="faq-cta-heading">
          <div className="shell">
            <div className="faq-cta-card">
              <div className="faq-cta-grid">
                <div className="faq-cta-left">
                  <h2 id="faq-cta-heading" className="faq-cta-heading">
                    Still need a clearer answer?
                  </h2>
                  <p className="faq-cta-desc">
                    Some questions are best discussed personally. My clinic desk can help you
                    arrange an orthopaedic consultation with me.
                  </p>
                  <p className="faq-cta-sub">
                    <svg aria-hidden="true" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                    Monday – Saturday &nbsp;|&nbsp; By Appointment
                  </p>
                </div>
                <div className="faq-cta-right">
                  <Link to="/appointment" className="faq-cta-primary">
                    Book an Appointment
                  </Link>
                  <Link to="/contact" className="faq-cta-secondary">
                    Contact the Clinic
                  </Link>
                  <a
                    href="https://wa.me/919316753985?text=Hello%2C%20I%20would%20like%20help%20regarding%20an%20orthopaedic%20consultation."
                    target="_blank"
                    rel="noreferrer"
                    className="faq-cta-whatsapp"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp the Clinic
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
