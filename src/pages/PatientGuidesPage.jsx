import React, { useState, useEffect } from 'react';

const ERAS_TIMELINE_STEPS = [
  {
    key: 'before',
    targetId: 'before-surgery',
    phase: 'Before Surgery',
    stageTag: 'PHASE 01',
    title: 'Optimise & Prepare',
    desc: 'Medical clearances, prehab exercises, home safety, and fasting.'
  },
  {
    key: 'hospital',
    targetId: 'hospital-stay',
    phase: 'Hospital Stay',
    stageTag: 'PHASE 02',
    title: 'Move With Support',
    desc: 'Multimodal pain relief, 24h assisted walking, and safe discharge.'
  },
  {
    key: 'home',
    targetId: 'home-recovery',
    phase: 'Home Recovery',
    stageTag: 'PHASE 03',
    title: 'Progress Steadily',
    desc: 'Quiet Knee protocol, milestone targets, swelling control, and activity.'
  }
];

const HERO_JOINTS = [
  {
    id: 'knee',
    name: 'Knee Joint Care',
    img: '/knee-3d.png',
    alt: '3D Knee Joint Model'
  },
  {
    id: 'shoulder',
    name: 'Shoulder Joint Care',
    img: '/shoulder-3d.png',
    alt: '3D Shoulder Joint Model'
  },
  {
    id: 'hip',
    name: 'Hip Joint Care',
    img: '/hip-3d.png',
    alt: '3D Hip Joint Model'
  }
];

export default function PatientGuidesPage() {
  const [activeErasStep, setActiveErasStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [heroJointIndex, setHeroJointIndex] = useState(0);

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setHeroJointIndex((prev) => (prev + 1) % HERO_JOINTS.length);
    }, 2500);
    return () => clearInterval(heroTimer);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleStepClick = (idx, targetId) => {
    setActiveErasStep(idx);
    setIsPaused(true);
    scrollToSection(targetId);
  };

  return (
    <div className="patient-guides-page-wrapper">
      {/* Guides Hero */}
      <section className="guides-hero">
        <div className="guides-hero-bg-container" aria-hidden="true">
          <img
            src="/guides-hero-banner.webp"
            alt=""
            className="guides-hero-bg-img"
          />
          <div className="guides-hero-scrim"></div>
        </div>
        <div className="shell guides-hero-inner">
          <div className="guides-hero-copy">
            <h1 className="guides-hero-title">
              <span className="guides-hero-line1">Recovery, explained</span>
              <em className="guides-hero-line2">clearly.</em>
            </h1>
            <p>
              My evidence-based orthopaedic guidance to support you through every stage of your joint replacement and recovery.
            </p>
          </div>

          {/* Pedestal 3D Joint Showcase Slider */}
          <div className="guides-hero-pedestal-showcase" aria-hidden="true">
            <div className="guides-pedestal-stage">
              {HERO_JOINTS.map((joint, idx) => {
                const isActive = heroJointIndex === idx;
                return (
                  <div
                    key={joint.id}
                    className={`guides-pedestal-slide ${isActive ? 'is-active' : ''}`}
                  >
                    <img
                      src={joint.img}
                      alt={joint.alt}
                      className={`guides-pedestal-3d-img guides-pedestal-img-${joint.id}`}
                    />
                  </div>
                );
              })}
            </div>
            <div className="guides-pedestal-dots">
              {HERO_JOINTS.map((joint, idx) => (
                <button
                  key={joint.id}
                  type="button"
                  aria-label={`Switch to ${joint.name}`}
                  className={`guides-pedestal-dot ${heroJointIndex === idx ? 'active' : ''}`}
                  onClick={() => setHeroJointIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ERAS Overview Section */}
      <section className="section eras-section" id="eras">
        <div className="shell">
          <div className="eras-heading">
            <h2>
              Prepare well. <em>Recover with direction.</em>
            </h2>
            <p className="eras-lead">
              Through my Enhanced Recovery After Surgery (ERAS) pathway, I integrate careful prehab, multimodal pain relief, early assisted walking, and structured home rehabilitation so you can regain your mobility safely.
            </p>
          </div>

          <div className="eras-grid">
            <div className="eras-3d-stage" aria-hidden="true">
              <span></span>
              <img
                src="/eras-journey-3d.webp"
                alt="Enhanced Recovery After Surgery Pathway 3D Joint Models"
                className="eras-3d-composite"
              />
            </div>
            <div className="eras-copy">
              <div className="eras-readiness">
                <article>
                  <strong>Medical Optimisation</strong>
                  <p>Comprehensive review of blood sugar, blood pressure, and medications.</p>
                </article>
                <article>
                  <strong>Exercise &amp; Prehab</strong>
                  <p>Guided joint-strengthening exercises and walking-aid training.</p>
                </article>
                <article>
                  <strong>Nutrition Plan</strong>
                  <p>High-protein dietary guidance and optimal hydration for tissue healing.</p>
                </article>
                <article>
                  <strong>Home Planning</strong>
                  <p>Creating a safe, obstacle-free home environment with caregiver support.</p>
                </article>
              </div>

              {/* Interactive Recovery Pathway Buttons */}
              <div className="eras-animated-timeline">
                <div className="eras-steps-track" role="tablist" aria-label="Recovery Pathway Phases">
                  {ERAS_TIMELINE_STEPS.map((step, idx) => {
                    const isActive = activeErasStep === idx;
                    return (
                      <button
                        key={step.key}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`eras-step-node ${isActive ? 'is-active' : ''}`}
                        onClick={() => handleStepClick(idx, step.targetId)}
                      >
                        <div className="eras-step-badge">
                          <div className="step-tag-group">
                            <span className="step-phase-kicker">{step.stageTag}</span>
                            <span className="step-tag">{step.phase}</span>
                          </div>
                        </div>
                        <div className="eras-step-content">
                          <strong className="eras-step-title">{step.title}</strong>
                          <p className="eras-step-desc">{step.desc}</p>
                        </div>
                        <div className="step-action-cta">
                          <span className="step-cta-label">View Guide</span>
                        </div>
                        <div className="step-active-indicator" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHASE 01: BEFORE SURGERY CONTENT SECTION */}
      {/* ========================================================================= */}
      <section className="section phase-detail-section before-surgery-section" id="before-surgery">
        <div className="shell">
          <div className="phase-detail-header">
            <h2>
              Before Surgery: <em>Optimise &amp; Prepare</em>
            </h2>
            <p className="phase-lead">
              My pre-surgery guidance to help you ensure surgical safety, build joint strength, and prepare for a smooth return home.
            </p>
          </div>

          <div className="phase-cards-grid">
            <article className="phase-card">
              <div className="phase-card-header">
                <span className="phase-card-step">01</span>
              </div>
              <h3>Medical Clearances</h3>
              <p>Optimising vital health markers for your safety.</p>
              <ul className="phase-card-list">
                <li><strong>HbA1c &lt; 7.5%:</strong> Ensures optimal wound healing and reduces infection risks.</li>
                <li><strong>Blood Thinners:</strong> Paused strictly per my personalized clinical schedule.</li>
                <li><strong>Infection Screening:</strong> Dental and urinary checks to rule out hidden infections.</li>
                <li><strong>Anaesthetic Clearance:</strong> Comprehensive ECG, chest X-ray, and physician assessment.</li>
              </ul>
            </article>

            <article className="phase-card">
              <div className="phase-card-header">
                <span className="phase-card-step">02</span>
              </div>
              <h3>Prehab Exercises</h3>
              <p>Strengthening key muscle groups before surgery.</p>
              <ul className="phase-card-list">
                <li><strong>Quadriceps Sets:</strong> 10-second holds to preserve knee extension power.</li>
                <li><strong>Ankle Pumps:</strong> Boost lower-leg circulation and prevent fluid retention.</li>
                <li><strong>Upper-Body Strength:</strong> Prepare arms and shoulders for walker or crutch support.</li>
                <li><strong>Deep Breathing:</strong> Diaphragmatic lung expansion to enhance oxygenation.</li>
              </ul>
            </article>

            <article className="phase-card">
              <div className="phase-card-header">
                <span className="phase-card-step">03</span>
              </div>
              <h3>Home Safety Setup</h3>
              <p>Preparing a comfortable, hazard-free living space.</p>
              <ul className="phase-card-list">
                <li><strong>Clear Pathways:</strong> Remove loose rugs, electrical cords, and floor clutter.</li>
                <li><strong>Firm Seating:</strong> Use a high-seated, supportive chair with armrests.</li>
                <li><strong>Bathroom Safety:</strong> Install non-slip mats, grab bars, and a raised toilet seat.</li>
                <li><strong>Recovery Station:</strong> Keep ice packs, water, and prescribed medicines within easy reach.</li>
              </ul>
            </article>

            <article className="phase-card">
              <div className="phase-card-header">
                <span className="phase-card-step">04</span>
              </div>
              <h3>Day of Admission</h3>
              <p>Final preparation for your surgery morning.</p>
              <ul className="phase-card-list">
                <li><strong>Fasting Guidelines:</strong> Strictly nil by mouth for 6–8 hours prior to surgery.</li>
                <li><strong>Antiseptic Wash:</strong> Shower thoroughly with an antibacterial body wash.</li>
                <li><strong>Comfortable Clothing:</strong> Wear loose garments and flat, non-skid supportive footwear.</li>
                <li><strong>Medical Records:</strong> Bring your photo ID, previous X-rays, MRI scans, and test reports.</li>
              </ul>
            </article>
          </div>

          <div className="phase-tip-banner">
            <div className="phase-tip-text">
              <strong>My Clinical Advice:</strong> Having a family caregiver attend your pre-surgery consultation ensures clear coordination of medications, mobility aids, and comfortable recovery at home.
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHASE 02: HOSPITAL STAY CONTENT SECTION */}
      {/* ========================================================================= */}
      <section className="section phase-detail-section hospital-stay-section" id="hospital-stay">
        <div className="shell">
          <div className="phase-detail-header">
            <h2>
              Hospital Stay: <em>Move With Support</em>
            </h2>
            <p className="phase-lead">
              How I manage your pain comfortably, guide early walking within 24 hours, and prepare you safely for discharge.
            </p>
          </div>

          <div className="phase-cards-grid">
            <article className="phase-card">
              <div className="phase-card-header">
                <span className="phase-card-step">01</span>
              </div>
              <h3>Pain Management</h3>
              <p>Targeted, comfortable pain relief without excessive sedation.</p>
              <ul className="phase-card-list">
                <li><strong>Targeted Nerve Blocks:</strong> Local periarticular infiltration for localized comfort.</li>
                <li><strong>Scheduled Oral Medications:</strong> Timed pain prevention before physiotherapy sessions.</li>
                <li><strong>Opioid-Sparing Approach:</strong> Minimizes nausea, drowsiness, and brain fog.</li>
                <li><strong>Proactive Dosing:</strong> Timed comfortably before physical movement and rest.</li>
              </ul>
            </article>

            <article className="phase-card">
              <div className="phase-card-header">
                <span className="phase-card-step">02</span>
              </div>
              <h3>24h Mobilisation</h3>
              <p>Early, guided walking to restore natural joint motion.</p>
              <ul className="phase-card-list">
                <li><strong>Day 0 First Stand:</strong> Safe, assisted bed-to-chair transfer within hours of surgery.</li>
                <li><strong>Day 1 Corridor Walk:</strong> 15–30 metres guided walking with walker support.</li>
                <li><strong>Knee Extension Check:</strong> Immediate focus on achieving a 0° straight-leg position.</li>
                <li><strong>Gait Training:</strong> Physiotherapy guidance for safe, symmetrical weight-bearing.</li>
              </ul>
            </article>

            <article className="phase-card">
              <div className="phase-card-header">
                <span className="phase-card-step">03</span>
              </div>
              <h3>Anti-Clot Protection</h3>
              <p>Active circulation protocols and DVT prevention.</p>
              <ul className="phase-card-list">
                <li><strong>Compression Stockings:</strong> TED stockings to support healthy venous blood return.</li>
                <li><strong>Pneumatic Calf Cuffs:</strong> Automated gentle pressure cuffs while resting in bed.</li>
                <li><strong>Hourly Ankle Pumps:</strong> 20–30 gentle ankle movements every hour while awake.</li>
                <li><strong>Preventive Medication:</strong> Prescribed blood thinners to protect against clot formation.</li>
              </ul>
            </article>

            <article className="phase-card">
              <div className="phase-card-header">
                <span className="phase-card-step">04</span>
              </div>
              <h3>Discharge Readiness</h3>
              <p>Meeting key mobility milestones for a safe return home.</p>
              <ul className="phase-card-list">
                <li><strong>Independent Transfers:</strong> Confident movement between bed, chair, and washroom.</li>
                <li><strong>Stair Navigation:</strong> Safe step-climbing technique guided by the physiotherapist.</li>
                <li><strong>Stable Health Markers:</strong> Normal diet tolerance, stable vitals, and controlled pain.</li>
                <li><strong>Discharge Plan:</strong> Detailed written medication schedule and emergency contact numbers.</li>
              </ul>
            </article>
          </div>

          <div className="phase-milestone-bar">
            <div className="milestone-step">
              <span className="milestone-badge">Day 0</span>
              <strong>Surgery &amp; First Sit</strong>
              <p>Targeted pain relief and assisted bed-to-chair standing.</p>
            </div>
            <div className="milestone-divider" aria-hidden="true" />
            <div className="milestone-step">
              <span className="milestone-badge">Day 1</span>
              <strong>Corridor Walking &amp; Range</strong>
              <p>Guided physiotherapy walks and knee extension checks.</p>
            </div>
            <div className="milestone-divider" aria-hidden="true" />
            <div className="milestone-step">
              <span className="milestone-badge">Day 2</span>
              <strong>Stair Mastery &amp; Discharge</strong>
              <p>Stair assessment, medication briefing, and safe discharge home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHASE 03: HOME RECOVERY CONTENT SECTION (QUIET KNEE PROTOCOL) */}
      {/* ========================================================================= */}
      <section className="section phase-detail-section home-recovery-section quiet-section" id="home-recovery">
        <div className="shell">
          <div className="phase-detail-header">
            <h2>
              Home Recovery: <em>Progress Steadily</em>
            </h2>
            <p className="phase-lead">
              Follow my <strong>Quiet Knee Protocol</strong> and weekly roadmap for a steady, comfortable recovery in the comfort of your home.
            </p>
          </div>

          {/* Quiet Knee Protocol Cards Layout */}
          <div className="quiet-protocol-layout">
            <div className="quiet-3d-stage" aria-hidden="true">
              <span></span>
              <img src="/knee-3d.webp" alt="3D Knee joint visualization" />
            </div>
            <div className="quiet-step-grid">
              <article>
                <span>01</span>
                <h3>Control Swelling</h3>
                <p>
                  Apply ice packs for 15–20 minutes every 2–3 hours. Keep the leg elevated above heart level and ensure your surgical dressing stays clean and dry.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Protect Straightening</h3>
                <p>
                  Achieving full 0° knee extension is essential. Practice daily heel props and quad sets; never place pillows directly beneath your knee bend.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Do Not Force Bending</h3>
                <p>
                  Perform gentle heel slides only. Forcing aggressive bending too early causes inflammation and increases joint swelling.
                </p>
              </article>
              <article>
                <span>04</span>
                <h3>Keep Walks Short</h3>
                <p>
                  Walk with your walker for 5–10 minutes at a time. Prioritize steady, balanced posture rather than walking long distances.
                </p>
              </article>
              <article>
                <span>05</span>
                <h3>Limit Time on Your Feet</h3>
                <p>
                  Alternate brief walking with seated leg elevation. Rest before fatigue, pain, or swelling begins to build up.
                </p>
              </article>
              <article>
                <span>06</span>
                <h3>Know the Warning Signs</h3>
                <p>
                  Contact me or the clinic desk immediately if you develop a fever (&gt; 101°F), sudden calf pain or swelling, or spreading wound redness.
                </p>
              </article>
            </div>
          </div>

          {/* Weekly Recovery Milestone Roadmap */}
          <div className="home-milestones-card">
            <div className="home-milestones-header">
              <h3>Recovery Milestone Roadmap</h3>
              <p>Key progress benchmarks from initial healing to full active living.</p>
            </div>
            <div className="home-milestones-grid">
              <div className="milestone-block">
                <div className="milestone-tag">Weeks 1 – 2</div>
                <h4>Acute Healing</h4>
                <ul className="milestone-items">
                  <li>0° extension and 90° flexion range.</li>
                  <li>Indoor walking with walker or crutch support.</li>
                  <li>Incision inspection and suture review around Day 12–14.</li>
                  <li>Consistent leg elevation and ice pack routine.</li>
                </ul>
              </div>
              <div className="milestone-block">
                <div className="milestone-tag">Weeks 3 – 6</div>
                <h4>Restoring Independence</h4>
                <ul className="milestone-items">
                  <li>Transition to a single walking stick or unassisted walking.</li>
                  <li>Achieve 105° to 115° knee flexion.</li>
                  <li>Gradual return to light desk work and daily household activities.</li>
                  <li>Clinical evaluation for driving readiness.</li>
                </ul>
              </div>
              <div className="milestone-block">
                <div className="milestone-tag">Weeks 7 – 12+</div>
                <h4>Active Living &amp; Strength</h4>
                <ul className="milestone-items">
                  <li>Normal walking without a limp; confident, unassisted stairs.</li>
                  <li>Achieve 120°+ flexion and regain leg muscle stamina.</li>
                  <li>Resume low-impact activities such as swimming, cycling, and travel.</li>
                  <li>Guided exercises to support lifelong joint mobility and stability.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
