import './ProjectCard.css';

const BASE = import.meta.env.BASE_URL;
const resolve = (p) =>
  p.startsWith('/') ? `${BASE}${p.slice(1)}` : `${BASE}${p}`;

export default function ProjectCard({ project, onClick }) {
  return (
    <article className="project-card">
      <button
        type="button"
        className="project-card-button"
        onClick={() => onClick(project)}
        aria-label={`View project: ${project.title}`}
      >
        <img
          src={resolve(project.thumb)}
          alt=""
          className="project-card-thumb"
          loading="lazy"
        />
        <span className="project-card-overlay" aria-hidden="true">
          <span className="project-card-static">
            <span className="project-card-scanlines" />
          </span>
          <span className="project-card-title">{project.title}</span>
        </span>
      </button>
    </article>
  );
}
