import React, { useState, useEffect } from 'react';

export default function FloatingSocialBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero section (approx 380px)
      if (window.scrollY > 380) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Floating Sidebar (Visible on screens > 900px) */}
      <aside
        className={`floating-social-sidebar ${isVisible ? 'is-visible' : ''}`}
        aria-label="Social media and quick contact links"
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/919316753985"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn social-whatsapp"
          aria-label="Chat with Dr. Harshil Shah on WhatsApp"
        >
          <span className="social-tooltip">WhatsApp</span>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/drharshilshah_/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn social-instagram"
          aria-label="Dr. Harshil Shah on Instagram"
        >
          <span className="social-tooltip">Instagram</span>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/Knee.Hip.and.Shoulder.Surgeon/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn social-facebook"
          aria-label="Dr. Harshil Shah on Facebook"
        >
          <span className="social-tooltip">Facebook</span>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/harshil-shah-45b730321/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn social-linkedin"
          aria-label="Dr. Harshil Shah on LinkedIn"
        >
          <span className="social-tooltip">LinkedIn</span>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@drharshilshahh"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn social-youtube"
          aria-label="Dr. Harshil Shah on YouTube"
        >
          <span className="social-tooltip">YouTube</span>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>

        {/* Direct Call */}
        <a
          href="tel:+919316753985"
          className="social-btn social-phone"
          aria-label="Call clinic directly"
        >
          <span className="social-tooltip">Call Clinic</span>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </aside>

      {/* Mobile Friendly Floating Popup Trigger & Modal (Visible on <= 900px) */}
      <div className={`mobile-floating-wrapper ${isVisible ? 'is-visible' : ''}`}>
        {/* Backdrop to dismiss popup */}
        {isOpen && (
          <div className="mobile-social-backdrop" onClick={closePopup} aria-hidden="true" />
        )}

        {/* Pop-up Card with all social & contact links */}
        <div className={`mobile-social-popup ${isOpen ? 'is-open' : ''}`} role="dialog" aria-label="Connect with Dr. Harshil Shah">
          <div className="mobile-popup-header">
            <div className="mobile-popup-title-group">
              <span className="mobile-popup-badge">Instant Connect</span>
              <h4 className="mobile-popup-title">Dr. Harshil Shah</h4>
            </div>
            <button type="button" className="mobile-popup-close-btn" onClick={closePopup} aria-label="Close contact popup">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="mobile-popup-grid">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919316753985"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-item item-whatsapp"
              onClick={closePopup}
            >
              <div className="mobile-item-icon icon-whatsapp">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div className="mobile-item-info">
                <strong>WhatsApp Chat</strong>
                <span>Instant consultation support</span>
              </div>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="mobile-item-arrow">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>

            {/* Direct Phone Call */}
            <a
              href="tel:+919316753985"
              className="mobile-social-item item-phone"
              onClick={closePopup}
            >
              <div className="mobile-item-icon icon-phone">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="mobile-item-info">
                <strong>Call Clinic</strong>
                <span>+91 93167 53985</span>
              </div>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="mobile-item-arrow">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/drharshilshah_/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-item item-instagram"
              onClick={closePopup}
            >
              <div className="mobile-item-icon icon-instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
                </svg>
              </div>
              <div className="mobile-item-info">
                <strong>Instagram</strong>
                <span>@drharshilshah_</span>
              </div>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="mobile-item-arrow">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/Knee.Hip.and.Shoulder.Surgeon/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-item item-facebook"
              onClick={closePopup}
            >
              <div className="mobile-item-icon icon-facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div className="mobile-item-info">
                <strong>Facebook</strong>
                <span>Dr. Harshil Shah</span>
              </div>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="mobile-item-arrow">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@drharshilshahh"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-item item-youtube"
              onClick={closePopup}
            >
              <div className="mobile-item-icon icon-youtube">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <div className="mobile-item-info">
                <strong>YouTube</strong>
                <span>Patient care videos</span>
              </div>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="mobile-item-arrow">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/harshil-shah-45b730321/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-item item-linkedin"
              onClick={closePopup}
            >
              <div className="mobile-item-icon icon-linkedin">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </div>
              <div className="mobile-item-info">
                <strong>LinkedIn</strong>
                <span>Professional profile</span>
              </div>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="mobile-item-arrow">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Floating Trigger Button (FAB) on mobile */}
        <button
          type="button"
          className={`mobile-fab-trigger ${isOpen ? 'is-active' : ''}`}
          onClick={togglePopup}
          aria-label={isOpen ? 'Close contact popup' : 'Open contact and social links'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span className="mobile-fab-ping" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </>
  );
}

