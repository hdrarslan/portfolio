/**
 * About — opened when TV is clicked. Full-screen section with grain; TV static video can play in a frame.
 * Static video: add public/assets/media/tv-static.mp4 and uncomment the <video> below.
 */
import { useEffect, useRef } from 'react';
import './About.css';

const BASE = import.meta.env.BASE_URL;

export default function About({ onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <section className="about" role="dialog" aria-modal="true" aria-labelledby="about-heading">
      <div className="about-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="about-panel about-panel--green">
        <div className="about-grain" aria-hidden="true" />
        <button
          ref={closeRef}
          type="button"
          className="about-close"
          onClick={onClose}
          aria-label="Close About"
        >
          ×
        </button>
        <div className="about-body">
          <h2 id="about-heading" className="about-title">About</h2>
          <div className="about-tv-frame">
            {/* Optional: show static video in the “TV” on About. Add tv-static.mp4 to public/assets/media/ and uncomment. */}
            {/* <video src={`${BASE}assets/media/tv-static.mp4`} autoPlay muted loop playsInline className="about-static-video" /> */}
            <div className="about-static-placeholder">
              <p>Add your bio or photo here. Optional: use tv-static.mp4 in the TV screen.</p>
            </div>
          </div>
          <p className="about-text">
            Edit this section with your story. You can keep the same grain texture and controller-color theme (this panel uses green).
          </p>
        </div>
      </div>
    </section>
  );
}
