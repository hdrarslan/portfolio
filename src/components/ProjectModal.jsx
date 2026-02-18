import { useEffect, useRef } from 'react';
import './ProjectModal.css';

const BASE = import.meta.env.BASE_URL;
const resolve = (p) =>
  p.startsWith('/') ? `${BASE}${p.slice(1)}` : `${BASE}${p}`;

const ACCENT_MAP = {
  'Logo Design': 'var(--color-logo)',
  'Product Design': 'var(--color-product)',
  'Social Media': 'var(--color-social)',
  'Animated Visuals': 'var(--color-animated)',
};

export default function ProjectModal({ project, onClose }) {
  const primaryCategory = project.categories?.[0] || 'Product Design';
  const accent = ACCENT_MAP[primaryCategory] || 'var(--color-product)';
  const contentRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    contentRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="project-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pm-title"
      aria-describedby="pm-desc"
    >
      <div
        className="project-modal-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="project-modal-content"
        style={{ '--modal-accent': accent }}
        ref={contentRef}
        tabIndex={-1}
      >
        <div className="project-modal-grain" aria-hidden="true" />
        <button
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="project-modal-body">
          <h2 id="pm-title" className="project-modal-title">
            {project.title}
          </h2>
          <p className="project-modal-meta">
            {project.categories?.join(' · ')} · {project.year}
            {project.tags?.length > 0 && ` · ${project.tags.join(', ')}`}
          </p>
          <p id="pm-desc" className="project-modal-desc">
            {project.description}
          </p>

          {project.media?.length > 0 && (
            <div className="project-modal-gallery">
              {project.media.map((item, i) =>
                item.type === 'video' ? (
                  <video
                    key={i}
                    src={resolve(item.src)}
                    controls
                    playsInline
                    className="project-modal-video"
                  />
                ) : (
                  <img
                    key={i}
                    src={resolve(item.src)}
                    alt={project.title}
                    className="project-modal-image"
                    loading="lazy"
                  />
                ),
              )}
            </div>
          )}

          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-modal-link"
            >
              Visit Website ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
