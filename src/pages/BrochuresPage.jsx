import React from 'react';
import { Link } from 'react-router-dom';

const PATIENT_BROCHURES = [
  {
    id: 'knee-replacement',
    number: '01',
    title: 'Knee Replacement & Robotic Surgery',
    image: '/knee-care-card.jpg',
    subtitle: 'Comprehensive Patient Education Guide',
    fileUrl: '/galleri/brochure/01_Understanding_Knee_Replacement_Guide_Dr_Harshil_Shah.pdf',
    fileName: '01_Understanding_Knee_Replacement_Guide_Dr_Harshil_Shah.pdf',
    fileSize: '3.0 MB PDF',
    badge: 'Knee Arthroplasty',
    description: 'Detailed insights on knee arthritis grading, robotic-assisted surgical precision, prehab routines, implant longevity, and safe recovery.',
    topics: ['Robotic Knee Replacement', 'Pre-Op Fasting & Prehab', 'Same-Day Walking (ERAS)', 'Home Recovery Protocol'],
    accent: '#146c72',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    )
  },
  {
    id: 'hip-replacement',
    number: '02',
    title: 'Hip Replacement & Joint Restoration',
    image: '/hip-care-card.jpg',
    subtitle: 'Total Hip Arthroplasty Care Booklet',
    fileUrl: '/galleri/brochure/02_Understanding_Hip_Replacement_Guide_Dr_Harshil_Shah.pdf',
    fileName: '02_Understanding_Hip_Replacement_Guide_Dr_Harshil_Shah.pdf',
    fileSize: '2.9 MB PDF',
    badge: 'Hip Arthroplasty',
    description: 'Complete guidance on hip arthritis, avascular necrosis (AVN), muscle-sparing approaches, ceramic implants, and mobility milestones.',
    topics: ['Minimally Invasive Hip Surgery', 'AVN Hip Management', 'Dislocation Precautions', 'Stair Climbing & Walking'],
    accent: '#0d9488',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    )
  },
  {
    id: 'knee-sports-injury',
    number: '03',
    title: 'Knee Sports Injury & Arthroscopy',
    image: '/sports-injuries-card.png',
    subtitle: 'ACL, Meniscus & Ligament Preservation',
    fileUrl: '/galleri/brochure/03_Understanding_Sports_Injuries_Arthroscopy_Guide_Dr_Harshil_Shah.pdf',
    fileName: '03_Understanding_Sports_Injuries_Arthroscopy_Guide_Dr_Harshil_Shah.pdf',
    fileSize: '3.2 MB PDF',
    badge: 'Sports Medicine',
    description: 'Athletic recovery protocol covering keyhole ligament reconstruction (ACL/PCL/MCL), meniscal repair, cartilage restoration, and return to sports.',
    topics: ['Keyhole Arthroscopic Repair', 'ACL & Meniscus Treatment', 'Sports Rehabilitation Phases', 'Safe Return to Athletics'],
    accent: '#1e7e85',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  },
  {
    id: 'shoulder-arthroscopy',
    number: '04',
    title: 'Shoulder Arthroscopy & Rotator Cuff',
    image: '/shoulder-care-card.jpg',
    subtitle: 'Shoulder Care & Mobility Booklet',
    fileUrl: '',
    fileName: '',
    fileSize: '3.3 MB PDF',
    badge: 'Shoulder Care',
    description: 'Specialist guide for rotator cuff tears, recurrent shoulder dislocations (Bankart repair), frozen shoulder release, and sling recovery.',
    topics: ['Rotator Cuff Repair', 'Shoulder Instability / Bankart', 'Frozen Shoulder Release', 'Sling Weaning & Exercises'],
    accent: '#7c3aed',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M12 6v6l4 2" />
      </svg>
    )
  }
];

export default function BrochuresPage() {
  return (
    <div className="brochures-page">
      {/* Hero Header */}
      <section className="brochures-hero-section">
        <div className="shell">
          <div className="brochures-hero-header">
            <h1 className="brochures-hero-title">
              Downloadable <span className="text-highlight-blue">Patient Brochures</span>
            </h1>
            <p className="brochures-hero-desc">
              I have authored these clinical guides to help you and your family understand joint procedures, surgical techniques, pre-surgery preparation, and day-by-day rehabilitation.
            </p>
          </div>
        </div>
      </section>

      {/* Brochures Grid Section */}
      <section className="section patient-brochures-section" style={{ paddingTop: '10px' }}>
        <div className="shell">
          <div className="patient-brochures-grid">
            {PATIENT_BROCHURES.map((brochure) => (
              <article key={brochure.id} className="patient-brochure-card">
                <div className="brochure-card-image">
                  <img src={brochure.image} alt={`${brochure.title} brochure cover`} />
                  <div className="brochure-meta-right">
                    <span className="brochure-badge" style={{ color: brochure.accent, borderColor: `${brochure.accent}30` }}>
                      {brochure.badge}
                    </span>
                    <span className="brochure-num-pill">{brochure.number}</span>
                  </div>
                </div>

                <div className="brochure-card-body">
                  <h3 className="brochure-title">{brochure.title}</h3>
                  <p className="brochure-subtitle">{brochure.subtitle}</p>
                  <p className="brochure-desc">{brochure.description}</p>

                  <div className="brochure-topics-box">
                    <strong className="brochure-topics-title">Key Topics Covered:</strong>
                    <ul className="brochure-topics-list">
                      {brochure.topics.map((topic, i) => (
                        <li key={i}>
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke={brochure.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="brochure-card-footer">
                  <div className="brochure-file-meta">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <span>{brochure.fileSize}</span>
                  </div>

                  <div className="brochure-card-actions">
                    {brochure.fileUrl ? (
                      <a
                        href={brochure.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button-small button-outline brochure-view-btn"
                        title={`Read ${brochure.title} in new tab`}
                      >
                        <span>Read Online</span>
                      </a>
                    ) : (
                      <span className="button button-small button-outline brochure-view-btn" aria-disabled="true">
                        <span>Read Online</span>
                      </span>
                    )}
                    {brochure.fileUrl ? (
                      <a
                        href={brochure.fileUrl}
                        download={brochure.fileName}
                        className="button button-small button-primary brochure-dl-btn"
                        title={`Download ${brochure.title} PDF`}
                      >
                        <span>Download</span>
                      </a>
                    ) : (
                      <span className="button button-small button-primary brochure-dl-btn" aria-disabled="true">
                        <span>Download</span>
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Consultation Assistance Banner */}
          <div className="care-help-banner" style={{ marginTop: '50px' }}>
            <div className="care-help-left">
              <div className="care-help-text">
                <h3>Have questions about your condition or procedure?</h3>
                <p>Schedule a consultation with me so we can review your scan reports and discuss a personalized treatment plan.</p>
              </div>
            </div>
            <div className="care-help-divider" />
            <Link to="/appointment" className="care-help-btn">
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

