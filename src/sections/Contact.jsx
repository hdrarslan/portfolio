import './Contact.css';

const BASE = import.meta.env.BASE_URL;

export default function Contact() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="contact-inner">
        <h2 id="contact-heading" className="contact-title">Contact</h2>
        <a href="mailto:hdr.arslann@gmail.com" className="contact-email">hdr.arslann@gmail.com</a>
        <ul className="contact-social" aria-label="Links">
          <li>
            <a
              href="https://www.linkedin.com/in/hidir-arslan/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`${BASE}assets/resume_marketing.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              CV
            </a>
          </li>
        </ul>
        <p className="contact-copy">© {year}. All rights reserved.</p>
      </div>
    </footer>
  );
}
