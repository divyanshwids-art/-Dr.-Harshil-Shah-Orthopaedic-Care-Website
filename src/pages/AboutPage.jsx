import React from 'react';
import { Link } from 'react-router-dom';

const timelineData = [
  {
    type: 'MEDICAL EDUCATION',
    badgeClass: 'badge-education',
    location: 'Ahmedabad',
    title: 'Medical Education & Orthopaedic Residency',
    institution: 'Smt. NHL Municipal Medical College • V.S. Hospital • L.G. Hospital',
    paragraphs: [
      'I completed my MBBS at Smt. NHL Municipal Medical College, followed by my clinical internship at V.S. Hospital in Ahmedabad.',
      'Driven by a strong dedication to joint reconstruction and patient mobility, I completed my M.S. in Orthopaedics at L.G. Hospital, Ahmedabad, gaining extensive hands-on experience in complex trauma and reconstructive bone surgery.'
    ],
    side: 'left'
  },
  {
    type: 'FELLOWSHIP',
    badgeClass: 'badge-training',
    location: 'Mumbai',
    title: 'Joint Replacement Training',
    institution: 'P. D. Hinduja Hospital • Dr. Sanjay Agarwala',
    paragraphs: [
      'To build focused expertise in joint reconstruction, I completed a specialized Fellowship in Joint Replacement Surgery at P. D. Hinduja Hospital, Mumbai, under Dr. Sanjay Agarwala.',
      'This fellowship provided deep clinical immersion in primary and complex hip and knee replacement techniques and long-term joint rehabilitation.'
    ],
    side: 'right'
  },
  {
    type: 'SPECIALIZED TRAINING',
    badgeClass: 'badge-sports',
    location: 'Mumbai',
    title: 'Sports Injury & Arthroscopy',
    institution: 'Dr. Abhay Narvekar',
    paragraphs: [
      'I completed dedicated training in Sports Injury and Keyhole Arthroscopy under Dr. Abhay Narvekar in Mumbai, gaining advanced experience in ligament reconstruction and joint preservation.'
    ],
    side: 'left'
  },
  {
    type: 'SHOULDER FELLOWSHIP',
    badgeClass: 'badge-shoulder',
    location: 'Pune',
    title: 'Shoulder Surgery & Sports Injuries',
    institution: 'DMH Hospital, Pune • Dr. Ashish Babulkar',
    paragraphs: [
      'I continued advanced shoulder surgery training under Dr. Ashish Babulkar at DMH Hospital in Pune, with a dedicated focus on shoulder replacement, rotator cuff restoration, and sports trauma.',
      'This experience strengthened my approach to restoring pain-free movement in active patients and athletes.'
    ],
    side: 'right'
  },
  {
    type: 'INTERNATIONAL FELLOWSHIP — USA',
    badgeClass: 'badge-usa',
    location: 'New York, USA',
    title: 'Robotic & Revision Joint Replacement — USA',
    institution: 'Hospital for Special Surgery (HSS), New York • Dr. Peter Sculco',
    paragraphs: [
      'As part of my advanced international training, I completed a fellowship in Robotic Joint Replacement and Revision Joint Surgery at the Hospital for Special Surgery (HSS) in New York under Dr. Peter Sculco.',
      'During this fellowship, I trained in robotic-assisted joint replacement protocols and the management of complex primary and revision hip and knee surgeries.'
    ],
    side: 'left'
  },
  {
    type: 'HARVARD-AFFILIATED FELLOWSHIP',
    badgeClass: 'badge-harvard',
    location: 'Boston, USA',
    title: 'Advanced Shoulder Training — Harvard-Affiliated MGH',
    institution: 'Massachusetts General Hospital (MGH), Boston • Dr. Bassem Elhassan',
    paragraphs: [
      'I further trained with the Shoulder Service at Massachusetts General Hospital (MGH) in Boston—a Harvard Medical School teaching hospital—under Dr. Bassem Elhassan.',
      'This training provided specialized experience in complex shoulder reconstructions, tendon transfers, and advanced joint restoration.'
    ],
    side: 'right'
  }
];

const expertiseList = [
  'Joint Replacement Surgery',
  'Robotic Joint Replacement',
  'Revision Hip & Knee Replacement',
  'Sports Injury Management',
  'Arthroscopy & Keyhole Surgery',
  'Shoulder Surgery & Repair',
  'Shoulder Replacement',
  'Complex Joint Reconstruction'
];

const jointsData = [
  {
    id: 'knee',
    name: 'Knee Joint',
    subtitle: 'Preservation, Arthroscopy & ACL Repair',
    img: '/knee-3d.png',
    badge: '01 / Knee'
  },
  {
    id: 'hip',
    name: 'Hip Joint',
    subtitle: 'Preservation & Joint Replacement',
    img: '/hip-3d.png',
    badge: '02 / Hip'
  },
  {
    id: 'shoulder',
    name: 'Shoulder Joint',
    subtitle: 'Arthroscopy, Rotator Cuff & Reconstruction',
    img: '/shoulder-3d.png',
    badge: '03 / Shoulder'
  }
];

const aboutFaqs = [
  {
    question: "What is your primary surgical and clinical focus?",
    answer: "My practice is dedicated to conditions of the knee, hip, and shoulder. This includes robotic joint replacement, revision joint surgery, keyhole arthroscopy for sports injuries (such as ACL and meniscus tears), rotator cuff repairs, and complex shoulder reconstruction."
  },
  {
    question: "How does your international fellowship training benefit patients?",
    answer: "My fellowships at the Hospital for Special Surgery (HSS) in New York and Massachusetts General Hospital (MGH, Harvard Medical School affiliate) in Boston provided hands-on expertise in robotic alignment and advanced muscle-preserving techniques. For my patients, this ensures modern, evidence-based care with greater surgical precision and structured recovery pathways."
  },
  {
    question: "Do you always recommend surgery, or are non-surgical treatments preferred?",
    answer: "I strongly believe in conservative care first. Many joint conditions improve significantly with guided physiotherapy, lifestyle adjustments, and targeted medications. I recommend surgery only when non-surgical options have been exhausted or when structural joint damage requires intervention to protect long-term mobility."
  },
  {
    question: "What can I expect during my first consultation with you?",
    answer: "During your consultation, we start with a clear conversation about your symptoms, daily activities, and recovery goals. I perform a focused clinical examination, explain your scan images in simple terms, and walk you through every sensible treatment option so you can decide on your care with complete confidence."
  },
  {
    question: "Can I schedule a consultation for an independent second opinion?",
    answer: "Yes, absolutely. Seeking a second opinion is a wise and common step before making decisions about joint surgery. You are welcome to bring all your existing X-rays, MRI scans, and medical reports for an honest, objective evaluation of your condition."
  },
  {
    question: "What minimally invasive and tissue-preserving methods do you use?",
    answer: "When surgery is needed, I employ robotic-assisted knee replacement, muscle-sparing hip reconstruction, and keyhole arthroscopic techniques. These modern approaches are designed to minimize trauma to surrounding muscles, reduce post-operative pain, and support an earlier, confident return to daily activities."
  }
];

export default function AboutPage() {
  const timelineRef = React.useRef(null);
  const [lineProgress, setLineProgress] = React.useState(0);
  const [activeJoint, setActiveJoint] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState(0);

  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveJoint((prev) => (prev + 1) % jointsData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through timeline container
      const startTrigger = windowHeight * 0.75;
      const totalDist = rect.height + 50;
      const currentScroll = startTrigger - rect.top;
      
      let pct = (currentScroll / totalDist) * 100;
      pct = Math.max(0, Math.min(100, pct));
      setLineProgress(pct);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-page">
      {/* About Page Hero */}
      <section className="about-hero-section">
        <div className="about-hero-backdrop-pattern" aria-hidden="true" />
        <div className="shell about-hero-container">
          <div className="about-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span> About
            </div>

            <h1 className="about-hero-title">
              About <span className="about-hero-accent">Dr. Harshil Shah</span>
            </h1>

            <p className="about-hero-desc">
              I am a Consultant Orthopaedic Surgeon specializing in knee, hip, and shoulder joint care, arthroscopy, and sports injury recovery in Ahmedabad.
            </p>

            <ul className="about-hero-highlights" aria-label="Clinical focus and expertise">
              <li><strong>Areas of expertise:</strong> Arthroscopy, sports injuries and joint reconstruction</li>
              <li><strong>Patient-focused care:</strong> Personalised plans supporting recovery and mobility</li>
              <li><strong>Clinical approach:</strong> Evidence-based treatment with clear guidance</li>
            </ul>
          </div>

          <div className="about-hero-visual-col">
            <div className="about-portrait-card">
              <img
                src="/profile2.webp"
                alt="Dr. Harshil Shah - Orthopaedic Surgeon"
                className="about-portrait-photo"
              />
              <div className="about-portrait-info">
                <strong className="about-portrait-name">Dr. Harshil Shah</strong>
                <span className="about-portrait-role">M.S. (Ortho) · Consultant Orthopaedic Surgeon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials & Specialization Bar */}
        <div className="shell about-profile-snapshot" aria-label="Professional summary">
          <article>
            <span>Qualifications</span>
            <strong>MBBS · M.S. (Orthopaedics) · FIJR · FIAS</strong>
          </article>
          <article>
            <span>Specialization</span>
            <strong>Knee, Hip &amp; Shoulder Reconstruction</strong>
          </article>
          <article>
            <span>Advanced Training</span>
            <strong>India · HSS New York · MGH Boston</strong>
          </article>
        </div>
      </section>

      {/* Story / Approach Section */}
      <section id="approach" className="section story-section">
        <div className="shell story-grid">
          <div className="story-lead">
            <div className="eyebrow">
              <span></span> My Approach
            </div>
            <h2>
              Care begins with a
              <br />
              <em>good conversation.</em>
            </h2>
            <p className="story-lead-sub">
              I take time to understand your symptoms, daily routine, and personal recovery goals before recommending any treatment.
            </p>
          </div>
          <div className="story-copy">
            <p className="story-quote">
              “My role is to help you understand what is happening, explain every sensible option in plain language, and choose a treatment plan that fits your life.”
            </p>
            <p>
              In my clinical practice, I center every decision on tissue protection, muscle preservation, and restoring natural, comfortable mobility. Whether you are managing an acute sports injury or gradual joint wear, I believe patients achieve the best outcomes when they feel heard and understand every step of their treatment.
            </p>
            <p>
              Every recommendation begins with an accurate diagnosis. Non-surgical options such as targeted physiotherapy, lifestyle adjustments, and medication are always prioritized first. Surgery is only considered when it provides the safest, most dependable path to long-term relief and active living.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Joints Focus Banner */}
      <section className="about-focus-banner">
        <div className="shell about-focus-grid">
          {/* Animated 3D Joint Showcase */}
          <div
            className="about-joints-stage ultra-pro-max"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="about-joints-bg-glow" aria-hidden="true" />
            <div className="about-joints-orbit-ring ring-outer" aria-hidden="true" />
            <div className="about-joints-orbit-ring ring-inner" aria-hidden="true" />
            <div className="about-joints-scan-line" aria-hidden="true" />

            <div className="about-joints-viewport">
              {jointsData.map((joint, idx) => {
                const diff = (idx - activeJoint + jointsData.length) % jointsData.length;
                let statusClass = 'slide-hidden';
                if (diff === 0) statusClass = 'slide-active';
                else if (diff === 1) statusClass = 'slide-next';
                else if (diff === jointsData.length - 1) statusClass = 'slide-prev';

                return (
                  <div
                    key={joint.id}
                    className={`about-joint-slide-item ${statusClass}`}
                    onClick={() => setActiveJoint(idx)}
                  >
                    <div className="about-joint-img-box">
                      <img
                        src={joint.img}
                        alt={joint.name}
                        className="about-joint-3d-img"
                      />
                      <div className="about-joint-glow-aura" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Interactive Pill Selectors */}
            <div className="about-joints-dots-bar">
              {jointsData.map((joint, idx) => (
                <button
                  key={joint.id}
                  type="button"
                  className={`about-joint-pill-btn ${activeJoint === idx ? 'pill-active' : ''}`}
                  onClick={() => setActiveJoint(idx)}
                >
                  <span className="pill-indicator" />
                  {joint.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="about-focus-content">
            <h2>
              Three joints.
              <br />
              <em>One tailored approach.</em>
            </h2>
            <p>
              Whether treating a sports injury in an active individual or managing joint wear later in life, I design every treatment plan around you—your daily routine, pain level, and mobility goals.
            </p>
            <div className="about-focus-care-points" aria-label="Joint care approach">
              <article className="about-focus-care-point">
                <span className="about-focus-care-label">Knee</span>
                <p>Sports injuries, keyhole arthroscopy, and joint replacement tailored to your active goals.</p>
              </article>
              <article className="about-focus-care-point">
                <span className="about-focus-care-label">Hip</span>
                <p>Joint-preserving techniques and replacement care for pain relief and confident walking.</p>
              </article>
              <article className="about-focus-care-point">
                <span className="about-focus-care-label">Shoulder</span>
                <p>Focused care to restore strength, stability, and comfortable overhead movement.</p>
              </article>
            </div>

            <Link className="text-link about-focus-link" to="/treatments">
              Explore specialist treatments{' '}
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="icon">
                <path
                  d="M5 12h14M14 7l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="principles-section">
        <div className="shell principles-grid">
          <article>
            <span>01</span>
            <h3>Patient-first decisions</h3>
            <p>I recommend surgery only when truly needed, prioritizing non-surgical care whenever possible.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Clear, honest guidance</h3>
            <p>I take time to explain your scans in simple terms, answer every question, and guide you calmly.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Thoughtful recovery</h3>
            <p>I focus on muscle-preserving techniques and structured rehabilitation to help you rebuild natural strength.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Evidence-based care</h3>
            <p>Every treatment choice is grounded in proven clinical science and aligned with your recovery goals.</p>
          </article>
        </div>
      </section>

      {/* Experience & Advanced Training Timeline */}
      <section className="about-timeline-section" id="experience-training">
        <div className="shell">
          <div className="about-timeline-header">
            <div className="eyebrow">
              <span></span> Experience &amp; Training
            </div>
            <h2 className="about-timeline-title">Experience &amp; Training</h2>
            <p className="about-timeline-subtitle">
              My orthopaedic practice has been shaped by comprehensive clinical training across premier centers in India and the United States. From my early medical residency in Ahmedabad to advanced fellowships in joint replacement, sports trauma, and shoulder surgery, every stage has deepened my commitment to patient-first care.
            </p>
          </div>

          <div className="about-timeline-wrapper" ref={timelineRef}>
            {/* Center Background Line */}
            <div className="about-timeline-line-bg" aria-hidden="true" />

            {/* Dynamic Center Scroll Progress Fill Line */}
            <div
              className="about-timeline-line-fill"
              style={{ height: `${lineProgress}%` }}
              aria-hidden="true"
            />

            <div className="about-timeline-entries">
              {timelineData.map((item, idx) => {
                const threshold = (idx / (timelineData.length - 1)) * 95;
                const isPassed = lineProgress >= threshold;

                return (
                  <div
                    key={idx}
                    className={`about-timeline-item ${item.side === 'left' ? 'item-left' : 'item-right'} ${isPassed ? 'item-active' : ''}`}
                  >
                    {/* Content Card */}
                    <div className="about-timeline-card">
                      <div className="about-timeline-card-header">
                        <span className={`about-timeline-badge ${item.badgeClass}`}>
                          {item.type}
                        </span>
                        <span className="about-timeline-location">📍 {item.location}</span>
                      </div>
                      <h3 className="about-timeline-heading">{item.title}</h3>
                      {item.institution && (
                        <div className="about-timeline-institution">{item.institution}</div>
                      )}
                      <div className="about-timeline-body">
                        {item.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className="about-timeline-desc">{p}</p>
                        ))}
                      </div>
                    </div>

                    {/* Center Node */}
                    <div className={`about-timeline-circle ${isPassed ? 'circle-active' : ''}`}>
                      <span className="circle-inner" />
                    </div>

                    {/* Spacer for balanced 50/50 alternating grid */}
                    <div className="about-timeline-blank" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* A Well-Rounded Orthopaedic Journey Section */}
      <section className="about-journey-section" aria-label="A Well-Rounded Orthopaedic Journey">
        <div className="shell">
          <div className="about-journey-box">
            <div className="about-journey-header">
              <div className="eyebrow eyebrow-light">
                <span></span> Clinical Breadth &amp; Philosophy
              </div>
              <h2 className="about-journey-title">A Well-Rounded Orthopaedic Journey</h2>
              <p className="about-journey-lead">
                Training across leading institutions in <strong>Ahmedabad, Mumbai, Pune, and the United States</strong> has given me a comprehensive, patient-centered perspective on bone and joint care.
              </p>
            </div>

            <div className="about-journey-specialties-wrap">
              <span className="about-journey-list-title">My clinical experience includes:</span>
              <div className="about-journey-grid">
                {expertiseList.map((item, idx) => (
                  <div key={idx} className="about-journey-item">
                    <div className="about-journey-icon">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="about-journey-item-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-journey-philosophy-card">
              <div className="about-journey-quote-icon">“</div>
              <p className="about-journey-philosophy-text">
                My goal with every patient is simple: <strong>to understand your condition clearly, explain every option with honesty, and help you return to comfortable movement and active daily life with confidence.</strong>
              </p>
              <div className="about-journey-cta-row">
                <Link to="/appointment" className="button button-white">
                  <span>Book a Consultation</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/treatments" className="button button-outline-white">
                  <span>Explore Treatments</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Page Related FAQs */}
      <section className="about-faq-section" aria-label="Frequently Asked Questions about Dr. Harshil Shah">
        <div className="shell">
          <div className="about-faq-header">
            <span className="about-faq-kicker">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="about-faq-title">
              Consultations &amp; <em>Clinical Care</em>
            </h2>
            <p className="about-faq-subtitle">
              Clear answers regarding appointments, surgical specialties, second opinions, and what to expect during your visit.
            </p>
          </div>

          <div className="about-faq-container">
            {aboutFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`about-faq-card ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="about-faq-question-btn"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="about-faq-q-text">{faq.question}</span>
                    <span className="about-faq-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>

                  <div className={`about-faq-answer-wrap ${isOpen ? 'open' : ''}`}>
                    <div className="about-faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="about-faq-footer-cta">
            <p>Have more questions about specific conditions or recovery?</p>
            <Link to="/faq" className="about-faq-more-link">
              <span>View All Patient FAQs</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}
