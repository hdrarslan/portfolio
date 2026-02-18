import './Home.css';

const BASE = import.meta.env.BASE_URL;
const ABOUT_IMG = `${BASE}assets/me/about_me.png`;

export default function Home() {
  return (
    <section id="home" className="home" aria-label="About Me">
      <img src={ABOUT_IMG} alt="About Me" className="home-cover" />
    </section>
  );
}
