import React from 'react';

export default function FloatingSocialBar() {
  return (
    <a
      href="https://www.instagram.com/drharshilshah_/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Dr. Harshil Shah on Instagram"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        width: '52px',
        height: '52px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 18px rgba(214,36,159,0.45)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        textDecoration: 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 6px 24px rgba(214,36,159,0.6)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 18px rgba(214,36,159,0.45)';
      }}
    >
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#ffffff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
      </svg>
    </a>
  );
}
